import styled from 'styled-components';

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'thirdy';
  width: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return '#ffffff';
      case 'thirdy':
        return '#25D366';
      default:
        return '#dc2a2a';
    }
  }};
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : 'initial')};

  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  color: ${({ variant }) => (variant === 'secondary' ? '#000000' : '#ffffff')};
  border: ${({ variant }) =>
    variant === 'secondary' ? '1px solid #D0D0D0' : 'none'};
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    margin: auto 0;
  }
`;
