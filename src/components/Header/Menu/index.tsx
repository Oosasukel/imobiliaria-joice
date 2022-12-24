/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as S from './styles';

interface MenuProps {
  ativo?: boolean;
  onClose: () => void;
}

export const Menu = ({ ativo = false, onClose }: MenuProps) => {
  return (
    <S.Overlay onClick={onClose} ativo={ativo}>
      <S.MenuCard onClick={(event) => event.stopPropagation()}>
        <Link href="">Imóveis para alugar</Link>

        <Link href="">Imóveis para comprar</Link>

        <Link href="/fale-conosco">Fale conosco</Link>
      </S.MenuCard>
    </S.Overlay>
  );
};
