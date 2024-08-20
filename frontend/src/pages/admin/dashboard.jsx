import React, { useState } from "react";

const AdminPanel = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <div className="grid grid-cols-5 gap-4 text-center">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Total Products</h3>
                <p className="text-2xl font-bold">150</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Offer Products</h3>
                <p className="text-2xl font-bold">30</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Return Details</h3>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Top Sales</h3>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">Add New Product</h3>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </div>
        );
      case "accounts":
        return <div>Accounts Page</div>;
      case "cards":
        return <div>Cards Page</div>;
      case "transaction":
        return <div>Transaction Page</div>;
      case "spend-groups":
        return <div>Spend Groups Page</div>;
      case "integrations":
        return <div>Integrations Page</div>;
      case "payees":
        return <div>Payees Page</div>;
      case "invoices":
        return <div>Invoices Page</div>;
      default:
        return <div>Dashboard Page</div>;
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-screen bg-gray-100 p-4 flex flex-col">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 rounded-full w-12 h-12"></div>
          <div>
            <h3 className="font-semibold">Kevin Dukkon</h3>
            <p className="text-sm text-gray-500">hey@kevdu.co</p>
          </div>
          <button className="pl-[140px]">
            <i className="fa fa-plus text-[24px]" aria-hidden="true"></i>
          </button>
        </div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search"
            className="p-2 w-full rounded-md border border-gray-300"
          />
        </div>
        <nav className="mt-6">
          <ul>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("accounts")}
            >
              Accounts
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("cards")}
            >
              Cards
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("transaction")}
            >
              Transaction
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("spend-groups")}
            >
              Spend Groups
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("integrations")}
            >
              Integrations
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("payees")}
            >
              Payees
            </li>
            <li
              className="py-2 text-gray-700 cursor-pointer"
              onClick={() => setActivePage("invoices")}
            >
              Invoices
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-3/4 h-screen p-6 bg-white">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;
