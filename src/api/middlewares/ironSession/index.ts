import { ironSession as ironSessionExpress } from 'iron-session/express';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';

export const ironSession = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const ironSessionHandler = ironSessionExpress({
    cookieName: 'imobiliaria-joice',
    password: process.env.IRON_SESSION_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

  ironSessionHandler(req as any, res as any, next);
};
