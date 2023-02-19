import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";




function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])

 

  return (
   
  
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      
    </Layout>
    
  );
}

export default MyApp;





