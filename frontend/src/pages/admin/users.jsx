import React, { useState,useEffect } from "react";
import FetchData from "../../hooks/fetchData";
import { BASE_URL} from "../../config";


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
            {data.map((user, index) => (
              <React.Fragment key={index}>
                <tr className="border-t text-center">
                  <td className="p-4">
                    <div className="flex justify-center items-center space-x-2">
                      <img
                        src={user.images}
                        alt={user.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4 hidden lg:table-cell">{user.email}</td>
                  <td className="p-4 hidden lg:table-cell">{user.phone}</td>
                  <td className="p-4 hidden lg:table-cell">{user.address}</td>
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
                          <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {user.phone}
                        </p>
                        <p>
                          <strong>Address:</strong> {user.address}
                        </p>
                      </div>
                    </td>
                    <td
                      colSpan="6"
                      className="p-4 text-left hidden lg:table-cell"
                    >
                      <div className="space-y-2">
                        <p>
                          <strong>Phone:</strong> {user.phone}
                        </p>
                        <p>
                          <strong>Email:</strong> {user.email}
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
