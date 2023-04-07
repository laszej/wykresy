import { useState, useEffect } from 'react';

const SecondGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [enlargedImageStyle, setEnlargedImageStyle] = useState({});
  const [enlargedImageInnerStyle, setEnlargedImageInnerStyle] = useState({});
 
  const isWindowDefined = typeof window !== "undefined";

useEffect(() => {
  const isWindowDefined = typeof window !== "undefined";

  setEnlargedImageStyle({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:  isWindowDefined && window.innerWidth < 600? "100vmin" : '70vw',
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  setEnlargedImageInnerStyle({
    maxWidth: isWindowDefined && window.innerWidth >= 600 ? "70vw" : "100vmin",
    maxHeight: "auto",
    margin: "auto",
    position: "relative"
    
  });

  console.log("useEffect ran")
}, []);

  const handleClick = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
  };

  const handlePrevImage = () => {
    setSelectedImage(images[selectedImageIndex - 1]);
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const handleNextImage = () => {
    setSelectedImage(images[selectedImageIndex + 1]);
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const imageStyle = {
    width: '350px',
    height: 'auto',
    objectFit: 'cover',
    margin: '10px',
    cursor: 'pointer',
  };

  
  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    zIndex: '1'
  };

  const prevButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '30px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: '1'
  };

  const nextButtonStyle = {
    position: 'absolute',
    top: '50%',
    right: '30px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: '1'
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:"center" }}>
      {images.map((image, index) => (
        <div key={index} onClick={() => handleClick(image, index)}>
          <img src={image.src} alt={image.alt} style={imageStyle} />
        </div>
      ))}
      {selectedImage && (
        <div style={enlargedImageStyle}>
          <div style={enlargedImageInnerStyle}>
            <img src={selectedImage.src} alt={selectedImage.alt} 
            style={{width:  isWindowDefined && window.innerWidth< 600? "100vmin": "auto",  
            height: isWindowDefined && window.innerWidth< 600? "auto" :"100vh" }} />
            <div style={closeButtonStyle} onClick={handleClose}>
              <img src='/cancel.svg' width={20} height={20} />
            </div>
            {selectedImageIndex > 0 && (
              <div style={prevButtonStyle} onClick={handlePrevImage}>
                <img src='/arrow1.svg' width={30} height={30} /></div>)}
                {selectedImageIndex < images.length - 1 && (
                <div style={nextButtonStyle} onClick={handleNextImage}>
               <img src='/arrow2.svg' width={30} height={30} />
                </div>)}
          </div>
      </div>)}
  </div>);};

export default SecondGallery;