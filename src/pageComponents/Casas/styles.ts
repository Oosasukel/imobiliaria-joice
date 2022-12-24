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
