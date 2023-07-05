import '../styles/globals.scss';
import Toast from '@components/Pages/common/Toast';
import Router from 'next/router';
import NProgress from 'nprogress';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Navbar from '@components/common/Navbar';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
const OverlayLoader = dynamic(
  () => import('@components/common/OverlayLoader'),
  {
    ssr: false,
  }
);
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Toast />
      <OverlayLoader />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
