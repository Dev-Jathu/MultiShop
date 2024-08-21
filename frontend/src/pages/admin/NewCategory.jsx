import React, { useState } from 'react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ productName, image });
  };

  return (
    <div className=''>
      <form
        onSubmit={handleSubmit}
        className='w-[75%]  mx-auto bg-white p-8 rounded-lg shadow-md '
      >
        <div className='mb-6'>
          <label
            htmlFor='product-name'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Category name <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='product-name'
            placeholder='Category name'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black'
            required
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='image-upload'
            className='block text-gray-700 text-sm font-bold mb-2'
          >
            Upload image <span className='text-red-500'>*</span>
          </label>
          <div
            className='border-2 border-dashed border-gray-300 p-4 rounded-lg text-center cursor-pointer hover:border-primary h-40 flex items-center justify-center'
            onClick={() => document.getElementById('image-upload').click()}
          >
            {image ? (
              <img
                src={image}
                alt='Selected'
                className='max-h-full'
              />
            ) : (
              <p className='text-black'>
                Drop your image here or click to browse
              </p>
            )}
          </div>
          <input
            type='file'
            id='image-upload'
            className='hidden'
            onChange={handleImageUpload}
            accept='image/*'
            required
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
};

export default ProductForm;
