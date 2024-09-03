import React, { useState, useEffect } from "react";
import imageData from "../../assets/data/thumbnail";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(null);
  const totalIndicators = imageData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index % imageData.length);
  };

  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX;
    if (startTouch - endTouch > 50) {
      nextSlide();
    } else if (endTouch - startTouch > 50) {
      prevSlide();
    }
  };

  return (
    <div
      className=""
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative md:w-full lg:w-full overflow-hidden pt-[7em]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageData.map((image, index) => (
            <div
              key={index}
              className="w-full h-[30vh] md:h-[40vh] lg:h-[85vh] flex-shrink-0"
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
      <div className="absolute lg:bottom-16 w-full flex justify-center space-x-2 -mb-16 md:p-2 p-2">
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
