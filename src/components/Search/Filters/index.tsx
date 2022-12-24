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
  return (
    <S.Overlay onClick={onClose} ativo={ativo}>
      <S.Container onClick={(event) => event.stopPropagation()}>
        <S.Header>
          <S.DivClose>
            <S.CloseButton onClick={onClose}>X</S.CloseButton>
          </S.DivClose>

          <S.DivTabs>
            <Tab ativo>Quero alugar</Tab>
            <Tab>Quero comprar</Tab>
          </S.DivTabs>
        </S.Header>

        <S.Conteudo>
          <p> Tipo de imóvel</p>

          <S.Checkboxes>
            <Radio name="tipo" label="Apartamento" />
            <Radio name="tipo" label="Área/terreno" />
            <Radio name="tipo" label="Casa" />
            <Radio name="tipo" label="Edifício" />
            <Radio name="tipo" label="Lote" />
          </S.Checkboxes>

          <S.Divisor></S.Divisor>

          <S.Grid>
            <div>
              <p>Preço mínimo</p>
              <Input placeholder="R$ 0" />
            </div>
            <div>
              <p>Preço máximo</p>
              <Input placeholder="R$ 0" />
            </div>
          </S.Grid>
          <S.Divisor></S.Divisor>
          <S.Grid>
            <S.ContainerTextRoundButton>
              <p>Quartos</p>
            </S.ContainerTextRoundButton>
            <S.CountOptions>
              <S.RoundButton>1+</S.RoundButton>
              <S.RoundButton>2+</S.RoundButton>
              <S.RoundButton>3+</S.RoundButton>
              <S.RoundButton>4+</S.RoundButton>
            </S.CountOptions>
          </S.Grid>
          <S.Divisor></S.Divisor>
          <S.Grid>
            <S.ContainerTextRoundButton>
              <p>Banheiros</p>
            </S.ContainerTextRoundButton>
            <S.CountOptions>
              <S.RoundButton>1+</S.RoundButton>
              <S.RoundButton>2+</S.RoundButton>
              <S.RoundButton>3+</S.RoundButton>
              <S.RoundButton>4+</S.RoundButton>
            </S.CountOptions>
          </S.Grid>
          <S.Divisor></S.Divisor>
          <S.Grid>
            <S.ContainerTextRoundButton>
              <p>Súites</p>
            </S.ContainerTextRoundButton>
            <S.CountOptions>
              <S.RoundButton>1+</S.RoundButton>
              <S.RoundButton ativo>2+</S.RoundButton>
              <S.RoundButton>3+</S.RoundButton>
              <S.RoundButton>4+</S.RoundButton>
            </S.CountOptions>
          </S.Grid>
          <S.Divisor></S.Divisor>
          <S.Grid>
            <S.ContainerTextRoundButton>
              <p>Vagas</p>
            </S.ContainerTextRoundButton>
            <S.CountOptions>
              <S.RoundButton>1+</S.RoundButton>
              <S.RoundButton>2+</S.RoundButton>
              <S.RoundButton>3+</S.RoundButton>
              <S.RoundButton>4+</S.RoundButton>
            </S.CountOptions>
          </S.Grid>
          <S.Divisor></S.Divisor>
          <S.ContainerMoveis>
            <p>Imóvel mobiliado?</p>
            <input type="radio" id="sim" name="sim" />
            <label htmlFor="sim"> Sim</label>

            <input type="radio" id="nao" name="nao" />
            <label htmlFor="nao"> Não</label>
          </S.ContainerMoveis>
          <S.Divisor></S.Divisor>
          <S.ContainerArea>
            <div>
              <p>Área mínima (m²)</p>

              <Input placeholder="m²" />
            </div>

            <div>
              <p>Área maxima (m²)</p>

              <Input placeholder="m²" />
            </div>
          </S.ContainerArea>
        </S.Conteudo>

        <S.Footer>
          <Button variant="secondary">Limpar</Button>
          <Button>Aplicar filtros</Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>
  );
};
