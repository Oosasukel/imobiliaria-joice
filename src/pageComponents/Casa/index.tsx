/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Layout } from '../../components/Layout';
import * as S from '../Casa/styles';

export const Casa = () => {
  return (
    <Layout withMobileBackground={false}>
      <S.Container>
        <Card>
          <S.Galery>
            <S.Others>
              <img src="/images/casap.png" alt="" />
              <img src="/images/casap.png" alt="" />
              <img src="/images/casap.png" alt="" />

              <div>
                <img src="/images/casap.png" alt="" />
                <div className="frame"></div>
                <p>+6</p>
              </div>
            </S.Others>

            <S.Main>
              <img className="casag" src="/images/casag.png" alt="" />
              <div>1/20</div>
            </S.Main>
          </S.Galery>

          <S.Content>
            <S.Title>
              <h1>Apartamento para alugar com 1 quarto, 28m²</h1>
              <p>Rua Caetano Pinto, Brás, São Paulo SP</p>
            </S.Title>

            <S.Tags>
              <S.Tag>
                <img src="/icons/medida.svg" alt="" />
                <p>28m²</p>
              </S.Tag>

              <S.Tag>
                <img src="/icons/quartos.svg" alt="" />
                <p>2 quartos</p>
                <p>(1suíte)</p>
              </S.Tag>

              <S.Tag>
                <img src="/icons/banheiros.svg" alt="" />
                <p>1 banheiro</p>
              </S.Tag>

              <S.Tag>
                <img src="/icons/moveis.svg" alt="" />
                <p>Com mobília</p>
              </S.Tag>
            </S.Tags>

            <S.Title>
              <h2>Sobre o imóvel</h2>
              <p>
                Lindo kitnet com piso de porcelanato e pintura nova, possui
                ótima distribuição interna de cômodos, oferecendo uma bela
                iluminação solar, banheiro com box de vidro, pronto para morar.
              </p>
            </S.Title>

            <S.Title>
              <h2>Sobre o condomínio</h2>
              <p>Fácil acesso ao metro, estacionamento em frente.</p>
            </S.Title>
          </S.Content>
        </Card>

        <Card>
          <S.Contact>
            <p className="apartamento">Apartamento</p>

            <S.Flex>
              <p className="aluguel">Aluguel</p>
              <p className="aluguel">R$ 3.500</p>
            </S.Flex>

            <S.Flex>
              <p>Condomínio</p>
              <p>R$ 1.068</p>
            </S.Flex>

            <S.Flex>
              <p className="iptu">IPTU</p>
              <p>R$ 206</p>
            </S.Flex>

            <Button
              variant="thirdy"
              iconPath="/icons/whatsappbranco.svg"
              width="100%"
              iconAlt="icone do whatsapp"
            >
              Ir para o Whatsapp
            </Button>
          </S.Contact>
        </Card>
      </S.Container>
    </Layout>
  );
};