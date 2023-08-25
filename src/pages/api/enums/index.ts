import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { houseStatus, houseTypes } from '../../../api/enums';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.get(async (req, res) => {
  const types: any[] = [];
  for (const id in houseTypes) {
    types.push({
      id: Number(id),
      name: houseTypes[id],
    });
  }

  const status: any[] = [];
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
