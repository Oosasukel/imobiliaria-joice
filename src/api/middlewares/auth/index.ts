import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const auth = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  if (!req.session.user) return res.status(401).send('Não autorizado');

  return next();
};
