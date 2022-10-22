import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const auth = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  console.log('req.session', req.session);
  if (!req.session.user) return res.status(401).send('Não autorizado');

  return next();
};
