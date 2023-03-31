import React from 'react'
import SecondGallery from '../../components/SecondGallery';
import styles from './blogs.module.css'
import Comments from '../../components/Comments';
import Head from 'next/head';

const blog2 = [
  { src: '/blog2/1.jpg', alt: 'Image 1' },
  { src: '/blog2/2.jpg', alt: 'Image 2' },
  { src: '/blog2/3.jpg', alt: 'Image 3' },
];

const Second = () => {
  return (
    <>
    <Head>
      <title>Minister Czarnek w Poznaniu</title>
      <meta name="description" content="Minister Nauki i Edukacji Pan Przemysław Czarnek w Poznaniu." />
      <meta property="og:title" content="Bartłomiej Wróblewski pełnomocnikiem w Poznaniu" />
      <meta property="og:description" content="Minister Nauki i Edukacji Pan Przemysław Czarnek w Poznaniu." />
      <meta property="og:image" content="/blog1/2.jpg" />
    </Head>
     <div className={styles.projects} id="post1" style={{padding:"5%"}}>
      <p>14.03.2023 r.</p>
      <h5 style={{textAlign: "center"}}><strong>Minister Nauki i Edukacji Pan Przemysław Czarnek w Poznaniu</strong></h5>
      <br /> <br />
        
      <h5>
   
        Na zaproszenie posła Bartłomieja Wróblewskiego, przyjechał dziś do Poznania szef resortu Nauki i Edukacji, Pan Przemysław Czarnek. Bardzo duża frekwencja, ale było warto.  <br/><br/>

        Pan minister bardzo rzeczowy, błyskotliwy, kulturalny (od razu zapowiedział, że odpowie na wszystkie pytania i tak też uczynił).    <br/><br/>

        Przemysław Czarnek stanął mocno w obronie autorytetu Nauczycieli, który często bywa podważany (nie tylko przez Uczniów, ale również przez Rodziców): &quot;To nieprawda, że najważniejszy w szkole jest uczeń. Uczeń jest najważniejszy w systemie oświaty, bo dla niego jest on tworzony, ale w szkole najważniejszy jest nauczyciel i jego autorytet &quot;<br/><br/>

        Podsumowując - świetny przykład, że objeżdżanie Kraju przez polityków ma sens. Demonizowany przez TVN polityk pokazał najwyższą kulturę, klasę i szacunek do wyborcy.

      </h5> 
      <div style={{display: "flex", justifyContent:"center",marginTop:"2rem"}}>
      <SecondGallery images={blog2} />
      </div>
      <hr className="my-10" />
      <Comments collection="secondPoliticalBlog"/>
     </div>
     </>
  
  )
}

export default Second