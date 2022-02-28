import { Link } from "react-router-dom";
import { logOut } from "../services/authService";
import { toast } from "react-toastify";

const Navbar = ({ useremail }) => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          Logo
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          {useremail && (
            <>
              <li>
                <Link to="/users" className="nav-link px-2 link-dark">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/posts" className="nav-link px-2 link-dark">
                  Posts
                </Link>
              </li>
            </>
          )}

          <li>
            <Link to="/contact" className="nav-link px-2 link-dark">
              Contact us
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link px-2 link-dark">
              About
            </Link>
          </li>
        </ul>

        {useremail ? (
          <div className="col-md-3 text-end">
            <i className="fa fa-user"></i> {useremail}
            <Link
              to="/login"
              className="btn btn-sm btn-outline-danger mx-2"
              onClick={() => {
                logOut();
                toast("Successfully logged out");
              }}
            >
              <i className="fa fa-sign-out"></i>Logout
            </Link>
          </div>
        ) : (
          <div className="col-md-3 text-end">
            <Link to="/login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign-up
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
