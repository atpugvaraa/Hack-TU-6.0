export default function WhyGive() {
  const reasons = [
    "Support sustainable resource management",
    "Reduce waste and promote recycling",
    "Fund innovative environmental projects",
    "Help build a greener future",
    "Empower local communities",
    "Help the underprivileged",
  ]

  return (
    <section className="why-give">
      <div className="container">
        <h2>Why give?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <span className="reason-icon">✽</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

