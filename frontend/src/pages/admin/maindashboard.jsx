import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600">Total Sales</h4>
              <p className="text-2xl font-bold text-gray-900">34,945</p>
              <p className="text-green-500">1.56% ↑</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600">Total Income</h4>
              <p className="text-2xl font-bold text-gray-900">$37,802</p>
              <p className="text-red-500">1.56% ↓</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600">Orders Paid</h4>
              <p className="text-2xl font-bold text-gray-900">34,945</p>
              <p className="text-gray-500">0.00%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600">Total Visitors</h4>
              <p className="text-2xl font-bold text-gray-900">34,945</p>
              <p className="text-green-500">1.56% ↑</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-700 font-semibold">Top Selling Product</h4>
            <a href="#" className="text-blue-500 text-sm">
              View all
            </a>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="path-to-image"
                  alt="Product"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h5 className="text-gray-700 font-medium">
                    Patimax Fragrance Long...
                  </h5>
                  <p className="text-gray-500 text-sm">X1</p>
                </div>
              </div>
              <p className="text-gray-900">$28,67</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-700 font-semibold">Orders</h4>
            <a href="#" className="text-blue-500 text-sm">
              ...
            </a>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="path-to-image"
                  alt="Product"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h5 className="text-gray-700 font-medium">
                    Sojos Crunchy Natural Grain Free...
                  </h5>
                  <p className="text-gray-500 text-sm">20 Nov 2023</p>
                </div>
              </div>
              <p className="text-gray-900">$20 Nov 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-700 font-semibold">
              Group of Potential Customers
            </h4>
            <a href="#" className="text-blue-500 text-sm">
              ...
            </a>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h5 className="text-gray-700 font-medium">18-22</h5>
                <p className="text-gray-500 text-sm">Industrial</p>
              </div>
              <p className="text-gray-900">130</p>
              <p className="text-gray-500">India</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-gray-700 font-semibold">
              Top Countries By Sales
            </h4>
            <a href="" className="text-blue-500 text-sm">
           
              View all
            </a>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="path-to-flag"
                  alt="Country"
                  className="w-6 h-6 object-cover rounded-full"
                />
                <div className="ml-4">
                  <h5 className="text-gray-700 font-medium">Turkey</h5>
                </div>
              </div>
              <p className="text-gray-900">6,972</p>
              <p className="text-green-500">↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
