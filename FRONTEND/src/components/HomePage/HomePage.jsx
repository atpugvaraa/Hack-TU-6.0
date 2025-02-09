import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Turn Waste into Opportunity</h1>
          <p>
            Waste doesn't have to be wasted. Our platform enables businesses and individuals to share, upcycle, and repurpose materials, reducing landfill waste and promoting sustainability.
          </p>
          <Link to="/about" className="btn">
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Explore Our Services</h2>
        <div className="service-grid">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="service-item"
          >
            <img src="/Circular_Marketplace.jpg" alt="Circular Marketplace" />
            <h3>Circular Marketplace</h3>
            <p>Buyers and sellers trade materials, reducing landfill waste.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="service-item"
          >
            <img src="/Waste_Matcher.jpg" alt="AI Waste Matcher" />
            <h3>AI Waste Matcher</h3>
            <p>Our AI matches surplus materials with potential reuse opportunities.</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="service-item"
          >
            <img src="/Real_Time_Impact.jpg" alt="Impact Metrics" />
            <h3>Impact Metrics</h3>
            <p>Track CO₂ savings, waste diversion, and sustainability credits.</p>
          </motion.div>
        </div>
        <Link to="/ai-waste-matcher" className="btn">
          Explore More
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="feature-item"
          >
            <img src="/Cross_Platform.jpg" alt="Cross-Sector Collaboration" />
            <h3>Cross-Sector Collaboration</h3>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="feature-item"
          >
            <img src="/Crypto.jpg" alt="Incentivization with Crypto" />
            <h3>Incentivization with Crypto</h3>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="feature-item"
          >
            <img src="/Gamified_Sustainability.jpg" alt="Gamified Sustainability" />
            <h3>Gamified Sustainability</h3>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Make an Impact?</h2>
        <p>Join our community and help reduce waste through smart resource sharing.</p>
        <Link to="/login" className="btn cta-btn">Get Started</Link>
      </section>
    </div>
  );
}

export default HomePage;
