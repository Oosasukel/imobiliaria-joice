/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import * as S from './styles';

interface GenericErrorProps {
  // eslint-disable-next-line no-undef
  message: string | JSX.Element;
}

export const GenericError = ({ message }: GenericErrorProps) => {
  return (
    <Layout>
      <S.CardContainer>
        <div className="flex">
          <div>
            <h1>{message}</h1>
          </div>
          <div>
            <Button>
              <a href="/">Inicio</a>
            </Button>
          </div>
        </div>
      </S.CardContainer>
    </Layout>
  );
};
