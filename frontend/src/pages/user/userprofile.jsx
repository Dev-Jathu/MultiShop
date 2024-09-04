import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/200"
  );
  const { data: user } = FetchData(`${BASE_URL}/users/profile`);
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (user) {
      setData(user);
    }
  }, [user]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true); // Open the modal
  };

  const handleConfirmPassword = () => {
    if (confirmPassword) {
      // Handle save logic here (e.g., API call to update the profile)
      console.log("Profile saved successfully!");
      setIsModalOpen(false); // Close the modal
    } else {
      alert("Please enter your password to confirm.");
    }
  };

  return (
    <div className="md:p-4 lg:p-0 p-4 w-[50%]">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-black">Edit Your Profile</h2>
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300">
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
      <form className="space-y-4" onSubmit={handleSaveClick}>
        <div className=" ">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded w-full"
            value={data.name || ""}
          />
   
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          value={data.email || ""}
        />
        <input
          type="text"
          placeholder="Street Address*"
          className="border p-2 rounded w-full"
          value={data.address?.street || ""}
        />
        <input
          type="text"
          placeholder="City/Province"
          className="border p-2 rounded w-full"
          value={data.address?.city || ""}
        />
        <input
          type="text"
          placeholder="State"
          className="border p-2 rounded w-full"
          value={data.address?.state || ""}
        />
        <input
          type="text"
          placeholder="Zipcode"
          className="border p-2 rounded w-full"
          value={data.address?.zipCode || ""}
        />
        <input
          type="text"
          placeholder="Country"
          className="border p-2 rounded w-full"
          value={data.address?.country || ""}
        />
        <button
          type="submit"
          className="w-full bg-graylight text-white font-bold py-2 px-4 rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Save
        </button>
      </form>

      {/* Modal for Password Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Confirm Password</h3>
            <input
              type="password"
              placeholder="Enter your password"
              className="border p-2 rounded w-full mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary"
                onClick={handleConfirmPassword}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
