import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Ubuntu } from '@next/font/google'
import 'typeface-ubuntu'




//const ubuntu = Ubuntu({ weight: "400", subsets: ['latin'] })

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
    <>
    <Head>
        

      </Head>

    
   <Layout>
      
      <Component {...pageProps} />
    </Layout>
    </>
  );
}


export default MyApp