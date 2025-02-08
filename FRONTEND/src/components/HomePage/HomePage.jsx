import { Link } from "react-router-dom"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Turn Waste into Opportunity</h1>
        <p>
          Waste doesn't have to be wasted. This platform makes it easy for people and businesses to share, upcycle, and
          repurpose materials instead of throwing them away. Whether you're looking to give something a second life or
          find sustainable resources, smart matching and a built-in marketplace help make it happen. Less waste, more
          impact—let's build a greener future together!
        </p>
        <Link to="/about" className="btn">
          Learn more
        </Link>
      </section>

      <section className="services">
        <h2>Explore our services</h2>
        <div className="service-grid">
          <div className="service-item">
            <img src="/Circular_Marketplace.jpg" alt="Circular Marketplace" />
            <h3>Circular Marketplace</h3>
            <p>Buyers and sellers trade materials to reduce landfill use.</p>
          </div>
          <div className="service-item">
            <img src="/Waste_Matcher.jpg" alt="AI Waste Matcher" />
            <h3>AI Waste Matcher</h3>
            <p>
              Users list their "waste" or surplus materials. The platform uses AI and ML to match waste resources with
              potential upcycling or reuse opportunities based on location, industry, or need.
            </p>
          </div>
          <div className="service-item">
            <img src="/Real_Time_Impact.jpg" alt="Real-Time Impact Metrics" />
            <h3>Real-Time Impact Metrics</h3>
            <p>
              The website tracks CO₂ saved, waste diverted from landfills, and resource efficiency metrics for each
              transaction, creating transparency and rewarding users with "Sustainability Credits."
            </p>
          </div>
        </div>
        <Link to="/services" className="btn">
          Explore More
        </Link>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <img src="/Cross_Platform.jpg" alt="Cross-Sector Collaboration" />
            <h3>Cross-Sector Collaboration</h3>
          </div>
          <div className="feature-item">
            <img src="/Crypto.jpg" alt="Incentivization with Crypto" />
            <h3>Incentivization with Crypto</h3>
          </div>
          <div className="feature-item">
            <img src="/Gamified_Sustainability.jpg" alt="Gamified Sustainability" />
            <h3>Gamified Sustainability</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

