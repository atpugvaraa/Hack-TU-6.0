import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-title">
          <Link to="/">ResourcEx</Link>
        </div>
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/donations" activeClassName="active">
                Donate
              </NavLink>
            </li>
            <li>
              <NavLink to="/login-register" activeClassName="active">
                Login/Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName="active">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                Admin
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <NavLink to="/cart" className="cart-link">
            Cart
          </NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
