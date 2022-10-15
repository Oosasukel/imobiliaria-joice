import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";

export const withSession = (handler: NextApiHandler) =>
  withIronSessionApiRoute(handler, {
    cookieName: "imobiliaria-joice",
    password:
      "2,tPvGkxD?^J7#~5hxC:Fq:AJqrYL@g]]sn^::e4Mhe*LtDi]Z^>134j#:GyBaTp7LWzh9Ft@0CL5xwro:WTpFpmbcNudgWCCV+T",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
