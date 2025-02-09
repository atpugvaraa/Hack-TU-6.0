"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import "./AddInventoryPage.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const AddInventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    condition: "",
    date: new Date().toISOString().split("T")[0],
    location: "",
    coordinates: null,
  });
  const [mapPosition, setMapPosition] = useState([20.5937, 78.9629]); // Default India center
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = localStorage.getItem("inventoryItems");
    if (storedItems) {
      setInventoryItems(JSON.parse(storedItems));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), ...formData };
    const updatedItems = [...inventoryItems, newItem];
    setInventoryItems(updatedItems);
    localStorage.setItem("inventoryItems", JSON.stringify(updatedItems));
    setFormData({
      name: "",
      quantity: "",
      condition: "",
      date: new Date().toISOString().split("T")[0],
      location: "",
      coordinates: null,
    });
  };

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
          <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} required min="0" step="0.1" />
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
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter location or select on map"
          />
        </div>
        <div className="form-group map-container">
          <MapContainer center={mapPosition} zoom={5} className="map" style={{ height: "300px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {formData.coordinates && <Marker position={formData.coordinates} icon={markerIcon} />}
            <LocationMarker setPosition={(coords) => {
              setFormData((prev) => ({ ...prev, coordinates: coords }));
            }} />
          </MapContainer>
        </div>
        <button type="submit" className="submit-btn">Add Item</button>
      </form>
    </div>
  );
};

export default AddInventoryPage;
