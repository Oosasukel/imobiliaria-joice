/* eslint-disable @next/next/no-img-element */
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { GlobalCSS } from '../../../styles/global';
import * as S from '../Login/styles';

export const Login = () => {
  return (
    <>
      {/* @TODO mudar o estilo global para o _app.tsx */}
      <GlobalCSS />

      <S.Container>
        <S.ContainerCard>
          <Card>
            <S.Senha>
              <Input placeholder="Digite sua senha" />
            </S.Senha>
            <Button width="100%">Entrar</Button>
          </Card>
        </S.ContainerCard>
      </S.Container>
    </>
  );
};