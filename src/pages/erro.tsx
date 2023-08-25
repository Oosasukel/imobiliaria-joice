import { GenericError } from '../pageComponents/GenericError';

const ErroPage = () => {
  return (
    <GenericError
      message={
        <>
          Algo deu errado ☹️
          <br />
          Tente novamente ou nos envie uma mensagem
        </>
      }
    />
  );
};

export default ErroPage;
