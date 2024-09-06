import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/fetchData";
import { BASE_URL } from "../../config";

const UserTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);
  const [data, setData] = useState([]);
  const { data: users } = FetchData(`${BASE_URL}/users`);

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);

  if (!data.length) {
    return <p>Loading...</p>;
  }
  const toggleDetails = (index) => {
    setVisibleDetails(visibleDetails === index ? null : index);
  };
  console.log(users);
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left bg-white">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4 hidden lg:table-cell">Email</th>
              <th className="p-4 hidden lg:table-cell">Phone</th>
              <th className="p-4 hidden lg:table-cell">Role</th>
              <th className="p-4 hidden lg:table-cell">Active</th>
              <th className="p-4 hidden lg:table-cell w-[100px] ">Address</th>
              <th className="p-4 lg:hidden">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <React.Fragment key={index}>
                <tr className="border-t text-left ">
                  <td className="p-4">
                    <div className="flex justify-left items-center space-x-2">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4 hidden lg:table-cell ">{user.email}</td>
                  <td className="p-4 hidden lg:table-cell">{user.phone}</td>
                  <td className="p-4 hidden lg:table-cell">{user.role}</td>
                  <td className="p-4 hidden lg:table-cell">{user.isActive}</td>
                  <td className="p-4 hidden lg:table-cell overflow-hidden ">
                    {user.address?.street},{user.address?.city},
                    {user.address?.state},{user.address?.zipCode},
                    {user.address?.country}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center space-x-2 ">
                      <button
                        className="text-black lg:hidden"
                        onClick={() => toggleDetails(index)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button
                        className="text-primary"
                        // onClick={() => toggleDetails(index)}
                      >
                        <i class="fa-solid fa-ban"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                {visibleDetails === index && (
                  <tr className="bg-gray-50">
                    <td colSpan="6" className="p-4 text-left lg:hidden">
                      <div className="space-y-2">
                        <p>
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {user.phone}
                        </p>
                        <p>
                          <strong>Role:</strong> {user.role}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
