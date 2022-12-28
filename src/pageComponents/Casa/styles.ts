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

  .image-gallery-slides,
  .image-gallery-thumbnail {
    border-radius: 8px;
    overflow: hidden;
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
