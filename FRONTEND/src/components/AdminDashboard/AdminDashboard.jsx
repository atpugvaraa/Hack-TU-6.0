"use client"
import { Users, Package, DollarSign, BarChart2, Flag, AlertTriangle } from "lucide-react"
import "./AdminDashboard.css"

const AdminDashboard = () => {
  // Placeholder data
  const stats = {
    activeUsers: 5000,
    activeListings: 1200,
    completedTransactions: 850,
    totalGreenCoins: 100000,
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="dashboard-stats">
        <div className="stat-card">
          <Users size={24} />
          <h3>Active Users</h3>
          <p>{stats.activeUsers}</p>
        </div>
        <div className="stat-card">
          <Package size={24} />
          <h3>Active Listings</h3>
          <p>{stats.activeListings}</p>
        </div>
        <div className="stat-card">
          <BarChart2 size={24} />
          <h3>Completed Transactions</h3>
          <p>{stats.completedTransactions}</p>
        </div>
        <div className="stat-card">
          <DollarSign size={24} />
          <h3>Total GreenCoins</h3>
          <p>{stats.totalGreenCoins}</p>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="platform-monitoring">
          <h2>Platform Monitoring</h2>
          <div className="chart-placeholder">
            <BarChart2 size={48} />
            <p>Sustainability Impact Over Time</p>
          </div>
        </section>

        <section className="user-listing-management">
          <h2>User & Listing Management</h2>
          <div className="management-actions">
            <button className="btn">
              <Flag size={16} /> Review Flagged Listings
            </button>
            <button className="btn">
              <AlertTriangle size={16} /> Monitor Suspicious Activity
            </button>
          </div>
          <table className="management-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Listing</td>
                <td>Suspicious electronic waste listing</td>
                <td>
                  <button className="btn btn-small">Review</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>User</td>
                <td>Multiple reported violations</td>
                <td>
                  <button className="btn btn-small">Investigate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="blockchain-transactions">
          <h2>Blockchain Transactions</h2>
          <div className="transaction-list">
            <div className="transaction-item">
              <p>
                <strong>Transaction ID:</strong> 0x123...abc
              </p>
              <p>
                <strong>From:</strong> User1
              </p>
              <p>
                <strong>To:</strong> User2
              </p>
              <p>
                <strong>Amount:</strong> 50 GreenCoins
              </p>
              <p>
                <strong>Status:</strong> Completed
              </p>
            </div>
            <div className="transaction-item">
              <p>
                <strong>Transaction ID:</strong> 0x456...def
              </p>
              <p>
                <strong>From:</strong> User3
              </p>
              <p>
                <strong>To:</strong> User4
              </p>
              <p>
                <strong>Amount:</strong> 25 GreenCoins
              </p>
              <p>
                <strong>Status:</strong> Pending
              </p>
            </div>
          </div>
        </section>

        <section className="reports-insights">
          <h2>Reports & Insights</h2>
          <div className="report-actions">
            <button className="btn">Generate Sustainability Report</button>
            <button className="btn">View Top Contributors</button>
          </div>
          <div className="chart-placeholder">
            <BarChart2 size={48} />
            <p>Waste Category Distribution</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard

