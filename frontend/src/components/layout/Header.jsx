import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext.js";
import { useState, useEffect, useContext } from "react";

import Categories from "../../assets/images/categories.png";
import { BASE_URL } from "../../config.js";
import { toast } from "react-toastify";
import axios from "axios";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const { user, role, token } = useContext(authContext);
  const { photo } = user || {};
  const dispatch = useContext(authContext);

  const getUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/login/success`, {
        withCredentials: true,
      });
      console.log(response || response.data);
      dispatch(
        authContext({
          ...response.data.user._json,
          _id: response.data._id,
          isAdmin: response.data.user.isAdmin,
        })
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showLinks) {
        setShowLinks(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showLinks]);

  return (
    <div>
      <div className="main ">
        <div className="fixed z-50 navbar flex justify-center p-3 bg-black shadow-gray-50 text-white text-[18px] lg:px-60 px-[5px] w-full">
          <div className="flex justify-between lg:gap-10 md:gap-[20px] gap-8 lg:text-base md:text-[14px] text-[10px] items-center">
            <p className="text-center md:text-left">
              Summer Sale For All Food Items And Free Express Delivery - OFF
              50%!
            </p>
            <Link to="">Shop Now</Link>
            <select className="bg-black text-white border-none">
              <option>English</option>
              <option>Tamil</option>
            </select>
          </div>
        </div>
        <div className="header fixed z-10 w-full h-40 bg-white shadow-md lg:px-5 md:px-5 px-3">
          <div className="location pt-14 flex lg:gap-2 md:gap-[45px] items-center justify-between">
            <div className="location-logo text-black flex gap-3 items-center hover:text-primary"></div>
            <div>
              {token && user ? (
                <div className="user text-black ">
                  <Link
                    to={`${
                      role === "customer"
                        ? "/my-account"
                        : role === "admin"
                        ? "/admin"
                        : "/home"
                    }`}
                    className="flex gap-4 items-center"
                  >
                    <img
                      src={photo || "http://www.gravatar.com/avatar/?d=mp"}
                      alt="profile"
                      className="rounded-full w-12"
                    />
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-primary px-6 py-2 text-white font-semibold rounded-md">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="search flex items-center justify-between pt-2 md:gap-5 sm:gap-5">
            <Link to="/" className="w-[170px] text-2xl font-bold">
              Liquor House
            </Link>
            <div className="rounded-md px-4 bg-gray-100 label lg:w-[85%] md:w-[70%] border-none items-center flex justify-between">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Search Product"
                className="px-4 bg-transparent focus:outline-none md:w-[100%] lg:w-[100%] h-[45px] items-center"
              />
            </div>
            <div className="dropdown lg:hidden md:hidden block text-[25px]">
              <i
                className="fa-solid fa-list cursor-pointer"
                onClick={toggleLinks}
              ></i>
            </div>

            <div className="shop lg:text-[30px] md:text-[25px] hidden lg:blog gap-12 md:gap-5 md:flex lg:flex">
              <Link to="/wishlist">
                <i className="fa-regular fa-heart cursor-pointer"></i>
              </Link>
              <Link to="/category">
                <img
                  src={Categories}
                  className=" md:h-[30px] md:w-[40px] h-[58px] lg:h-[35px] lg:pt-2 md:pt-1"
                  alt="categories"
                />
              </Link>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
              </Link>
            </div>
          </div>
          {showLinks && (
            <div className="dropdown-links flex flex-col gap-3 mt-3 bg-black text-white p-4 rounded shadow-md absolute top-[93%] right-0 ">
              <Link to="/wishlist" onClick={handleLinkClick}>
                Wishlist
              </Link>
              <Link to="/category" onClick={handleLinkClick}>
                All Categories
              </Link>
              <Link to="/cart" onClick={handleLinkClick}>
                Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
