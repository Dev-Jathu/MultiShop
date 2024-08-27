import React, { useState, useEffect } from "react";
import imageData from "../../assets/data/thumbnail"; 

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIndicators = imageData.length; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index % imageData.length);
  };

  return (
    <div className="">
      <div className="relative md:w-full lg:w-full overflow-hidden pt-[10em]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageData.map((image, index) => (
            <div
              key={index}
              className="w-full h-[30vh] md:h-[40vh] lg:h-[70vh] flex-shrink-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex % totalIndicators === index
                ? "bg-primary"
                : "bg-gray-400"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
