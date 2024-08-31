import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config';
import FetchData from '../../hooks/fetchData';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { data: product } = FetchData(`${BASE_URL}/products/${id}`);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/products?category=${product.category}`
        );


        const data = await response.json();
        setRelatedProducts(
          data.filter(
            (item) =>
              item.id !== product._id && item.category === product.category
          )
        );
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };
    fetchRelatedProducts();
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { images, name, price, discount, rating, deals, description, stock } =
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
            images,
            price,
            quantity,
          },
        ],
      },
    });
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-[calc(130vh-200px)] md:min-h-[calc(96vh-200px)] lg:min-h-[calc(100vh-200px)] pt-[150px]'>
      <div className='flex flex-col md:flex-row gap-[50px] items-center justify-center max-w-4xl w-full lg:top-14 md:top-10 top-40'>
        <div className='flex justify-center'>
          <img
            src={images}
            alt={name}
            className='lg:w-[400px] lg:h-[400px] md:w-[300px] h-[300px] object-contain'
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

      {/* Related Products Section */}
      <div className='mt-10 lg:w-[80%] mb-20'>
        <h3 className='text-2xl font-bold mb-4 text-left '>Related Products</h3>
        <div className='lg:flex lg:flex-wrap lg:gap-4 lg:justify-center md:flex md:flex-wrap md:gap-4 gap-4 md:justify-center  overflow-auto grid grid-cols-4 '>
          {relatedProducts.map((relatedProduct) => (
            <Link
              to={`/products/${relatedProduct._id}`}
              key={relatedProduct._id}
            >
              <div className='lg:w-[150px] lg:h-[180px] md:w-[150px] md:h-[180px] w-[80px] h-[100px] p-2 bg-black rounded-md'>
                <img
                  src={relatedProduct.images}
                  alt={relatedProduct.name}
                  className='lg:w-full lg:h-[120px] md:w-full md:h-[120px] w-[60px] h-[70px] object-contain'
                />
                <p className='text-sm mt-2 text-white text-center hidden md:block lg:block '>
                  {relatedProduct.name}
                </p>
                <p className='text-xs text-white text-center'>
                  ${relatedProduct.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Ensure that the additional components are defined before use

const ProductInfo = ({
  name,
  rating,
  deals,
  stock,
  price,
  discount,
  description,
}) => (
  <div className='space-y-2 p-4'>
    <div className='flex justify-between items-center'>
      <h3 className='lg:text-2xl md:text-2xl text-xl  font-bold'>{name}</h3>
      <div className='flex gap-5'>
        <i className='fa-regular fa-heart cursor-pointer text-[24px]'></i>
        <i
          class='fa fa-plus cursor-pointer text-[24px]'
          aria-hidden='true'
        ></i>
      </div>
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
  <div className='flex items-center space-x-4 p-4'>
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
  <div className='border-t border-gray-300 pt-4 p-4'>
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
