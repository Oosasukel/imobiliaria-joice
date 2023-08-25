import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const ContainerCard = styled.div`
  width: 600px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .input-container {
    width: 100%;
  }

  .preview-image-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      width: 100%;
      margin-bottom: 8px;
    }

    .image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      border: 2px solid #dcdcdc;
      border-radius: 50%;
      cursor: pointer;
      width: 150px;
      height: 150px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        img {
          filter: brightness(1.2);
        }
      }
    }
  }

  label {
  }

  .img {
    position: absolute;
    display: none;
  }

  @media (min-width: 600px) {
    .preview-image-container {
      .image-wrapper {
        width: 250px;
        height: 250px;
      }
    }
  }
`;
