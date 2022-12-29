import { Formik } from 'formik';
import { useCallback, useState } from 'react';
import { useAppState } from '../../../hooks/useAppState';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Radio } from '../../Radio';
import { Tab } from '../styles';
import * as S from './styles';

interface FiltersProps {
  ativo?: boolean;
  onClose: () => void;
}

export const Filters = ({ ativo = false, onClose }: FiltersProps) => {
  const {
    state: { toRent, filters: filtersContext, types },
    operations: { setFilters: setFiltersContext, setToRent },
  } = useAppState();
  const [filters, setFilters] = useState(filtersContext);

  const handleChangeProperty = useCallback(
    (
      property: 'bedrooms' | 'bathrooms' | 'suites' | 'parkingSpaces',
      value: string
    ) => {
      setFilters((prev) => {
        const newValue = prev[property] === value ? undefined : value;

        return { ...prev, [property]: newValue };
      });
    },
    []
  );

  if (!ativo) return null;

  return (
    <S.Overlay onClick={onClose}>
      <Formik
        initialValues={filtersContext}
        onSubmit={(values) => {
          setFiltersContext({
            ...filters,
            ...values,
            minPrice: values.minPrice || undefined,
            maxPrice: values.maxPrice || undefined,
            minSquareMeters: values.minSquareMeters || undefined,
            maxSquareMeters: values.maxSquareMeters || undefined,
          });
          onClose();
        }}
      >
        {({ values, handleChange, handleSubmit, resetForm, handleReset }) => (
          <S.Container
            onSubmit={handleSubmit}
            onReset={handleReset}
            onClick={(event) => event.stopPropagation()}
          >
            <S.Header>
              <S.DivClose>
                <S.CloseButton onClick={onClose} type="button">
                  X
                </S.CloseButton>
              </S.DivClose>

              <S.DivTabs>
                <Tab
                  ativo={toRent}
                  onClick={() => setToRent(true)}
                  type="button"
                >
                  Quero alugar
                </Tab>
                <Tab
                  ativo={!toRent}
                  onClick={() => setToRent(false)}
                  type="button"
                >
                  Quero comprar
                </Tab>
              </S.DivTabs>
            </S.Header>

            <S.Conteudo>
              <p>Tipo de imóvel</p>

              <S.Checkboxes>
                {types.map(({ name, id }) => (
                  <Radio
                    key={id}
                    name="typeId"
                    label={name}
                    value={id.toString()}
                    onChange={handleChange}
                    checked={values.typeId === id.toString()}
                  />
                ))}
              </S.Checkboxes>

              <S.Divisor />

              <S.Grid>
                <div>
                  <p>Preço mínimo</p>
                  <Input
                    type="number"
                    name="minPrice"
                    onChange={handleChange}
                    placeholder="R$ 0"
                    value={values.minPrice}
                  />
                </div>
                <div>
                  <p>Preço máximo</p>
                  <Input
                    type="number"
                    name="maxPrice"
                    onChange={handleChange}
                    placeholder="R$ 0"
                    value={values.maxPrice}
                  />
                </div>
              </S.Grid>

              <S.Divisor />

              <S.Grid>
                <S.ContainerTextRoundButton>
                  <p>Quartos</p>
                </S.ContainerTextRoundButton>
                <S.CountOptions>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bedrooms', '1')}
                    ativo={filters.bedrooms === '1'}
                    type="button"
                  >
                    1+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bedrooms', '2')}
                    ativo={filters.bedrooms === '2'}
                    type="button"
                  >
                    2+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bedrooms', '3')}
                    ativo={filters.bedrooms === '3'}
                    type="button"
                  >
                    3+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bedrooms', '4')}
                    ativo={filters.bedrooms === '4'}
                    type="button"
                  >
                    4+
                  </S.RoundButton>
                </S.CountOptions>
              </S.Grid>

              <S.Divisor />

              <S.Grid>
                <S.ContainerTextRoundButton>
                  <p>Banheiros</p>
                </S.ContainerTextRoundButton>
                <S.CountOptions>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bathrooms', '1')}
                    ativo={filters.bathrooms === '1'}
                    type="button"
                  >
                    1+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bathrooms', '2')}
                    ativo={filters.bathrooms === '2'}
                    type="button"
                  >
                    2+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bathrooms', '3')}
                    ativo={filters.bathrooms === '3'}
                    type="button"
                  >
                    3+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('bathrooms', '4')}
                    ativo={filters.bathrooms === '4'}
                    type="button"
                  >
                    4+
                  </S.RoundButton>
                </S.CountOptions>
              </S.Grid>

              <S.Divisor />

              <S.Grid>
                <S.ContainerTextRoundButton>
                  <p>Súites</p>
                </S.ContainerTextRoundButton>
                <S.CountOptions>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('suites', '1')}
                    ativo={filters.suites === '1'}
                    type="button"
                  >
                    1+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('suites', '2')}
                    ativo={filters.suites === '2'}
                    type="button"
                  >
                    2+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('suites', '3')}
                    ativo={filters.suites === '3'}
                    type="button"
                  >
                    3+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('suites', '4')}
                    ativo={filters.suites === '4'}
                    type="button"
                  >
                    4+
                  </S.RoundButton>
                </S.CountOptions>
              </S.Grid>

              <S.Divisor />

              <S.Grid>
                <S.ContainerTextRoundButton>
                  <p>Vagas</p>
                </S.ContainerTextRoundButton>
                <S.CountOptions>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('parkingSpaces', '1')}
                    ativo={filters.parkingSpaces === '1'}
                    type="button"
                  >
                    1+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('parkingSpaces', '2')}
                    ativo={filters.parkingSpaces === '2'}
                    type="button"
                  >
                    2+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('parkingSpaces', '3')}
                    ativo={filters.parkingSpaces === '3'}
                    type="button"
                  >
                    3+
                  </S.RoundButton>
                  <S.RoundButton
                    onClick={() => handleChangeProperty('parkingSpaces', '4')}
                    ativo={filters.parkingSpaces === '4'}
                    type="button"
                  >
                    4+
                  </S.RoundButton>
                </S.CountOptions>
              </S.Grid>

              <S.Divisor />

              {toRent && (
                <>
                  <S.ContainerMoveis>
                    <p>Imóvel mobiliado?</p>
                    <input
                      type="radio"
                      id="furnished-yes"
                      name="furnished"
                      onChange={handleChange}
                      value="true"
                      checked={values.furnished === 'true'}
                    />
                    <label htmlFor="furnished-yes">Sim</label>

                    <input
                      type="radio"
                      id="furnished-no"
                      name="furnished"
                      onChange={handleChange}
                      value="false"
                      checked={values.furnished === 'false'}
                    />
                    <label htmlFor="furnished-no">Não</label>
                  </S.ContainerMoveis>

                  <S.Divisor />
                </>
              )}

              <S.ContainerArea>
                <div>
                  <p>Área mínima (m²)</p>

                  <Input
                    type="number"
                    name="minSquareMeters"
                    onChange={handleChange}
                    value={values.minSquareMeters}
                    placeholder="m²"
                  />
                </div>

                <div>
                  <p>Área maxima (m²)</p>

                  <Input
                    type="number"
                    name="maxSquareMeters"
                    onChange={handleChange}
                    value={values.maxSquareMeters}
                    placeholder="m²"
                  />
                </div>
              </S.ContainerArea>
            </S.Conteudo>

            <S.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setFilters({});
                  resetForm({
                    values: {
                      minPrice: '',
                      maxPrice: '',
                      minSquareMeters: '',
                      maxSquareMeters: '',
                    },
                  });
                }}
                type="button"
              >
                Limpar
              </Button>
              <Button type="submit">Aplicar filtros</Button>
            </S.Footer>
          </S.Container>
        )}
      </Formik>
    </S.Overlay>
  );
};
