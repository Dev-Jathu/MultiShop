import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

const Products = () => {
  const navigate = useNavigate();
  const { data } = FetchData(`${BASE_URL}/products`);

  const products = data;

  if (!products) {
    return null;
  }

  const filteredProducts = products.filter(
    (product) =>  product.deals === "yes"
  );
  const displayedProducts = filteredProducts.slice(0, 14);
  const handleViewAll = (dealType) => {
    navigate("/view-all", { state: { dealType: "yes" } });
  };

  return (
    <div>
      <div className="p-4 font-bold lg:text-[24px] flex justify-between pt-12">
        <p className="lg:p-8">Deals</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleViewAll}
        >
          <p className="lg:text-[24px]">View All</p>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className="flex lg:flex-wrap md:flex-wrap justify-center overflow-x-auto scrollbar-hide sm:overflow-x-visible  gap-10 lg:gap-4 md:gap-4 ">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
