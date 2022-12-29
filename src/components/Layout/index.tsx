import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
  withMobileBackground?: boolean;
  admVersion?: boolean;
}

export const Layout = ({
  children,
  withMobileBackground = true,
  admVersion,
}: LayoutProps) => {
  return (
    <S.Container withMobileBackground={withMobileBackground}>
      <S.Gradient />

      <S.Content>
        <Header admVersion={admVersion} />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Content>
    </S.Container>
  );
};
