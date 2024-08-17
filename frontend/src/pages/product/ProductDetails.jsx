import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) {
      navigate("/"); 
    }
  }, [product, navigate]);

  if (!product) {
    return null; 
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="text-black p-6 w-full min-h-[100vh] flex items-center justify-center lg:pt-[150px] md:pt-[0px] pt-[150px]">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl w-full">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between space-y-4 w-full">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold">{product.name}</h3>
              <i className="fa-regular fa-heart cursor-pointer text-xl md:text-[24px]"></i>
            </div>

            <div className="text-yellow-400 flex space-x-1">
              {[...Array(product.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-500">
                ({product.reviews.length} Reviews)
              </span>
            </div>
            <p className="text-green-600 font-semibold">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p className="text-xl md:text-2xl font-bold">{product.price}</p>
            <p className="text-gray-500">{product.description}</p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-300 text-black p-2 rounded-lg"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-300 text-black p-2 rounded-lg"
            >
              +
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Buy Now
            </button>
          </div>

          <div className="border-t border-gray-300 pt-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-black">🚚</span>
              <div>
                <p>Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-black">🔄</span>
              <div>
                <p>Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns.
                  <a href="#" className="underline">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
