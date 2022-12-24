import styled from 'styled-components';

interface OverlayProps {
  ativo?: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: ${({ ativo }) => (ativo ? 'initial' : 'none')};

  @media (min-width: 600px) {
    display: none;
  }
`;

export const MenuCard = styled.div`
  padding: 16px;
  position: absolute;
  top: 0;
  right: 0;
  gap: 16px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  a {
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    font-weight: 700;
  }
`;
