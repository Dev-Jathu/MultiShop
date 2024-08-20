import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faShoppingCart,
  faUsers,
  faUser ,
  faCog,
  faBell,
  faSignOutAlt,
  faUserCircle,
  faEdit,
  faBars,
  faClipboardList, 
  faImages, 
} from "@fortawesome/free-solid-svg-icons";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
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
            submenu={["Add Product", "Product list"]}
          />
          <SidebarItem
            icon={faUsers}
            label="Categories"
            submenu={["Category list", "Add New Product"]}
          />
          <SidebarItem
            icon={faClipboardList}
            label="Order"
            submenu={["Order list"]}
          />
          <SidebarItem
            icon={faUser }
            label="User"
            submenu={["All user", "Add New User"]}
          />
          <SidebarItem icon={faImages} label="Gallery" />
          <SidebarItem icon={faCog} label="Setting" />
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
  const [profileImage, setProfileImage] = useState("");
  const menuRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeProfileClick = () => {
    fileInputRef.current.click();
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", () => setShowMenu(false));
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", () => setShowMenu(false));
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", () => setShowMenu(false));
    };
  }, [showMenu]);

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={handleProfileClick}
        className="flex items-center cursor-pointer"
      >
        <img
          src={profileImage}
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
            onClick={handleChangeProfileClick}
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
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
        accept="image/*"
      />
    </div>
  );
};

export default AdminPanel;
