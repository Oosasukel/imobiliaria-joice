import { getCookie, setCookie } from 'cookies-next';
import { NextPageContext } from 'next';
import { AppProps as NextAppProps } from 'next/app';
import { Configurations } from '../hooks/useApi/types';
import { AppProvider } from '../hooks/useAppState';
import { api } from '../services/api';
import { GlobalCSS } from '../styles/global';

interface AppProps extends NextAppProps {
  configs: Configurations;
}

const CustomApp = ({ Component, pageProps, configs }: AppProps) => {
  return (
    <AppProvider configs={configs}>
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
  const { req, res } = ctx;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const cookie = getCookie('configs', { req, res });

  if (cookie) {
    configs = JSON.parse(cookie as string);
  } else {
    const { data } = await api.get<Configurations>('/api/configurations');
    configs = data;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setCookie('configs', JSON.stringify(data), { req, res, expires: tomorrow });
  }

  return { ...pageProps, configs } as AppProps;
};

export default CustomApp;
