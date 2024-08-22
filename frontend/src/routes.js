import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ViewAll from "./pages/product/ViewAll";
import Categories from "./pages/product/AllCategories";
import ProductDetails from "./pages/product/ProductDetails";
import Wishlist from "./pages/user/wishlist";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Contact from "./pages/user/contactpage";
import Myaccount from "./pages/user/account";
import Cart from "../src/pages/user/cart.jsx";
import Alloffers from "./pages/product/allOffers.jsx";
import Admin from "./pages/admin/dashboard.jsx";
import Checkout from "./pages/product/Checkout.jsx";
import Productlist from "./pages/admin/productlist.jsx";
import AddProduct from "./pages/admin/Addproduct.jsx";
import Categorylist from "./pages/admin/categorylist.jsx";
import NewCategory from "./pages/admin/NewCategory.jsx";
import OrderDetails from "./pages/admin/orderdetails.jsx";
import Userdetails from "./pages/admin/users.jsx";
import Adduser from "./pages/admin/Adduser.jsx";

function App() {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

function RoutesComponent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
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
        <Route path="/my-account" element={<Myaccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/categorylist" element={<Categorylist />} />
        <Route path="/newcategory" element={<NewCategory />} />{" "}
        <Route path="/newcategory" element={<NewCategory />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/adduser" element={<Adduser />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
