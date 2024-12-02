<template>
    <div class="room-dashboard">
      <div class="sidebar">
        <h2>Room Dashboard</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Check-in</a></li>
          <li><a href="#">Check-out</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
  
      <div class="content">
        <header>
          <h1>Room Management</h1>
          <div class="header-actions">
            <button>Add Room</button>
          </div>
        </header>
  
        <div class="room-summary">
          <div class="room-card">
            <h3>Available Rooms</h3>
            <p>10</p>
          </div>
          <div class="room-card">
            <h3>Booked Rooms</h3>
            <p>5</p>
          </div>
          <div class="room-card">
            <h3>Under Maintenance</h3>
            <p>2</p>
          </div>
          <div class="room-card">
            <h3>Occupied Rooms</h3>
            <p>3</p>
          </div>
        </div>
  
        <div class="room-list">
          <h2>Room Details</h2>
          <table>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Status</th>
                <th>Type</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Available</td>
                <td>Single</td>
                <td>$100</td>
                <td><button>Book</button></td>
              </tr>
              <tr>
                <td>102</td>
                <td>Occupied</td>
                <td>Double</td>
                <td>$150</td>
                <td><button>Check-out</button></td>
              </tr>
              <tr>
                <td>103</td>
                <td>Under Maintenance</td>
                <td>Suite</td>
                <td>$200</td>
                <td><button>Schedule Maintenance</button></td>
              </tr>
              <tr>
                <td>104</td>
                <td>Available</td>
                <td>Single</td>
                <td>$100</td>
                <td><button>Book</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RoomDashboard',
  };
  </script>
  
  <style scoped>
  .room-dashboard {
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
  
  .room-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .room-card {
    background-color: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  .room-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .room-card p {
    font-size: 24px;
    font-weight: bold;
  }
  
  .room-list {
    margin-top: 30px;
  }
  
  .room-list h2 {
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
  
  table button {
    padding: 6px 12px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  table button:hover {  
    background-color: #2980b9;
  }
  </style>
  