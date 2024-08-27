import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600 text-sm sm:text-base">
                Total Sales
              </h4>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                34,945
              </p>
              <p className="text-green-500 text-sm">1.56% ↑</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600 text-sm sm:text-base">
                Total Income
              </h4>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                $37,802
              </p>
              <p className="text-red-500 text-sm">1.56% ↓</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600 text-sm sm:text-base">
                Orders Paid
              </h4>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                34,945
              </p>
              <p className="text-gray-500 text-sm">0.00%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="flex-grow">
              <h4 className="text-gray-600 text-sm sm:text-base">
                Total Visitors
              </h4>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                34,945
              </p>
              <p className="text-green-500 text-sm">1.56% ↑</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Selling Products & Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h4 className="text-gray-700 font-semibold text-sm sm:text-base">
              Top Selling Product
            </h4>
            <Link to="/" className="text-blue-500 text-xs sm:text-sm">
              View all
            </Link>
          </div>
          <div>
            {/* Repeat this block for each product */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <img
                  src="path-to-image"
                  alt="Product"
                  className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-lg"
                />
                <div className="ml-3 sm:ml-4">
                  <h5 className="text-gray-700 font-medium text-sm sm:text-base">
                    Patimax Fragrance Long...
                  </h5>
                  <p className="text-gray-500 text-xs sm:text-sm">X1</p>
                </div>
              </div>
              <p className="text-gray-900 text-sm sm:text-base">$28,67</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h4 className="text-gray-700 font-semibold text-sm sm:text-base">
              Orders
            </h4>
            <Link to="/" className="text-blue-500 text-xs sm:text-sm">
              ...
            </Link>
          </div>
          <div>
            {/* Repeat this block for each order */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <img
                  src="path-to-image"
                  alt="Product"
                  className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-lg"
                />
                <div className="ml-3 sm:ml-4">
                  <h5 className="text-gray-700 font-medium text-sm sm:text-base">
                    Sojos Crunchy Natural Grain Free...
                  </h5>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    20 Nov 2023
                  </p>
                </div>
              </div>
              <p className="text-gray-900 text-sm sm:text-base">$20 Nov 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Group of Potential Customers & Top Countries By Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h4 className="text-gray-700 font-semibold text-sm sm:text-base">
              Group of Potential Customers
            </h4>
            <Link to="/" className="text-blue-500 text-xs sm:text-sm">
              ...
            </Link>
          </div>
          <div>
            {/* Repeat this block for each customer group */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h5 className="text-gray-700 font-medium text-sm sm:text-base">
                  18-22
                </h5>
                <p className="text-gray-500 text-xs sm:text-sm">Industrial</p>
              </div>
              <p className="text-gray-900 text-sm sm:text-base">130</p>
              <p className="text-gray-500 text-xs sm:text-sm">India</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h4 className="text-gray-700 font-semibold text-sm sm:text-base">
              Top Countries By Sales
            </h4>
            <Link to="/" className="text-blue-500 text-xs sm:text-sm">
              View all
            </Link>
          </div>
          <div>
            {/* Repeat this block for each country */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <img
                  src="path-to-flag"
                  alt="Country"
                  className="w-5 sm:w-6 h-5 sm:h-6 object-cover rounded-full"
                />
                <div className="ml-3 sm:ml-4">
                  <h5 className="text-gray-700 font-medium text-sm sm:text-base">
                    Turkey
                  </h5>
                </div>
              </div>
              <p className="text-gray-900 text-sm sm:text-base">6,972</p>
              <p className="text-green-500 text-xs sm:text-sm">↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
