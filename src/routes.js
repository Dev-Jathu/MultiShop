import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ViewAll from '../src/components/product/ViewAll'
import Categories from "../src/components/product/AllCategories";
import ProductDetails from './components/product/ProductDetails'
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
        <Route path="/ProductDetail" element={<ProductDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default routes;
