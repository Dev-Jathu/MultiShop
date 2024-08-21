import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import ViewAll from "../pages/product/ViewAll.jsx";
import Categories from "../pages/product/AllCategories.jsx";
import ProductDetails from "../pages/product/ProductDetails.jsx";
import Wishlist from "../pages/user/wishlist.jsx";
import Login from "../pages/login.jsx";
import Signup from "../pages/signup.jsx";
import Contact from "../pages/user/contactpage.jsx";
import Myaccount from "../pages/user/account.jsx";
import Cart from "../pages/user/cart.jsx";
import Alloffers from "../pages/product/allOffers.jsx";
import Admin from "../pages/admin/dashboard.jsx";
import Checkout from "../pages/product/Checkout.jsx";
import ProtectedRoute from "./protectedRoutes.js";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/all-products" element={<ViewAll />} />
      <Route path="/all-Categories" element={<Categories />} />
      <Route path="/all-Offers" element={<Alloffers />} />
      <Route path="/ProductDetail" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute allowRoles={["customer"]}>
            <Myaccount />
          </ProtectedRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute alloweRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default routes;
