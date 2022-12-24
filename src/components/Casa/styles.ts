import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  background: #ffffff;

  img {
    object-fit: cover;
    width: 100%;
    height: 90px;
    border-radius: 8px 8px 0 0;

    @media (min-width: 600px) {
      height: 146px;
    }
  }
`;

export const ConteudoCard = styled.div`
  padding: 12px 16px;
  font-weight: 400;
  font-size: 12px;
  color: #747474;

  p {
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 2px;

    @media (min-width: 600px) {
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 4px;
    }
  }

  p:last-child {
    margin-bottom: 0;
  }

  .street {
    font-size: 12px;
    color: #000000;
    font-weight: 700;

    @media (min-width: 600px) {
      font-size: 14px;
      font-weight: 700;
      color: #000000;
    }
  }

  .tags {
    color: #000000;
    font-size: 12px;
    font-weight: 700;
    margin: 8px 0;

    @media (min-width: 600px) {
      font-weight: 700;
      color: #000000;
      margin: 16px 0;
    }
  }

  .price {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
  }
`;

export const Endereco = styled.div`
  display: flex;
  flex-direction: column;
`;
