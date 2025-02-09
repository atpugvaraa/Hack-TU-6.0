"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./CartPage.css"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setCartItems(parsedCart)
      calculateTotal(parsedCart)
    }
  }, [])

  const calculateTotal = (items) => {
    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    calculateTotal(updatedCart)
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    calculateTotal(updatedCart)
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    // Here you would typically process the payment
    alert(`Processing payment of $${total.toFixed(2)} via ${paymentMethod}`)
    // Clear the cart after successful payment
    setCartItems([])
    localStorage.removeItem("cart")
    navigate("/")
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity} kg</p>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number.parseFloat(e.target.value))}
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <form onSubmit={handleCheckout}>
              <div className="form-group">
                <label htmlFor="payment-method">Payment Method:</label>
                <select
                  id="payment-method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">Select a payment method</option>
                  <option value="credit-card">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank-transfer">Bank Transfer</option>
                </select>
              </div>
              <button type="submit" className="checkout-btn">
                Proceed to Checkout
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage

