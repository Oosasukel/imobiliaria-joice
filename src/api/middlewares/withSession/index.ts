import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';

export const withSession = (handler: NextApiHandler) =>
  withIronSessionApiRoute(handler, {
    cookieName: 'imobiliaria-joice',
    password: process.env.IRON_SESSION_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
