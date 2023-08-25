import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (min-width: 600px) {
    padding: 16px 32px;
  }

  .logo {
    cursor: pointer;
    height: 48px;
  }

  .links {
    display: none;

    @media (min-width: 600px) {
      display: flex;
      gap: 64px;
      align-items: center;

      a {
        color: #000000;
        font-weight: 700;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }

  .menu {
    width: 32px;
    height: 32px;

    @media (min-width: 600px) {
      display: none;
    }
  }
`;
