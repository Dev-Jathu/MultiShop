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
    <div className='flex flex-col lg:flex-row h-screen pt-[180px]'>
      <div className='lg:w-[200px] w-full h-auto p-4 bg-white-300 text-black flex lg:flex-col md:flex-row sm:flex-row md:gap-[140px] gap-3 items-center '>
        <ul className='flex lg:flex-col flex-row justify-between  w-full lg:w-auto md:text-[26px] lg:text-[18px]  md:gap-10 lg:gap-5 gap-3 pt-3'>
          <li>
            <button
              className={`${
                activeTab === 'profile' ? 'text-graylight' : ''
               } font-semibold`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'payment' ? 'text-gray-800' : ''
              } font-semibold`}
              onClick={() => setActiveTab('payment')}
            >
              Payment
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'returns' ? 'text-graylight' : ''
              } font-semibold`}
              onClick={() => setActiveTab('returns')}
            >
              Returns
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'wishlist' ? 'text-graylight' : ''
              } font-semibold`}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </button>
          </li>
        </ul>
        <div className='  lg:w-full  w-full lg:pt-[110px] md:pt-0'>
          <button
            onClick={handleLogout}
            className='flex bg-red-600 h-[40px] hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md md:text-[24px]  items-center text-center '
          >
            Log-out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='flex-1 bg-white'>
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'payment' && <Payment />}
        {activeTab === 'returns' && <Returns />}
        {activeTab === 'wishlist' && <Wishlist />}
      </div>
    </div>
  );
};

export default AdminPage;
