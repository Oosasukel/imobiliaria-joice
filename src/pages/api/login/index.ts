import bcrypt from 'bcrypt';
import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import { withSession } from '../../../api/middlewares/withSession';
import { fauna } from '../../../api/services/fauna';

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body || !req.body.email || !req.body.password)
    return res.status(400).send('email or password are missing');

  const { email, password } = req.body;

  let user: User;
  try {
    const response = await fauna.query<any>(
      q.Get(q.Match(q.Index('user_by_email'), email))
    );

    user = { ...response.data, id: response.ref };
  } catch {
    return res.status(403).send('invalid email or password');
  }

  const passwordIsCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!passwordIsCorrect)
    return res.status(403).send('invalid email or password');

  const userDTO = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  req.session.user = userDTO;
  await req.session.save();

  res.json(userDTO);
};

export default withSession(login);
