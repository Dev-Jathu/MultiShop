
import React from "react";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const AllProductsPage = () => {
  return (
    <div className="lg:px-5 md:px-5 px-3 pt-[150px]">
      <div className="font-bold text-[20px] text-left mb-12 ">
        <p className="pt-10">New Product</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-[200px] h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.image || image}
                alt={product.name || "Product Image"}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[200px] mt-4">
              <p className="text-lg font-semibold text-gray-800">{product.price}</p>
              <p className="text-lg font-semibold text-gray-800">{product.Name}</p>
              <p className="text-sm text-gray-600 mt-1">{product.Rating}</p>
            </div>
            <div className="flex justify-between mt-3 w-[200px] text-[25px] ">
              <button className="text-gray-800 hover:text-green-500 ">
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
