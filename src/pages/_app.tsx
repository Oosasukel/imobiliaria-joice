import { getCookie, setCookie } from 'cookies-next';
import { NextPageContext } from 'next';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { Configurations, Enums } from '../hooks/useApi/types';
import { AppProvider } from '../hooks/useAppState';
import { api } from '../services/api';
import { GlobalCSS } from '../styles/global';

interface AppProps extends NextAppProps {
  configs: Configurations;
  enums: Enums;
  cities: string[];
}

const CustomApp = ({
  Component,
  pageProps,
  configs,
  enums,
  cities,
}: AppProps) => {
  return (
    <AppProvider configs={configs} enums={enums} cities={cities}>
      <Head>
        <title>Imobiliária Joice</title>
      </Head>

      <GlobalCSS />
      <Component {...pageProps} />
    </AppProvider>
  );
};

CustomApp.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: any;
  ctx: NextPageContext;
}) => {
  let pageProps = {};
  let configs: Configurations;
  let enums: Enums;
  let cities: string[];
  const { req, res } = ctx;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookieConfigs = getCookie('configs', { req, res });
  const cookieEnums = getCookie('enums', { req, res });
  const cookieCities = getCookie('cities', { req, res });

  if (cookieConfigs && cookieEnums && cookieCities) {
    configs = JSON.parse(cookieConfigs as string);
    enums = JSON.parse(cookieEnums as string);
    cities = JSON.parse(cookieCities as string);
  } else {
    const { data: configsResponse } = await api.get<Configurations>(
      '/api/configurations'
    );
    const { data: enumsResponse } = await api.get<Enums>('/api/enums');
    const { data: citiesResponse } = await api.get<string[]>('/api/cities');
    configs = configsResponse;
    enums = enumsResponse;
    cities = citiesResponse;

    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 30);

    setCookie('configs', JSON.stringify(configsResponse), {
      req,
      res,
      expires,
    });
    setCookie('enums', JSON.stringify(enumsResponse), { req, res, expires });
    setCookie('cities', JSON.stringify(citiesResponse), { req, res, expires });
  }

  return { ...pageProps, configs, enums, cities } as AppProps;
};

export default CustomApp;
