<template>
    <div class="inventory-dashboard">
      <div class="sidebar">
        <h2>Inventory Dashboard</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Inventory</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Suppliers</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
  
      <div class="content">
        <header>
          <h1>Inventory Management</h1>
          <div class="header-actions">
            <button>Add Product</button>
          </div>
        </header>
  
        <div class="inventory-summary">
          <div class="inventory-card">
            <h3>Total Products</h3>
            <p>150</p>
          </div>
          <div class="inventory-card">
            <h3>Low Stock</h3>
            <p>20</p>
          </div>
          <div class="inventory-card">
            <h3>Out of Stock</h3>
            <p>5</p>
          </div>
          <div class="inventory-card">
            <h3>Sold Today</h3>
            <p>30</p>
          </div>
        </div>
  
        <div class="product-list">
          <h2>Product Details</h2>
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Product A</td>
                <td>Electronics</td>
                <td>50</td>
                <td>$200</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>102</td>
                <td>Product B</td>
                <td>Clothing</td>
                <td>15</td>
                <td>$50</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>103</td>
                <td>Product C</td>
                <td>Furniture</td>
                <td>10</td>
                <td>$500</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>104</td>
                <td>Product D</td>
                <td>Electronics</td>
                <td>100</td>
                <td>$150</td>
                <td><button>View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InventoryDashboard',
  };
  </script>
  
  <style scoped>
  .inventory-dashboard {
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
  
  .inventory-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .inventory-card {
    background-color: #ecf0f1;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  .inventory-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .inventory-card p {
    font-size: 24px;
    font-weight: bold;
  }
  
  .product-list {
    margin-top: 30px;
  }
  
  .product-list h2 {
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
  