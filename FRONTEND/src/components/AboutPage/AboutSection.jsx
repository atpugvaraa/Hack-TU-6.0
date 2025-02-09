import React from 'react';
import './AboutPage.css';

export default function AboutSection() {
    return (
      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">ABOUT US</h1>
          <p className="about-text">1. *Dynamic Waste Matching Algorithm:*  
   - Users list their "waste" or surplus materials (e.g., old electronics, plastic, fabrics, food waste, construction debris, etc.).
   - The platform uses AI and ML to *match waste resources with potential upcycling or reuse opportunities* based on location, industry, or need.  
     Example: A restaurant's food scraps can be matched with local farmers or biogas startups.</p>
     <p className='about-text'>2. *Real-Time Resource Impact Metrics:*  
   - The website tracks *CO₂ saved, waste diverted from landfills*, and resource efficiency metrics for each transaction, creating transparency and rewarding users with "Sustainability Credits."

</p>
        </div>
      </section>
    );
}
