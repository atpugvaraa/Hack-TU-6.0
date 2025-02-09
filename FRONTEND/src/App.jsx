"use client"

import { useState, useContext } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage/HomePage"
import AboutPage from "./components/AboutPage/AboutPage"
import AddInventoryPage from "./components/AddInventoryPage/AddInventoryPage"
import ContactPage from "./components/ContactPage/ContactPage"
import DonatePage from "./components/DonationPage/DonationPage"
import LoginPage from "./components/LoginPage/LoginPage"
import SearchPage from "./components/SearchPage/SearchPage"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"
import { AuthContext } from "./context/AuthContext"
import CartPage from "./components/CartPage/CartPage"
import AIWasteMatcherPage from "./components/AIWasteMatcherPage/AIWasteMatcher"
import "./App.css"


const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" />
  }

  if (adminOnly && user.type !== "admin") {
    return <Navigate to="/" />
  }

  return children
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="site-wrapper">
          <Header />
          <main id="page" className="container" role="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donations" element={<DonatePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/search"
                element={
                  <ProtectedRoute>
                    <SearchPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-inventory"
                element={
                  <ProtectedRoute>
                    <AddInventoryPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/cart" element={<CartPage />} />
              <Route
                path="/ai-waste-matcher"
                element={
                  <ProtectedRoute>
                    <AIWasteMatcherPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

