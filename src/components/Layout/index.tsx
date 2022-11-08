import { Footer } from '../Footer';
import { Header } from '../Header';
import * as S from './styles';

export const Layout = ({ children }) => {
  return (
    <S.Container>
      <S.Background />

      <S.Content>
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.Content>
    </S.Container>
  );
};
