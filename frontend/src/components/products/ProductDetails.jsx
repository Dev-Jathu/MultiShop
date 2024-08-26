import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  console.log("Products:", products);
  console.log("Product ID:", id);

  // Safeguard against products being undefined or null
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  // Find the product with the given id
  const product = products.find((p) => p.id === id);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, image, price, discount, rating, description } = product;

  // Calculate discount price if discount is provided
  const numericPrice = parseFloat(price) || 0;
  const numericDiscount = parseFloat(discount) || 0;
  const discount_price =
    numericDiscount > 0
      ? (numericPrice - (numericPrice * numericDiscount) / 100).toFixed(2)
      : numericPrice.toFixed(2);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="mt-4">
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      <div className="mt-4">
        <p className="text-lg">Price: ${discount_price}</p>
        {numericDiscount > 0 && (
          <p className="text-sm text-gray-600 line-through">
            ${numericPrice.toFixed(2)}
          </p>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">Rating: {rating}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
