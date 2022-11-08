import styled from 'styled-components';

export const Card = styled.div`
  width: 280.5px;
  height: 305px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dcdcdc;
  display: flex;
  flex-direction: column;
  background: white;
  position: relative;

  img {
    width: 100%;
    height: 46%;
  }

  .titulo-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 248.5px;
    height: 52px;
  }

  .conteudo-card {
    padding: 12px 16px;
    font-size: 9px;
    font-family: sans-serif;
    color: #6f6f6f;
  }
  .medida {
    font-weight: 700;
    font-size: 12px;
    align-items: center;
    line-height: 14.06px;
    color: #000000;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .condominio {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 12x;
    margin-top: 0;
    margin-bottom: 4px;
  }

  .valor {
    margin-top: 0;
    margin-bottom: 0px;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }

  .endereço {
    font-weight: 700;
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 0;
    color: #000000;
  }

  .endereço2 {
    width: 137px;
    height: 14px;
    font-weight: 400;
    font-size: 12px;
    margin-top: 4px;
  }

  .preços {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 248.5px;
    height: 37px;
    margin-bottom: 12px;
  }
`;

export const Tipo = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
`;
