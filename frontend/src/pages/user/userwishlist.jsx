import React from 'react';

const Wishlist = () => {
  return (
    <div className='md:p-4 lg:p-0 p-4 w-[50%]'>
      <h2 className='text-xl font-semibold text-black mb-4 text-left'>
        My Wishlist (4)
      </h2>
      <div className='flex flex-wrap justify-between gap-4'>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className='relative text-center items-center'
          >
            <button className='absolute top-0 right-0 text-red-500 mt-2 mr-2'>
              <i className='fas fa-trash'></i>
            </button>

            <img
              src='https://via.placeholder.com/150'
              alt='Product'
              className='lg:w-[150px] md:w-[200px] w-[100px] mb-2'
            />
            <button className='bg-primary text-white py-1 px-2 rounded mb-2'>
              Add To Cart
            </button>
            <p>Chicken Leg</p>
            <p>$50</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
