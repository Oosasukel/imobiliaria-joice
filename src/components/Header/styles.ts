import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  .logo {
    cursor: pointer;
    height: 48px;
  }

  .links {
    display: flex;
    gap: 64px;

    a {
      color: #000000;
      font-weight: 700;
      font-size: 16px;
      text-decoration: none;
    }
  }

  .comprar {
    margin-left: 64px;
  }

  .fale-conosco {
    margin-left: 64px;
  }
`;
