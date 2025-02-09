"use client"

import { useState, useEffect } from "react"
import { X, CreditCard, Smartphone, Wallet } from "lucide-react"
import "./Razorpay.css"

const Razorpay= ({ amount, onClose }) => {
  const [paymentStep, setPaymentStep] = useState("initial")
  const [selectedMethod, setSelectedMethod] = useState("")

  useEffect(() => {
    if (paymentStep === "processing") {
      const timer = setTimeout(() => setPaymentStep("success"), 3000)
      return () => clearTimeout(timer)
    }
  }, [paymentStep])

  const handlePayment = () => {
    setPaymentStep("processing")
  }

  return (
    <div className="fake-razorpay-overlay">
      <div className="fake-razorpay-popup">
        <div className="fake-razorpay-header">
          <h2>ResourcEx Donation</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>
        <div className="fake-razorpay-content">
          {paymentStep === "initial" && (
            <>
              <div className="amount-display">
                <span>Amount:</span>
                <span>₹{amount.toFixed(2)}</span>
              </div>
              <div className="payment-methods">
                <h3>Select a payment method:</h3>
                <button
                  className={`method-button ${selectedMethod === "card" ? "selected" : ""}`}
                  onClick={() => setSelectedMethod("card")}
                >
                  <CreditCard size={24} />
                  <span>Card</span>
                </button>
                <button
                  className={`method-button ${selectedMethod === "upi" ? "selected" : ""}`}
                  onClick={() => setSelectedMethod("upi")}
                >
                  <Smartphone size={24} />
                  <span>UPI</span>
                </button>
                <button
                  className={`method-button ${selectedMethod === "wallet" ? "selected" : ""}`}
                  onClick={() => setSelectedMethod("wallet")}
                >
                  <Wallet size={24} />
                  <span>Wallet</span>
                </button>
              </div>
              <button className="pay-button" onClick={handlePayment} disabled={!selectedMethod}>
                Pay ₹{amount.toFixed(2)}
              </button>
            </>
          )}
          {paymentStep === "processing" && (
            <div className="processing">
              <div className="spinner"></div>
              <p>Processing your donation...</p>
            </div>
          )}
          {paymentStep === "success" && (
            <div className="success">
              <div className="checkmark">X</div>
              <h3>KYC is yet to be linked.</h3>
              <p>Your contribution of ₹{amount.toFixed(2)} has not been received.</p>
              <button onClick={onClose} className="close-button">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Razorpay

