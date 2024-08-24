import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const LimeCard = () => {
  const navigate = useNavigate();
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const numberOfProducts = 14; // Total products to display
    setDisplayedProducts(ProductData.slice(0, numberOfProducts));
  }, []);

  const handleProductClick = (product) => {
    const { rating, ...rest } = product;
    const serializedProduct = {
      ...rest,
      rating: rating.length,
    };
    navigate("/ProductDetail", { state: { product: serializedProduct } });
  };

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

      <div className="flex overflow-x-auto gap-4 py-5 sm:gap-4 lg:grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 lg:flex-none">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 lg:flex-shrink flex flex-col items-center cursor-pointer sm:w-auto w-[150px]"
            onClick={() => handleProductClick(product)}
          >
            <div className="w-full h-[120px] lg:w-full lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image || image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center lg:text-lg text-[14px] md:text-lg">
              <p className=" font-semibold text-gray-800">{product.price}</p>
              <p className=" text-gray-600 mt-1">{product.name}</p>
            </div>
            <div className="flex justify-between mt-3 w-full text-[20px]">
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
