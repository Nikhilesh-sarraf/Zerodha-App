import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-custom">

      <div className="logo-section">
         <Link to="/">
        <img
          src="/media/images/logo.svg"
          alt="Zerodha Logo"
          className="logo"
        />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/about" >About</Link></li>
    
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/support">Support</Link></li>

        <li>
          <i className="bx bx-menu"></i>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;