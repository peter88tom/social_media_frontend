import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          Logo
        </Link>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" class="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" class="nav-link px-2 link-dark">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact" class="nav-link px-2 link-dark">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" class="nav-link px-2 link-dark">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/" class="nav-link px-2 link-dark">
              About
            </Link>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <Link to="/login" class="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link to="/signup" class="btn btn-primary">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
