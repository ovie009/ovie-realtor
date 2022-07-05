import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import NProgress from 'nprogress';
import { Router } from 'next/dist/client/router';
import Layout from '../components/Layout';
import "../styles/globals.css";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  const [searchFilters, setSearchFilters] = useState(false);

  const handleSearchFilters = () => {
    setSearchFilters(!searchFilters)
  }

  const closeSearchFilters = () => {
    setSearchFilters(false);
  }



  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
        <Layout closeSearchFilters={closeSearchFilters} >
          <Component searchFilters={searchFilters} handleSearchFilters={handleSearchFilters} {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
