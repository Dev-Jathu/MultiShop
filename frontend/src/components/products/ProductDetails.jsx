import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductData } from '../../assets/data/product';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProductData.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, name, price, discount, rating, deals, description } = product;

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        cart: [
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity,
          },
        ],
      },
    });
  };

  return (
    <div className='lg:pt-4 pt-[220px] text-black p-6  w-full lg:h-[100vh] md:h-[79vh] h-full flex items-center justify-center'>
      <div className='flex flex-col md:flex-row gap-[50px] items-center justify-center max-w-4xl w-full'>
        <div className='flex justify-center'>
          <img
            src={image}
            alt={name}
            className='lg:w-[500px] lg:h-[500px] md:w-[300px] h-[300px] object-contain'
          />
        </div>

        <div className='flex-1 flex flex-col justify-between space-y-4'>
          <div className='space-y-2'>
            <div className='flex justify-between items-center'>
              <h3 className='text-2xl font-bold'>{name}</h3>
              <i className='fa-regular fa-heart cursor-pointer text-[24px]'></i>
            </div>

            <div className='text-yellow-400 flex space-x-1'>
              {[...Array(rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className='text-gray-500'>({deals} Reviews)</span>
            </div>

            <p className='text-green-600 font-semibold'>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className='text-2xl font-bold'>
              ${price}
              {discount && (
                <span className='text-gray-500 line-through ml-2'>
                  ${discount}
                </span>
              )}
            </p>
            <p className='text-gray-500'>{description}</p>
          </div>

          <div className='flex items-center space-x-4'>
            <button
              className='bg-gray-300 text-black p-2 rounded-lg'
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className='bg-gray-300 text-black p-2 rounded-lg'
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
            <button
              className='bg-green-600 text-white px-4 py-2 rounded-lg'
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div className='border-t border-gray-300 pt-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-black'>🚚</span>
              <div>
                <p>Free Delivery</p>
                <p className='text-sm text-gray-500'>
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-2 mt-4'>
              <span className='text-black'>🔄</span>
              <div>
                <p>Return Delivery</p>
                <p className='text-sm text-gray-500'>
                  Free 30 Days Delivery Returns.
                  <a
                    href='/'
                    className='underline'
                  >
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
