import React, { useState, useEffect } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { ProductData } from "../../assets/data/product";
import ProductCard from "../../components/products/ProductCard";

const Products = () => {
  const navigate = useNavigate();
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const updateDisplayedProducts = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setDisplayedProducts(
          ProductData.filter((product) => product.deals === "no").slice(0, 14)
        );
      } else if (screenWidth >= 768) {
        setDisplayedProducts(
          ProductData.filter((product) => product.deals === "no").slice(0, 9)
        );
      } else {
        setDisplayedProducts(
          ProductData.filter((product) => product.deals === "no")
        );
      }
    };

    updateDisplayedProducts();

    window.addEventListener("resize", updateDisplayedProducts);

    return () => {
      window.removeEventListener("resize", updateDisplayedProducts);
    };
  }, []);

  const handleViewAll = () => {
    navigate("/view-all", { state: { dealType: "no" } });
  };

  return (
    <div>
      <div className='p-4 font-bold text-[24px] flex justify-between pt-12'>
        <p>New Products</p>
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

      <div className='flex lg:flex-wrap md:flex-wrap justify-center gap-4 overflow-x-auto scrollbar-hide sm:overflow-x-visible sm:scrollbar-hide'>
        {displayedProducts.map((product) => (
          <div>
            <ProductCard
              key={product.id}
              product={product}
            />

          </div>
      ))}
      </div>
    </div>
  );
};

export default Products;
