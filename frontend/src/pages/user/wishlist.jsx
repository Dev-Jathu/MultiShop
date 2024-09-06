import React from "react";

const Wishlist = () => {


  

  return (
    <div className="p-6 min-h-[100vh] pt-[200px] flex flex-col">
      <h2 className="text-xl font-semibold text-black mb-4 text-center">
        My Wishlist (1)
      </h2>
      <div className="flex justify-center">
        <div className="relative text-center items-center">
          <button className="absolute top-0 right-0 text-red-500 mt-2 mr-2">
            <i className="fas fa-trash"></i>
          </button>
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="lg:w-[150px] md:w-[200px] w-[100px] mb-2"
          />
          <button className="bg-primary text-white py-1 px-2 rounded mb-2">
            Add To Cart
          </button>
          <p>Chicken Leg</p>
          <p>$50</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
