import React from 'react';

const Payment = () => {
  return (
    <div className='md:p-4 lg:p-0 p-4 w-[50%]'>
      <h2 className='text-xl font-semibold text-black mb-4'>
        Edit Your Payment
      </h2>
      <form className='space-y-4'>
        <div className='flex flex-col'>
          <label className='font-semibold'>Name on card</label>
          <input
            type='text'
            placeholder='Enter name on card'
            className='border p-2 rounded'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='font-semibold'>Card Number</label>
            <input
              type='text'
              placeholder='XXXX-XXXX-XXXX-XXXX'
              className='border p-2 rounded w-full'
            />
          </div>
          <div>
            <label className='font-semibold'>CVV</label>
            <input
              type='text'
              placeholder='Enter CVV'
              className='border p-2 rounded w-full'
            />
          </div>
        </div>
        <div className='flex justify-center space-x-4 mt-6'>
          <button className='text-gray-700'>Cancel</button>
          <button className='bg-primary text-white px-4 py-2 rounded'>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
