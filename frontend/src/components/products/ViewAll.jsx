import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductData } from "../../assets/data/product";
import ProductCard from "../../components/products/ProductCard";

const AllOffers = () => {
  const location = useLocation();
  const dealType = location.state?.dealType || "yes"; // Default to 'yes' if no state is provided

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on the deal type passed via state
  const filteredProducts = ProductData.filter(
    (product) => product.deals === dealType
  );

  // Determine the heading based on the deal type
  const headingText = dealType === "yes" ? "All Offers" : "All New Products";

  return (
    <div className="pt-32">
      <h1 className="text-2xl font-bold p-4">{headingText}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllOffers;
