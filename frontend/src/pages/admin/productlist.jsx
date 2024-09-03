import React, { useState, useEffect } from 'react';
import FetchData from '../../hooks/fetchData';
import { toast } from 'react-toastify';
import { BASE_URL, token } from '../../config';

const ProductTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [data, setData] = useState([]);
  const { data: productData } = FetchData(`${BASE_URL}/products`);

  useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, [productData]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?'))
      return;

    try {
      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      toast.success('Product deleted successfully!');
      setData((prevData) => prevData.filter((product) => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const handleScroll = () => setVisibleDetails(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen flex items-center justify-center">
        <div className="w-full lg:w-4/5">
          <div className="overflow-x-auto bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="border h-[70px] text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left hidden lg:table-cell">
                    Price
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Quantity
                  </th>
                  <th className="py-3 px-6 text-left hidden lg:table-cell">
                    Discount
                  </th>
                  <th className="py-3 px-6 text-left hidden lg:table-cell">
                    Expired Date
                  </th>
                  <th className="py-3 px-6 text-left hidden md:table-cell">
                    Stock
                  </th>
                  <th className="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-black font-bold text-md">
                {data.map((product, index) => (
                  <React.Fragment key={product._id}>
                    <tr
                      className={`border-b border-gray-200 hover:bg-gray-100 ${
                        index % 2 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="py-3 px-6 text-left flex items-center">
                        <img
                          src={product.images}
                          alt={product.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <span>{product.name}</span>
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.price}
                      </td>
                      <td className="py-3 px-6 text-left hidden md:table-cell">
                        {product.stock}
                      </td>
                      <td className="py-3 px-6 text-left hidden lg:table-cell">
                        {product.discount}%
                      </td>
                      <td className="py-3 px-6 text-left hidden lg:table-cell">
                        {product.expiredDate}
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
                      <td className="p-4">
                        <div className="flex justify-center space-x-2">
                          <button
                            className="text-blue-500"
                            onClick={() => toggleDetails(product._id)}
                          >
                            <i className="fas fa-info-circle"></i>
                          </button>

                          <button className="text-green-500">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() => handleDelete(product._id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {visibleDetails === product._id && (
                      <tr className="bg-gray-100">
                        <td colSpan="7" className="py-3 px-6">
                          <div className="flex flex-col md:hidden">
                            <p className="font-semibold">
                              Price: {product.price}
                            </p>
                            <p className="font-semibold">
                              Price:
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
                              Quantity: {product.stock}
                            </p>
                            <p className="font-semibold">
                              Discount: {product.discount}%
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
