/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import * as S from './styles';

export const Erro = () => {
  return (
    <Layout>
      <S.CardContainer>
        <div className="flex">
          <div>
            <h1>Algo deu errado ☹️</h1>
            <h1>Tente novamente ou nos envie uma mensagem</h1>
            <h1></h1>
          </div>

          <div>
            <Button>
              <a href="/"> Inicio </a>
            </Button>
          </div>
        </div>
      </S.CardContainer>
    </Layout>
  );
};
