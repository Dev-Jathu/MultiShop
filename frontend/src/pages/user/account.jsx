import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/authContext';
import Profile from './userprofile';
import Payment from './userpayment';
import Returns from './userreturns';
import Wishlist from './userwishlist';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    sessionStorage.clear();
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    navigate('/');
    toast.success('Logged out successfully');
  };

  return (
    <div className='flex h-screen pt-[160px] '>
      {/* Sidebar */}
      <div className='lg:text-2xl md:text-2xl text-[15px] lg:w-64 md:w-52 w-32 bg-white-300 text-black h-[83vh] p-4 flex flex-col '>
        <h2 className='lg:text-2xl md:text-2xl text-[15px] font-bold mb-8'>
          My Account
        </h2>
        <ul className='space-y-4'>
          <li>
            <button
              className={`${
                activeTab === 'profile' ? 'text-green-500' : ''
              } font-semibold w-full text-left`}
              onClick={() => setActiveTab('profile')}
            >
              <div className='flex items-center gap-4'>
              
                My Profile
              </div>
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'payment' ? 'text-green-500' : ''
              } font-semibold w-full text-left`}
              onClick={() => setActiveTab('payment')}
            >
              My Payment Options
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'returns' ? 'text-green-500' : ''
              } font-semibold w-full text-left`}
              onClick={() => setActiveTab('returns')}
            >
              My Returns
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'wishlist' ? 'text-green-500' : ''
              } font-semibold w-full text-left`}
              onClick={() => setActiveTab('wishlist')}
            >
              My Wishlist
            </button>
          </li>
        </ul>
        <div className='mt-auto'>
          <button
            onClick={handleLogout}
            className='bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md w-full'
          >
            Log-out
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='flex-1 bg-white p-8 '>
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'payment' && <Payment />}
        {activeTab === 'returns' && <Returns />}
        {activeTab === 'wishlist' && <Wishlist />}
      </div>
    </div>
  );
};

export default AdminPage;
