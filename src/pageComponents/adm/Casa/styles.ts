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

  .inputCheckbox {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Grid = styled.div`
  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 122px;
    gap: 16px;

    .chekbox {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
    }

    .inputChekbox {
      width: 24px;
      height: 24px;
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

  .inputChekbox {
    width: 24px;
    height: 24px;
  }
`;

export const Status = styled.div`
  @media (min-width: 850px) {
    display: flex;
    gap: 16px;

    .statusInput {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .inputCheckbox {
      height: 24px;
      width: 24px;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 16px;

  .statusInput {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .inputCheckbox {
    height: 24px;
    width: 24px;
  }
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
