import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
 100% { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  height: 32px;
  width: 32px;
  min-height: 32px;
  min-width: 32px;
  border-left: 2px solid #dc2a2a;
  border-radius: 50%;

  animation: ${spinAnimation} 0.8s linear infinite;
`;
