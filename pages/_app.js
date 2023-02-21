import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Ubuntu } from '@next/font/google'
//import 'typeface-ubuntu'

//const ubuntu = Ubuntu({ weight: ["400", "500", "500", "700"], subsets: ['latin-ext', "latin"] });

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
   
  },[])

  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>
      
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;