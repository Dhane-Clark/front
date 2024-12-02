<template>
    <div class="admin-dashboard">
      <div class="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Billing</a></li>
          <li><a href="#">Inventory</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
  
      <div class="content">
        <header>
          <h1>Welcome, Admin!</h1>
          <div class="header-actions">
            <router-link to="/">
          <button class="logout-btn">Logout</button>
        </router-link>
          </div>
        </header>
  
        <div class="main-stats">
          <div class="stat-card">
            <h3>Total Users</h3>
            <p>350</p>
          </div>
          <div class="stat-card">
            <h3>Total Revenue</h3>
            <p>$12,340</p>
          </div>
          <div class="stat-card">
            <h3>Active Patients</h3>
            <p>125</p>
          </div>
          <div class="stat-card">
            <h3>Pending Payments</h3>
            <p>30</p>
          </div>
        </div>
  
        <div class="recent-activity">
          <h2>Recent Activity</h2>
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Time</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Patient Registered</td>
                <td>12:30 PM</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>Payment Received</td>
                <td>1:15 PM</td>
                <td>Jane Smith</td>
              </tr>
              <tr>
                <td>Invoice Created</td>
                <td>2:45 PM</td>
                <td>Michael Brown</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    display: flex;
  }
  
  .sidebar {
    width: 200px;
    background-color: #2c3e50;
    color: #fff;
    padding: 20px;
  }
  
  .sidebar h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 15px 0;
  }
  
  .sidebar ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  header h1 {
    font-size: 28px;
  }
  
  .header-actions button {
    padding: 10px 15px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .header-actions button:hover {
    background-color: #c0392b;
  }
  
  .main-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .stat-card {
    background-color: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  .stat-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .stat-card p {
    font-size: 24px;
    font-weight: bold;
  }
  
  .recent-activity {
    margin-top: 30px;
  }
  
  .recent-activity h2 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table th,
  table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  table th {
    background-color: #34495e;
    color: #fff;
  }
  
  table tr:hover {
    background-color: #f9f9f9;
  }
  </style>
  