/* eslint-disable @next/next/no-img-element */
import * as S from './styles';

interface MenuProps {
  ativo?: boolean;
  onClose: () => void;
  // eslint-disable-next-line no-undef
  Links: () => JSX.Element;
}

export const Menu = ({ ativo = false, onClose, Links }: MenuProps) => {
  return (
    <S.Overlay onClick={onClose} ativo={ativo}>
      <S.MenuCard onClick={(event) => event.stopPropagation()}>
        <Links />
      </S.MenuCard>
    </S.Overlay>
  );
};
