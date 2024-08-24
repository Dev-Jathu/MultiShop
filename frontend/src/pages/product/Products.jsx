import React from 'react';
import { ProductData } from '../../assets/data/product';
import ProductCard from '../../components/products/ProductCard';

const Products = () => {
   const filteredProducts = ProductData.filter(
     (product) => product.deals === 'no'
  );
  
  const displayedProducts = filteredProducts.slice(0, 14);

  return (
    <div>
      <div className=' p-4 font-bold text-[24px] flex justify-between pt-12'>
        <p>New product</p>
        <div
          className='flex items-center gap-2 cursor-pointer'
        >
          <p className='text-[18px]'>View All</p>
          <i
            className='fa fa-arrow-right'
            aria-hidden='true'
          ></i>
        </div>
      </div>

      <div className='flex flex-wrap justify-center gap-4'>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
