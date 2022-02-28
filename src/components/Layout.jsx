import { Outlet, Link } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ useremail }) => {
  // console.log(useremail);
  return (
    <div className="container">
      <Navbar useremail={useremail} />
      {/* Renders current selected route */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
