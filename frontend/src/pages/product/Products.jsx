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
        // Desktop: show 10 products
        setDisplayedProducts(
          ProductData.filter((product) => product.deals === "no").slice(0, 10)
        );
      } else if (screenWidth >= 768) {
        // Tablet: show 9 products
        setDisplayedProducts(
          ProductData.filter((product) => product.deals === "no").slice(0, 9)
        );
      } else {
        // Mobile: show all products
        setDisplayedProducts(
          ProductData.filter((product) => product.deals === "no")
        );
      }
    };

    // Initial check
    updateDisplayedProducts();

    // Update on window resize
    window.addEventListener("resize", updateDisplayedProducts);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDisplayedProducts);
    };
  }, []);

  const handleViewAll = () => {
    navigate("/view-all", { state: { dealType: "no" } });
  };

  return (
    <div>
      <div className="p-4 font-bold text-[24px] flex justify-between pt-12">
        <p>New Products</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleViewAll}
        >
          <p className="text-[18px]">View All</p>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>

      {/* Scrollable container with hidden scrollbar on mobile screens */}
      <div className="flex lg:flex-wrap md:flex-wrap justify-center gap-4 overflow-x-auto scrollbar-hide sm:overflow-x-visible sm:scrollbar-hide">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
