import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
    import ('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap');
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



export default MyApp;