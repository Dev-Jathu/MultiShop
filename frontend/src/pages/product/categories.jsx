import React, { useState } from "react";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

 

  const filteredProducts =
    selectedCategory === "All"
      ? ProductData
      : ProductData.filter((product) => product.category === selectedCategory);

  return (
    <div className="px-5 h-full">
      <div className="font-bold text-[18px] flex justify-between pt-12">
        <p>Categories</p>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-3 pt-10">
        {["All", "Beer", "Beverages", "Spirits", "SoftDrinks","Wines"].map(
          (category) => (
            <button
              key={category}
              className={`px-3 py-1 text-sm rounded-md md:px-4 md:py-2 md:text-base font-semibold ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-green-400 text-white"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 py-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="w-full h-[100px] md:h-[150px] bg-black rounded-lg overflow-hidden">
              <img
                src={product.image || image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-2 text-center text-black text-sm md:text-base">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
