import styled, { css } from 'styled-components';

interface ContainerProps {
  showOnMobile: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: min-content;

  ${({ showOnMobile }) => {
    if (showOnMobile)
      return css`
        background: #ffffff;
        padding: 32px;
        border: 1px solid #dcdcdc;
        border-radius: 8px;
      `;
  }}

  @media (min-width: 600px) {
    background: #ffffff;
    padding: 32px;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
  }
`;
