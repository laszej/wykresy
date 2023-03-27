import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Gallery1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 second intervals
    fade: true,
    arrows: false
  };

  const photos = [
    { path: "/homePhotos/1.jpg" },
    { path: "/homePhotos/2.jpg" },
    { path: "/homePhotos/3.jpg" },
    { path: "/homePhotos/4.jpg" },
    { path: "/homePhotos/5.jpg" },
    { path: "/homePhotos/6.jpg" },
    { path: "/homePhotos/7.jpg" },
    { path: "/homePhotos/8.jpg" },
    { path: "/homePhotos/9.jpg" },
  ];

  return (
    <Slider {...settings} >
      {photos.map((photo) => (
        <div key={photo.path}>
          <div className="galleryPhoto">
            <Image src={photo.path} alt="image" layout="fill" objectFit="cover" {...photo} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Gallery = () => {
  return <Gallery1 />;
};

export default Gallery;