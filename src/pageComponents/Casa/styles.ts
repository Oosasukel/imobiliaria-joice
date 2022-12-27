import styled from 'styled-components';

export const Container = styled.div`
  .price-external {
    display: none;
  }

  .price-internal {
    display: initial;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 385px;
    gap: 32px;
    width: 100%;

    .price-external {
      display: initial;
    }

    .price-internal {
      display: none;
    }
  }
`;

export const Galery = styled.div`
  width: 100%;
  height: 172px;

  @media (min-width: 600px) {
    display: grid;
    height: 352px;
    grid-template-columns: 122px 1fr;
    gap: 8px;
  }
`;

export const Others = styled.div`
  display: none;

  @media (min-width: 600px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 8px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-container {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .last-image-container {
    position: relative;

    .frame {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      background: rgba(255, 255, 255, 0.8);
    }

    p {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-weight: 700;
      font-size: 16px;
      color: #000000;
    }
  }
`;

export const Main = styled.div`
  height: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .counter {
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
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
  gap: 16px;
  margin: 32px 0;

  p {
    color: #747474;
    font-size: 16px;
    font-weight: 400;
  }

  @media (min-width: 600px) {
    gap: 32px;
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
  gap: 16px 48px;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 12px;
    width: 48px;
    height: 48px;
  }

  span {
    font-weight: 700;
    white-space: nowrap;
    text-align: center;
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
