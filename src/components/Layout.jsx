import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      {/* Renders current selected route */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
