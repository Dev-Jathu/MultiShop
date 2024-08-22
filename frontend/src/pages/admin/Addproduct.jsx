import React, { useState, useRef } from 'react';
import UplodPicture from '../../assets/images/uplod (1).png';

const ProductForm = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    const updatedImages = [...images, ...newImages].slice(0, 6);
    setImages(updatedImages);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className='mx-auto p-4 w-[95%] bg-white rounded-lg shadow-md h-[90vh]'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-6 '>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-black-700'>
                Product Name
              </label>
              <input
                type='text'
                placeholder='Product Name'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm sm:text-sm bg-gray-100 p-2 '
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Price
              </label>
              <input
                type='number'
                placeholder='Price'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Description
              </label>
              <textarea
                placeholder='Description'
                rows='3'
                className='mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              ></textarea>
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Weight
              </label>
              <input
                type='text'
                placeholder='Weight'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Category
              </label>
              <input
                type='text'
                placeholder='Category'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Stock
              </label>
              <input
                type='number'
                placeholder='Stock'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              />
            </div>
          </div>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-black-700'>
                Expired Date
              </label>
              <input
                type='date'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Deals
              </label>
              <div className='mt-2 flex items-center'>
                <input
                  type='radio'
                  name='deals'
                  id='dealsYes'
                  className='text-indigo-600 focus:ring-indigo-500 h-4 w-4'
                />
                <label
                  htmlFor='dealsYes'
                  className='ml-3 block text-sm font-medium text-black-700'
                >
                  Yes
                </label>
                <input
                  type='radio'
                  name='deals'
                  id='dealsNo'
                  className='ml-6 text-indigo-600 focus:ring-indigo-500 h-4 w-4'
                />
                <label
                  htmlFor='dealsNo'
                  className='ml-3 block text-sm font-medium text-black-700'
                >
                  No
                </label>
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Ingredients
              </label>
              <input
                type='text'
                placeholder='Ingredients'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Upload images
              </label>
              <div className='mt-2 flex flex-wrap gap-4'>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className='w-32 h-32 bg-black-100 border border-dashed border-black-400 flex items-center justify-center'
                  >
                    <img
                      src={image}
                      alt={`Uploaded ${index + 1}`}
                      className='w-full h-full object-cover rounded-md'
                    />
                  </div>
                ))}
                {images.length < 6 && (
                  <div
                    className='w-32 h-32 bg-black-50 border border-dashed border-black-400 flex items-center justify-center cursor-pointer'
                    onClick={handleBrowseClick}
                  >
                    <button className='text-black text-sm'>
                      <img
                        src={UplodPicture}
                        className='h-12'
                        alt='upload'
                      />
                      Upload
                    </button>
                    <input
                      type='file'
                      ref={fileInputRef}
                      multiple
                      accept='image/*'
                      className='hidden'
                      onChange={handleImageUpload}
                    />
                  </div>
                )}
              </div>
              <p className='mt-2 text-sm text-black-500'>
                You can add up to 6 images. Pay attention to the quality of the
                pictures you add, comply with the background color standards.
                Pictures must be in certain dimensions. Notice that the product
                shows all the details.
              </p>
            </div>
          </div>
        </div>

        <div className='pt-5 flex gap-5'>
          <button
            type='submit'
            className='px-6 py-3 bg-primary text-white rounded-md shadow-sm hover:bg-green-700'
          >
            Add product
          </button>
          <button
            type='button'
            className='px-6 py-3 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400'
          >
            Save product
          </button>
          <button
            type='button'
            className='px-6 py-3 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400'
          >
            Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
