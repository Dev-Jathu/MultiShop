import React from "react";
import Carousal from "./product/ProductCarousal.jsx";
import Products from "./product/Products";
import OfferCard from "./product/OfferCard.jsx";
import Categories from "./product/categories.jsx";

function home() {
  return (
    <div>
      <Carousal />
      <OfferCard />
      <Products />
      <Categories />
    </div>
  );
}

export default home;
