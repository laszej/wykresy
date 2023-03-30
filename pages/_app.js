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
    <>
      <Head>
      <title>Stanisław Laskowski - konserwatysta w Poznaniu</title>
      <meta name="description" content="Konserwatyzm. Prawo i sprawiedliwość. Poznań." />
      <meta property="og:title" content="Stanisław Laskowski - konserwatysta w Poznaniu" />
      <meta property="og:description" content="100-lecie wybuchu Powstania Wielkopolskiego" />
      <meta property="og:image" content="/blog1/2.jpg" />
    </Head>
      
      
      <Layout>
        
        <Component {...pageProps} />
        
      </Layout>
    </>
  );
}

export default MyApp;