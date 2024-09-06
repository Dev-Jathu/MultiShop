import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/authContext";
import Profile from "./userprofile";
import Payment from "./userpayment";
import Returns from "./userreturns";
import Wishlist from "./userwishlist";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    sessionStorage.clear();
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="flex h-[100vh] bg-gray-100 justify-center items-center p-4">
      {/* Container */}
      <div className="flex h-[70vh] w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 bg-gray-800 text-white flex flex-col justify-between p-4">
          {/* User Info */}
          <div className="flex flex-col items-center py-6">
            <div className="w-16  bg-gray-600 rounded-full mb-4"></div>
            <h2 className="text-lg font-semibold">Name Surname</h2>
            <p className="text-sm">Lorem Ipsum</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex-grow space-y-3">
            {["profile", "payment", "returns", "wishlist"].map((tab) => (
              <li key={tab}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "text-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md mt-4"
          >
            Log-out
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          
          {/* Tab Content */}
          <div className="bg-white rounded-md p-4">
            {activeTab === "profile" && <Profile />}
            {activeTab === "payment" && <Payment />}
            {activeTab === "returns" && <Returns />}
            {activeTab === "wishlist" && <Wishlist />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
