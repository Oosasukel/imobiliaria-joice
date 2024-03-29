/* eslint-disable @next/next/no-img-element */
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { FormEventHandler, useCallback, useRef, useState } from 'react';
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { useApi } from '../../../hooks/useApi';
import * as S from '../Login/styles';

export const Login = () => {
  const { login } = useApi();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      if (passwordRef.current && emailRef.current) {
        try {
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);

          const expires = new Date();
          expires.setHours(expires.getHours() + 8);

          setCookie('logged', 'true', { expires });

          return router.push('/adm/casas');
        } catch (error) {
          if (error.response.status === 403) {
            setError('Senha inválida.');
            setLoading(false);
          } else {
            return router.push('/erro');
          }
        }
      }
    },
    [login, router]
  );

  return (
    <S.Container onSubmit={loading ? undefined : handleSubmit}>
      <S.ContainerCard>
        <Card>
          <S.InputContainer>
            <Input type="email" ref={emailRef} placeholder="Digite seu email" />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              type="password"
              ref={passwordRef}
              placeholder="Digite sua senha"
            />
            {!!error && <span>{error}</span>}
          </S.InputContainer>
          <Button loading={loading} width="100%">
            Entrar
          </Button>
        </Card>
      </S.ContainerCard>
    </S.Container>
  );
};
