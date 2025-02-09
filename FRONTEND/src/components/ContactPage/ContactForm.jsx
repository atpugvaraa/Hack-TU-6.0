import { useState } from "react"
import "./ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log("Form submitted:", formData)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit" className="submit-button">
        SEND
      </button>
    </form>
  )
}

export default ContactForm

