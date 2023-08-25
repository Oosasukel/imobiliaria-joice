import { getCookie } from 'cookies-next';
import { NextPage } from 'next';
import { Configs } from '../../../pageComponents/adm/Configs';

const ConfigsAdmPage: NextPage = () => {
  return <Configs />;
};

ConfigsAdmPage.getInitialProps = async ({ req, res }) => {
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

export default ConfigsAdmPage;
