import React from 'react';

function Adminprofile() {
  return (
    <div className='w-[100%] bg-white p-10 justify-center items-center'>
      <form className='flex flex-col space-y-4 pt-5'>
        <div className='flex justify-between text-[20px]'>
          <p>Your Profile</p>
          <img
            src='http://www.gravatar.com/avatar/?d=mp'
            alt='Profile'
            className='w-12 h-12 rounded-full'
          />
        </div>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <input
            type='text'
            placeholder='Name'
            className='border p-2 rounded flex-1'
          />
        </div>
        <input
          type='email'
          placeholder='Email'
          className='border p-2 rounded'
        />

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <input
            type='password'
            placeholder='Password'
            className='border p-2 rounded flex-1'
          />
        </div>

        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <input
            type='password'
            placeholder='Confirm Password'
            className='border p-2 rounded flex-1'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary'
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Adminprofile;
