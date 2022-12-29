import App, { AppContext, AppProps as NextAppProps } from 'next/app';
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

CustomApp.getInitialProps = async (context: AppContext) => {
  let configs: Configurations;
  let enums: Enums;
  let cities: string[];

  const ctx = await App.getInitialProps(context);

  const { data: configsResponse } = await api.get<Configurations>(
    '/api/configurations'
  );
  const { data: enumsResponse } = await api.get<Enums>('/api/enums');
  const { data: citiesResponse } = await api.get<string[]>('/api/cities');
  configs = configsResponse;
  enums = enumsResponse;
  cities = citiesResponse;

  return { ...ctx, configs, enums, cities } as AppProps;
};

export default CustomApp;
