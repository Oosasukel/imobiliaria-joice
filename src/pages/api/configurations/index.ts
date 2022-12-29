import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { auth } from '../../../api/middlewares/auth';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../api/services/fauna';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.get(async (req, res) => {
  const { data } = await fauna.query<any>(
    q.Select(
      [0],
      q.Map(
        q.Paginate(q.Documents(q.Collection('Config'))),
        q.Lambda('X', q.Get(q.Var('X')))
      )
    )
  );

  return res.json(data);
});

handler.use(ironSession);
handler.use(auth);
handler.patch(async (req, res) => {
  const { data } = await fauna.query<any>(
    q.Update(
      q.Select(
        [0, 'ref'],
        q.Map(
          q.Paginate(q.Documents(q.Collection('Config'))),
          q.Lambda('X', q.Get(q.Var('X')))
        )
      ),
      {
        data: req.body,
      }
    )
  );

  return res.json(data);
});

export default handler;
