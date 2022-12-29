/* eslint-disable @next/next/no-img-element */
import { Card } from '../../../components/Card';
import { Input } from '../../../components/Input';
import * as S from '../Config/styles';

export const Config = () => {
  return (
    <S.Container>
      <S.ContainerCard>
        <Card>
          <S.Flex>
            <div>
              <p>Nome</p>
              <Input placeholder="Nome" />
            </div>

            <div>
              <p>Creci</p>
              <Input placeholder="Creci" />
            </div>

            <div>
              <p>Whatsapp</p>
              <Input placeholder="Whatsapp" />
            </div>

            <label>
              <img src="/icons/+.svg" alt="" />

              <Input className="img" type="file" id="" />
            </label>
          </S.Flex>
        </Card>
      </S.ContainerCard>
    </S.Container>
  );
};
