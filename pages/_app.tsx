import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import wrapper from '@store/.';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
