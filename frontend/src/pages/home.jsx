import React from "react";
import Carousal from "./product/ProductCarousal.jsx";
import ProductCard from "./product/ProductCard.jsx";
import OfferCard from "./product/OfferCard.jsx";
import Categories from "./product/categories.jsx";

function home() {
  return (
    <div>
      <Carousal />
      <ProductCard />
      <OfferCard />
      <Categories />
    </div>
  );
}

export default home;
