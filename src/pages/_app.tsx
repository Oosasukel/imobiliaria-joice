import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { Configurations, Enums } from '../hooks/useApi/types';
import { AppProvider } from '../hooks/useAppState';
import { GlobalCSS } from '../styles/global';

interface AppProps extends NextAppProps {
  configs: Configurations;
  enums: Enums;
  cities: string[];
}

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider
      configs={{ phoneNumber: '' } as Configurations}
      enums={{ status: [], types: [] }}
      cities={[]}
    >
      <Head>
        <title>Imobiliária Joice</title>
      </Head>

      <GlobalCSS />
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default CustomApp;
