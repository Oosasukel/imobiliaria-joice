import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withSession } from "../withSession";

export const withAuth = (handler: NextApiHandler) =>
  withSession((req: NextApiRequest, res: NextApiResponse) => {
    if (!req.session.user) return res.status(401).send("Não autorizado");

    return handler(req, res);
  });
