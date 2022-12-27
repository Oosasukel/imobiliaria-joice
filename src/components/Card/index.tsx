import { ReactNode } from 'react';
import * as S from './styles';

interface CardProps {
  children: ReactNode;
  className?: string;
  showOnMobile?: boolean;
}

export const Card = ({
  children,
  className,
  showOnMobile = true,
}: CardProps) => {
  return (
    <S.Container showOnMobile={showOnMobile} className={className}>
      {children}
    </S.Container>
  );
};
