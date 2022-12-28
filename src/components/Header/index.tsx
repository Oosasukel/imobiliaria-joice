/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from './Menu';
import * as S from './styles';

export const Header = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <S.Container>
      <Link href="/">
        <img className="logo" src="/images/logo.png" alt="" />
      </Link>

      <div className="links">
        <Link href="/casas?toRent=true">Imóveis para alugar</Link>

        <Link href="/casas?toRent=false">Imóveis para comprar</Link>

        <Link href="/fale-conosco">Fale conosco</Link>
      </div>

      <Menu ativo={menuAtivo} onClose={toggleMenu} />

      <img onClick={toggleMenu} className="menu" src="/icons/menu.svg" alt="" />
    </S.Container>
  );
};
