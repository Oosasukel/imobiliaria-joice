/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Button } from '../Button';
import { Menu } from './Menu';
import * as S from './styles';

interface HeaderProps {
  admVersion?: boolean;
}

export const Header = ({ admVersion }: HeaderProps) => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const getLinks = useCallback(() => {
    if (admVersion)
      return (
        <>
          <Link href={'/adm/casas'}>Imóveis</Link>

          <Link href="/adm/configs">Configurações</Link>

          <Link href="/adm/casa">
            <Button variant="fourth">Nova Casa</Button>
          </Link>
        </>
      );

    return (
      <>
        <Link href={'/casas?toRent=true'}>Imóveis para alugar</Link>

        <Link href={'/casas?toRent=false'}>Imóveis para comprar</Link>

        <Link href="/fale-conosco">Fale conosco</Link>
      </>
    );
  }, [admVersion]);

  return (
    <S.Container>
      <Link href={admVersion ? '/adm/casas' : '/'}>
        <img className="logo" src="/images/logo.png" alt="" />
      </Link>

      <div className="links">{getLinks()}</div>

      <Menu ativo={menuAtivo} onClose={toggleMenu} Links={getLinks} />

      <img onClick={toggleMenu} className="menu" src="/icons/menu.svg" alt="" />
    </S.Container>
  );
};
