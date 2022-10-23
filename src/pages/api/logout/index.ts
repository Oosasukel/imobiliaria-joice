import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);
handler.use(ironSession);

handler.get(async (req, res) => {
  req.session.destroy();
  res.send({ ok: true });
});

export default handler;
