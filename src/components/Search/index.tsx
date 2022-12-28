/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { useAppState } from '../../hooks/useAppState';
import { Button } from '../Button';
import { Filters } from './Filters';
import * as S from './styles';

interface SearchProps {
  onSubmit?: () => void;
  loading?: boolean;
}

export const Search = ({ onSubmit, loading }: SearchProps) => {
  const {
    state: {
      city,
      cities,
      toRent,
      filters: { maxPrice },
    },
    operations: { setFilters, setToRent, setCity },
  } = useAppState();
  const [filtersAtivo, setFiltersAtivo] = useState(false);
  const selectCities = useMemo(
    () => cities.map((name) => ({ value: name, label: name })),
    [cities]
  );
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.toRent) {
      setToRent(router.query.toRent === 'true');
    }
  }, [router.isReady, router.query.toRent, setToRent]);

  const toggleFiltersAtivo = () => {
    setFiltersAtivo(!filtersAtivo);
  };

  return (
    <>
      <S.Container>
        <S.Tabs>
          <S.Tab ativo={toRent} onClick={() => setToRent(true)}>
            Quero alugar
          </S.Tab>
          <S.Tab ativo={!toRent} onClick={() => setToRent(false)}>
            Quero comprar
          </S.Tab>
        </S.Tabs>
        <S.Content>
          <S.ContainerInputs>
            <S.ContainerInput>
              <img src="/icons/pesquisa.svg" alt="" />
              <Select
                defaultValue={city ? { value: city, label: city } : undefined}
                options={selectCities}
                onChange={(newValue) => setCity(newValue.value)}
                classNamePrefix="react-select"
                className="react-select-container"
                placeholder="Busque por cidade"
                instanceId="city-select"
              />
            </S.ContainerInput>

            <S.Divider />

            <S.ContainerInput>
              <img src="/icons/money.svg" alt="" />
              <S.Input
                type="number"
                placeholder={toRent ? 'Alugue até' : 'Valor até'}
                value={maxPrice}
                onChange={(event) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxPrice: event.target.value,
                  }))
                }
              />
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

          <Button onClick={onSubmit} loading={loading}>
            Buscar imóvel
          </Button>
        </S.Content>
      </S.Container>

      <Filters ativo={filtersAtivo} onClose={toggleFiltersAtivo} />
    </>
  );
};
