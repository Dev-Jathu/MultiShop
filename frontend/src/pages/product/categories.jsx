import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { data } = FetchData(`${BASE_URL}/products`);
  const products = data;

  if (!products) {
    return null;
  }

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const initialDisplayProducts = categories
    .filter((category) => category !== "All")
    .map((category) => groupedProducts[category][0]);

  let productsToDisplay =
    selectedCategory === "All"
      ? initialDisplayProducts
      : products.filter((product) => product.category === selectedCategory);

  const discountedProducts = productsToDisplay.filter(
    (product) => product.discount || product.discountPrice
  );

  const otherProducts = productsToDisplay.filter(
    (product) => !product.discount && !product.discountPrice
  );

  productsToDisplay = [...discountedProducts, ...otherProducts];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (productId) => {
    navigate(`/related/${productId}`);
  };

  return (
    <div
      className="pt-[50px] min-h-screen h-[100vh] overflow-y-scroll lg:p-12 md:p-4 p-4"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <div className="font-bold lg:text-[24px] flex justify-between pt-12">
        <p>Categories</p>
      </div>

      <div
        className="flex w-full gap-2 md:gap-3 pt-10 overflow-x-auto"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 text-sm rounded-md md:px-4 md:py-2 md:text-base font-semibold w-full h-[40px] ${
              selectedCategory === category
                ? "bg-hover text-white"
                : "bg-primary text-white"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flex-wrap md:grid md:grid-cols-3 lg:gap-8 lg:justify-start gap-8 py-5 pt-10">
        {selectedCategory === "All"
          ? initialDisplayProducts.map((product) => (
              <div
                key={product._id}
                className="cursor-pointer"
                onClick={() => handleProductClick(product._id)}
              >
                <div className="p-4 rounded-lg shadow-lg text-center w-full h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  <h2 className="pt-4 font-semibold">{product.category}</h2>
                </div>
              </div>
            ))
          : productsToDisplay.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                displayMode="detailed"
              />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
