import { forwardRef, InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    return <S.StyledInput ref={ref} {...rest} />;
  }
);

Input.displayName = 'Input';
