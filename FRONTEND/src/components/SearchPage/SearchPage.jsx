"use client"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import "./SearchPage.css"

const SearchPage = () => {
  const [filters, setFilters] = useState({
    wasteType: "",
    location: "",
    reusePotential: "",
    condition: "",
    availability: "",
  })

  const [sortBy, setSortBy] = useState("newest")

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle search submission
    console.log("Search filters:", filters)
    console.log("Sort by:", sortBy)
  }

  return (
    <div className="search-page">
      <h1>Find Resources</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-bar">
          <input type="text" placeholder="Search for resources..." />
          <button type="submit" className="search-button">
            <Search size={20} />
          </button>
        </div>
        <div className="filters">
          <select name="wasteType" onChange={handleFilterChange} value={filters.wasteType}>
            <option value="">Waste Type</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="glass">Glass</option>
            <option value="textiles">Textiles</option>
            <option value="paper">Paper</option>
            <option value="electronics">Electronics</option>
            <option value="organic">Organic Waste</option>
          </select>
          <div className="location-input">
            <MapPin size={20} />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleFilterChange}
              value={filters.location}
            />
          </div>
          <select name="reusePotential" onChange={handleFilterChange} value={filters.reusePotential}>
            <option value="">Reuse Potential</option>
            <option value="upcycling">Upcycling</option>
            <option value="energy">Energy Generation</option>
            <option value="industrial">Industrial Reuse</option>
          </select>
          <select name="condition" onChange={handleFilterChange} value={filters.condition}>
            <option value="">Condition</option>
            <option value="new">New</option>
            <option value="lightly-used">Lightly Used</option>
            <option value="repairable">Damaged but Repairable</option>
            <option value="raw-material">Raw Material</option>
          </select>
          <select name="availability" onChange={handleFilterChange} value={filters.availability}>
            <option value="">Availability</option>
            <option value="in-stock">In Stock</option>
            <option value="immediate-pickup">Immediate Pickup</option>
            <option value="scheduled">Scheduled Exchange</option>
          </select>
        </div>
        <div className="sort-options">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" onChange={handleSortChange} value={sortBy}>
            <option value="newest">Newest First</option>
            <option value="relevant">Most Relevant</option>
            <option value="impact">Highest Sustainability Impact</option>
          </select>
        </div>
      </form>
      <div className="search-results">
        <div className="results-list">
          {/* Placeholder for search results */}
          <p>Search results will appear here.</p>
        </div>
        <div className="map-view">
          {/* Placeholder for map */}
          <div className="map-placeholder">
            <MapPin size={48} />
            <p>Map View</p>
          </div>
        </div>
      </div>
      <div className="search-suggestions">
        <h2>Suggested Searches</h2>
        <ul>
          <li>Recyclable plastics within 5 miles</li>
          <li>Electronic waste for upcycling</li>
          <li>Organic compost materials</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchPage

