import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../context/authContext';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedImage, setSelectedImage] = useState(
    'https://via.placeholder.com/200'
  );

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

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
    <div className='flex h-screen pt-[160px]'>
      {/* Sidebar */}
      <div className='w-64 bg-gray-300 text-black h-[83vh] p-4 flex flex-col '>
        <h2 className='text-2xl font-bold mb-8'>My Account</h2>
        <ul className='space-y-4'>
          <li>
            <button
              className={`${
                activeTab === 'profile' ? 'text-green-500' : ''
              } font-semibold w-full text-left`}
              onClick={() => setActiveTab('profile')}
            >
              <div className='flex items-center gap-4' >
              <i class="fa fa-user" aria-hidden="true"></i>
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
      <div className='flex-1 bg-white p-8 overflow-auto'>
        {activeTab === 'profile' && (
          <div>
            
            <div className='flex justify-between items-center mb-8'>
              <h2 className='text-xl font-semibold text-green-500 mb-4'>
                Edit Your Profile
              </h2>
              <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300'>
                <img
                  className='w-full h-full object-cover cursor-pointer'
                  src={selectedImage}
                  alt='Profile'
                  onClick={() => document.getElementById('fileInput').click()}
                />
              </div>
              <input
                type='file'
                id='fileInput'
                className='hidden'
                accept='image/*'
                onChange={handleImageUpload}
              />
            </div>
            <form className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='border p-2 rounded w-full'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='border p-2 rounded w-full'
                />
              </div>
              <input
                type='email'
                placeholder='Email'
                className='border p-2 rounded w-full'
              />
              <input
                type='text'
                placeholder='Street Address*'
                className='border p-2 rounded w-full'
              />
              <input
                type='text'
                placeholder='Apartment, floor, etc. (optional)'
                className='border p-2 rounded w-full'
              />
              <input
                type='text'
                placeholder='City/Province'
                className='border p-2 rounded w-full'
              />
              <input
                type='password'
                placeholder='Password'
                className='border p-2 rounded w-full'
              />
            </form>
          </div>
        )}

        {activeTab === 'payment' && (
          <div>
            <h2 className='text-xl font-semibold text-green-500 mb-4'>
              Edit Your Payment
            </h2>
            <form className='space-y-4'>
              <div className='flex flex-col'>
                <label className='font-semibold'>Name on card</label>
                <input
                  type='text'
                  placeholder='Enter name on card'
                  className='border p-2 rounded'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='font-semibold'>Card Number</label>
                  <input
                    type='text'
                    placeholder='XXXX-XXXX-XXXX-XXXX'
                    className='border p-2 rounded w-full'
                  />
                </div>
                <div>
                  <label className='font-semibold'>CVV</label>
                  <input
                    type='text'
                    placeholder='Enter CVV'
                    className='border p-2 rounded w-full'
                  />
                </div>
              </div>
              <div className='flex justify-center space-x-4 mt-6'>
                <button className='text-gray-700'>Cancel</button>
                <button className='bg-green-500 text-white px-4 py-2 rounded'>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'returns' && (
          <div>
            <h2 className='text-xl font-semibold text-green-500 mb-4'>
              My Returns
            </h2>
            <table className='min-w-full bg-white'>
              <thead>
                <tr>
                  <th className='py-2'>Product</th>
                  <th className='py-2'>Price</th>
                  <th className='py-2'>Amount</th>
                  <th className='py-2'>Total</th>
                  <th className='py-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((item, index) => (
                  <tr
                    key={index}
                    className='text-center'
                  >
                    <td className='py-2'>
                      <img
                        src='https://via.placeholder.com/50'
                        alt='product'
                        className='inline-block'
                      />
                      Leg piece
                    </td>
                    <td className='py-2'>$650</td>
                    <td className='py-2'>
                      <input
                        type='text'
                        defaultValue='03'
                        className='w-12 text-center border rounded'
                      />
                    </td>
                    <td className='py-2'>$650</td>
                    <td className='py-2'>
                      <button className='text-red-500'>
                        <i className='fas fa-times'></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div>
            <h2 className='text-xl font-semibold text-green-500 mb-4 text-center'>
              My Wishlist (4)
            </h2>
            <div className='flex justify-between gap-4'>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className='relative text-center items-center'
                >
                  <button className='absolute top-0 right-0 text-red-500 mt-2 mr-2'>
                    <i className='fas fa-trash'></i>
                  </button>

                  <img
                    src='https://via.placeholder.com/150'
                    alt='Product'
                    className='w-[200px] mb-2'
                  />
                  <button className='bg-green-500 text-white py-1 px-2 rounded mb-2'>
                    Add To Cart
                  </button>
                  <p>Chicken Leg</p>
                  <p>$50</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
