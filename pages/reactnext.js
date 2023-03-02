import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './vanilla.module.css';
import Crypto from '../public/projects/krypto.png';


function useWindowSize() {
  const [size, setSize] = useState([undefined, undefined]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

function ReactNext() {
  const [windowWidth, windowHeight] = useWindowSize();

  const refs = [
    useRef(null),
    useRef(null)
  ];

  const [isVisible, setIsVisible] = useState(Array(refs.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const newIsVisible = Array(refs.length).fill(false);

      refs.forEach((ref, index) => {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        newIsVisible[index] = isVisible;
      });

      setIsVisible(newIsVisible);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowHeight]);
  
  
  

  return (
    <>
      <div className={styles.projectsContainer}>
    <div className={`${styles.projectsWrapper} ${isVisible[0] ? styles["is-visible"] : ""}`}ref={refs[0]}
        >
          <div className={styles.projects}>
            <p>
              <strong>Kryptowaluty</strong>
              <br />
              <br />
             Aplikacja, która pobiera obszerne dane dotyczące wiodących kryptowalut i na bieżąco je uaktualnia.
            </p>
            Przetestuj
            <Link href="https://laszej.github.io/kryptowaluty/" target="blank">
              <strong> tutaj</strong>
              <br />
              <br />
            </Link>
            <img src={"/projects/countries.png"} className={styles.pImages} />
          </div>
        </div>


        <div className={`${styles.projectsWrapper} ${isVisible[1] ? styles["is-visible"] : ""}`} ref={refs[1]}>
        <div className={styles.projects}><p><strong>Odgadnij nazwę Państwaaaa</strong><br/><br/>Znasz wszystkie? :) Zadbałem o to, by pojawiły się w grze nazwy państw, o których wielu nie słyszało, ale spokojnie - wystarczy cierpliwość w podążaniu za prawidłową nazwą!</p>Przetestuj<Link href='https://laszej.github.io/gra2/' target='blank'> <strong>tutaj</strong><br/><br/></Link><img src='/projects/krypto.png' className={styles.pImages} /></div></div>
      
      </div>


      
    </>
  );
}




export default ReactNext