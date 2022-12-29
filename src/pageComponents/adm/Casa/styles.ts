import styled from 'styled-components';

export const Galery = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Flex = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 8px;

  .image-container {
    position: relative;
    overflow: hidden;
    border: #dcdcdc solid 2px;
    border-radius: 8px;
    height: 90px;
  }

  .remove-image {
    right: 4px;
    top: 4px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    background: #dc2a2a;
    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    position: absolute;
  }

  .imgGalery {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  label {
    position: relative;
    display: flex;
    justify-content: center;
    border: 2px dashed #dcdcdc;
    border-radius: 8px;
    cursor: pointer;
    height: 90px;
  }

  .iconFile {
    height: 100%;
    width: 100%;
  }

  .file {
    position: absolute;
    display: none;
  }

  @media (min-width: 600px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 8px;

    .imgGalery {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .divGalery {
      overflow: hidden;
      border: #dcdcdc solid 2px;
      border-radius: 8px;
      height: 90px;
    }

    label {
      position: relative;
      display: flex;
      justify-content: center;
      border: 2px dashed #dcdcdc;
      border-radius: 8px;
      cursor: pointer;
      height: 90px;

      .iconFile {
        height: 100%;
        width: 100%;
      }

      .file {
        position: absolute;
        display: none;
      }
    }
  }
`;

export const Valor = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  width: 100%;
  align-items: center;

  .chekbox {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 16px;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Grid = styled.div`
  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 122px;
    gap: 16px;

    .chekbox {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 16px;

  .chekbox {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Status = styled.div`
  @media (min-width: 850px) {
    display: flex;
    gap: 16px;
  }

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Actions = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: end;
    gap: 16px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Excluir = styled.div`
  @media (min-width: 600px) {
    display: flex;
    justify-content: end;
  }
`;
