import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './vanilla.module.css';
import SecondGallery from '../components/SecondGallery';

const blog0 = [
  { src: '/blog1/1.jpg', alt: 'Image 1' },
  { src: '/blog1/2.jpg', alt: 'Image 2' },
  
];



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
          <div className={styles.projects} id="post1">
          <p>24.11.2022 r.</p>
            <h5 style={{textAlign: "center"}}>
              <strong>Bartłomiej Wróblewski pełnomocnikiem w Poznaniu</strong>
              <br />
              <br />
              
            <h5>Aplikacja, która pobiera obszerne dane dotyczące wiodących kryptowalut i na bieżąco je uaktualnia.</h5> 
            </h5>
          
            
           
           
            <SecondGallery images={blog0} style={{marginTop:"8rem"}}/>
          </div>
        </div>

        <div className={`${styles.projectsWrapper} ${isVisible[0] ? styles["is-visible"] : ""}`}ref={refs[1]}
        >
          <div className={styles.projects} id="post2">
            <h5 style={{textAlign: "center"}}>
              <strong>Kryptowaluty</strong>
              <br />
              <br />
             
            <h5>Aplikacja, która pobiera obszerne dane dotyczące wiodących kryptowalut i na bieżąco je uaktualnia.</h5> 
            </h5>
          
            
           
            <img src={"/projects/krypto.PNG"} className={styles.pImages} />
          </div>
        </div>


        


      
      
      </div>


      
    </>
  );
}




export default ReactNext