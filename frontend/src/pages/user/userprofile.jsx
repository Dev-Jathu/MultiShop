import React, { useState } from 'react';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(
    'https://via.placeholder.com/200'
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className='md:p-4 lg:p-0 p-4 w-[50%]'>
      <div className='flex justify-between items-center mb-5  '>
        <h2 className='text-xl font-semibold text-black '>
          Edit Your Profile
        </h2>
        <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300'>
          <img
            className='w-full h-full object-cover cursor-pointer'
            src={selectedImage}
            alt='Profile'
            onClick={() => document.getElementById('fileInput').click()}
          />
        </div>
        <input
          type='file'
          id='fileInput'
          className='hidden'
          accept='image/*'
          onChange={handleImageUpload}
        />
      </div>
      <form className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            type='text'
            placeholder='First Name'
            className='border p-2 rounded w-full'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='border p-2 rounded w-full'
          />
        </div>
        <input
          type='email'
          placeholder='Email'
          className='border p-2 rounded w-full'
        />
        <input
          type='text'
          placeholder='Street Address*'
          className='border p-2 rounded w-full'
        />
        <input
          type='text'
          placeholder='Apartment, floor, etc. (optional)'
          className='border p-2 rounded w-full'
        />
        <input
          type='text'
          placeholder='City/Province'
          className='border p-2 rounded w-full'
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-2 rounded w-full'
        />
        <button
          type='submit'
          className='w-full bg-graylight text-white font-bold py-2 px-4 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-primary'
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
