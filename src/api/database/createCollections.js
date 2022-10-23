const dotenv = require('dotenv');
const { Client, query: q } = require('faunadb');

dotenv.config();

const create = async () => {
  const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
  });

  // ----------------------------------- Users
  await fauna.query(
    q.If(
      q.Not(q.Exists(q.Collection('Users'))),
      q.CreateCollection({ name: 'Users' }),
      true
    )
  );
  await fauna.query(
    q.If(
      q.Not(q.Exists(q.Index('user_by_email'))),
      q.CreateIndex({
        name: 'user_by_email',
        source: q.Collection('Users'),
        terms: [{ field: ['data', 'email'] }],
      }),
      true
    )
  );

  // ----------------------------------- Houses
  await fauna.query(
    q.If(
      q.Not(q.Exists(q.Collection('Houses'))),
      q.CreateCollection({ name: 'Houses' }),
      true
    )
  );
  await fauna.query(
    q.If(
      q.Not(q.Exists(q.Index('houses_by_city'))),
      q.CreateIndex({
        name: 'houses_by_city',
        source: q.Collection('Houses'),
        terms: [{ field: ['data', 'city'] }],
      }),
      true
    )
  );

  // ----------------------------------- Config
  await fauna.query(
    q.If(
      q.Not(q.Exists(q.Collection('Config'))),
      q.CreateCollection({ name: 'Config' }),
      true
    )
  );
  await fauna.query(
    q.If(
      q.Equals(q.Count(q.Documents(q.Collection('Config'))), 0),
      q.Create(q.Collection('Config'), {
        data: {},
      }),
      true
    )
  );
};

create();
