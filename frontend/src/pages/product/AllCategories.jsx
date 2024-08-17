import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? ProductData
      : ProductData.filter((product) => product.category === selectedCategory);

  return (
    <div className="px-5">
      <div className="font-bold text-[18px] flex justify-between pt-[200px]">
        <p>Categories</p>
      </div>
      <div className="flex flex-wrap gap-3 pt-10">
        {["All", "Meat", "Groceries", "Drinks", "Bread"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white font-semibold ${
              selectedCategory === category ? "bg-green-600" : "bg-green-400"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 px-1 pt-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-black"
          >
            <div className="w-full h-[150px] bg-black rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={product.image || image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
