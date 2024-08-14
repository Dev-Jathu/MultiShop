import React from "react";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const AllProductsPage = () => {
  return (
    <div className="px-5 min-h-screen">
      <h1 className="text-2xl font-bold text-center pt-10">All Products</h1>
      <div className="flex flex-wrap justify-center gap-7 px-1 pt-10">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-black"
          >
            <div className="w-[180px] h-[150px] bg-black rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={product.image || image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center">{product.name}</p>
            <p className="text-center text-gray-600">{product.price}</p>
            <p className="text-center text-gray-600">{product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
