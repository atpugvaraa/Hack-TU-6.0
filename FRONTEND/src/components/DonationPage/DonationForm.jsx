"use client"

import { useState } from "react"

export default function DonationForm({ onDonate }) {
  const [amount, setAmount] = useState(10)
  const [frequency, setFrequency] = useState("MONTHLY")

  const handleSubmit = (e) => {
    e.preventDefault()
    onDonate(amount)
  }

  return (
    <form onSubmit={handleSubmit} className="donation-form">
      <div className="amount-options">
        {[10, 20, 30, 40].map((value) => (
          <button
            key={value}
            type="button"
            className={amount === value ? "selected" : ""}
            onClick={() => setAmount(value)}
          >
            ₹{value}.00
          </button>
        ))}
        <input
          type="number"
          value={amount}
          onChange={(e) =>  setAmount(Number(e.target.value))}
          placeholder="Custom Amount"
        />
      </div>
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="ONE_TIME">One-Time Donation</option>
        <option value="MONTHLY">Monthly Donation</option>
        <option value="WEEKLY">Weekly Donation</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Donate
      </button>
    </form>
  )
}

