import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import { Casas } from '../../../pageComponents/Casas';

const CasasAdmPage: NextPage = () => {
  return <Casas admVersion={true} />;
};

CasasAdmPage.getInitialProps = async ({ req, res }) => {
  const loggedCookie = getCookie('logged', { req, res });

  if (!loggedCookie) {
    if (res) {
      res.writeHead(302, {
        Location: '/adm/login',
      });
      res.end();
    }
  }

  return {};
};

export default CasasAdmPage;
