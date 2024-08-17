import React from "react";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";
import { useNavigate } from "react-router-dom";

const AllProductsPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    const { rating, ...rest } = product;
    const serializedProduct = {
      ...rest,
      rating: rating.length,
    };
    navigate("/ProductDetail", { state: { product: serializedProduct } });
  };

  return (
    <div className="lg:px-5 md:px-5 px-3 pt-[150px]">
      <div className="font-bold text-[20px] text-left mb-12">
        <p className="pt-10">All Products</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {ProductData.map((product) => (
          <div
            onClick={() => handleProductClick(product)}
            key={product.id}
            className="cursor-pointer flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="lg:w-full md:w-[150px] w-full md:h-[120px] h-[120px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image || image}
                alt={product.name || "Product Image"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full mt-4">
              <p className="text-sm font-semibold text-gray-800 text-left">
                {product.price}
              </p>
              <p className="text-sm font-semibold text-gray-800 text-left">
                {product.name}
              </p>
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

export default AllProductsPage;
