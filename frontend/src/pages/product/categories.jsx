// import React, { useState } from 'react';
// import { ProductData } from '../../assets/data/product';
// import ProductCard from '../../components/products/ProductCard';

// const ProductPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Get unique categories from ProductData
//   const categories = [
//     'All',
//     ...new Set(ProductData.map((product) => product.category)),
//   ];

//   // Get the first product for each category
//   const initialDisplayProducts = categories
//     .filter((category) => category !== 'All')
//     .map((category) =>
//       ProductData.find((product) => product.category === category)
//     );

//   // Determine what products to display
//   const productsToDisplay =
//     selectedCategory === 'All'
//       ? initialDisplayProducts
//       : ProductData.filter((product) => product.category === selectedCategory);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className='p-4 h-full pt-[50px]'>
//       <div className='font-bold text-[24px] flex justify-between pt-12'>
//         <p>Categories</p>
//       </div>

//       <div className='flex flex-wrap gap-2 md:gap-3 pt-10'>
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-3 py-1 text-sm rounded-md md:px-4 md:py-2 md:text-base font-semibold ${
//               selectedCategory === category
//                 ? 'bg-green-600 text-white'
//                 : 'bg-green-400 text-white'
//             }`}
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 py-5'>
//         {productsToDisplay.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             displayMode={selectedCategory === 'All' ? 'category' : 'detailed'} // Pass the displayMode prop
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState } from 'react';
import { ProductData } from '../../assets/data/product';
import ProductCard from '../../components/products/ProductCard';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories from ProductData
  const categories = [...new Set(ProductData.map((product) => product.category))];

  // Get the first product for each category
  const initialDisplayProducts = categories.map((category) =>
    ProductData.find((product) => product.category === category)
  );

  // Determine what products to display
  const productsToDisplay = selectedCategory
    ? ProductData.filter((product) => product.category === selectedCategory)
    : initialDisplayProducts;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='p-4 h-full pt-[50px]'>
      <div className='font-bold text-[24px] flex justify-between pt-12'>
        <p>Categories</p>
      </div>

      <div className='flex flex-wrap gap-2 md:gap-3 pt-10'>
        {categories.map((category) => (
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
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 py-5'>
        {productsToDisplay.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            displayMode={selectedCategory ? 'detailed' : 'category'} // Pass the displayMode prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;