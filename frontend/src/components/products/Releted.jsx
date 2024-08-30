// Releted Component
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductData } from '../../assets/data/product'; // Adjust the path as needed

const Releted = () => {
  // Get the product ID passed from the ProductPage
  const location = useLocation();
  const productId = location.state?.productId;

  // Find the clicked product using the productId
  const selectedProduct = ProductData.find((item) => item.id === productId);

  // Filter related products based on the same category as the selected product
  const relatedProducts = ProductData.filter(
    (item) =>
      item.category === selectedProduct?.category &&
      item.id !== selectedProduct?.id
  );

  const calculateDiscountPrice = (price, discount) => {
    return discount > 0
      ? (price - (price * discount) / 100).toFixed(2)
      : price.toFixed(2);
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="font-bold text-xl mb-4">Selected Product</h2>
      {selectedProduct && (
        <div className="mb-8">
          <div className="p-4 rounded-lg shadow-lg flex flex-col w-full sm:w-auto relative">
            {selectedProduct.discount > 0 && (
              <div className="absolute top-1 left-1 bg-primary text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md">
                {selectedProduct.discount}%
              </div>
            )}
              <div className="p-2 lg:w-full h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center lg:text-lg text-[14px] md:text-lg">
           
                <p className="text-xs sm:text-lg text-gray-600 mt-1">
                  {selectedProduct.category}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {selectedProduct.description}
                </p>
                <p className="text-xs sm:text-lg text-gray-600 mt-1">
                  {selectedProduct.rating}
                </p>
                <p className="text-xs sm:text-lg text-gray-600 mt-1">
                Available:{selectedProduct.stock}
                </p>

             
              </div>
          </div>
        </div>
      )}

      <h2 className="font-bold text-xl mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProducts.map((relatedProduct) => {
          const { id, image, name, price, discount, rating, deals } =
            relatedProduct;
          const numericPrice = parseFloat(price) || 0;
          const numericDiscount = parseFloat(discount) || 0;
          const discount_price = calculateDiscountPrice(
            numericPrice,
            numericDiscount
          );

          return (
            <div
              key={id}
              className="flex gap-4 py-5 sm:flex-row lg:flex-col lg:items-start"
            >
              <div className="p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col cursor-pointer w-[150px] sm:w-auto relative">
                {numericDiscount > 0 && (
                  <div className="absolute top-1 left-1 bg-primary text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md">
                    {numericDiscount}%
                  </div>
                )}
                <Link to={`/products/${id}`}>
                  <div className="p-2 lg:w-[180px] h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mt-4 text-left lg:text-lg text-[14px] md:text-lg">
                    {deals === "yes" && (
                      <div className="flex gap-2 sm:gap-5">
                        <p className="text-sm sm:text-[18px] font-bold text-gray-800 bg-primary w-20 sm:w-24 flex items-center text-center rounded-[5px] px-1">
                          ${discount_price}
                        </p>
                        {numericDiscount > 0 && (
                          <p className="text-xs sm:text-lg text-gray-600 mt-1 line-through">
                            ${numericPrice.toFixed(2)}
                          </p>
                        )}
                      </div>
                    )}
                    <p className="text-xs sm:text-lg text-gray-600 mt-1">
                      {name}
                    </p>
                    {rating && (
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        {rating}
                      </p>
                    )}
                  </div>
                </Link>
                <div className="flex justify-between mt-2 sm:mt-3 w-full text-[20px] sm:text-[25px] px-2">
                  <button
                    className="text-gray-800 hover:text-primary"
                    aria-label="Add to wishlist"
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button
                    className="text-gray-800 hover:text-primary"
                    aria-label="Add to cart"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Releted;
