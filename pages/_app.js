import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', 'G-S7R8QW66QB', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (<>
    <Head>
      <title>MBTI Тест</title>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
