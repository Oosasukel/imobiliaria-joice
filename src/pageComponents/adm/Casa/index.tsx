/* eslint-disable @next/next/no-img-element */
import { Button } from '../../../components/Button';
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import { Layout } from '../../../components/Layout';
import * as S from '../Casa/styles';

export const Casa = () => {
  return (
    <Layout>
      <Card>
        <S.Galery>
          <S.Flex>
            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <div className="divGalery">
              <img className="imgGalery" src="/images/casap.png" alt="" />
            </div>

            <label>
              <img className="iconFile" src="/icons/+.svg" alt="" />

              <Input className="file" type="file" id="" />
            </label>
          </S.Flex>
        </S.Galery>

        <S.Conteudo>
          <p>Cidade</p>
          <Input placeholder="Cidade" />

          <p>Bairro</p>
          <Input placeholder="Bairro" />

          <p>Rua</p>
          <Input placeholder="Rua" />

          <p>Tipo de Imóvel</p>
          <Input placeholder="Tipo de imóvel" />

          <S.Grid>
            <div>
              <p>Metros Quadrados</p>
              <Input placeholder="Metros Quadrados" />
            </div>

            <div>
              <p>Quartos</p>
              <Input placeholder="Quartos" />
            </div>

            <div>
              <p>Suites</p>
              <Input placeholder="Suites" />
            </div>

            <div>
              <p>Banheiros</p>
              <Input placeholder="Banheiros" />
            </div>

            <div className="chekbox">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Mobiliada</label>
            </div>
          </S.Grid>

          <S.Valor>
            <div className="chekbox">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Aluguel</label>
            </div>

            <div className="valor">
              <p>Valor aluguel</p>
              <Input placeholder="Valor aluguel" />
            </div>
          </S.Valor>

          <S.Valor>
            <div className="chekbox">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Venda</label>
            </div>

            <div className="valor">
              <p>Valor Venda</p>
              <Input placeholder="Valor Venda" />
            </div>
          </S.Valor>

          <p>Valor condomínio</p>
          <Input placeholder="Valor condomínio" />

          <p>Valor IPTU</p>
          <Input placeholder="Valor IPTU" />

          <p>Sobre o imóvel</p>
          <Input placeholder="Sobre o imóvel" />

          <p>Sobre o condomínio</p>
          <Input placeholder="Sobre o condomínio" />

          <p>Observações ADM</p>
          <Input placeholder="Observações ADM" />

          <S.Status>
            <div className="statusInput">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Já alugada</label>
            </div>

            <div className="statusInput">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Já vendida</label>
            </div>

            <div className="statusInput">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Disponivel</label>
            </div>

            <div className="statusInput">
              <input className="inputCheckbox" type={'checkbox'} />
              <label>Rascunho</label>
            </div>
          </S.Status>

          <S.Actions>
            <div>
              <Button variant="fourth" width="100%">
                Salvar alterações
              </Button>
            </div>

            <div>
              <Button variant="secondary" width="100%">
                Cancelar
              </Button>
            </div>
          </S.Actions>

          <S.Excluir>
            <div>
              <Button width="100%">Excluir</Button>
            </div>
          </S.Excluir>
        </S.Conteudo>
      </Card>
    </Layout>
  );
};
