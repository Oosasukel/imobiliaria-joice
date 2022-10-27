import { query as q } from 'faunadb';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import formidable, { File } from 'formidable';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { v4 as uuid } from 'uuid';
import { auth } from '../../../api/middlewares/auth';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../api/services/fauna';
import { storage } from '../../../api/services/firebase';

interface House {
  id: any;
  city: string;
  district: string;
  street: string;
  typeId: number;
  squareMeters: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpaces: number;
  furnished: boolean;
  toRent: boolean;
  rentPrice: number;
  toSell: boolean;
  sellPrice: number;
  condominiumPrice: number;
  IptuPrice: number;
  aboutTheProperty: string;
  aboutTheCondominium: string;
  AdmComments: string;
  statusId: number;
  images: Array<{
    referenceUrl: string;
    url: string;
  }>;
}

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.get(async (req, res) => {
  const { query } = req;
  const pageSize = Number(query.pageSize) || undefined;
  const initialId = query.initialId;
  const filters = {
    type: Number(query.type) || undefined,
    minPrice: Number(query.minPrice) || undefined,
    maxPrice: Number(query.maxPrice) || undefined,
    bedrooms: Number(query.bedrooms) || undefined,
    bathrooms: Number(query.bathrooms) || undefined,
    suites: Number(query.suites) || undefined,
    furnished: query.furnished === 'true',
    minSquareMeters: Number(query.minSquareMeters) || undefined,
    maxSquareMeters: Number(query.maxSquareMeters) || undefined,
  };

  try {
    const { data, after } = await fauna.query<any>(
      q.Map(
        q.Paginate(q.Documents(q.Collection('Houses')), {
          size: pageSize,
          after: initialId
            ? [q.Ref(q.Collection('Houses'), initialId)]
            : undefined,
        }),
        q.Lambda('house', q.Get(q.Var('house')))
      )
    );

    return res.json({
      nextId: after ? after[0].id : undefined,
      data,
    });
  } catch (error) {
    return res.json(error);
  }

  // const body = await getBody(req);
  // return res.json(body);
  // const filters = {
  //   paraAluguel: true,
  //   localizacao: 'Capela do Alto',
  // };

  // try {
  //   const { data } = await fauna.query<any>(
  //     q.Map(
  //       q.Paginate(
  //         q.Intersection(
  //           q.Match(q.Index('house_by_paraAluguel'), filters.paraAluguel),
  //           q.Match(q.Index('house_by_localizacao'), filters.localizacao)
  //         )
  //       ),
  //       q.Lambda('house', q.Get(q.Var('house')))
  //     )
  //   );

  //   const houses = data.map((item) => ({ id: item.ref, ...item.data }));

  //   return res.json(houses);
  // } catch (error) {
  //   return res.json(error);
  // }
});

handler.use(ironSession);
handler.use(auth);
handler.post(async (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send('Error parsing files');
    }

    let images: File[];
    if ((files.images as any).length) {
      images = files.images as File[];
    } else {
      images = [files.images as File];
    }

    const newHouse: House = {
      id: null,
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
      IptuPrice: Number(fields.IptuPrice),
      aboutTheProperty: String(fields.aboutTheProperty),
      aboutTheCondominium: String(fields.aboutTheCondominium),
      AdmComments: String(fields.AdmComments),
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

    newHouse.id = faunaResponse.ref.id;

    return res.json(newHouse);
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
