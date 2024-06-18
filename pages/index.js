import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Wdznav from "../components/Wdznav";



export default function Home() {
  const router = useRouter()
  return (
    <>
    <Head>
      <title>Stanisław Laskowski - konserwatysta w Poznaniu</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content="Konserwatyzm. Prawo i sprawiedliwość. Poznań." />
      <meta property="og:title" content="Stanisław Laskowski - konserwatysta w Poznaniu" />
      <meta property="og:description" content="Konserwatyzm. Prawo i sprawiedliwość. Poznań." />
      <meta property="og:image" content="/homePhotos/1.jpg" />
    </Head>

    
    <div className={styles.homeMain}>
    <div className={styles.gallery}>
    
    </div>
    
    
    </div>
    </>
  );
}
