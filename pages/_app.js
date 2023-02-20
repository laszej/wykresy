import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Ubuntu } from '@next/font/google'
import 'typeface-ubuntu'

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ['latin-ext', 'latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap'
});

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
    <>
    <style jsx global>{`
        html  {
          font-family: ${ubuntu.style.fontFamily};
        }
      `}</style>
      <Head>
    <link rel="stylesheet" href={ubuntu} />
     <html lang="pl" />
    </Head>

   <Layout>
     
      <Component {...pageProps} />
    </Layout>
    </>
  );
}



export default MyApp;