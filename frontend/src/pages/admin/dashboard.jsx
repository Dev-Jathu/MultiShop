import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faShoppingCart,
  faUsers,
  faCog,
  faFile,
  faThLarge,
  faBell,
  faSignOutAlt,
  faUserCircle,
  faEdit,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-md transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between">
          <span className={`font-bold text-xl ${!isSidebarOpen && "hidden"}`}>
            Remos
          </span>
          <button className="text-gray-600" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className={`mt-4 ${!isSidebarOpen && "hidden"}`}>
          <SidebarItem icon={faTachometerAlt} label="Dashboard" />
          <SidebarItem
            icon={faShoppingCart}
            label="Ecommerce"
            submenu={["Category", "Attributes", "Order"]}
          />
          <SidebarItem
            icon={faUsers}
            label="User"
            submenu={["Roles", "Gallery", "Report"]}
          />
          <SidebarItem
            icon={faCog}
            label="Setting"
            submenu={["Location", "Setting"]}
          />
          <SidebarItem icon={faFile} label="Pages" />
          <SidebarItem icon={faThLarge} label="Components" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 bg-gray-100">
          {/* Your content goes here */}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, submenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        <span className="ml-4">{label}</span>
        {submenu && (
          <FontAwesomeIcon
            icon="chevron-down"
            className={`w-4 h-4 ml-auto transition-transform ${
              open ? "transform rotate-180" : ""
            }`}
          />
        )}
      </div>
      {submenu && open && (
        <div className="ml-8">
          {submenu.map((item, index) => (
            <div
              key={index}
              className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TopBar = () => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <div className="relative w-2/3">
      <input
        type="text"
        className="w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4"
        placeholder="Search here..."
      />
    </div>
    <div className="flex items-center space-x-4">
      <FontAwesomeIcon icon={faBell} className="w-5 h-5 text-gray-600" />
      <FontAwesomeIcon icon={faCog} className="w-5 h-5 text-gray-600" />
      <Profile />
    </div>
  </header>
);

const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
  };

  const handleFileUpload = () => {
    // Logic for handling file upload
  };

  return (
    <div className="relative">
      <div
        onClick={handleProfileClick}
        className="flex items-center cursor-pointer"
      >
        <img
          src="/path-to-profile.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-2">Kristin Watson</span>
      </div>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <button className="w-full p-2 hover:bg-gray-200 flex items-center">
            <FontAwesomeIcon icon={faUserCircle} className="w-5 h-5 mr-2" />
            View Profile
          </button>
          <button
            className="w-full p-2 hover:bg-gray-200 flex items-center"
            onClick={handleFileUpload}
          >
            <FontAwesomeIcon icon={faEdit} className="w-5 h-5 mr-2" />
            Change Profile
          </button>
          <button className="w-full p-2 hover:bg-gray-200 flex items-center">
            <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
