"use client"
import DonationForm from "./DonationForm"

export default function HeroDonation({ onDonate }) {
  return (
    <section className="hero-donation">
      <div className="container">
        <h1>
          Make an <span className="highlight">impact</span> today
        </h1>
        <p>Support our mission by contributing a donation.</p>
        <DonationForm onDonate={onDonate} />
      </div>
    </section>
  )
}

