import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  showOnMobile?: boolean;
}

export const Card = ({
  children,
  showOnMobile = true,
  // eslint-disable-next-line no-unused-vars
  ref,
  ...rest
}: CardProps) => {
  return (
    <S.Container showOnMobile={showOnMobile} {...rest}>
      {children}

      <div></div>
    </S.Container>
  );
};
