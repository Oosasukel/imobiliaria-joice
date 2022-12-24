import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
`;

export const Tabs = styled.div`
  display: flex;
`;

interface TabProps {
  ativo?: boolean;
}

export const Tab = styled.button<TabProps>`
  padding: 12px 32px;
  flex-grow: 1;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  color: ${({ ativo }) => (ativo ? '#dc2a2a' : '#ffffff')};
  background: ${({ ativo }) => (ativo ? '#ffffff' : '#b4b4b4')};

  &:first-child {
    border-radius: 8px 0 0 0;
  }

  &:last-child {
    border-radius: 0 8px 0 0;
  }

  @media (min-width: 600px) {
    flex-grow: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: #ffffff;
  border-radius: 0px 8px 8px 8px;

  .react-select-container {
    width: 100%;
  }

  .react-select__control {
    border: none;
    box-shadow: none;
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__single-value {
    margin: 0;
  }

  .react-select__indicators {
    display: none;
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr min-content 1fr;
    flex-grow: 1;
  }
`;

export const ContainerInput = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-gap: 16px;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
`;

export const Divider = styled.div`
  background: #d0d0d0;
  width: 100%;
  height: 1px;

  @media (min-width: 600px) {
    width: 1px;
    height: auto;
  }
`;
