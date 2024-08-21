import React from 'react';

const orders = [
  {
    productImg: 'https://via.placeholder.com/50',
    productName: 'Kristin Watson',
    orderId: '#7712309',
    price: '$1,452.500',
    quantity: '1,638',
    payment: '20',
    status: 'Success',
    tracking: 'Tracking',
    action: 'View',
  },
  // Add more orders as needed
];

const OrderTable = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <input
          type='text'
          placeholder='Search here...'
          className='p-2 border rounded-md'
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Export all orders
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white rounded-lg shadow-md'>
          <thead>
            <tr className='text-center bg-gray-100'>
              <th className='p-4'>Product</th>
              <th className='p-4'>Order ID</th>
              <th className='p-4'>Price</th>
              <th className='p-4'>Quantity</th>
              <th className='p-4'>Payment</th>
              <th className='p-4'>Status</th>
              <th className='p-4'>Tracking</th>
              <th className='p-4'>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className='border-t text-center'
              >
                <td className='p-4'>
                  <div className='flex justify-center items-center space-x-2'>
                    <img
                      src={order.productImg}
                      alt={order.productName}
                      className='h-12 w-12 rounded-lg object-cover'
                    />
                    <span>{order.productName}</span>
                  </div>
                </td>
                <td className='p-4'>{order.orderId}</td>
                <td className='p-4'>{order.price}</td>
                <td className='p-4'>{order.quantity}</td>
                <td className='p-4'>{order.payment}</td>
                <td className='p-4'>
                  <span
                    className={`px-2 py-1 rounded-md ${
                      order.status === 'Success'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'Pending'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className='p-4'>
                  <button className='text-blue-500'>{order.tracking}</button>
                </td>
                <td className='p-4'>
                  <div className='flex justify-center space-x-2'>
                    <button className='text-blue-500'>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
