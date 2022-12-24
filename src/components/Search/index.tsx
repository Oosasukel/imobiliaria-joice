/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Select from 'react-select';
import { Button } from '../Button';
import { Filters } from './Filters';
import * as S from './styles';

const options = [
  {
    value: 'Capela do Alto',
    label: 'Capela do Alto',
  },
  { value: 'Sorocaba', label: 'Sorocaba' },
  { value: 'Tatuí', label: 'Tatuí' },
];

export const Search = () => {
  const [filtersAtivo, setFiltersAtivo] = useState(false);

  const toggleFiltersAtivo = () => {
    setFiltersAtivo(!filtersAtivo);
  };

  return (
    <>
      <S.Container>
        <S.Tabs>
          <S.Tab ativo>Quero alugar</S.Tab>
          <S.Tab>Quero comprar</S.Tab>
        </S.Tabs>
        <S.Content>
          <S.ContainerInputs>
            <S.ContainerInput>
              <img src="/icons/pesquisa.svg" alt="" />
              <Select
                options={options}
                classNamePrefix="react-select"
                className="react-select-container"
                placeholder="Busque por cidade"
              />
            </S.ContainerInput>

            <S.Divider />

            <S.ContainerInput>
              <img src="/icons/money.svg" alt="" />
              <S.Input type="text" placeholder="alugue até" />
            </S.ContainerInput>
          </S.ContainerInputs>

          <Button
            onClick={toggleFiltersAtivo}
            variant="secondary"
            iconPath="/icons/filtros.svg"
            iconAlt="icone dos filtros"
          >
            Mais filtros
          </Button>

          <Button> Buscar imóvel </Button>
        </S.Content>
      </S.Container>

      <Filters ativo={filtersAtivo} onClose={toggleFiltersAtivo} />
    </>
  );
};
