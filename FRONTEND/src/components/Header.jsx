"use client"

import { useState, useContext, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import {ShoppingCart, Zap} from "lucide-react";
import "./Header.css"


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      const count = cart.reduce((sum, item) => sum + item.quantity, 0)
      setCartItemCount(count)
    }

    updateCartCount()
    window.addEventListener("storage", updateCartCount)

    return () => {
      window.removeEventListener("storage", updateCartCount)
    }
  }, [])


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
                  <NavLink to="/ai-waste-matcher" className={({ isActive }) => (isActive ? "active" : "")}>Waste Matcher</NavLink>
                </li>
                <li>
                  <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>Search</NavLink>
                </li>
                <li>
                  <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
                </li>
                <div className="header-actions">
                  <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
                  <ShoppingCart size={20} />
                  <span className="cart-count">{cartItemCount}</span>
                  </NavLink>
                </div>
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
