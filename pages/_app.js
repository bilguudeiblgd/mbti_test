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
      <title>16 Personality Тест</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1431674278951978"
        crossOrigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
