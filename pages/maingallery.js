import React from 'react'
import SecondGallery from '../components/SecondGallery'
import CookieBanner from '../components/CookieBanner';

export const mainGallery = () => {
    
    const images = [
        { src: '/mainGallery/1.jpg', alt: 'Image 1' },
        { src: '/mainGallery/2.jpg', alt: 'Image 2' },
        { src: '/mainGallery/3.jpg', alt: 'Image 1' },
        { src: '/mainGallery/4.jpg', alt: 'Image 2' },
        { src: '/mainGallery/5.jpg', alt: 'Image 1' },
        { src: '/mainGallery/6.jpg', alt: 'Image 2' },
        { src: '/mainGallery/7.jpg', alt: 'Image 1' },
        { src: '/mainGallery/8.jpg', alt: 'Image 2' },
        { src: '/mainGallery/9.jpg', alt: 'Image 1' },
        { src: '/mainGallery/10.jpg', alt: 'Image 2' },
        { src: '/mainGallery/11.jpg', alt: 'Image 1' },
        { src: '/mainGallery/12.jpg', alt: 'Image 2' },
        { src: '/mainGallery/13.jpg', alt: 'Image 1' },
        { src: '/mainGallery/14.jpg', alt: 'Image 2' },
        { src: '/mainGallery/15.jpg', alt: 'Image 1' },
        { src: '/mainGallery/16.jpg', alt: 'Image 2' },
        { src: '/mainGallery/17.jpg', alt: 'Image 1' },
        { src: '/mainGallery/18.jpg', alt: 'Image 2' },
        { src: '/mainGallery/19.jpg', alt: 'Image 1' },
        { src: '/mainGallery/20.jpg', alt: 'Image 2' },
        { src: '/mainGallery/21.jpg', alt: 'Image 1' },
        { src: '/mainGallery/22.jpg', alt: 'Image 2' },
        { src: '/mainGallery/23.jpg', alt: 'Image 1' },
        { src: '/mainGallery/24.jpg', alt: 'Image 2' },
        { src: '/mainGallery/25.jpg', alt: 'Image 1' },
        { src: '/mainGallery/26.jpg', alt: 'Image 2' },
        { src: '/mainGallery/27.jpg', alt: 'Image 1' },
        { src: '/mainGallery/28.jpg', alt: 'Image 2' },
        { src: '/mainGallery/29.jpg', alt: 'Image 1' },
        { src: '/mainGallery/30.jpg', alt: 'Image 2' },
        { src: '/mainGallery/31.jpg', alt: 'Image 1' },
        { src: '/mainGallery/32.jpg', alt: 'Image 2' },
        { src: '/mainGallery/33.jpg', alt: 'Image 1' },
        { src: '/mainGallery/34.jpg', alt: 'Image 2' },
        { src: '/mainGallery/35.jpg', alt: 'Image 1' },
        { src: '/mainGallery/36.jpg', alt: 'Image 2' },
        { src: '/mainGallery/37.jpg', alt: 'Image 1' },
        { src: '/mainGallery/38.jpg', alt: 'Image 2' },
        { src: '/mainGallery/39.jpg', alt: 'Image 1' },
        { src: '/mainGallery/40.jpg', alt: 'Image 2' },
        { src: '/mainGallery/41.jpg', alt: 'Image 1' },
        { src: '/mainGallery/42.jpg', alt: 'Image 2' },
        { src: '/mainGallery/43.jpg', alt: 'Image 2' },
        { src: '/mainGallery/44.jpg', alt: 'Image 1' },
        { src: '/mainGallery/45.jpg', alt: 'Image 2' },
      ];
     

  return (
    <>
    <h1 style={{textAlign:"center"}}>mainGallery</h1>
    <div style={{margin:"0 auto", display: "flex", justifyContent:"center"}}>
    
    
    <SecondGallery images={images} style={{margin: "0 auto"}}/>
    </div>


    
    </>
  )
}

export default mainGallery