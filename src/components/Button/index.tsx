/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'thirdy';
  iconPath?: string;
  iconAlt?: string;
  width?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  iconPath,
  iconAlt,
  width,
}: ButtonProps) => {
  return (
    <S.StyledButton variant={variant} width={width}>
      {iconPath ? (
        <>
          <img src={iconPath} alt={iconAlt} />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </S.StyledButton>
  );
};
