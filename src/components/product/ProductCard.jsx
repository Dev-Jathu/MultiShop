
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
    navigate("/all-products");
  };

  const displayedProducts = ProductData.slice(0, initialItemCount);

  return (
    <div className="lg:px-5 md:px-1 px-1">
      <div className="font-bold text-[18px] flex justify-between pt-12">
        <p>New Product</p>
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleViewAll}>
          <p className="text-[18px]">View All</p>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className="flex flex-wrap  pt-5 gap-9  ">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-[200px] h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image || image}
                alt="Lime"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[200px] mt-4">
              <p className="text-lg font-semibold text-gray-800">{product.price}</p>
              <p className="text-lg text-gray-600 mt-1">{product.name}</p>
              <p className="text-sm text-gray-600 mt-1">{product.rating}</p>
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
    </div>
  );
};

export default LimeCard;
