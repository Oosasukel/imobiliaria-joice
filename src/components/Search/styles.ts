import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Tabs = styled.div``;

interface TabProps {
  ativo?: boolean;
}

export const Tab = styled.button<TabProps>`
  padding: 12px 32px;
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
`;

export const ContainerInputs = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 32px;
  background: #ffffff;
  border-radius: 0px 8px 8px 8px;
`;

export const ContainerInput = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  img {
    margin-right: 16px;
    width: 32px;
    height: 32px;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  outline: none;

  border: none;
  font-weight: 400;
  font-size: 16px;
`;

export const Divider = styled.div`
  width: 1px;

  background: #d0d0d0;
`;
