import React from 'react';

function cart() {
  return (
    <div>
      <div className='container mx-auto pt-[250px] p-4 h-[100vh]'>
        <div className='grid grid-cols-5 gap-4 items-center bg-white p-4 rounded-lg shadow-md'>
          <div className='flex items-center'>
            <img
              src='path_to_image'
              alt='Leg piece'
              className='w-12 h-12 object-cover rounded-full mr-4'
            />
            <span className='text-lg font-medium'>Leg piece</span>
          </div>

          <div className='text-lg font-semibold'>$650</div>

          <div className='flex items-center space-x-2'>
            <button className='w-8 h-8 flex justify-center items-center bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 rounded'>
              –
            </button>
            <span className='w-8 h-8 flex justify-center items-center text-lg'>
              2
            </span>
            <button className='w-8 h-8 flex justify-center items-center bg-primary text-white hover:bg-primary rounded'>
              +
            </button>
          </div>

          <div className='text-lg font-semibold'>$650</div>

          <div>
            <button className='px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default cart;
