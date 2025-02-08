import ContactForm from "./ContactForm"
import "./ContactPage.css"

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="hero-section">
        <h1>Contact Us</h1>
        <p>Ready to team up? Drop us your details and we'll reach out to you soon. We're excited to chat with you!</p>
        <p>
          <a href="mailto:email@example.com">email@example.com</a>
          <br />
          (555) 555-5555
        </p>
      </section>
      <div className="contact-content">
        <section className="form-section">
          <ContactForm />
        </section>
        <section className="image-section">
          <img src="/placeholder.svg?height=400&width=600" alt="Contact Us" />
        </section>
      </div>
    </div>
  )
}

export default ContactPage

