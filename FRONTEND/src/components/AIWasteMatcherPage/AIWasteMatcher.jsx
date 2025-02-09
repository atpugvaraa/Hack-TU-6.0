"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"
import "./AIWasteMatcherPage.css"

const AIWasteMatcherPage = () => {
  const [wasteType, setWasteType] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [isMatching, setIsMatching] = useState(false)
  const [matches, setMatches] = useState([])
  const [co2Saved, setCo2Saved] = useState(0)

  const co2Factors = {
    plastic: 3.5,
    electronics: 8,
    food: 2.5,
    metal: 10,
  }

  useEffect(() => {
    if (wasteType && quantity) {
      setCo2Saved(quantity * (co2Factors[wasteType] || 0))
    }
  }, [wasteType, quantity])

  const handleMatchWaste = () => {
    setIsMatching(true)
    setMatches([]) // Reset matches

    // Simulating AI thinking process with timeouts
    setTimeout(() => setMatches(["Analyzing waste type..."]), 1000)
    setTimeout(() => setMatches(["Finding best reuse options..."]), 2000)
    setTimeout(() => setMatches(["Suggesting matches..."]), 3000)
    setTimeout(() => {
      setMatches([
        { name: "Local Recycling Center", matchScore: (Math.random() * 10 + 85).toFixed(1) + "%" },
        { name: "Upcycling Startup", matchScore: (Math.random() * 10 + 75).toFixed(1) + "%" },
        { name: "Charity for Reuse", matchScore: (Math.random() * 10 + 65).toFixed(1) + "%" },
      ])
      setIsMatching(false)
    }, 4000)
  }

  return (
    <div className="ai-waste-matcher">
      <h1>AI Waste Matcher</h1>
      <p>Let our AI find the best matches for your waste!</p>

      <div className="input-section">
        <div className="form-group">
          <label htmlFor="waste-type">Waste Type:</label>
          <select id="waste-type" value={wasteType} onChange={(e) => setWasteType(e.target.value)}>
            <option value="">Select waste type</option>
            <option value="plastic">Plastic</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food Waste</option>
            <option value="metal">Metal</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity (kg):</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number.parseFloat(e.target.value))}
            min="0"
            step="0.1"
          />
        </div>

        <button onClick={handleMatchWaste} disabled={!wasteType || quantity <= 0 || isMatching}>
          {isMatching ? <Loader2 className="animate-spin" /> : "Find Matches"}
        </button>
      </div>

      {isMatching && (
        <div className="thinking-animation">
          {matches.map((msg, index) => (
            <p key={index} className="animate-fade-in">
              {msg.name || msg}
            </p>
          ))}
        </div>
      )}

      {!isMatching && matches.length > 0 && (
        <div className="matches-section">
          <h2>Best Matches</h2>
          {matches.map((match, index) => (
            <div key={index} className="match-card animate-fade-in">
              <h3>{match.name}</h3>
              <p>Match Score: {match.matchScore}</p>
            </div>
          ))}
        </div>
      )}

      {co2Saved > 0 && (
        <div className="co2-impact">
          <h2>Environmental Impact</h2>
          <p>
            By recycling {quantity}kg of {wasteType}, you're saving approximately:
          </p>
          <p className="co2-saved">{co2Saved.toFixed(2)} kg of CO₂</p>
          <div className="co2-bar" style={{ width: `${Math.min(co2Saved / 10, 100)}%` }}></div>
        </div>
      )}
    </div>
  )
}

export default AIWasteMatcherPage

