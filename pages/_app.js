import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
<Script
id='google-analytics'
strategy="afterInteractive"
dangerouslySetInnerHTML={{
__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F9MXYC0MDZ', {
page_path: window.location.pathname,
});
`,
}}
/>
      
      
      <Layout>
        
        <Component {...pageProps} />
        
      </Layout>
    </>
  );
}

export default MyApp;