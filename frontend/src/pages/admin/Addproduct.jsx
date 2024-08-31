import React, { useState, useRef } from 'react';
import uploadPicture from '../../assets/images/upload.png';
import uploadImage from '../../utils/cloudinary';
import { toast } from 'react-toastify';
import { BASE_URL, token } from '../../config';

const ProductForm = () => {
  const fileInputRef = useRef(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    weight: '',
    expiredDate: '',
    ingredients: '',
    category: '',
    stock: '',
    deals: '',
    images: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files[0];
    if (!files) return;

    try {
      const data = await uploadImage(files);
      setUploadedImageUrl(data.url);
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: data.url,
      }));
    } catch (error) {
      toast.error('Image upload failed');
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      if (!res.ok) throw new Error(message);

      toast.success("Product added successfully!");

      // Clear only the image fields
      setUploadedImageUrl(null);
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: null,
      }));
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    }
  };


  return (
    <div className='mx-auto p-8 w-full sm:w-[95%] bg-white rounded-lg shadow-md sm:h-[90vh]'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Left column */}
          <div className='space-y-4'>
            {[
              {
                label: 'Product Name',
                name: 'name',
                type: 'text',
                placeholder: 'Product Name',
              },
              {
                label: 'Price',
                name: 'price',
                type: 'number',
                placeholder: 'Price',
              },
              {
                label: 'Description',
                name: 'description',
                type: 'textarea',
                placeholder: 'Description',
                rows: '3',
              },
              {
                label: 'Weight',
                name: 'weight',
                type: 'text',
                placeholder: 'Weight',
              },
              {
                label: 'Category',
                name: 'category',
                type: 'text',
                placeholder: 'Category',
              },
              // {
              //   label: "ingredients",
              //   name: "ingredients",
              //   type: "text",
              //   placeholder: "ingredients",
              // },
              {
                label: 'Stock',
                name: 'stock',
                type: 'number',
                placeholder: 'Stock',
              },
            ].map((field) => (
              <div key={field.name}>
                <label className='block text-sm font-medium text-black-700'>
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.name]}
                    name={field.name}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    className='mt-1 block w-full rounded-md border-black-300 shadow-sm sm:text-sm bg-gray-100 p-2'
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    name={field.name}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm sm:text-sm bg-gray-100 p-2'
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-black-700'>
                Expired Date
              </label>
              <input
                type='date'
                name='expiredDate'
                value={formData.expiredDate}
                onChange={handleInputChange}
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm sm:text-sm bg-gray-100 p-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                Deals
              </label>
              <div className='mt-2 flex gap-4 items-center'>
                {['Yes', 'No'].map((option) => (
                  <div
                    key={option}
                    className='flex items-center'
                  >
                    <input
                      type='radio'
                      name='deals'
                      value={option.toLowerCase()}
                      checked={formData.deals === option.toLowerCase()}
                      onChange={handleInputChange}
                      className='text-indigo-600 focus:ring-indigo-500 h-4 w-4'
                    />
                    <label className='ml-3 block text-sm font-medium text-black-700'>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-black-700'>
                ingredients
              </label>
              <input
                type='text'
                name='ingredients'
                value={formData.ingredients}
                onChange={handleInputChange}
                placeholder='ingredients'
                className='mt-1 block w-full h-12 rounded-md border-black-300 shadow-sm sm:text-sm bg-gray-100 p-2'
              />
            </div>

            {/* Image Upload Section */}
            <div>
              <label className='block text-sm font-medium text-black-700'>
                Upload images
              </label>
              <div className='mt-2 flex flex-wrap gap-4'>
                {uploadedImageUrl && (
                  <div className='w-32 h-32 bg-black-100 border border-dashed border-black-400 flex items-center justify-center'>
                    <img
                      src={uploadedImageUrl}
                      alt='Uploaded'
                      className='w-full h-full object-cover rounded-md'
                    />
                  </div>
                )}

                <div
                  className='w-32 h-32 bg-black-50 border border-dashed border-black-400 flex items-center justify-center cursor-pointer'
                  onClick={handleBrowseClick}
                >
                  <img
                    src={uploadPicture}
                    className='h-12 text-sm'
                    alt='upload'
                  />
                  Upload
                  <input
                    type='file'
                    ref={fileInputRef}
                    accept='image/*'
                    className='hidden'
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <p className='mt-2 text-sm text-black-500'>
                Add Good quality image for display users!
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='pt-8 flex gap-5 flex-col sm:flex-row'>
          <button
            type='submit'
            className='lg:w-[49%] sm:w-auto px-6 py-3 bg-primary text-white rounded-md shadow-sm hover:bg-green-700'
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
