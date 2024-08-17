import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const LimeCard = () => {
  const navigate = useNavigate();
  const [initialItemCount, setInitialItemCount] = useState(14); // Default for lg

  useEffect(() => {
    const updateItemCount = () => {
      if (window.innerWidth >= 1536) {
        setInitialItemCount(12);
      } else if (window.innerWidth >= 1280) {
        setInitialItemCount(18);
      } else if (window.innerWidth >= 1024) {
        setInitialItemCount(14);
      } else if (window.innerWidth >= 768) {
        setInitialItemCount(6);
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

  const handleProductClick = (product) => {
    const { rating, ...rest } = product;
    const serializedProduct = {
      ...rest,
      rating: rating.length, 
    };
    navigate("/ProductDetail", { state: { product: serializedProduct } });
  };

  const displayedProducts = ProductData.slice(0, initialItemCount);

  return (
    <div className="lg:px-5 md:px-5 px-3">
      <div className="font-bold text-[18px] flex justify-between pt-12">
        <p>New Product</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/all-products")}
        >
          <p className="text-[18px]">View All</p>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>

      {window.innerWidth < 768 ? (
        <div className="flex overflow-x-auto gap-4 py-5">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[200px] bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="w-full h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
                <img
                  src={product.image || image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">
                  {product.price}
                </p>
                <p className="text-lg text-gray-600 mt-1">{product.name}</p>
              </div>
              <div className="flex justify-between mt-3 text-[25px]">
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
      ) : (
        <div
          className={`flex ${
            initialItemCount === 6
              ? "flex-wrap md:grid md:grid-cols-3"
              : initialItemCount === 3
              ? "flex-col"
              : "flex-wrap"
          } pt-5 gap-9 2xl:gap-4 `}
        >
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="w-[200px] h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
                <img
                  src={product.image || image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[200px] mt-4 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {product.price}
                </p>
                <p className="text-lg text-gray-600 mt-1">{product.name}</p>
              </div>
              <div className="flex justify-between mt-3 w-[200px] text-[25px]">
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
      )}
    </div>
  );
};

export default LimeCard;
