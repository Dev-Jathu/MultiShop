import React, { useState } from "react";
import { User } from "../../assets/data/user";

const UserTable = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const toggleDetails = (index) => {
    setVisibleDetails(visibleDetails === index ? null : index);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-center bg-white">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4 hidden lg:table-cell">Email</th>
              <th className="p-4 hidden lg:table-cell">Phone</th>
              <th className="p-4 hidden lg:table-cell">Address</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {User.map((userItem, index) => (
              <React.Fragment key={index}>
                <tr className="border-t text-center">
                  <td className="p-4">
                    <div className="flex justify-center items-center space-x-2">
                      <img
                        src={userItem.image}
                        alt={userItem.Name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-4">{userItem.Name}</td>
                  <td className="p-4 hidden lg:table-cell">{userItem.Email}</td>
                  <td className="p-4 hidden lg:table-cell">{userItem.Phone}</td>
                  <td className="p-4 hidden lg:table-cell">
                    {userItem.Address}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-500"
                        onClick={() => toggleDetails(index)}
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                {visibleDetails === index && (
                  <tr className="bg-gray-50">
                    <td colSpan="6" className="p-4 text-left lg:hidden">
                      <div className="space-y-2">
                        <p>
                          <strong>Email:</strong> {userItem.Email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {userItem.Phone}
                        </p>
                        <p>
                          <strong>Address:</strong> {userItem.Address}
                        </p>
                      </div>
                    </td>
                    <td
                      colSpan="6"
                      className="p-4 text-left hidden lg:table-cell"
                    >
                      <div className="space-y-2">
                        <p>
                          <strong>Phone:</strong> {userItem.Phone}
                        </p>
                        <p>
                          <strong>Email:</strong> {userItem.Email}
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
