import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../api/services/fauna';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);

handler.get(async (req, res) => {
  const { data } = await fauna.query<any>(
    q.Distinct(
      q.Map(
        q.Paginate(q.Match(q.Index('houses_by_city'))),
        q.Lambda(['city', 'ref'], q.Var('city'))
      )
    )
  );

  return res.json(data);
});

export default handler;
