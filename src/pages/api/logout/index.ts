import { NextApiRequest, NextApiResponse } from "next";
import { withSession } from "../../../api/middlewares/withSession";

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  req.session.destroy();
  res.send({ ok: true });
};

export default withSession(logout);
