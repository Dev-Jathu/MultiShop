import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import FetchData from "../../hooks/fetchData";

const Related = () => {
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const {
    data: product,
    isLoading,
    error,
  } = FetchData(`${BASE_URL}/products/${id}`);

  // Ensure product data is loaded before destructuring
  const { images, name,  rating, category } = product || {};

  useEffect(() => {
    if (product) {
      const fetchRelatedProducts = async () => {
        try {
          const response = await fetch(
            `${BASE_URL}/products?category=${product.category}`
          );
          const data = await response.json();

          setRelatedProducts(
            data.filter(
              (item) =>
                item._id !== product._id && item.category === product.category
            )
          );
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      };

      fetchRelatedProducts();
    }
  }, [product]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const calculateDiscountPrice = (price, discount) => {
    return discount > 0
      ? (price - (price * discount) / 100).toFixed(2)
      : price.toFixed(2);
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="font-bold text-xl mb-4">Selected Product</h2>
      {product && (
        <div className="mb-8">
          <div className="p-4 rounded-lg shadow-lg flex flex-col w-full sm:w-auto relative">
            <div className="p-2 lg:w-full h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={images}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center lg:text-lg text-[14px] md:text-lg">
              <p className="text-xs sm:text-lg text-gray-600 mt-1">
                {category}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {product.description}
              </p>
              <p className="text-xs sm:text-lg text-gray-600 mt-1">{rating}</p>
              <p className="text-xs sm:text-lg text-gray-600 mt-1">
                Available: {product.stock}
              </p>
            </div>
          </div>
        </div>
      )}

      <h2 className="font-bold text-2xl md:text-2xl text-[20px] mb-4">
        Related Products
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {relatedProducts.map((relatedProduct) => {
          const { _id, images, name, price, discount, rating } = relatedProduct;
          const numericPrice = parseFloat(price) || 0;
          const numericDiscount = parseFloat(discount) || 0;
          const discount_price = calculateDiscountPrice(
            numericPrice,
            numericDiscount
          );

          return (
            <div
              key={_id}
              className="flex gap-4 py-5 sm:flex-row lg:flex-col lg:items-start"
            >
              <div className="p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col cursor-pointer w-[150px] sm:w-auto relative">
                {numericDiscount > 0 && (
                  <div className="absolute top-1 left-1 bg-primary text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md">
                    {numericDiscount}%
                  </div>
                )}
                <Link to={`/products/${_id}`}>
                  <div className="p-2 lg:w-[180px] h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={images}
                      alt={name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
                <div className="mt-4 text-center lg:text-lg text-[14px] md:text-lg">
                  <p className="text-xs sm:text-lg font-bold text-black">
                    {name}
                  </p>
                  {numericDiscount > 0 ? (
                    <div className="flex justify-center items-center gap-4">
                      <p className="text-xs sm:text-sm font-semibold line-through text-gray-400">
                        ${numericPrice}
                      </p>
                      <p className="text-xs sm:text-lg font-bold text-green-500">
                        ${discount_price}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-lg font-bold text-black">
                      ${price}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {rating}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Related;
