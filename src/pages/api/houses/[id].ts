import { query as q } from 'faunadb';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import formidable, { File } from 'formidable';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { v4 as uuid } from 'uuid';
import { houseStatus, houseTypes } from '../../../api/enums';
import { auth } from '../../../api/middlewares/auth';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../api/services/fauna';
import { storage } from '../../../api/services/firebase';
import { House, HouseResponseDTO } from '../../../api/types';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.use(ironSession);
handler.get(async (req, res) => {
  const { id } = req.query;

  let house: HouseResponseDTO;
  try {
    const faunaResponse = await fauna.query<any>(
      q.Get(q.Ref(q.Collection('Houses'), id))
    );
    const { data: user } = await fauna.query<any>(
      q.Get(q.Match(q.Index('user_by_email'), faunaResponse.data.createdBy))
    );

    house = {
      id: faunaResponse.ref.id,
      type: houseTypes[faunaResponse.data.typeId],
      status: houseStatus[faunaResponse.data.statusId],
      ...faunaResponse.data,
      admComments: undefined,
      createdBy: undefined,
      phoneNumber: user.phoneNumber,
    };

    if (house.statusId !== 2) {
      return res.status(404).send('casa não encontrada');
    }
  } catch {
    return res.status(404).send('casa não encontrada');
  }

  return res.json(house);
});

handler.use(auth);
handler.delete(async (req, res) => {
  const { id } = req.query;

  let house: House;
  try {
    const faunaResponse = await fauna.query<any>(
      q.Get(q.Ref(q.Collection('Houses'), id))
    );
    house = faunaResponse.data;

    if (house.createdBy !== req.session.user.email) {
      return res.status(401).send('Não autorizado');
    }
  } catch {
    return res.status(404).send('casa não encontrada');
  }

  for (const image of house.images) {
    const imageRef = ref(storage, image.referenceUrl);
    try {
      await deleteObject(imageRef);
    } catch (error) {
      console.error(`Erro ao excluir imagem ${imageRef.fullPath} do firebase`);
      console.error(error);
    }
  }

  await fauna.query(q.Delete(q.Ref(q.Collection('Houses'), id)));

  return res.status(204).end();
});

handler.patch(async (req, res) => {
  const { id } = req.query;

  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send('Error parsing files');
    }

    let images: File[] = [];
    if (files.images) {
      if ((files.images as any).length) {
        images = files.images as File[];
      } else {
        images = [files.images as File];
      }
    }

    let house: House;
    try {
      const faunaResponse = await fauna.query<any>(
        q.Get(q.Ref(q.Collection('Houses'), id))
      );
      house = faunaResponse.data;

      if (house.createdBy !== req.session.user.email) {
        return res.status(401).send('Não autorizado');
      }
    } catch {
      return res.status(404).send('casa não encontrada');
    }

    house = {
      ...house,
      city: String(fields.city),
      district: String(fields.district),
      street: String(fields.street),
      typeId: Number(fields.typeId),
      squareMeters: Number(fields.squareMeters),
      bedrooms: Number(fields.bedrooms),
      suites: Number(fields.suites),
      bathrooms: Number(fields.bathrooms),
      parkingSpaces: Number(fields.parkingSpaces),
      furnished: fields.furnished === 'true',
      toRent: fields.toRent === 'true',
      rentPrice: Number(fields.rentPrice),
      toSell: fields.toSell === 'true',
      sellPrice: Number(fields.sellPrice),
      condominiumPrice: Number(fields.condominiumPrice),
      iptuPrice: Number(fields.iptuPrice),
      aboutTheProperty: String(fields.aboutTheProperty),
      aboutTheCondominium: String(fields.aboutTheCondominium),
      admComments: String(fields.admComments),
      statusId: Number(fields.statusId),
    };

    for (const image of images) {
      const imageExtension = image.originalFilename?.split('.').pop();
      const imageRef = ref(storage, `housesImages/${uuid()}.${imageExtension}`);
      const imageFile = await fs.readFile(image.filepath);
      await uploadBytes(imageRef, imageFile, {
        contentType: image.mimetype || undefined,
      });
      const imageUrl = await getDownloadURL(imageRef);
      house.images.push({
        referenceUrl: imageRef.fullPath,
        url: imageUrl,
      });
    }

    let imagesToRemove: string[] = [];
    if (fields.imagesToRemove) {
      if (typeof fields.imagesToRemove === 'string') {
        imagesToRemove = [fields.imagesToRemove as string];
      } else {
        imagesToRemove = fields.imagesToRemove as string[];
      }
    }

    for (const imageToRemove of imagesToRemove) {
      const imageRef = ref(storage, imageToRemove);
      try {
        await deleteObject(imageRef);
      } catch (error) {
        console.error(
          `Erro ao excluir imagem ${imageRef.fullPath} do firebase`
        );
        console.error(error);
      }

      house.images = house.images.filter(
        (item) => item.referenceUrl !== imageToRemove
      );
    }

    const faunaResponse = await fauna.query<any>(
      q.Update(q.Ref(q.Collection('Houses'), id), { data: house })
    );

    const newHouseResponse: HouseResponseDTO = {
      id: faunaResponse.ref.id,
      type: houseTypes[Number(faunaResponse.data.typeId)],
      status: houseStatus[Number(faunaResponse.data.statusId)],
      ...faunaResponse.data,
    };

    return res.json(newHouseResponse);
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
