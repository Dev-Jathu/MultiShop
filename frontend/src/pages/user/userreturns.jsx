import React from 'react';

const Returns = () => {
  return (
    <div className="md:p-4 lg:p-0 p-4 w-[50%]">
      <h2 className="text-xl font-semibold text-black mb-4">My Returns</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Product</th>
            <th className="py-2">Price</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Total</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1].map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">
                <img
                  src="https://via.placeholder.com/50"
                  alt="product"
                  className="inline-block "
                />
                Leg piece
              </td>
              <td className="py-2">$650</td>
              <td className="py-2">
                <input
                  type="text"
                  defaultValue="03"
                  className="w-12 text-center border rounded"
                />
              </td>
              <td className="py-2">$650</td>
              <td className="py-2">
                <button className="text-red-500">
                  <i className="fas fa-times"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Returns;
