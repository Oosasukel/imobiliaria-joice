import { Container, Content } from './styles';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <span className="contato">Contato</span>
        <div className="whatsapp">
          <img src="/icons/whatsapp.svg" alt="icone do whatsapp" />
          <span>(15) 99700-0000 </span>
        </div>
        <p className="copyrigth">
          ©2022 Copyright - Imobiliária Joice Decicillo | CRECI xxx | Todos os
          direitos reservados
        </p>
      </Content>
    </Container>
  );
};
