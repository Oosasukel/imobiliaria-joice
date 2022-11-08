import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #f8f8f8;
  padding: 32px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;

  .contato {
    font-weight: 700;
    font-size: 16px;
    color: #000;
  }

  .whatsapp {
    margin-bottom: 40px;
    margin-top: 8px;
    align-items: center;
    display: flex;
    gap: 8px;

    span {
      font-weight: 400;
      font-size: 16px;
      color: #000;
    }
  }

  img {
    width: 24px;
  }

  .copyrigth {
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }
`;
