import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerCard = styled.div`
  width: 600px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    position: relative;
    display: flex;
    justify-content: center;
    border: 2px solid #dcdcdc;
    border-radius: 50%;
    cursor: pointer;
    width: 250px;
    height: 250px;
  }

  .img {
    position: absolute;
    display: none;
  }
`;
