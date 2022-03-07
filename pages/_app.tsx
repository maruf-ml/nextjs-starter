import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

import wrapper from '@store/.';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, viewport-fit=cover' />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
};

export default wrapper.withRedux(App);
