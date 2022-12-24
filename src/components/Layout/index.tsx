import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
  withMobileBackground?: boolean;
}

export const Layout = ({
  children,
  withMobileBackground = true,
}: LayoutProps) => {
  return (
    <S.Container withMobileBackground={withMobileBackground}>
      <S.Gradient />

      <S.Content>
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Content>
    </S.Container>
  );
};
