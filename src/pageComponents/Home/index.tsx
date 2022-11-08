import { Layout } from '../../components/Layout';
import { Search } from '../../components/Search';
import * as S from './styles';

export const Home = () => {
  return (
    <Layout>
      <S.Titulo>O Imóvel do seu sonho. Do seu jeito.</S.Titulo>
      <S.Paragrafo>
        Seja para morar, trabalhar ou investir, a sua melhor experiência da
        busca à realização
      </S.Paragrafo>
      <Search />
    </Layout>
  );
};
