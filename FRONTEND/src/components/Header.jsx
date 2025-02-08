"use client"

import { useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-title">
          <Link to="/">ResourcEx</Link>
        </div>
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/donations" className={({ isActive }) => (isActive ? "active" : "")}>Donate</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-inventory" className={({ isActive }) => (isActive ? "active" : "")}>Add Inventory</NavLink>
                </li>
                <li>
                  <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>Search</NavLink>
                </li>
                <li>
                  <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
                </li>
                {user.type === "admin" && (
                  <li>
                    <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>Admin</NavLink>
                  </li>
                )}
                <li>
                  <button onClick={logout} className="logout-button">
                    Logout
                  </button>
                </li>
              </>
            )}
            {!user && (
              <li>
                <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login/Register</NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="header-actions">
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
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
  )
}

export default Header
