import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductData } from "../../assets/data/product";
import ProductCard from "../../components/products/ProductCard";

const Products = () => {
  const navigate = useNavigate();

  const filteredProducts = ProductData.filter(
    (product) => product.deals === "yes"
  );
  const displayedProducts = filteredProducts.slice(0, 14);

const handleViewAll = (dealType) => {
  navigate("/view-all", { state: { dealType:"yes" } });
};

  return (
    <div>
      <div className='p-4 font-bold text-[24px] flex justify-between pt-12'>
        <p className='p-8'>Deals</p>
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={handleViewAll}
        >
          <p className='text-[18px]'>View All</p>
          <i
            className='fa fa-arrow-right'
            aria-hidden='true'
          ></i>
        </div>
      </div>
      <div className='flex lg:flex-wrap md:flex-wrap justify-center overflow-x-auto scrollbar-hide sm:overflow-x-visible gap-4'>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
