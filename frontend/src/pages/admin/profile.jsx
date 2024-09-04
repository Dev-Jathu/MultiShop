import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

function Adminprofile() {
  const [data, setData] = useState(null);
  const { data: profile } = FetchData(`${BASE_URL}/users/profile`);

  useEffect(() => {
    if (profile) {
      setData(profile);
    }
  }, [profile]);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save the data
  };

  return (
    <>
      <div className="w-[100%] bg-white p-10 justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 pt-5">
          <div className="flex justify-between text-[20px]">
            <p>Your Profile</p>
            <img
              src={data.avatarUrl || "http://www.gravatar.com/avatar/?d=mp"}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              name="name"
              value={data.name || ""}
              onChange={handleChange}
              placeholder=""
              className="border p-2 rounded flex-1"
            />
          </div>
          <input
            type="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="password"
              name="password"
              value={data.password || ""}
              onChange={handleChange}
              placeholder="Password"
              className="border p-2 rounded flex-1"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Confirm Password"
              className="border p-2 rounded flex-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Adminprofile;
