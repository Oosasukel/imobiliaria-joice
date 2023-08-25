/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import { useApi } from '../../hooks/useApi';
import * as S from '../Casa/styles';

import 'react-image-gallery/styles/css/image-gallery.css';
import { Loading } from '../../components/Loading';
import { House } from '../../hooks/useApi/types';
import { useAppState } from '../../hooks/useAppState';
import { getWhatsAppLink } from '../../utils/getWhatsAppLink';

export const Casa = () => {
  const { getHouse } = useApi();
  const [loading, setLoading] = useState(true);
  const {
    state: { selectedHouse, configs },
  } = useAppState();
  const router = useRouter();
  const [house, setHouse] = useState<House>();
  const [notFound, setNotFound] = useState(false);
  const toRent = useMemo(
    () => (router.query.toRent ? router.query.toRent === 'true' : undefined),
    [router.query.toRent]
  );
  const whatsLink = useMemo(
    () =>
      getWhatsAppLink(
        configs.phoneNumber,
        `Olá. Estou interessado ${
          toRent === undefined ? 'no' : toRent ? 'em alugar o' : 'em comprar o'
        } seguinte imóvel ${
          typeof window !== 'undefined'
            ? window.location.origin + window.location.pathname
            : ''
        }`
      ),
    [configs.phoneNumber, toRent]
  );

  useEffect(() => {
    if (!router.isReady) return;

    const fetchHouse = async () => {
      try {
        if (selectedHouse) {
          setHouse(selectedHouse);
        } else {
          const { data } = await getHouse(router.query.id as string);
          setHouse(data);
        }

        setLoading(false);
      } catch (error) {
        if (error?.response?.status === 404) {
          setNotFound(true);
        } else {
          return router.push('/erro');
        }
      }
    };

    setLoading(true);
    fetchHouse();
  }, [getHouse, router, selectedHouse]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (notFound)
    return (
      <Layout>
        <h1>Imóvel não encontrado.</h1>
      </Layout>
    );

  if (loading) return <Loading />;

  return (
    <Layout withMobileBackground={false}>
      <S.Container>
        <Card showOnMobile={false}>
          <ImageGallery
            items={
              house.images.length
                ? house.images.map((image) => ({
                    original: image.url,
                    thumbnail: image.url,
                  }))
                : [
                    {
                      original: '/images/no-image.png',
                      thumbnail: '/images/no-image.png',
                    },
                  ]
            }
            thumbnailPosition={isMobile ? undefined : 'left'}
            showThumbnails={!isMobile}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
          />

          <S.Content>
            <S.Title>
              <h1>
                {house.type}{' '}
                {toRent !== undefined
                  ? toRent
                    ? 'para alugar'
                    : 'para comprar'
                  : ''}
                {!!house.bedrooms &&
                  ` com ${house.bedrooms} quarto${
                    house.bedrooms > 1 ? 's' : ''
                  }`}
                {!!house.squareMeters && `, ${house.squareMeters}m²`}
              </h1>
              <p>
                {house.street}, {house.district}, {house.city}
              </p>
            </S.Title>

            <Card className="price-internal">
              <S.Contact>
                <p className="apartamento">{house.type}</p>

                {(toRent === undefined || toRent) && !!house.rentPrice && (
                  <S.Flex>
                    <p className="aluguel">Aluguel</p>
                    <p className="aluguel">
                      {house.rentPrice.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </S.Flex>
                )}

                {(toRent === undefined || !toRent) && !!house.sellPrice && (
                  <S.Flex>
                    <p className="aluguel">Valor</p>
                    <p className="aluguel">
                      {house.sellPrice.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </S.Flex>
                )}

                {(toRent === undefined || toRent) &&
                  !!house.condominiumPrice && (
                    <S.Flex>
                      <p>Condomínio</p>
                      <p>
                        {house.condominiumPrice.toLocaleString('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        })}
                      </p>
                    </S.Flex>
                  )}

                {(toRent === undefined || toRent) && !!house.iptuPrice && (
                  <S.Flex>
                    <p className="iptu">IPTU</p>
                    <p>
                      {house.iptuPrice.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </S.Flex>
                )}

                <a href={whatsLink} target="_blank" rel="noreferrer">
                  <Button
                    variant="thirdy"
                    iconPath="/icons/whatsappbranco.svg"
                    width="100%"
                    iconAlt="icone do whatsapp"
                  >
                    Ir para o Whatsapp
                  </Button>
                </a>
              </S.Contact>
            </Card>

            <S.Tags>
              {!!house.squareMeters && (
                <S.Tag>
                  <img src="/icons/medida.svg" alt="" />
                  <span>{house.squareMeters}m²</span>
                </S.Tag>
              )}

              {!!house.bedrooms && (
                <S.Tag>
                  <img src="/icons/quartos.svg" alt="" />
                  <span>
                    {house.bedrooms} quarto{house.bedrooms > 1 ? 's' : ''}
                    {!!house.suites && (
                      <>
                        <br />({house.suites} suíte{house.suites > 1 ? 's' : ''}
                        )
                      </>
                    )}
                  </span>
                </S.Tag>
              )}

              {house.bathrooms && (
                <S.Tag>
                  <img src="/icons/banheiros.svg" alt="" />
                  <span>
                    {house.bathrooms} banheiro{house.bathrooms > 1 ? 's' : ''}
                  </span>
                </S.Tag>
              )}

              {(toRent === undefined || toRent) && !!house.furnished && (
                <S.Tag>
                  <img src="/icons/moveis.svg" alt="" />
                  <span>Com mobília</span>
                </S.Tag>
              )}
            </S.Tags>

            {!!house.aboutTheProperty && (
              <S.Title>
                <h2>Sobre o imóvel</h2>
                <p>{house.aboutTheProperty}</p>
              </S.Title>
            )}

            {!!house.aboutTheCondominium && (
              <S.Title>
                <h2>Sobre o condomínio</h2>
                <p>{house.aboutTheCondominium}</p>
              </S.Title>
            )}
          </S.Content>
        </Card>

        <Card className="price-external">
          <S.Contact>
            <p className="apartamento">{house.type}</p>

            {(toRent === undefined || toRent) && !!house.rentPrice && (
              <S.Flex>
                <p className="aluguel">Aluguel</p>
                <p className="aluguel">
                  {house.rentPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  })}
                </p>
              </S.Flex>
            )}

            {(toRent === undefined || !toRent) && !!house.sellPrice && (
              <S.Flex>
                <p className="aluguel">Valor</p>
                <p className="aluguel">
                  {house.sellPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  })}
                </p>
              </S.Flex>
            )}

            {(toRent === undefined || toRent) && !!house.condominiumPrice && (
              <S.Flex>
                <p>Condomínio</p>
                <p>
                  {house.condominiumPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  })}
                </p>
              </S.Flex>
            )}

            {(toRent === undefined || toRent) && !!house.iptuPrice && (
              <S.Flex>
                <p className="iptu">IPTU</p>
                <p>
                  {house.iptuPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    maximumFractionDigits: 0,
                  })}
                </p>
              </S.Flex>
            )}

            <a href={whatsLink} target="_blank" rel="noreferrer">
              <Button
                variant="thirdy"
                iconPath="/icons/whatsappbranco.svg"
                width="100%"
                iconAlt="icone do whatsapp"
              >
                Ir para o Whatsapp
              </Button>
            </a>
          </S.Contact>
        </Card>
      </S.Container>
    </Layout>
  );
};
