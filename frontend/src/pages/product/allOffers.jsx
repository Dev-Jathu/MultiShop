import React from "react";
import { ProductData } from "../../assets/data/product";
import image from "../../assets/images/lime.png";

const AllOffers = () => {
  const calculateDiscountPrice = (price, discount) => {
    if (!discount) return price;
    const discountValue = parseFloat(discount) / 100;
    const discountedPrice = price * (1 - discountValue);
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="px-3 lg:px-5 md:px-5 pt-[150px]">
      <div className="font-bold text-[18px] flex justify-between pt-12">
        <p>All Deals</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 pt-5">
        {ProductData.map((Offer) => (
          <div
            key={Offer.id}
            className="relative flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="absolute top-1 left-1 bg-green-600 text-white text-xs px-3 py-2 rounded-tr-md rounded-bl-md">
              {Offer.discount}
            </div>

            <div className="w-full h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={Offer.image || image}
                alt="Lime"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-2 text-left w-full">
              <div className="flex justify-between">
                <p className="text-[18px] font-bold text-gray-800 flex items-center rounded-[5px] px-1">
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

export default AllOffers;
