import React, { useState, useEffect } from 'react';
import FetchData from '../../hooks/fetchData';
import { BASE_URL, token } from '../../config';
import uploadImage from '../../utils/cloudinary';
import { toast } from 'react-toastify';

const Profile = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const { data: user } = FetchData(`${BASE_URL}/users/profile`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    oldPassword: user?.password || '',
    role: user?.role || '',
    phone: user?.phone || '',
    address: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      state: user?.address?.state || '',
      zipCode: user?.address?.zipCode || '',
      country: user?.address?.country || '',
    },
    image: user?.image || null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || '',
        email: user?.email || '',
        oldPassword: user?.password || '',
        role: user?.role || '',
        phone: user?.phone || '',
        address: {
          street: user?.address?.street || '',
          city: user?.address?.city || '',
          state: user?.address?.state || '',
          zipCode: user?.address?.zipCode || '',
          country: user?.address?.country || '',
        },
        image: user?.image || null,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name.startsWith('address')) {
      const fieldName = e.target.name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [fieldName]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleOpen = async (event) => {
    await event.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(event);
    console.log(token);
    try {
      const res = await fetch(`${BASE_URL}/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Failed to update profile');
      }

      toast.success('Successfully updated!');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files[0];
    if (!files) return;

    try {
      const data = await uploadImage(files);
      setUploadedImageUrl(data.url);
      setFormData((formData) => ({
        ...formData,
        image: data.url,
      }));
    } catch (error) {
      toast.error('Image upload failed');
    }
  };

  return (
    <form className="md:p-4 lg:p-0 p-4 w-[730px]">
      <div className="flex justify-between items-center ">
        <h2 className="text-xl font-semibold text-black">Edit Your Profile</h2>
        <div className="w-20 h-20 flex rounded-full overflow-hidden border-4 border-gray-300">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src={formData.image || uploadedImageUrl}
            alt="Profile"
            onClick={() => document.getElementById("fileInput").click()}
            onChange={handleImageUpload}
          />
        </div>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
      <div className="space-y-[15px] w-[730px]">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded w-full"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="phone Number"
          className="border p-2 rounded w-full"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          className="hidden"
          type="text"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          disabled
        />

        {/* Address Field */}
        <fieldset className="w-full space-y-[26.5px]">
          <input
            type="text"
            placeholder="Street"
            name="address.street"
            value={formData.address.street}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            name="address.state"
            placeholder="State"
            className="border p-2 rounded w-full"
            value={formData.address.state}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="address.zipCode"
            placeholder="Zip Code"
            className="border p-2 rounded w-full"
            value={formData.address.zipCode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address.country"
            placeholder="Country"
            className="border p-2 rounded w-full"
            value={formData.address.country}
            onChange={handleInputChange}
          />
        </fieldset>

        <button
          onClick={handleOpen}
          className="w-full bg-graylight text-white font-bold py-2 px-4 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Save
        </button>
      </div>

      {/* Modal for Password Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Confirm Password</h3>
            <input
              name="oldPassword"
              type="password"
              placeholder="Enter your password"
              className="border p-2 rounded w-full mb-4"
              value={formData.oldPassword}
              onChange={handleInputChange}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Profile;
