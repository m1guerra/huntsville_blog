import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { pageview } from '../lib/ga';
import '../styles/globals.scss';
import { Layout } from '../components';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <title>The Huntsville Journal</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
