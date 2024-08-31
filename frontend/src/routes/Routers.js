import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import ProductDetails from "../components/products/ProductDetails.jsx";
import Wishlist from "../pages/user/wishlist";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Contact from "../pages/user/contactpage";
import MyAccount from "../pages/user/account";
import Cart from "../pages/user/cart.jsx";
import Admin from "../pages/admin/dashboard.jsx";
import Checkout from "../pages/product/Checkout.jsx";
import ProtectedRoute from "./protectedRoutes.js";
import ViewAll from "../components/products/ViewAll.jsx"
import Category from '../pages/product/categories.jsx'
import Related from "../components/products/Releted.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/view-all" element={<ViewAll />} />
      <Route path="/category" element={<Category />} />
      <Route path="/related/:id" element={<Related />} />

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
            <MyAccount />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
