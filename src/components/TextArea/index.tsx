import { forwardRef, TextareaHTMLAttributes } from 'react';

import * as S from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...rest }, ref) => {
    return <S.StyledTextArea ref={ref} {...rest} />;
  }
);

TextArea.displayName = 'TextArea';
