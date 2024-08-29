import React, { useState } from "react";

function Adduser() {
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/200"
  );
  const [role, setRole] = useState("User"); // Default role selection

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className="w-[100%] p-6 bg-white">
      <>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-black mb-4 text-left">
            Add New User
          </h2>
          <div className="flex justify-center items-center">
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
        </div>

        <form className="flex flex-col space-y-4 pt-5">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded flex-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded flex-1"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Street Address*"
              className="border p-2 rounded flex-1"
            />
            <input
              type="text"
              placeholder="Apartment, floor, etc. (optional)"
              className="border p-2 rounded flex-1"
            />
          </div>
          <input
            type="text"
            placeholder="City/Province"
            className="border p-2 rounded"
          />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded flex-1"
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 rounded flex-1"
            />
          </div>

          {/* Role Selection Dropdown */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <select
              value={role}
              onChange={handleRoleChange}
              className="border p-2 rounded flex-1"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Save
          </button>
        </form>
      </>
    </div>
  );
}

export default Adduser;
