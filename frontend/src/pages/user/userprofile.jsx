import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/fetchData";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/200"
  );
  const { data: user } = FetchData(`${BASE_URL}/users/profile`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: user?.password || "",
    role: user?.role || "",
    phone: user?.phone || "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        password: user?.password || "",
        role: user?.role || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleOpen = async (event) => {
    await event.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to update profile");
      }

      toast.success("Successfully updated!");
      navigate(`/users/profile/me`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="md:p-4 lg:p-0 p-4 w-[730px]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-black">Edit Your Profile</h2>
        <div className="w-20 h-20 flex rounded-full overflow-hidden border-4 border-gray-300">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src={selectedImage}
            alt="Profile"
            onClick={() => document.getElementById("fileInput").click()}
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
      <div className="space-y-[26.5px] w-[730px]">
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
          type="text"
          placeholder="Street Address*"
          className="border p-2 rounded w-full"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="City/Province"
          className="border p-2 rounded w-full"
          name="addressCity"
          value={formData.addressCity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="State"
          className="border p-2 rounded w-full"
          name="addressState"
          value={formData.addressState}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Zipcode"
          className="border p-2 rounded w-full"
          name="addressZipcode"
          value={formData.addressZipcode}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Country"
          className="border p-2 rounded w-full"
          name="addressCountry"
          value={formData.addressCountry}
          onChange={handleInputChange}
        />
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
              type="password"
              placeholder="Enter your password"
              className="border p-2 rounded w-full mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
