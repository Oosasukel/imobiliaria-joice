/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import { useAppState } from '../../hooks/useAppState';
import { getWhatsAppLink } from '../../utils/getWhatsAppLink';
import * as S from './styles';

export const FaleConosco = () => {
  const {
    state: { configs },
  } = useAppState();
  const whatsLink = useMemo(
    () => getWhatsAppLink(configs.phoneNumber, 'Olá. Estou buscando um imóvel'),
    [configs.phoneNumber]
  );

  return (
    <Layout>
      <S.Container>
        <S.Perfil>
          <h1>{configs.name || 'Joice Gonçalves Decicillo'}</h1>
          {!!configs.creci && <p>CRECI: {configs.creci}</p>}

          <img
            src={configs.perfilImageUrl || '/images/no-profile-image.png'}
            alt="foto de perfil"
          />
        </S.Perfil>

        <Card>
          <a target="_blank" href={whatsLink} rel="noreferrer">
            <Button
              variant="thirdy"
              iconPath="/icons/whatsappbranco.svg"
              width="100%"
              iconAlt="icone do whatsapp"
            >
              Ir para o Whatsapp
            </Button>
          </a>
        </Card>
      </S.Container>
    </Layout>
  );
};
