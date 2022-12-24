/* eslint-disable @next/next/no-img-element */
import { Button } from '../../components/Button';
import { Casa } from '../../components/Casa';
import { Layout } from '../../components/Layout';
import { Search } from '../../components/Search';
import * as S from './styles';

export const Casas = () => {
  return (
    <Layout>
      <Search />

      <S.Titulo> Imóveis para alugar </S.Titulo>

      <S.Lista>
        <Casa />

        <Casa />

        <Casa />

        <Casa />

        <Casa />

        <Casa />

        <Casa />

        <Casa />
      </S.Lista>

      <S.Pagnation>
        <Button variant="secondary"> Ver mais</Button>
      </S.Pagnation>
    </Layout>
  );
};
