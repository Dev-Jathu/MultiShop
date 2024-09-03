import React, { useState, useEffect } from 'react';
import { ProductData } from '../../assets/data/product';

const ProductTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);


  useEffect(() => {
    const handleScroll = () => {
      setVisibleDetails(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen bg-white flex items-center justify-center">
        <div className="w-full lg:w-4/5">
          <div className="overflow-x-auto bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Stock
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Category
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Quantity
                  </th>

                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-black font-bold text-md">
                {ProductData.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <tr
                      className={`border-b border-gray-200 hover:bg-gray-100 ${
                        index % 2 ? "bg-gray-50 " : ""
                      }`}
                    >
                      <td className="py-3 px-6 text-left flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <span>{product.name}</span>
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        <span
                          className={`bg-${
                            product.stock > 0 ? "green" : "red"
                          }-200 text-${
                            product.stock > 0 ? "green" : "red"
                          }-600 py-1 px-3 rounded-full text-xs`}
                        >
                          {product.stock > 0 ? "In stock" : "Out of stock"}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.category || "No category"}
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.stock || "NO "}
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center space-x-2">
                          <button className="text-blue-500">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-500">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="text-red-500">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {visibleDetails === product.id && (
                      <tr className="bg-gray-100">
                        <td colSpan="4" className="py-3 px-6">
                          <div className="flex flex-col md:hidden">
                            <p className="font-semibold">
                              Stock:{" "}
                              <span
                                className={`bg-${
                                  product.stock > 0 ? "green" : "red"
                                }-200 text-${
                                  product.stock > 0 ? "green" : "red"
                                }-600 py-1 px-3 rounded-full text-xs`}
                              >
                                {product.stock > 0
                                  ? "In stock"
                                  : "Out of stock"}
                              </span>
                            </p>
                            <p className="font-semibold">
                              Category: {product.category || "No category"}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
