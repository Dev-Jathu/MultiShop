import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faShoppingCart,
  faUsers,
  faUser,
  faCog,
  faBell,
  faSignOutAlt,
  faUserCircle,
  faEdit,
  faBars,
  faClipboardList,
  faImages,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import ProductTable from "./productlist";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div>
            Welcome to the Dashboard! Here, you can view your overall statistics
            and recent activities.
          </div>
        );
      case "ProductList":
        return <ProductTable />;
      case "Categories":
        return (
          <div>
            Manage your Categories here. Add, edit, or remove categories to keep
            your product list organized.
          </div>
        );
      case "OrderList":
        return (
          <div>
            View and manage all Orders from your customers. Keep track of order
            statuses and details.
          </div>
        );
      case "AllUsers":
        return (
          <div>
            Manage your Users here. View the list of all registered users, and
            manage their permissions.
          </div>
        );
      case "Gallery":
        return (
          <div>
            Welcome to the Gallery! Add and organize your images and media files
            here.
          </div>
        );
      case "Settings":
        return (
          <div>
            Adjust your Settings here. Manage account settings, preferences, and
            more.
          </div>
        );
      default:
        return (
          <div>
            Welcome to the Dashboard! Here, you can view your overall statistics
            and recent activities.
          </div>
        );
    }
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
        <nav className="mt-4">
          <SidebarItem
            icon={faTachometerAlt}
            label="Dashboard"
            onClick={() => setActivePage("Dashboard")}
          />
          <SidebarItem
            icon={faShoppingCart}
            label="Ecommerce"
            submenu={[
              {
                label: "Add Product",
                onClick: () => alert("Add Product Clicked!"),
              },
              {
                label: "Product list",
                onClick: () => setActivePage("ProductList"),
              },
            ]}
          />
          <SidebarItem
            icon={faUsers}
            label="Categories"
            submenu={[
              {
                label: "Category list",
                onClick: () => setActivePage("Categories"),
              },
              {
                label: "Add New Product",
                onClick: () => alert("Add New Product Clicked!"),
              },
            ]}
          />
          <SidebarItem
            icon={faClipboardList}
            label="Order"
            submenu={[
              {
                label: "Order list",
                onClick: () => setActivePage("OrderList"),
              },
            ]}
          />
          <SidebarItem
            icon={faUser}
            label="User"
            submenu={[
              { label: "All user", onClick: () => setActivePage("AllUsers") },
              {
                label: "Add New User",
                onClick: () => alert("Add New User Clicked!"),
              },
            ]}
          />
          <SidebarItem
            icon={faImages}
            label="Gallery"
            onClick={() => setActivePage("Gallery")}
          />
          <SidebarItem
            icon={faCog}
            label="Setting"
            onClick={() => setActivePage("Settings")}
          />
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, submenu, onClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer"
        onClick={() => {
          setOpen(!open);
          if (onClick) onClick();
        }}
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        <span className="ml-4">{label}</span>
        {submenu && (
          <FontAwesomeIcon
            icon={faChevronDown}
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
              onClick={item.onClick}
            >
              {item.label}
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
            Change Profile Picture
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
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
