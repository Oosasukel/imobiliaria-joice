import { AppProvider } from '../hooks/useAppState';

const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};
export default App;
