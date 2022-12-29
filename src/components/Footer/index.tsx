/* eslint-disable @next/next/no-img-element */
import { useAppState } from '../../hooks/useAppState';
import { Container, Content } from './styles';

export const Footer = () => {
  const {
    state: { configs },
  } = useAppState();

  return (
    <Container>
      <Content>
        <>
          <span className="contato">Contato</span>
          <div className="whatsapp">
            <img src="/icons/whatsapp.svg" alt="icone do whatsapp" />
            <span>
              {configs.phoneNumber
                .replace(/\D+/g, '')
                .replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '($2) $3-$4')}
            </span>
          </div>
        </>

        <p className="copyrigth">
          ©2022 Copyright - Imobiliária Joice Decicillo | CRECI {configs.creci}{' '}
          | Todos os direitos reservados
        </p>
      </Content>
    </Container>
  );
};
