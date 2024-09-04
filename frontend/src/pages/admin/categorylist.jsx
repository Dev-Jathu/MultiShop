import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/fetchData";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../config";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ProductTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const { data: productData } = FetchData(`${BASE_URL}/products`);

  useEffect(() => {
    if (productData) {
      setData(productData);
    }
  }, [productData]);

  const handleDelete = async () => {
    if (!productToDelete) return;

    try {
      const response = await fetch(
        `${BASE_URL}/products/${productToDelete._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      toast.success("Product deleted successfully!");
      setData((prevData) =>
        prevData.filter((product) => product._id !== productToDelete._id)
      );
      closeModal();
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const openModal = (product) => {
    setProductToDelete(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  const handleScroll = () => setVisibleDetails(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data.length) {
    return <p>Loading...</p>;
  }

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
                {productData.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <tr
                      className={`border-b border-gray-200 hover:bg-gray-100 ${
                        index % 2 ? "bg-gray-50 " : ""
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
                          <button
                            className="text-black"
                            onClick={() => toggleDetails(product._id)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="text-green-500">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() => openModal(product)}
                          >
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
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          >
            <div className="bg-white p-6 rounded shadow-lg max-w-sm mx-auto">
              {productToDelete && (
                <>
                  <div className="flex items-center mb-4">
                    <img
                      src={productToDelete.images}
                      alt={productToDelete.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <p className="text-lg font-semibold">
                      {productToDelete.name}
                    </p>
                  </div>
                  <p className="mb-4">
                    Are you sure you want to delete this product?
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={handleDelete}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
