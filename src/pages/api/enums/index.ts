import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { houseStatus, houseTypes } from '../../../api/enums';
import { auth } from '../../../api/middlewares/auth';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.use(ironSession);
handler.use(auth);
handler.get(async (req, res) => {
  const types = [];
  for (const id in houseTypes) {
    types.push({
      id: Number(id),
      name: houseTypes[id],
    });
  }

  const status = [];
  for (const id in houseStatus) {
    status.push({
      id: Number(id),
      name: houseStatus[id],
    });
  }

  return res.json({
    types,
    status,
  });
});

export default handler;
