import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import Router from 'next/router';
import { SessionProvider } from "next-auth/react"

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: true,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ 
  Component, 
  pageProps, 
}) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
