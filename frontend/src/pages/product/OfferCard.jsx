import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const LimeCard = () => {
  const navigate = useNavigate();
  const [initialItemCount, setInitialItemCount] = useState(16);

  useEffect(() => {
    const updateItemCount = () => {
      if (window.innerWidth >= 1536) {
        setInitialItemCount(14);
      } else if (window.innerWidth >= 1280) {
        setInitialItemCount(16);
      } else if (window.innerWidth >= 1024) {
        setInitialItemCount(16);
      } else if (window.innerWidth >= 768) {
        setInitialItemCount(16);
      } else {
        setInitialItemCount(15);
      }
    };

    updateItemCount();
    window.addEventListener("resize", updateItemCount);

    return () => {
      window.removeEventListener("resize", updateItemCount);
    };
  }, []);

  const handleViewAll = () => {
    navigate("/all-Offers");
  };

  const calculateDiscountPrice = (price, discount) => {
    if (!discount) return price;

    const discountValue = parseFloat(discount) / 100;
    const discountedPrice = price * (1 - discountValue);
    return discountedPrice.toFixed(2);
  };

  const displayedOffers = ProductData.slice(0, initialItemCount);

  return (
    <div className="lg:px-5 md:px-5 px-3">
      <div className="font-bold text-[18px] flex justify-between pt-12">
        <p>Deals</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleViewAll}
        >
          <p className="text-[18px]">View All</p>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>

      <div
        className={`${
          window.innerWidth < 768
            ? "flex overflow-x-auto gap-4 py-5"
            : "grid gap-4 pt-5"
        } grid-cols-1 sm:grid-cols-3 lg:grid-cols-7`}
      >
        {displayedOffers.map((Offer) => (
          <div
            key={Offer.id}
            className={`${
              window.innerWidth < 768
                ? "flex-shrink-0 w-[150px] sm:w-[200px] bg-gray-100 p-3 sm:p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                : "relative flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            }`}
          >
            <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md">
              {Offer.discount}
            </div>

            <div className="w-full h-[120px] sm:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={Offer.image || image}
                alt="Lime"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full pt-2 text-left">
              <div className="flex gap-2 sm:gap-5">
                <p className="text-sm sm:text-[18px] font-bold text-gray-800 bg-primary w-20 sm:w-24 flex items-center text-center rounded-[5px] px-1">
                  {calculateDiscountPrice(
                    parseFloat(Offer.price),
                    Offer.discount
                  )}
                  ch
                </p>
                <p className="text-xs sm:text-lg text-gray-600 mt-1 line-through">
                  {Offer.price}
                </p>
              </div>

              <p className="text-xs sm:text-lg text-gray-600 mt-1">
                {Offer.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {Offer.rating}
              </p>
            </div>

            <div className="flex justify-between mt-2 sm:mt-3 w-full text-[20px] sm:text-[25px] px-2">
              <button className="text-gray-800 hover:text-green-500">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button className="text-gray-800 hover:text-green-500">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimeCard;
