import { useState, useEffect } from 'react';

const SecondGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const imageStyle = {
    width: '350px',
    height: 'auto',
    objectFit: 'cover',
    margin: '10px',
    cursor: 'pointer',
  };

  const enlargedImageStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const enlargedImageInnerStyle = {
    maxWidth: '100vmin',
    maxHeight: '100vmin',
    margin: 'auto',
    position: 'relative'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    zIndex: '1'
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
        <div key={index} onClick={() => handleClick(image)}>
          <img src={image.src} alt={image.alt} style={imageStyle} />
        </div>
      ))}
      {selectedImage && (
        <div style={enlargedImageStyle} onClick={handleClose}>
          <div style={enlargedImageInnerStyle}>
            <img src={selectedImage.src} alt={selectedImage.alt} style={{ width: '100%', height: 'auto' }} />
            <div style={closeButtonStyle} onClick={handleClose}>
              <p style={{ fontSize: '2rem', color:"red" }}>X</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondGallery;