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

  const { image, name, price, discount, rating, deals, description, stock } =
    product;

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        cart: [
          {
            id,
            name,
            image,
            price,
            quantity,
          },
        ],
      },
    });
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-[calc(130vh-200px)] md:min-h-[calc(96vh-200px)]  lg:min-h-[calc(100vh-200px)] pt-[100px] '>
      <div className='flex flex-col md:flex-row gap-[50px] items-center justify-center max-w-4xl w-full lg:top-10 md:top-10 top-40'>
        <div className='flex justify-center'>
          <img
            src={image}
            alt={name}
            className='lg:w-[400px] lg:h-[500px] md:w-[300px] h-[300px] object-contain'
          />
        </div>

        <div className='flex-1 flex flex-col justify-between space-y-4'>
          <ProductInfo
            name={name}
            rating={rating}
            deals={deals}
            stock={stock}
            price={price}
            discount={discount}
            description={description}
          />
          <ProductActions
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onBuyNow={handleBuyNow}
          />
          <DeliveryInfo />
        </div>
      </div>
    </div>
  );
};

const ProductInfo = ({
  name,
  rating,
  deals,
  stock,
  price,
  discount,
  description,
}) => (
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
      {stock > 0 ? 'In Stock' : 'Out of Stock'}
    </p>
    <p className='text-2xl font-bold'>
      ${price}
      {discount && (
        <span className='text-gray-500 line-through ml-2'>${discount}</span>
      )}
    </p>
    <p className='text-gray-500'>{description}</p>
  </div>
);

const ProductActions = ({ quantity, onQuantityChange, onBuyNow }) => (
  <div className='flex items-center space-x-4'>
    <button
      className='bg-gray-300 text-black p-2 rounded-lg'
      onClick={() => onQuantityChange(-1)}
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      className='bg-gray-300 text-black p-2 rounded-lg'
      onClick={() => onQuantityChange(1)}
    >
      +
    </button>
    <button
      className='bg-primary text-white px-4 py-2 rounded-lg'
      onClick={onBuyNow}
    >
      Buy Now
    </button>
  </div>
);

const DeliveryInfo = () => (
  <div className='border-t border-gray-300 pt-4'>
    <DeliveryDetail
      icon='🚚'
      title='Free Delivery'
      description='Enter your postal code for Delivery Availability'
    />
    <DeliveryDetail
      icon='🔄'
      title='Return Delivery'
      description='Free 30 Days Delivery Returns.'
      linkText='Details'
      linkHref='/'
    />
  </div>
);

const DeliveryDetail = ({ icon, title, description, linkText, linkHref }) => (
  <div className='flex items-center space-x-2 mt-4'>
    <span className='text-black'>{icon}</span>
    <div>
      <p>{title}</p>
      <p className='text-sm text-gray-500'>
        {description}{' '}
        {linkText && (
          <a
            href={linkHref}
            className='underline'
          >
            {linkText}
          </a>
        )}
      </p>
    </div>
  </div>
);

export default ProductDetail;
