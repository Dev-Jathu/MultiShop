import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import ViewAll from "../pages/product/ViewAll";
import Categories from "../pages/product/AllCategories";
import ProductDetails from "../pages/product/ProductDetails";
import Wishlist from "../pages/user/wishlist";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Contact from "../pages/user/contactpage";
import Myaccount from "../pages/user/account";
import Cart from "../pages/user/cart.jsx";
import Alloffers from "../pages/product/allOffers.jsx";
import Admin from "../pages/admin/dashboard.jsx";
import Checkout from "../pages/product/Checkout.jsx";
import ProtectedRoute from "./protectedRoutes.js";

function App() {
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
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
     
      {/* ---------Protected Routes--------- */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute allowRoles={["customer"]}>
            <Myaccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
