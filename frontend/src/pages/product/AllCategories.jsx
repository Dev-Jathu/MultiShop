// import React from "react";
// import image from "../../assets/images/lime.png";
// import { ProductData } from "../../assets/data/product";

// const AllProductsPage = () => {
//   return (
//     <div className="px-5 min-h-screen">
//       <h1 className="text-2xl font-bold text-center pt-10">All Products</h1>
//       <div className="flex flex-wrap justify-center gap-7 px-1 pt-10">
//         {ProductData.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center text-black"
//           >
//             <div className="w-[180px] h-[150px] bg-black rounded-lg overflow-hidden flex-shrink-0">
//               <img
//                 src={product.image || image}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <p className="mt-2 text-center">{product.name}</p>
//             <p className="text-center text-gray-600">{product.price}</p>
//             <p className="text-center text-gray-600">{product.rating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProductsPage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import image from "../../assets/images/lime.png";
import { ProductData } from "../../assets/data/product";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [initialItemCount, setInitialItemCount] = useState(18); // Default for desktop
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const updateItemCount = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet mode
        setInitialItemCount(9);
      } else if (window.innerWidth < 768) {
        // Mobile mode
        setInitialItemCount(6);
      } else {
        // Desktop mode
        setInitialItemCount();
      }
    };

    updateItemCount(); // Initial check
    window.addEventListener("resize", updateItemCount); // Update on resize

    return () => {
      window.removeEventListener("resize", updateItemCount); // Cleanup on unmount
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const filteredProducts =
    selectedCategory === "All"
      ? ProductData
      : ProductData.filter((product) => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, initialItemCount);

  return (
    <div className="px-5 ">
      <div className="font-bold text-[18px] flex justify-between pt-[200px]">
        <p>New Product</p>
      </div>
      <div className="flex flex-wrap gap-3 pt-10">
        {["All", "Meat", "Groceries", "Drinks", "Bread"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white font-semibold ${
              selectedCategory === category ? "bg-green-600" : "bg-green-400"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-7 px-1 pt-10">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-black"
          >
            <div className="w-[180px] h-[150px] bg-black rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={product.image || image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center">{product.name}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ProductPage;
