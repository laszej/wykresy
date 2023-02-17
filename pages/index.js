import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  return (
    <>
    <Head>
        <title> cryptocurrencies</title>
        
      </Head>

    
      

   
    <div className={styles.container} >
      
      <h1 className={styles.homePageTitle}> Cryptocurrencies online</h1>
      <button className={styles.button} onClick={()=>router.push("/coins")}>take a look at our coins!</button>
    </div>
    </>
  );
}
