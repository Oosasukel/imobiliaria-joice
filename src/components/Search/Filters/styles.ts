import styled from 'styled-components';

export const Overlay = styled.div`
  justify-content: center;
  padding: 16px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
`;

export const Container = styled.form`
  width: 590px;
  height: 100%;
  display: flex;
  flex-direction: column;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: min-content;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media (min-width: 600px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const DivTabs = styled.div`
  display: flex;
  width: 100%;
`;

export const CloseButton = styled.button`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const DivClose = styled.div`
  display: flex;
  justify-content: end;
`;

export const Conteudo = styled.div`
  background: #ffffff;
  padding: 30px;
  color: #d0d0d0;
  width: 100%;
  height: 100%;
  overflow: auto;

  @media (min-width: 600px) {
    border-radius: 0 8px 0 0;
  }

  p {
    margin-bottom: 20px;
    color: #000000;
  }
`;

export const Divisor = styled.div`
  background: #d0d0d0;
  height: 1px;
  margin: 16px 0;
`;

export const Checkboxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Grid = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  p {
    display: flex;
  }
`;

export const InputPreco = styled.input``;

export const CountOptions = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }

  display: flex;
  gap: 12px;
`;

export const ContainerTextRoundButton = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  p {
    @media (min-width: 600px) {
      margin-bottom: 0;
    }
  }
`;

export interface RoundButtonProps {
  ativo?: boolean;
}

export const RoundButton = styled.button<RoundButtonProps>`
  font-weight: 400;
  font-size: 12px;
  background: ${({ ativo }) => (ativo ? '#dc2a2a' : '#ffffff')};
  color: ${({ ativo }) => (ativo ? '#ffffff' : '#000000')};
  border: 1px solid #d0d0d0;
  border-radius: 50%;
  padding: 14px;
  cursor: pointer;
`;

export const ContainerMoveis = styled.div`
  label {
    color: #000000;
    margin-right: 16px;
    padding-left: 4px;
  }

  & * {
    cursor: pointer;
  }
`;

export const ContainerArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const Footer = styled.div`
  background: #ffffff;
  padding: 16px;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #d0d0d0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  width: 100%;
  height: min-content;
`;
