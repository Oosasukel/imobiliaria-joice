import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { ironSession } from '../../../api/middlewares/ironSession';
import { defaultOptions } from '../../../api/nextConnect/defaultOptions';
import { fauna } from '../../../api/services/fauna';

const handler = nc<NextApiRequest, NextApiResponse>(defaultOptions);
handler.use(ironSession);

handler.get(async (req, res) => {
  const filters = {
    paraAluguel: true,
    localizacao: 'Capela do Alto',
  };

  try {
    const { data } = await fauna.query<any>(
      q.Map(
        q.Paginate(
          q.Intersection(
            q.Match(q.Index('house_by_paraAluguel'), filters.paraAluguel),
            q.Match(q.Index('house_by_localizacao'), filters.localizacao)
          )
        ),
        q.Lambda('house', q.Get(q.Var('house')))
      )
    );

    const houses = data.map((item) => ({ id: item.ref, ...item.data }));

    return res.json(houses);
  } catch (error) {
    return res.json(error);
  }
});

export default handler;
