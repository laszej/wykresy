import {useState}  from 'react'
import { Experiment1 } from '../components/Experiment1'
import SecondGallery from '../components/SecondGallery'

const experiment = () => {

    const [title, setTitle] = useState("tytuł")

    const blog0 = [
      { src: '/homePhotos/1.jpg', alt: 'Image 1' },
      { src: '/homePhotos/2.jpg', alt: 'Image 2' },
      { src: '/homePhotos/3.jpg', alt: 'Image 3' },
    ];

  return (
    <>
    <div style={{marginBottom: "5rem"}}>
      <h1>Parent component</h1>
      <h1>{title}</h1>
      </div>
    <Experiment1 setTitle = {setTitle} />
    <div style={{display: "flex"}}>
    <SecondGallery images={blog0} itemsPerRow={3} style={{marginTop:"8rem"}}/>
    </div>
    </>
  )
}

export default experiment