import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, displayMode }) => {
  const { _id, images, name, price, discount, rating, deals, category } =
    product;

  const numericPrice = parseFloat(price) || 0;
  const numericDiscount = parseFloat(discount) || 0;

  const calculateDiscountPrice = (price, discount) => {
    return discount > 0
      ? (price - (price * discount) / 100).toFixed(2)
      : price.toFixed(2);
  };

  const discount_price = calculateDiscountPrice(numericPrice, numericDiscount);

  return (
    <div className='lg:px-5 px-3'>
      {displayMode === 'simple' ? (
        <div className='flex flex-col items-center justify-center px-4'>
          <div className='p-2 w-full h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-lg overflow-hidden'>
            <img
              src={images}
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
          <div className=' p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col cursor-pointer w-[150px] sm:w-auto relative'>
            {numericDiscount > 0 && (
              <div className='absolute top-1 left-1 bg-primary text-white text-xs px-2 py-1 rounded-tr-md rounded-bl-md'>
                {numericDiscount}%
              </div>
            )}
            <div>
              <Link to={`/products/${_id}`}>
                <div className='p-2 lg:w-[180px] h-[120px] lg:h-[150px] md:w-[200px] md:h-[150px] bg-black rounded-t-lg overflow-hidden flex items-center justify-center'>
                  <img
                    src={images}
                    alt={name}
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='mt-4 text-left lg:text-lg text-[14px] md:text-lg'>
                  {deals === 'yes' && (
                    <div className='flex gap-2 sm:gap-5'>
                      <p className='text-sm sm:text-[18px] font-bold text-white bg-primary w-20 sm:w-24 flex items-center text-center rounded-[5px] px-1'>
                        ${discount_price}
                      </p>
                      {numericDiscount > 0 && (
                        <p className='text-xs sm:text-lg text-gray-600 mt-1 line-through'>
                          ${numericPrice.toFixed(2)}
                        </p>
                      )}
                    </div>
                  )}
                  <p className='text-xs sm:text-lg text-gray-600 mt-1'>
                    {name}
                  </p>
                  {rating && (
                    <p className='text-xs sm:text-sm text-gray-600 mt-1'>
                      {rating}
                    </p>
                  )}
                </div>
              </Link>
            </div>

            <div className='flex justify-between mt-2 sm:mt-3 w-full text-[20px] sm:text-[25px] px-2'>
              <button
                className='text-gray-800 hover:text-primary'
                aria-label='Add to wishlist'
              >
                <i className='fa-regular fa-heart'></i>
              </button>
              <button
                className='text-gray-800 hover:text-primary'
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
