// // import React from "react";
// // import { useLocation } from "react-router-dom";

// // const ProductDetail = () => {
// //   const location = useLocation();
// //   const product = location.state?.product; // Get the passed product data

// //   return (
// //     <div className="p-5 pt-16">
// //       <h1 className="text-2xl font-bold">{product.name}</h1>
// //       <div className="mt-4">
// //         <img
// //           src={product.image}
// //           alt={product.name}
// //           className="w-[400px] h-[300px] object-cover"
// //         />
// //       </div>
// //       <p className="mt-4 text-lg">{product.description}</p>
// //       <p className="mt-2 text-xl font-semibold">Price: {product.price}</p>
// //       {product.discount && (
// //         <p className="mt-2 text-lg text-red-500">
// //           Discount: {product.discount}
// //         </p>
// //       )}
// //       <p className="mt-2">Category: {product.category}</p>
// //       <p className="mt-2">Stock: {product.stock}</p>
// //       <p className="mt-2">Supplier: {product.supplier}</p>
// //       <div className="mt-4">
// //         <h2 className="text-xl font-semibold">Reviews</h2>
// //         {product.reviews.map((review, index) => (
// //           <div key={index} className="mt-2">
// //             <p>
// //               <strong>{review.user}:</strong> {review.comment}
// //             </p>
// //             <p>Rating: {review.rating}/5</p>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="mt-4">
// //         <p>Tags: {product.tags.join(", ")}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// const ProductDetail = () => {
//   const location = useLocation();
//   const product = location.state?.product; // Get the passed product data

//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className=" text-black p-6 rounded-lg  flex flex-col lg:flex-row items-center justify-between h-[85vh]">
//       <div className="flex-1 flex justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="max-w-full h-auto"
//         />
//       </div>

//       <div className="flex-1 flex flex-col justify-between space-y-4">
//         <div className="space-y-2">
//           <h3 className="text-2xl font-bold">{product.name}</h3>
//           <div className="text-yellow-400 flex space-x-1">
//             {[...Array(product.rating)].map((_, i) => (
//               <span key={i}>★</span>
//             ))}
//             <span className="text-gray-500">
//               ({product.reviews.length} Reviews)
//             </span>
//           </div>
//           <p className="text-green-600 font-semibold">
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </p>
//           <p className="text-2xl font-bold">{product.price}</p>
//           <p className="text-gray-500">{product.description}</p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button
//             onClick={decreaseQuantity}
//             className="bg-gray-300 text-black p-2 rounded-lg"
//           >
//             -
//           </button>
//           <span>{quantity}</span>
//           <button
//             onClick={increaseQuantity}
//             className="bg-gray-300 text-black p-2 rounded-lg"
//           >
//             +
//           </button>
//           <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
//             Buy Now
//           </button>
//         </div>

//         <div className="border-t border-gray-300 pt-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-black">🚚</span>
//             <div>
//               <p>Free Delivery</p>
//               <p className="text-sm text-gray-500">
//                 Enter your postal code for Delivery Availability
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2 mt-4">
//             <span className="text-black">🔄</span>
//             <div>
//               <p>Return Delivery</p>
//               <p className="text-sm text-gray-500">
//                 Free 30 Days Delivery Returns.{" "}
//                 <a href="#" className="underline">
//                   Details
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <button className="text-gray-400 hover:text-red-500">❤</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // Initialize state unconditionally
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) {
      navigate("/"); // Redirect to home if no product data
    }
  }, [product, navigate]);

  // Guard clause to handle the case where the product is undefined
  if (!product) {
    return null; // You can also return a loading spinner or fallback UI here
  }

  // Functions to handle quantity changes
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" text-black p-6  h-[90vh] flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
      <div className="flex-1 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full h-auto"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <div className="text-yellow-400 flex space-x-1">
            {[...Array(product.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-gray-500">
              ({product.reviews.length} Reviews)
            </span>
          </div>
          <p className="text-green-600 font-semibold">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-2xl font-bold">{product.price}</p>
          <p className="text-gray-500">{product.description}</p>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-300 text-black p-2 rounded-lg"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-gray-300 text-black p-2 rounded-lg"
          >
            +
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>

        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center space-x-2">
            <span className="text-black">🚚</span>
            <div>
              <p>Free Delivery</p>
              <p className="text-sm text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-black">🔄</span>
            <div>
              <p>Return Delivery</p>
              <p className="text-sm text-gray-500">
                Free 30 Days Delivery Returns.{" "}
                <a href="#" className="underline">
                  Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-red-500">❤</button>
      </div>
    </div>
  );
};

export default ProductDetail;
