import React, { useState, useEffect } from "react";
import { ProductData } from "../../assets/data/product";

const ProductTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const handleEyeClick = (id) => {
    setVisibleDetails((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisibleDetails(null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
                    Product ID
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Price
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Quantity
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Sale
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Stock
                  </th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-black font-bold text-md ">
                {ProductData.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <tr
                      className={`border-b border-gray-200 hover:bg-gray-100 ${
                        index % 2 ? "bg-gray-50 " : ""
                      }`}
                    >
                      <td className="py-3 px-6 text-left flex items-center ">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-full mr-3 "
                        />
                        <span>{product.name}</span>
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.id}
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.price}
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.stock}
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.discount}
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
                      <td className="py-3 px-6 text-center">
                        <button
                          className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110"
                          onClick={() => handleEyeClick(product.id)}
                        >
                          <i className="fas fa-eye"></i>
                        </button>
                        <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                        <button className="w-4 transform hover:text-purple-500 hover:scale-110">
                          <i className="fas fa-edit"></i>
                        </button>
                      </td>
                    </tr>
                    {visibleDetails === product.id && (
                      <tr className="bg-gray-100">
                        <td colSpan="7" className="py-3 px-6">
                          <div className="flex flex-col md:hidden">
                            <p className="font-semibold">
                              Product ID: {product.id}
                            </p>
                            <p className="font-semibold">
                              Price: {product.price}
                            </p>
                            <p className="font-semibold">
                              Quantity: {product.stock}
                            </p>
                            <p className="font-semibold">
                              Sale: {product.discount}
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
 