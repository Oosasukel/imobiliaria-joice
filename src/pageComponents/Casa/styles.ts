import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 385px;
  gap: 32px;
  width: 100%;
`;

export const Galery = styled.div`
  display: grid;
  grid-template-columns: 122px 1fr;
  gap: 8px;
  width: 100%;
  height: 352px;

  div {
    position: relative;

    .frame {
      top: 0;
      position: absolute;
      width: 123px;
      height: 82px;
      background: rgba(255, 255, 255, 0.8);
    }

    p {
      position: absolute;
      top: 35%;
      right: 45%;
      font-weight: 700;
      font-size: 16px;
      color: #000000;
    }
  }
`;

export const Others = styled.div`
  img {
    width: 100%;
    height: 82px;
    margin-bottom: 4px;
  }
`;

export const Main = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 352px;
  }

  div {
    position: absolute;
    left: calc(50% - 58px / 2 + 0.03px);
    bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #747474;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    padding: 4px 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0;

  p {
    color: #747474;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 48px;

  p {
    font-weight: 700;
    display: flex;
    justify-content: center;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 12px;
    width: 48px;
    height: 48px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  color: #747474;
  font-size: 16px;
  font-weight: 400;

  .apartamento {
    margin-bottom: 16px;
  }

  .aluguel {
    font-size: 32px;
    font-weight: 700;
    color: #000000;
  }

  .iptu {
    margin-bottom: 16px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
