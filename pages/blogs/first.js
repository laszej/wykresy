import React from 'react'
import SecondGallery from '../../components/SecondGallery';
import styles from './blogs.module.css'
import Comments from '../../components/Comments';
import Head from 'next/head';

const blog1 = [
  { src: '/blog1/1.jpg', alt: 'Image 1' },
  { src: '/blog1/2.jpg', alt: 'Image 2' },
  
];

const first = () => {
  return (
    <>
    <Head>
      <title>Bartłomiej Wróblewski pełnomocnikiem w Poznaniu</title>
      <meta name="description" content="Spotkanie inaugurujące przejęcie pełnomocnictwa w okręgu poznańskim przez Pana posła Bartłomieja Wróblewskiego." />
      <meta property="og:title" content="Bartłomiej Wróblewski pełnomocnikiem w Poznaniu" />
      <meta property="og:description" content="Spotkanie inaugurujące przejęcie pełnomocnictwa w okręgu poznańskim przez Pana posła Bartłomieja Wróblewskiego." />
      <meta property="og:image" content="/blog1/2.jpg" />
    </Head>
     <div className={styles.projects} id="post1" style={{padding:"5%"}}>
      <p>24.11.2022 r.</p>
      <h5 style={{textAlign: "center"}}><strong>Bartłomiej Wróblewski pełnomocnikiem w Poznaniu</strong></h5>
        
        <br />
        <br />
        
      <h5>Spotkanie inaugurujące przejęcie pełnomocnictwa w okręgu poznańskim przez Pana posła Bartłomieja Wróblewskiego. <br/><br/>
      Poznański parlamentarzysta jest bodaj jedyną osobą w Polsce, która będzie zarządzała dwoma okręgami (już wcześniej okręgiem - powiat poznański)
      <br/><br/>
      Nowy pełnomocnik jest od dawna znany ze swej energii, pracowitości i doskonałej organizacji. Bardzo dużo wymaga, przede wszystkim od siebie, ale energię zagrzewania do walki i mobilizowania czuł każdy na sali. W trakcie spotkania kilkoro sympatyków złożyło deklaracje członkowskie i niebawem staną się częścią naszych struktur, które Bartłomiej Wróblewski z pewnością szybko wzmocni i zreorganizuje. 
      <br/><br/>
      Osobiście jestem bardzo zadowolony z tej energii, którą Bartek wnosi, choć dokładnie tego się spodziewałem!


      </h5> 
      <div style={{display: "flex", justifyContent:"center",marginTop:"2rem"}}>
      <SecondGallery images={blog1} />
     
      </div>
      <hr className="my-10" />
      <Comments collection="firstPoliticalBlog"/>
     </div>
     </>
  
  )
}

export default first