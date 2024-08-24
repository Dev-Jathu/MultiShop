// ProductPage.js
import React, { useState } from 'react';
import { ProductData } from '../../assets/data/product';
import ProductCard from '../../components/products/ProductCard';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? ProductData
      : ProductData.filter((product) => product.category === selectedCategory);

  return (
    <div className='p-4 h-full'>
      <div className='font-bold text-[24px] flex justify-between pt-12'>
        <p>Categories</p>
      </div>

      <div className='flex flex-wrap gap-2 md:gap-3 pt-10 p-4'>
        {['All', 'Beer', 'Beverages', 'Spirits', 'SoftDrinks', 'Wines'].map(
          (category) => (
            <button
              key={category}
              className={`px-3 py-1 text-sm rounded-md md:px-4 md:py-2 md:text-base font-semibold ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-green-400 text-white'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 py-5'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            displayMode='simple' // Pass the prop here
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
