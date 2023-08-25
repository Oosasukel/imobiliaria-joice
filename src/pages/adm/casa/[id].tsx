import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import { Casa } from '../../../pageComponents/adm/Casa';

const CasaPage: NextPage = () => {
  return <Casa />;
};

CasaPage.getInitialProps = async ({ req, res }) => {
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

export default CasaPage;
