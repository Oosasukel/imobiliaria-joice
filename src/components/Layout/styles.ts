import styled, { css } from 'styled-components';

interface ContainerProps {
  withMobileBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 100%;

  ${({ withMobileBackground }) => {
    if (withMobileBackground)
      return css`
        background: url(/images/background.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `;
  }}

  @media (min-width: 600px) {
    background: url(/images/background.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Gradient = styled.div`
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
  overflow: auto;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;

  @media (min-width: 600px) {
    padding: 64px 32px;
  }
`;
