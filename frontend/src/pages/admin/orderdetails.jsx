import React, { useState } from "react";
import { order } from "../../assets/data/orders";

const OrderTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (orderId) => {
    setVisibleDetails(visibleDetails === orderId ? null : orderId);
  };

  return (
    <div className='p-4'>
      <div className='rounded-md px-4 bg-white label lg:w-[100%] md:w-[70%] border-none items-center flex justify-between mb-5'>
        <i className='fa-solid fa-magnifying-glass'></i>
        <input
          type='search'
          placeholder='Search Product'
          className='px-4 bg-transparent focus:outline-none md:w-[100%] lg:w-[100%] h-[45px] items-center'
        />
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white rounded-lg shadow-md'>
          <thead>
            <tr className='text-center '>
              <th className='p-4'>Product</th>
              <th className='p-4 hidden md:table-cell'>Order ID</th>
              <th className='p-4 hidden md:table-cell'>Price</th>
              <th className='p-4 hidden md:table-cell'>Quantity</th>
              <th className='p-4 hidden md:table-cell'>Payment</th>
              <th className='p-4 hidden lg:table-cell'>Status</th>
              <th className='p-4 hidden lg:table-cell'>Tracking</th>
              <th className='p-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((orderItem, index) => (
              <React.Fragment key={index}>
                <tr className='border-t text-center'>
                  <td className='p-4'>
                    <div className='flex justify-center items-center space-x-2'>
                      <img
                        src={orderItem.productImg}
                        alt={orderItem.productName}
                        className='h-12 w-12 rounded-lg object-cover'
                      />
                      <span>{orderItem.productName}</span>
                    </div>
                  </td>
                  <td className='p-4 hidden md:table-cell'>
                    {orderItem.orderId}
                  </td>
                  <td className='p-4 hidden md:table-cell'>
                    {orderItem.price}
                  </td>
                  <td className='p-4 hidden md:table-cell'>
                    {orderItem.quantity}
                  </td>
                  <td className='p-4 hidden md:table-cell'>
                    {orderItem.payment}
                  </td>
                  <td className='p-4 hidden lg:table-cell'>
                    <span
                      className={`px-2 py-1 rounded-md ${
                        orderItem.status === 'Success'
                          ? 'bg-green-100 text-green-700'
                          : orderItem.status === 'Pending'
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {orderItem.status}
                    </span>
                  </td>
                  <td className='p-4 hidden lg:table-cell'>
                    <button className='text-blue-500'>
                      {orderItem.tracking}
                    </button>
                  </td>
                  <td className='p-4'>
                    <div className='flex justify-center space-x-2'>
                      <button
                        className='text-blue-500'
                        onClick={() => toggleDetails(orderItem.orderId)}
                      >
                        <i className='fas fa-eye'></i>
                      </button>
                      <button className='text-green-500'>
                        <i className='fas fa-edit'></i>
                      </button>
                      <button className='text-red-500'>
                        <i className='fas fa-trash'></i>
                      </button>
                    </div>
                  </td>
                </tr>
                {visibleDetails === orderItem.orderId && (
                  <tr className='bg-gray-50'>
                    <td
                      colSpan='8'
                      className='p-4'
                    >
                      <div className='flex flex-col md:flex-row md:space-x-4'>
                        <div className='mb-2 md:mb-0'>
                          <strong>Order ID:</strong> {orderItem.orderId}
                        </div>
                        <div className='mb-2 md:mb-0'>
                          <strong>Price:</strong> {orderItem.price}
                        </div>
                        <div className='mb-2 md:mb-0'>
                          <strong>Quantity:</strong> {orderItem.quantity}
                        </div>
                        <div className='mb-2 md:mb-0'>
                          <strong>Payment:</strong> {orderItem.payment}
                        </div>
                        <div className='mb-2 lg:hidden'>
                          <strong>Status:</strong> {orderItem.status}
                        </div>
                        <div className='mb-2 lg:hidden'>
                          <strong>Tracking:</strong> {orderItem.tracking}
                        </div>
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
  );
};

export default OrderTable;
