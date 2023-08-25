import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { houseStatus, houseTypes } from '../../../../api/enums';
import { auth } from '../../../../api/middlewares/auth';
import { ironSession } from '../../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../../api/services/fauna';
import { HouseFilters } from '../../../../api/types';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.use(ironSession);
handler.use(auth);
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
    createdBy: req.session.user.email,
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
      })),
    });
  } catch (error) {
    return res.json(error);
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
