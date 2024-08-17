import React, { useState } from "react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/200"
  );
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:h-[100vh] md:h-[80vh] h-full lg:pt-2 md:pt-2 p-6">
      <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-10 w-full max-w-5xl">
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4 text-center">
            Manage My Account
          </h2>
          <ul className="space-y-2 text-center">
            <li>
              <button
                className={`font-semibold ${
                  activeTab === "profile" ? "text-green-500" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                My Profile
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${
                  activeTab === "payment" ? "text-green-500" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("payment")}
              >
                My Payment Options
              </button>
            </li>
            <li>
              <button
                className={`font-semibold ${
                  activeTab === "returns" ? "text-green-500" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("returns")}
              >
                My Returns
              </button>
            </li>
          </ul>
          <h2 className="text-lg font-bold mt-6 mb-4 text-center">
            My Wishlist
          </h2>
          <ul className="space-y-2 text-center">
            <li>
              <button
                className={`font-semibold ${
                  activeTab === "wishlist" ? "text-green-500" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("wishlist")}
              >
                My Wishlist
              </button>
            </li>
          </ul>
          <h2 className="text-lg font-bold mt-6 mb-4 text-center">
            Additional Options
          </h2>
          <ul className="space-y-2 text-center">
            <li>
              <button
                className={`font-semibold ${
                  activeTab === "extra" ? "text-green-500" : "text-gray-700"
                }`}
                onClick={() => setActiveTab("extra")}
              >
                Extra Button
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/4 bg-white shadow-md rounded-lg p-6">
          {activeTab === "profile" && (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-green-500 mb-4 text-left">
                  Edit Your Profile
                </h2>
                <div className="flex justify-center items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300">
                    <img
                      className="w-full h-full object-cover cursor-pointer"
                      src={selectedImage}
                      alt="Profile"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
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
              </form>
            </>
          )}

          {activeTab === "payment" && (
            <div>
              <h2 className="text-xl font-semibold text-green-500 mb-4 text-center">
                My Payment Options
              </h2>
              <p className="text-center text-gray-700">
                Payment options content goes here.
              </p>
            </div>
          )}

          {activeTab === "returns" && (
            <div>
              <h2 className="text-xl font-semibold text-green-500 mb-4 text-center">
                My Returns
              </h2>
              <p className="text-center text-gray-700">
                Returns content goes here.
              </p>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div>
              <h2 className="text-xl font-semibold text-green-500 mb-4 text-center">
                My Wishlist
              </h2>
              <p className="text-center text-gray-700">
                Wishlist content goes here.
              </p>
            </div>
          )}

          {activeTab === "extra" && (
            <div>
              <h2 className="text-xl font-semibold text-green-500 mb-4 text-center">
                Extra Button
              </h2>

              <p className="text-center text-gray-700">
                Extra content goes here.
              </p>
            </div>
          )}

          <div className="flex justify-center space-x-4 mt-6">
            <button className="text-gray-700">Cancel</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
