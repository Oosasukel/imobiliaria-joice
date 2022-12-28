import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface ChekboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const Radio = ({ label, ...rest }: ChekboxProps) => {
  return (
    <S.Label htmlFor={label.toLowerCase()}>
      <input type="radio" id={label.toLowerCase()} {...rest} />
      <span>{label}</span>
    </S.Label>
  );
};
