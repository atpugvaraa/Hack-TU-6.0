"use client"

import { useState } from "react"
import HeroDonation from "./HeroDonation"
import WhyGive from "./WhyGive"
import Testimonials from "./Testimonials"
import FAQ from "./FAQ"
import FakeRazorpayPopup from "./Razorpay"
import "./DonationsPage.css"

export default function DonationsPage() {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false)
  const [donationAmount, setDonationAmount] = useState(0)

  const handleDonation = (amount) => {
    setDonationAmount(amount)
    setShowPaymentPopup(true)
  }

  return (
    <div className="donations-page">
      <HeroDonation onDonate={handleDonation} />
      <WhyGive />
      <Testimonials />
      <FAQ />
      {showPaymentPopup && <FakeRazorpayPopup amount={donationAmount} onClose={() => setShowPaymentPopup(false)} />}
    </div>
  )
}

