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
        values: [{ field: ['data', 'city'] }, { field: ['ref'] }],
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

  // ----------------------------------- Functions
  await fauna.query(
    q.If(
      q.Not(q.Exists(q.Function('HouseFilter'))),
      q.CreateFunction({
        name: 'HouseFilter',
        body: q.Query(
          q.Lambda(
            'filterParams',
            q.Map(
              q.Paginate(
                q.Filter(
                  q.Documents(q.Collection('Houses')),
                  q.Lambda(
                    'x',
                    q.Let(
                      {
                        p: q.Get(q.Var('x')),
                      },
                      q.And(
                        q.If(
                          q.ContainsField('toRent', q.Var('filterParams')),
                          q.If(
                            q.Select(['toRent'], q.Var('filterParams')),
                            q.Equals(
                              q.Select(['data', 'toRent'], q.Var('p')),
                              true
                            ),
                            q.Equals(
                              q.Select(['data', 'toSell'], q.Var('p')),
                              true
                            )
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('statusId', q.Var('filterParams')),
                          q.Equals(
                            q.Select(['data', 'statusId'], q.Var('p')),
                            q.Select(['statusId'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('city', q.Var('filterParams')),
                          q.Equals(
                            q.Select(['data', 'city'], q.Var('p')),
                            q.Select(['city'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'minSellPrice',
                            q.Var('filterParams')
                          ),
                          q.GTE(
                            q.Select(['data', 'sellPrice'], q.Var('p')),
                            q.Select(['minSellPrice'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'maxSellPrice',
                            q.Var('filterParams')
                          ),
                          q.LTE(
                            q.Select(['data', 'sellPrice'], q.Var('p')),
                            q.Select(['maxSellPrice'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'minRentPrice',
                            q.Var('filterParams')
                          ),
                          q.GTE(
                            q.Select(['data', 'rentPrice'], q.Var('p')),
                            q.Select(['minRentPrice'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'maxRentPrice',
                            q.Var('filterParams')
                          ),
                          q.LTE(
                            q.Select(['data', 'rentPrice'], q.Var('p')),
                            q.Select(['maxRentPrice'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('typeId', q.Var('filterParams')),
                          q.Equals(
                            q.Select(['data', 'typeId'], q.Var('p')),
                            q.Select(['typeId'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('bedrooms', q.Var('filterParams')),
                          q.GTE(
                            q.Select(['data', 'bedrooms'], q.Var('p')),
                            q.Select(['bedrooms'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('bathrooms', q.Var('filterParams')),
                          q.GTE(
                            q.Select(['data', 'bathrooms'], q.Var('p')),
                            q.Select(['bathrooms'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('suites', q.Var('filterParams')),
                          q.GTE(
                            q.Select(['data', 'suites'], q.Var('p')),
                            q.Select(['suites'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'parkingSpaces',
                            q.Var('filterParams')
                          ),
                          q.GTE(
                            q.Select(['data', 'parkingSpaces'], q.Var('p')),
                            q.Select(['parkingSpaces'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('furnished', q.Var('filterParams')),
                          q.Equals(
                            q.Select(['data', 'furnished'], q.Var('p')),
                            q.Select(['furnished'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'minSquareMeters',
                            q.Var('filterParams')
                          ),
                          q.GTE(
                            q.Select(['data', 'squareMeters'], q.Var('p')),
                            q.Select(['minSquareMeters'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField(
                            'maxSquareMeters',
                            q.Var('filterParams')
                          ),
                          q.LTE(
                            q.Select(['data', 'squareMeters'], q.Var('p')),
                            q.Select(['maxSquareMeters'], q.Var('filterParams'))
                          ),
                          true
                        ),
                        q.If(
                          q.ContainsField('createdBy', q.Var('filterParams')),
                          q.Equals(
                            q.Select(['data', 'createdBy'], q.Var('p')),
                            q.Select(['createdBy'], q.Var('filterParams'))
                          ),
                          true
                        )
                      )
                    )
                  )
                ),
                {
                  size: q.If(
                    q.ContainsField('pageSize', q.Var('filterParams')),
                    q.Select(['pageSize'], q.Var('filterParams')),
                    20
                  ),
                  after: q.If(
                    q.ContainsField('initialId', q.Var('filterParams')),
                    [
                      q.Ref(
                        q.Collection('Houses'),
                        q.Select(['initialId'], q.Var('filterParams'))
                      ),
                    ],
                    0
                  ),
                }
              ),
              q.Lambda('house', q.Get(q.Var('house')))
            )
          )
        ),
      }),
      true
    )
  );
};

create();
