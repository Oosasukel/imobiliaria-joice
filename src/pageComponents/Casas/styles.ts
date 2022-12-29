import styled from 'styled-components';

export const Titulo = styled.p`
  margin: 16px 0;
  color: #000000;
  font-weight: 700;
  font-size: 16px;

  @media (min-width: 600px) {
    margin: 32px 0 16px 0;
  }
`;

export const Lista = styled.div`
  @media (min-width: 600px) {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

export const Pagnation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  background: #ffffff;
  cursor: pointer;

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

  .container-badge {
    display: flex;
    justify-content: end;
  }
`;

interface BadgeProps {
  available?: boolean;
}

export const Badge = styled.span<BadgeProps>`
  background: ${({ available }) => (available ? '#d8f3eb' : '#eee')};
  font-size: 14px;
  border: 1px solid ${({ available }) => (available ? '#36b08b' : '#bbb')};
  font-weight: 700;
  color: ${({ available }) => (available ? '#24755d' : '#666')};
  padding: 6px;
  border-radius: 16px;
  display: block;
  width: min-content;
  white-space: nowrap;
`;

export const Endereco = styled.div`
  display: flex;
  flex-direction: column;
`;
