import React from 'react';

const ProductCard = ({ product, displayMode }) => {
  const { image, name, price, discount, rating, deals, category } = product; // Added deals to destructuring

  // Convert price and discount to numbers and provide default values if necessary
  const numericPrice = parseFloat(price) || 0;
  const numericDiscount = parseFloat(discount) || 0;

  // Calculate discount price if discount is provided
  const calculateDiscountPrice = (price, discount) => {
    return discount > 0
      ? (price - (price * discount) / 100).toFixed(2)
      : price.toFixed(2);
  };

  const discount_price = calculateDiscountPrice(numericPrice, numericDiscount);

  return (
    <div className='lg:px-5 md:px-5 px-3'>
      {displayMode === 'simple' ? (
        <div className='flex flex-col items-center justify-center px-4'>
          <div className='p-2 w-full h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-lg overflow-hidden  '>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-contain'
            />
          </div>
          <div>
            <p className='text-xs sm:text-lg text-gray-600'>{category}</p>
          </div>
        </div>
      ) : (
        <div className='flex gap-4 py-5 sm:flex-row lg:flex-col lg:items-start'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col cursor-pointer w-[150px] sm:w-auto relative'>
            {numericDiscount > 0 && (
              <div className='absolute top-1 left-1 bg-green-600 text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md'>
                {numericDiscount}%
              </div>
            )}
            <div className='p-2 lg:w-[180px] h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center'>
              <img
                src={image}
                alt={name}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='mt-4 text-left lg:text-lg text-[14px] md:text-lg'>
              {deals === 'yes' && (
                <div className='flex gap-2 sm:gap-5'>
                  <p className='text-sm sm:text-[18px] font-bold text-gray-800 bg-primary w-20 sm:w-24 flex items-center text-center rounded-[5px] px-1'>
                    ${discount_price}
                  </p>
                  {numericDiscount > 0 && (
                    <p className='text-xs sm:text-lg text-gray-600 mt-1 line-through'>
                      ${numericPrice.toFixed(2)}
                    </p>
                  )}
                </div>
              )}
              <p className='text-xs sm:text-lg text-gray-600 mt-1'>{name}</p>
              {rating && (
                <p className='text-xs sm:text-sm text-gray-600 mt-1'>
                  {rating}
                </p>
              )}
            </div>
            <div className='flex justify-between mt-2 sm:mt-3 w-full text-[20px] sm:text-[25px] px-2'>
              <button
                className='text-gray-800 hover:text-green-500'
                aria-label='Add to wishlist'
              >
                <i className='fa-regular fa-heart'></i>
              </button>
              <button
                className='text-gray-800 hover:text-green-500'
                aria-label='Add to cart'
              >
                <i className='fa-solid fa-plus'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
