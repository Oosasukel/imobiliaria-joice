/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import * as S from './styles';

export const FaleConosco = () => {
  return (
    <Layout>
      <S.Container>
        <S.Perfil>
          <h1>Joice Gonçalves Decicillo</h1>
          <p>CRECI: xxxxxx</p>
          <img src="/images/perfil.png" alt="" />
        </S.Perfil>

        <Card>
          <Button
            variant="thirdy"
            iconPath="/icons/whatsappbranco.svg"
            width="100%"
            iconAlt="icone do whatsapp"
          >
            Ir para o Whatsapp
          </Button>
        </Card>
      </S.Container>
    </Layout>
  );
};
