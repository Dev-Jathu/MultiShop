import React from "react";
import image from "../../assets/images/products (4).png";

const Wishlist = () => {
  return (
    <div className="p-6 min-h-[100vh] pt-[200px] flex flex-col">
      <h2 className="text-2xl font-bold mb-4">My Wishlist (3)</h2>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        <div className="group border bg-black text-white border-gray-200 rounded-lg p-4 flex flex-col items-center w-[200px] h-[220px]">
          <div className="relative w-full">
            <img
              src={image}
              alt="Product Name"
              className="w-full h-32 object-contain mb-2"
            />
            <button className="absolute top-2 right-2 text-red-600 hover:text-red-800">
              <i className="fa-solid fa-trash text-lg"></i>
            </button>
          </div>
          <h3 className="text-lg font-semibold text-center">Product Name</h3>
          <p className="text-xl font-bold mb-2 text-center">$100.00</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2 w-[150px] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <i className="fa-solid fa-cart-shopping mr-2"></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
