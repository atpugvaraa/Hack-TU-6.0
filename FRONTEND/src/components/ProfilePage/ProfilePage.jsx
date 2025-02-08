"use client"
import { User, Package, Star, Leaf, Coins } from "lucide-react"
import "./ProfilePage.css"

const ProfilePage = () => {
  // Placeholder data
  const user = {
    name: "PRINCE SHARMA",
    email: "email@example.com",
    joinDate: "2025-01-01",
    listings: 15,
    transactions: 8,
    rating: 4.5,
    impact: {
      co2Saved: 500,
      landfillReduced: 200,
      materialsReused: 50,
    },
    greenCoins: 1500,
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={64} />
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>Member since: {new Date(user.joinDate).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-item">
          <Package size={24} />
          <span>{user.listings} Listings</span>
        </div>
        <div className="stat-item">
          <Star size={24} />
          <span>{user.rating} Rating</span>
        </div>
        <div className="stat-item">
          <Leaf size={24} />
          <span>{user.transactions} Transactions</span>
        </div>
      </div>

      <div className="profile-sections">
        <section className="sustainability-impact">
          <h2>Sustainability Impact</h2>
          <div className="impact-metrics">
            <div className="metric">
              <h3>{user.impact.co2Saved} kg</h3>
              <p>CO2 Saved</p>
            </div>
            <div className="metric">
              <h3>{user.impact.landfillReduced} kg</h3>
              <p>Landfill Reduced</p>
            </div>
            <div className="metric">
              <h3>{user.impact.materialsReused}</h3>
              <p>Materials Reused</p>
            </div>
          </div>
        </section>

        <section className="green-coins">
          <h2>GreenCoins Balance</h2>
          <div className="coins-balance">
            <Coins size={32} />
            <span>{user.greenCoins}</span>
          </div>
          <button className="btn">Redeem GreenCoins</button>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>Listed "Used Cardboard Boxes" - 2 days ago</li>
            <li>Exchanged "Scrap Metal" with User123 - 1 week ago</li>
            <li>Earned 50 GreenCoins for recycling electronics - 2 weeks ago</li>
          </ul>
        </section>

        <section className="leaderboard">
          <h2>GreenCoins Leaderboard</h2>
          <ol className="leaderboard-list">
            <li>EcoWarrior2023 - 5000 GC</li>
            <li>RecycleMaster - 4500 GC</li>
            <li>GreenThumb99 - 4000 GC</li>
            <li>You - 1500 GC</li>
            <li>EarthSaver21 - 1000 GC</li>
          </ol>
        </section>
      </div>
    </div>
  )
}

export default ProfilePage

