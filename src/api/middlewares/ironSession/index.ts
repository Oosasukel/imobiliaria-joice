import { getIronSession } from 'iron-session';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { NextResponse } from 'next/server';

export const ironSession = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const session = await getIronSession(req, NextResponse.next(), {
    cookieName: 'imobiliaria-joice',
    password: process.env.IRON_SESSION_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });

  req.session = session;

  next();
};
