import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { auth } from '../../../api/middlewares/auth';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);
handler.use(ironSession);
handler.use(auth);

handler.get(async (req, res) => {
  return res.json({ user: req.session.user });
});

export default handler;
