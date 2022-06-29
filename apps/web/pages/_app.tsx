// import App from 'next/app'
import './../styles/globals.css';
import { useEffect } from 'react';

const AOS = require('aos');
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps } : any) {
    useEffect(() => {
        AOS.init({
          offset: 0,
          duration: 300
        });
    }, []);
    return <Component {...pageProps} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp