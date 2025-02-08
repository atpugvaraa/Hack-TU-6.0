import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <h2>ResourcEx</h2>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="mailto:email@example.com">Email</a>
              </li>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>Sign up for our newsletter</h3>
          <p>Sign up with your email address to receive news and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer

