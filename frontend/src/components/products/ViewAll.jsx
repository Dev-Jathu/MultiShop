import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

const AllOffers = () => {
  const location = useLocation();
    const { data } = FetchData(`${BASE_URL}/products`);

    const products = data;

    if (!products) {
      return null;
    }
  const dealType = location.state?.dealType || "yes"; 



  const filteredProducts = products.filter(
    (product) => product.deals === dealType
  );

  const headingText = dealType === "yes" ? "All Offers" : "All New Products";

  return (
    <div className="pt-32 ">
      <h1 className="text-2xl font-bold p-4">{headingText}</h1>
      <div className="flex flex-wrap  justify-start lg:px-0 md:px-0 px-6  gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllOffers;
