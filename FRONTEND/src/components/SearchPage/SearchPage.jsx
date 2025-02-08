"use client";

import { useState, useEffect } from "react";
import { StrictMode } from "react";
import { Search, MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./SearchPage.css";

// Fix for missing default Leaflet marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const SearchPage = () => {
  const [filters, setFilters] = useState({
    wasteType: "",
    location: "",
    reusePotential: "",
    condition: "",
    availability: "",
  });

  const [sortBy, setSortBy] = useState("newest");
  const [inventoryItems, setInventoryItems] = useState([]);
  const [mapPosition, setMapPosition] = useState([20.5937, 78.9629]); // Default: Center of India

  useEffect(() => {
    const storedItems = localStorage.getItem("inventoryItems");
    if (storedItems) {
      setInventoryItems(JSON.parse(storedItems));
    }
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search filters:", filters);
    console.log("Sort by:", sortBy);

    // Convert location input to coordinates using a free API
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${filters.location}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setMapPosition([data[0].lat, data[0].lon]);
        } else {
          alert("Location not found.");
        }
      })
      .catch((err) => console.error("Error fetching location:", err));
  };

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
          <h2>Available Inventory</h2>
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
        <div className="map-view">
          {/* Leaflet Map Integration */}
          <StrictMode>
            <MapContainer center={mapPosition} zoom={10} className="map-container">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={mapPosition} icon={defaultIcon}>
                <Popup>{filters.location || "Selected Location"}</Popup>
              </Marker>
            </MapContainer>
          </StrictMode>
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
  );
};

export default SearchPage;
