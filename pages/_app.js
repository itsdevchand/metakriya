import { Layout } from '../components/common';
import { useEffect } from 'react';

// global sass
import '../styles/globals.scss';
import '../styles/bootstrap-variables.scss';
// import '../styles/boo.scss';
// custom sass
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Run code on client-side only : ensure document is here
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
