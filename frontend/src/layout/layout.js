import React ,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MainRoutes from "../routes/Routers";

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Scroll to top when location (URL) changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div>
      {!isAdminRoute && <Header />}
      <main>
        <MainRoutes />
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default Layout;
