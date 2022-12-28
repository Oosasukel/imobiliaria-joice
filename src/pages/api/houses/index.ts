import { query as q } from 'faunadb';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
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
import { House, HouseFilters, HouseResponseDTO } from '../../../api/types';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.use(ironSession);
handler.get(async (req, res) => {
  const { query } = req;
  const filters: HouseFilters = {
    pageSize: Number(query.pageSize) || undefined,
    initialId: (query.initialId as string) || undefined,
    city: (query.city as string) || undefined,
    minRentPrice: Number(query.minRentPrice) || undefined,
    maxRentPrice: Number(query.maxRentPrice) || undefined,
    minSellPrice: Number(query.minSellPrice) || undefined,
    maxSellPrice: Number(query.maxSellPrice) || undefined,
    typeId: Number(query.typeId) || undefined,
    bedrooms: Number(query.bedrooms) || undefined,
    bathrooms: Number(query.bathrooms) || undefined,
    parkingSpaces: Number(query.parkingSpaces) || undefined,
    suites: Number(query.suites) || undefined,
    furnished: query.furnished ? query.furnished === 'true' : undefined,
    minSquareMeters: Number(query.minSquareMeters) || undefined,
    maxSquareMeters: Number(query.maxSquareMeters) || undefined,
    toRent: query.toRent ? query.toRent === 'true' : true,
    statusId: req.session.user ? undefined : 2,
  };

  try {
    const { data, after } = await fauna.query<any>(
      q.Call('HouseFilter', filters)
    );

    return res.json({
      nextId: after ? after[0].id : undefined,
      data: data.map((house) => ({
        id: house.ref.id,
        type: houseTypes[house.data.typeId],
        status: houseStatus[house.data.statusId],
        ...house.data,
        admComments: undefined,
      })),
    });
  } catch (error) {
    return res.json(error);
  }
});

handler.use(auth);
handler.post(async (req, res) => {
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

    const newHouse: House = {
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
      images: [],
    };

    for (const image of images) {
      const imageExtension = image.originalFilename.split('.').pop();
      const imageRef = ref(storage, `housesImages/${uuid()}.${imageExtension}`);
      const imageFile = await fs.readFile(image.filepath);
      await uploadBytes(imageRef, imageFile, {
        contentType: image.mimetype,
      });
      const imageUrl = await getDownloadURL(imageRef);
      newHouse.images.push({
        referenceUrl: imageRef.fullPath,
        url: imageUrl,
      });
    }

    const faunaResponse = await fauna.query<any>(
      q.Create(q.Collection('Houses'), {
        data: newHouse,
      })
    );

    const newHouseResponse: HouseResponseDTO = {
      id: faunaResponse.ref.id,
      type: houseTypes[Number(faunaResponse.data.typeId)],
      status: houseStatus[Number(faunaResponse.data.statusId)],
      ...faunaResponse.data,
    };

    return res.status(201).json(newHouseResponse);
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
