/* eslint-disable @next/next/no-img-element */
import * as S from './styles';

export const Casa = () => {
  return (
    <S.Card>
      <a href="/casa">
        <img src="/images/casa.png" alt="foto da casa" />
      </a>
      <S.ConteudoCard>
        <S.Endereco>
          <p> Apartamento </p>
          <p className="street"> Rua Alves Guimarães </p>
          <p> Alto da Moóca, São Paulo</p>
        </S.Endereco>

        <p className="tags">36 m² &bull; 2 Quartos &bull; 1 Banheiro</p>

        <p> Condomínio R$ 475</p>
        <p className="price"> R$ 2.500 </p>
      </S.ConteudoCard>
    </S.Card>
  );
};
