import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  background: url(/images/background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff, #ffffff00);
  z-index: 1;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 64px 32px;
`;
