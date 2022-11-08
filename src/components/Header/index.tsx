/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { GlobalCSS } from '../../styles/global';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      {/* @TODO mudar o estilo global para o _app.tsx */}
      <GlobalCSS />

      <Link href="/">
        <img className="logo" src="/images/logo.jpg" alt="" />
      </Link>
      <div className="links">
        <Link href="">Imóveis para alugar</Link>

        <Link href="">Imóveis para comprar</Link>

        <Link href="/fale-conosco">Fale conosco</Link>
      </div>
    </Container>
  );
};
