import Navbar from "./Navbar";
import Footer1 from "./Footer1";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
   <Head>
      <title>Stanisław Laskowski - konserwatysta w Poznaniu</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content="Konserwatyzm. Prawo i sprawiedliwość. Poznań." />
      <meta property="og:title" content="Stanisław Laskowski - konserwatysta w Poznaniu" />
      <meta property="og:description" content="100-lecie wybuchu Powstania Wielkopolskiego" />
      <meta property="og:image" content="/homePhotos/1.jpg" />
    </Head>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar/>
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer1 />
    </div>
    </>
  );
};

export default Layout;