import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 32px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 385px;
  }
`;

export const Perfil = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    align-items: initial;
  }

  h1 {
    width: 100%;
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
    width: 100%;
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
