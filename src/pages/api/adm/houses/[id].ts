import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { houseStatus, houseTypes } from '../../../../api/enums';
import { auth } from '../../../../api/middlewares/auth';
import { ironSession } from '../../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../../api/services/fauna';
import { HouseResponseDTO } from '../../../../api/types';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.use(ironSession);
handler.use(auth);
handler.get(async (req, res) => {
  const { id } = req.query;

  let house: HouseResponseDTO;
  try {
    const faunaResponse = await fauna.query<any>(
      q.Get(q.Ref(q.Collection('Houses'), id))
    );
    house = {
      id: faunaResponse.ref.id,
      type: houseTypes[faunaResponse.data.typeId],
      status: houseStatus[faunaResponse.data.statusId],
      ...faunaResponse.data,
    };

    if (house.createdBy !== req.session.user.email) {
      return res.status(401).send('Não autorizado');
    }
  } catch {
    return res.status(404).send('casa não encontrada');
  }

  return res.json(house);
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
