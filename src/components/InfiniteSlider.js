import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function InfinitSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Number of images displayed side by side
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
    <hr/>
      <Slider {...settings}>
        <div>
          <img className="image-gallery mx-auto d-block" src="/assets/gal2.png" alt="Image 1" />
        </div>
        <div>
          <img className="image-gallery mx-auto d-block" src="/assets/gal2.png" alt="Image 2" />
        </div>
        
        <div>
          <img className="image-gallery mx-auto d-block" src="/assets/gal2.png" alt="Image 4" />
        </div>
        <div>
          <img className="image-gallery mx-auto d-block" src="assets/img3.png" alt="Image 4" />
        </div>
         <div>
          <img className="image-gallery mx-auto d-block" src="/assets/gal2.png" alt="Image 4" />
        </div>
        {/* Add more images as needed */}
      </Slider>
      <hr/>
    </div>
  );
}

export default InfinitSlider;
