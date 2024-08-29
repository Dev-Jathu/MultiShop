
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const LimeCard = () => {
  const navigate = useNavigate();
  const [initialItemCount, setInitialItemCount] = useState(16); // Default for desktop

  useEffect(() => {
    const updateItemCount = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet mode
        setInitialItemCount(6);
      } else if (window.innerWidth < 768) {
        // Mobile mode
        setInitialItemCount(3);
      } else {
        // Desktop mode
        setInitialItemCount(14);
      }
    };

    updateItemCount(); // Initial check
    window.addEventListener("resize", updateItemCount); // Update on resize

    return () => {
      window.removeEventListener("resize", updateItemCount); // Cleanup on unmount
    };
  }, []);

  const handleViewAll = () => {
    navigate("/all-Offers");
  };

  // Calculate the discounted price
  const calculateDiscountPrice = (price, discount) => {
    if (!discount) return price;

    const discountValue = parseFloat(discount) / 100;
    const discountedPrice = price * (1 - discountValue);
    return discountedPrice.toFixed(2); // Convert to string with 2 decimal places
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
        className={`flex ${
          initialItemCount === 6
            ? "flex-wrap md:grid md:grid-cols-3"
            : initialItemCount === 3
            ? "flex-col"
            : "flex-wrap"
        }  pt-5 gap-9`}
      >
        {displayedOffers.map((Offer) => (
          <div
            key={Offer.id}
            className="relative flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Discount Label */}
            <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-3 py-2 rounded-tr-md rounded-bl-md">
              {Offer.discount}
            </div>

            {/* Offer Image */}
            <div className="w-[200px] h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={Offer.image || image}
                alt="Lime"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Offer Details */}
            <div className="w-[200px] pt-2 text-left">
              <div className=" flex gap-5">
                <p className="text-[18px] font-bold text-gray-800 bg-primary w-24 flex items-center text-center rounded-[5px] px-1">
                  {calculateDiscountPrice(
                    parseFloat(Offer.price),
                    Offer.discount
                  )}
                  ch
                </p>
                <p className="text-lg text-gray-600 mt-1 line-through">
                  {Offer.price}
                </p>
              </div>

              <p className="text-lg text-gray-600 mt-1">{Offer.name}</p>
              <p className="text-sm text-gray-600 mt-1">{Offer.rating}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-3 w-full text-[25px] px-2">
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
