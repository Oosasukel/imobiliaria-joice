/* eslint-disable @next/next/no-img-element */
import { Button } from '../Button';
import * as S from './styles';

export const Search = () => {
  return (
    <S.Container>
      <S.Tabs>
        <S.Tab ativo>Quero alugar</S.Tab>
        <S.Tab>Quero comprar</S.Tab>
      </S.Tabs>
      <S.ContainerInputs>
        <S.ContainerInput>
          <img src="/icons/pesquisa.svg" alt="" />
          <S.Input type="text" placeholder="Busque por cidade" />
        </S.ContainerInput>

        <S.Divider />

        <S.ContainerInput>
          <img src="/icons/money.svg" alt="" />
          <S.Input type="text" placeholder="alugue até" />
        </S.ContainerInput>

        <Button
          variant="secondary"
          iconPath="/icons/filtros.svg"
          iconAlt="icone dos filtros"
        >
          Mais filtros
        </Button>

        <Button> Buscar imóvel </Button>
      </S.ContainerInputs>
    </S.Container>
  );
};
