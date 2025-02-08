"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./AddInventoryPage.css"

const AddInventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    condition: "",
    date: new Date().toISOString().split("T")[0],
  })
  const navigate = useNavigate()

  useEffect(() => {
    const storedItems = localStorage.getItem("inventoryItems")
    if (storedItems) {
      setInventoryItems(JSON.parse(storedItems))
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      ...formData,
    }
    const updatedItems = [...inventoryItems, newItem]
    setInventoryItems(updatedItems)
    localStorage.setItem("inventoryItems", JSON.stringify(updatedItems))
    setFormData({
      name: "",
      quantity: "",
      condition: "",
      date: new Date().toISOString().split("T")[0],
    })
  }

  return (
    <div className="add-inventory-page">
      <h1>Add Inventory</h1>
      <form onSubmit={handleSubmit} className="inventory-form">
        <div className="form-group">
          <label htmlFor="name">Name of Product</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity (in kg)</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
            min="0"
            step="0.1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <select id="condition" name="condition" value={formData.condition} onChange={handleInputChange} required>
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date Added</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </form>

      <div className="inventory-list">
        <h2>Your Inventory</h2>
        <div className="inventory-cards">
          {inventoryItems.map((item) => (
            <div key={item.id} className="inventory-card">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity} kg</p>
              <p>Condition: {item.condition}</p>
              <p>Date Added: {item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddInventoryPage

