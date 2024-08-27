import React, { useState, useEffect, useContext, useRef } from "react";
import { toast } from "react-toastify";
import { authContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
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
import Addproduct from "./Addproduct";
import Categorylist from "./categorylist";
import NewCategory from "./NewCategory";
import Orderdetails from "./orderdetails";
import Users from "./users";
import Addusers from "./Adduser";
import Maindashboard from "./maindashboard";
import AdminProfile from './profile'

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Maindashboard />;
      case "ProductList":
        return <ProductTable />;
      case "Addproduct":
        return <Addproduct />;
      case "Categories":
        return <Categorylist />;
      case "NewCategory":
        return <NewCategory />;
      case "OrderList":
        return <Orderdetails />;
      case "AllUsers":
        return <Users />;
      case "Addusers":
        return <Addusers />;
      case "Gallery":
        return (
          <div>
            Welcome to the Gallery! Add and organize your images and media files
            here.
          </div>
        );
      case "Settings":
        return <AdminProfile/>;
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
    <div className='flex h-screen bg-gray-100'>
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-white shadow-md transition-all duration-300`}
      >
        <div className='p-4 flex items-center justify-between'>
          <span className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>
            <Link to='/'>Alfies</Link>
          </span>
          <button
            className='text-gray-600'
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className='mt-4'>
          <SidebarItem
            icon={faTachometerAlt}
            label='Dashboard'
            onClick={() => setActivePage('Dashboard')}
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarItem
            icon={faShoppingCart}
            label='Ecommerce'
            submenu={[
              {
                label: 'Add Product',
                onClick: () => setActivePage('Addproduct'),
              },
              {
                label: 'Product list',
                onClick: () => setActivePage('ProductList'),
              },
            ]}
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarItem
            icon={faUsers}
            label='Categories'
            submenu={[
              {
                label: 'Category list',
                onClick: () => setActivePage('Categories'),
              },
              {
                label: 'New Category',
                onClick: () => setActivePage('NewCategory'),
              },
            ]}
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarItem
            icon={faClipboardList}
            label='Order'
            submenu={[
              {
                label: 'Order list',
                onClick: () => setActivePage('OrderList'),
              },
            ]}
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarItem
            icon={faUser}
            label='User'
            submenu={[
              { label: 'All user', onClick: () => setActivePage('AllUsers') },
              {
                label: 'Add New User',
                onClick: () => setActivePage('Addusers'),
              },
            ]}
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarItem
            icon={faImages}
            label='Gallery'
            onClick={() => setActivePage('Gallery')}
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarItem
            icon={faCog}
            label='Setting'
            onClick={() => setActivePage('Settings')}
            isSidebarOpen={isSidebarOpen}
          />
          
        </nav>
      </aside>

      <div className='flex-1 flex flex-col'>
        <TopBar />
        <main className='flex-1 p-6 bg-gray-100 overflow-auto'>
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, submenu, onClick, isSidebarOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`flex items-center p-4 text-gray-700 hover:bg-gray-200 cursor-pointer ${
          !isSidebarOpen && "justify-center"
        }`}
        onClick={() => {
          setOpen(!open);
          if (onClick) onClick();
        }}
      >
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        {isSidebarOpen && <span className="ml-4">{label}</span>}
        {submenu && isSidebarOpen && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`w-4 h-4 ml-auto transition-transform ${
              open ? "transform rotate-180" : ""
            }`}
          />
        )}
      </div>
      {submenu && open && isSidebarOpen && (
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
  const menuRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
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

  // --------- Log-Out Logics ----------
  const { dispatch } = useContext(authContext);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    sessionStorage.clear();
    // Clear state
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={handleProfileClick}
        className="flex items-center gap-4 cursor-pointer"
      >
        <p>{user.name}</p>
        <img
          src={user.photo || "http://www.gravatar.com/avatar/?d=mp"}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className="w-4 h-4 ml-2 text-gray-600"
        />
      </div>

      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <div className="p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
            Profile
          </div>
          <div
            className="p-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={handleChangeProfileClick}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Change Profile
            <input type="file" ref={fileInputRef} className="hidden" />
          </div>
          <div className="p-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
