import { GenericError } from '../pageComponents/GenericError';

const Error500Page = () => {
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

export default Error500Page;
