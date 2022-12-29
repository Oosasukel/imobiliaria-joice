/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Loading } from '../../components/Loading';
import { Search } from '../../components/Search';
import { useApi } from '../../hooks/useApi';
import { House } from '../../hooks/useApi/types';
import { useAppState } from '../../hooks/useAppState';
import * as S from './styles';

interface CasasProps {
  admVersion?: boolean;
}

export const Casas = ({ admVersion }: CasasProps) => {
  const router = useRouter();
  const {
    state: { filters, city, toRent },
    operations: { setFilters, setSelectedHouse },
  } = useAppState();
  const [loading, setLoading] = useState(true);
  const { getHouses, getAdmHouses } = useApi();
  const [houses, setHouses] = useState<House[]>([]);
  const [initialId, setInitialId] = useState<string>();

  const fetchHouses = useCallback(
    async (query: any) => {
      setLoading(true);

      const {
        data: { data, nextId },
      } = await (admVersion ? getAdmHouses : getHouses)({
        ...query,
        initialId,
        maxRentPrice: query.toRent === 'true' ? query.maxPrice : undefined,
        minRentPrice: query.toRent === 'true' ? query.minPrice : undefined,
        maxSellPrice: query.toRent === 'true' ? undefined : query.maxPrice,
        minSellPrice: query.toRent === 'true' ? undefined : query.minPrice,
        pageSize: '12',
      });
      setInitialId(nextId);
      setHouses(data);

      setLoading(false);
    },
    [admVersion, getAdmHouses, getHouses, initialId]
  );

  useEffect(() => {
    if (router.isReady) {
      setFilters(router.query);

      fetchHouses(router.query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query, setFilters]);

  const getHouseTags = useCallback((house: House) => {
    const houseTags = [];

    if (house.squareMeters) houseTags.push(`${house.squareMeters} m²`);
    if (house.bedrooms)
      houseTags.push(
        `${house.bedrooms} Quarto${house.bedrooms > 1 ? 's' : ''}`
      );
    if (house.bathrooms)
      houseTags.push(
        `${house.bathrooms} Banheiro${house.bathrooms > 1 ? 's' : ''}`
      );

    return (
      <>
        {houseTags.map((tag, index) => {
          const last = index === houseTags.length - 1;

          if (last) return <Fragment key={index}> {tag}</Fragment>;

          return <Fragment key={index}> {tag} &bull;</Fragment>;
        })}
      </>
    );
  }, []);

  const handleHouseClick = useCallback(
    (house: House) => {
      setSelectedHouse(house);

      router.push({
        pathname: `${admVersion ? '/adm' : ''}/casa/${house.id}`,
        query: {
          toRent: router.query.toRent,
        },
      });
    },
    [admVersion, router, setSelectedHouse]
  );

  return (
    <Layout admVersion={admVersion}>
      <Search
        loading={loading}
        onSubmit={() =>
          router.push({
            pathname: `${admVersion ? '/adm' : ''}/casas`,
            query: { ...filters, city, toRent } as any,
          })
        }
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <S.Titulo>
            Imóveis para{' '}
            {router.query.toRent === 'false' ? 'comprar' : 'alugar'}
          </S.Titulo>

          <S.Lista>
            {houses.map((house) => (
              <S.Card key={house.id} onClick={() => handleHouseClick(house)}>
                <img
                  src={
                    house.images.length
                      ? house.images[0].url
                      : '/images/no-image.png'
                  }
                  alt="foto da casa"
                />

                <S.ConteudoCard>
                  <S.Endereco>
                    <p>{house.type}</p>
                    <p className="street">{house.street}</p>
                    <p>
                      {house.district}, {house.city}
                    </p>
                  </S.Endereco>

                  <p className="tags">{getHouseTags(house)}</p>

                  {router.query.toRent === 'true' &&
                    !!house.condominiumPrice && (
                      <p>
                        Condomínio{' '}
                        {house.condominiumPrice.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    )}

                  <p className="price">
                    {(router.query.toRent === 'true'
                      ? house.rentPrice
                      : house.sellPrice
                    ).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                      maximumFractionDigits: 0,
                    })}
                  </p>
                  <div className="container-badge">
                    <S.Badge>Disponivel</S.Badge>
                  </div>
                </S.ConteudoCard>
              </S.Card>
            ))}
          </S.Lista>

          {!houses.length && (
            <span>Não encontramos nenhuma casa para esses filtros</span>
          )}

          {!!initialId && (
            <S.Pagnation>
              <Button variant="secondary"> Ver mais</Button>
            </S.Pagnation>
          )}
        </>
      )}
    </Layout>
  );
};
