import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({ weight: "400", subsets: ['latin-ext', 'latin'], display: 'swap' });

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap" rel="stylesheet" />
      </Head>
      
      <style jsx global>{`
        html {
          font-family: ${ubuntu};
        }
      `}</style>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;