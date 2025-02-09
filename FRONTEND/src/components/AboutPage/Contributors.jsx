"use client";
import React, { useState, useEffect } from "react";
import './AboutPage.css';

export default function ExecutiveBoard() {
  const [executives, setExecutives] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const Data = [
      { "name": "Member 1", "role": "Role", "image": "/images.png" },
      { "name": "Member 2", "role": "Role", "image": "/images.jpg" },
      { "name": "Member 3", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 4", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 5", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 6", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 7", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 8", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 9", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 10", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 11", "role": "MEMBER", "image": "/images.jpg" },
      { "name": "Member 12", "role": "MEMBER", "image": "/images.jpg" }
    ];
    setExecutives(Data);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + executives.length) % executives.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % executives.length);
  };

  return (
    <section className="contributors-section">
      <div className="contributors-container">
        <h2 className="contributors-title">CONTRIBUTORS</h2>
        <div className="carousel-container">
          <button onClick={handlePrev} className="carousel-button left">
            &#9665;
          </button>

          <div className="carousel">
            <div
              className="carousel-inner"
              style={{
                transform: `rotateY(${currentIndex * -30}deg)`,
              }}
            >
              {executives.map((executive, index) => {
                const angle = index * (360 / executives.length);
                return (
                  <div key={index} className="carousel-item" style={{ transform: `rotateY(${angle}deg) translateZ(480px)` }}>
                    <div className="member-card">
                      <div className="member-image">
                        <img src={executive.image} alt={executive.name} />
                      </div>
                      <h3 className="member-name">{executive.name}</h3>
                      <p className="member-role">{executive.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button onClick={handleNext} className="carousel-button right">
            &#9655;
          </button>
        </div>
      </div>
    </section>
  );
}
