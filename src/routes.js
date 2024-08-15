import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ViewAll from "./pages/product/ViewAll";
import Categories from "./pages/product/AllCategories";
import ProductDetails from "./pages/product/ProductDetails";
import Wishlist from './pages/user/wishlist';
import Login from './pages/login'
import Signup from "./pages/signup";
import Contact from "./pages/user/contactpage";
import Myaccount from "./pages/user/account"

function routes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-products" element={<ViewAll />} />
        <Route path="/all-Categories" element={<Categories />} />
        <Route path="/ProductDetail" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-account" element={<Myaccount />} />
        login
      </Routes>
      <Footer />
    </Router>
  );
}

export default routes;
