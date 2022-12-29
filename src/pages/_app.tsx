import App, { AppContext, AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { Configurations, Enums } from '../hooks/useApi/types';
import { AppProvider } from '../hooks/useAppState';
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
  let configs = { phoneNumber: '' } as Configurations;
  let enums: Enums = { status: [], types: [] };
  let cities: string[] = [];

  const ctx = await App.getInitialProps(context);

  return { ...ctx, configs, enums, cities } as AppProps;
};

export default CustomApp;
