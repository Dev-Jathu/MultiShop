import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/17628999_Scene-20.jpg';
import image2 from '../../assets/images/lohri-celebration-india.jpg';
import image3 from '../../assets/images/street-market-night.jpg';
import image4 from '../../assets/images/delicious-burgers-us-labor-day.jpg';

const ImageSlider = () => {
  const images = [image1, image2, image3, image4,image1, image2, image3, image4,];
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIndicators = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index % images.length);
  };

  return (
    <div div className=''>
      <div className="relative md:w-full lg:w-full overflow-hidden pt-[10em]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[30vh] md:h-[40vh] lg:h-[70vh] flex-shrink-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute lg:bottom-16 w-full flex justify-center space-x-2 p-2">
        {Array.from({ length: totalIndicators }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex % totalIndicators === index ? 'bg-primary' : 'bg-gray-400'}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>

      
    </div>
  );
};

export default ImageSlider;
