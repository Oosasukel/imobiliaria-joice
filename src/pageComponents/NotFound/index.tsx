/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import * as S from './styles';

export const NotFound = () => {
  return (
    <Layout>
      <S.CardContainer>
        <div className="flex">
          <div>
            <h1>Página não encontrada</h1>
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
