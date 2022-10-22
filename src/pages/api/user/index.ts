import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../../../api/middlewares/withAuth';

const user = (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.session.user) return res.status(401).send('Não autorizado');

  return res.json({ user: req.session.user });
};

export default withAuth(user);
