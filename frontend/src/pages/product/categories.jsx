import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [itemCount, setItemCount] = useState(18); 
  const navigate = useNavigate();

  const updateItemCount = () => {
    if (window.innerWidth >= 1536) {
      setItemCount(12); 
    } else if (window.innerWidth >= 1280) {
      setItemCount(18); 
    } else if (window.innerWidth >= 1024) {
      setItemCount(14); 
    } else if (window.innerWidth >= 768) {
      setItemCount(9); 
    } else {
      setItemCount(6); 
    }
  };

  useEffect(() => {
    updateItemCount(); 
    window.addEventListener("resize", updateItemCount); 
    return () => {
      window.removeEventListener("resize", updateItemCount);
    };
  }, []);

  useEffect(() => {
    const categoryItemCount = {
      All: itemCount,
      Groceries: 12, 
      Meat: itemCount,
      Drinks: itemCount,
      Bread: itemCount,
    };

    const filteredProducts =
      selectedCategory === "All"
        ? ProductData
        : ProductData.filter(
            (product) => product.category === selectedCategory
          );

    setDisplayedProducts(
      filteredProducts.slice(
        0,
        categoryItemCount[selectedCategory] || itemCount
      )
    );
  }, [selectedCategory, itemCount]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewAllClick = () => {
    navigate("/all-Categories");
  };

  return (
    <div className="px-5 lg:h-[100vh] md:h-[80vh] h-[60vh] ">
      <div className="font-bold text-[18px] flex justify-between pt-12">
        <p>Categories</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleViewAllClick}
        >
          <p className="text-[18px]">View All</p>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-10">
        {["All", "Meat", "Groceries", "Drinks", "Bread"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-green-400 text-white"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {window.innerWidth < 768 ? (
        <div className="flex overflow-x-auto gap-4 py-5 ">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[180px]  bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="w-full h-[150px] bg-black rounded-lg overflow-hidden">
                <img
                  src={product.image || image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-black">{product.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-7 pt-10">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-black bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              <div className="w-[180px] h-[150px] bg-black rounded-lg overflow-hidden">
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
      )}
    </div>
  );
};

export default ProductPage;
