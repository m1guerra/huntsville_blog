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

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Head>
        <title>The Huntsville Unit</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
