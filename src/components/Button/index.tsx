import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'thirdy';
  iconPath?: string;
  width?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  iconPath,
  width,
}: ButtonProps) => {
  return (
    <S.StyledButton variant={variant} width={width}>
      {iconPath ? (
        <>
          <img src={iconPath} />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </S.StyledButton>
  );
};
