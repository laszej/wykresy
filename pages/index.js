import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Wdznav from "../components/Wdznav";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>wykresy</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Wykresy" />
      </Head>

      <div className={styles.homeMain}>
        <h1
          style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
        >
          Frekwencja w wyborach do organów samorządowych PSM &quot;Winogrady&quot; a sposób przeprowadzenia głosowania
        </h1>

        <div className={styles.gallery}></div>
      </div>
    </>
  );
}
