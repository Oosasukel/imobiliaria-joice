/* eslint-disable @next/next/no-img-element */
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loading } from '../Loading';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'thirdy' | 'fourth';
  iconPath?: string;
  iconAlt?: string;
  width?: string;
  loading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  iconPath,
  iconAlt,
  width,
  loading,
  ...rest
}: ButtonProps) => {
  if (loading) return <Loading />;

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
