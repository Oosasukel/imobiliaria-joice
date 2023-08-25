import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { houseTypes } from '../../../api/enums';
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

  return res.json(types);
});

export default handler;
