import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import { Search } from '../../components/Search';
import { useAppState } from '../../hooks/useAppState';
import * as S from './styles';

export const Home = () => {
  const router = useRouter();
  const {
    state: { filters, city, toRent },
  } = useAppState();

  return (
    <Layout>
      <S.Titulo>O Imóvel do seu sonho. Do seu jeito.</S.Titulo>
      <S.Paragrafo>
        Seja para morar, trabalhar ou investir, a sua melhor experiência da
        busca à realização
      </S.Paragrafo>
      <Search
        onSubmit={() =>
          router.push({
            pathname: '/casas',
            query: { ...filters, city, toRent } as any,
          })
        }
      />
    </Layout>
  );
};
