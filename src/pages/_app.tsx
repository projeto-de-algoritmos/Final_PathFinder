import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';

import BaseTemplate from '@templates/Base';

import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import '@components/Node/styles.css';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Mychine</title>
      </Head>
      <NextNprogress
        color="linear-gradient(
            to right,
                #fdd017,
                #FF8520,
                #EB6A00,
                #e84049
                )"
        startPosition={0.35}
        stopDelayMs={150}
        height={3}
        options={{ showSpinner: false }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseTemplate>
          <Component {...pageProps} key={router.route} />
        </BaseTemplate>
      </ThemeProvider>
    </>
  );
}
export default App;
