import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  a {
    color: #ffffff;
  }

  h1 {
    font-size: 24px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .flex {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 32px;
    }
  }
`;
