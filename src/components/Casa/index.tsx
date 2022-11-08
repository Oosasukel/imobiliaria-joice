/* eslint-disable @next/next/no-img-element */
import { Card, Tipo } from './styles';

export const Casa = ({ tipo, valor, linkImagem }) => {
  return (
    <body>
      <Card>
        <img src={linkImagem} alt="foto da casa" />
        <div className="conteudo-card">
          <div className="titulo-card">
            <Tipo>{tipo}</Tipo>

            <h1 className="endereço">Rua Alves Guimarães </h1>
            <p className="endereço2">Alto da Moóca,São Paulo</p>
          </div>
          <p className="medida">36 m² &bull; 2 Quartos &bull; 1 Banheiro</p>
          <div className="preços">
            <p className="condominio"> Condomínio R$ 475</p>
            <p className="valor">R$ {valor}</p>
          </div>
        </div>
      </Card>
    </body>
  );
};
