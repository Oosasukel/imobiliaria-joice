import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr 385px;
`;

export const Perfil = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 32px;
    color: #000000;
    margin-bottom: 4px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #747474;
    margin-bottom: 16px;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`;
