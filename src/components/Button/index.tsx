/* eslint-disable @next/next/no-img-element */
import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'thirdy' | 'fourth';
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
  ...rest
}: ButtonProps) => {
  return (
    <S.StyledButton {...rest} variant={variant} width={width}>
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
