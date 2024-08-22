import React from "react";
import { User } from "../../assets/data/user";

const UserTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-center bg-gray-100">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Address</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {User.map((userItem, index) => (
              <tr key={index} className="border-t text-center">
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
                <td className="p-4">{userItem.Email}</td>
                <td className="p-4">{userItem.Phone}</td>
                <td className="p-4">{userItem.Address}</td>
                <td className="p-4">
                  <div className="flex justify-center space-x-2">
                    <button className="text-blue-500">
                      <i className="fas fa-eye"></i>
                    </button>
                   
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
