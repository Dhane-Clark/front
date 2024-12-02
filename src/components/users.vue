<template>
  <div class="register-container">
    <div class="register-box">
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label>First Name:</label>
          <input type="text" v-model="firstName" required placeholder="Enter your first name" />
        </div>
        <div class="input-group">
          <label>Last Name:</label>
          <input type="text" v-model="lastName" required placeholder="Enter your last name" />
        </div>
        <div class="input-group">
          <label>Email:</label>
          <input type="email" v-model="email" required placeholder="Enter your email" />
        </div>
        <div class="input-group">
          <label>Password:</label>
          <input type="password" v-model="password" required placeholder="Enter your password" />
        </div>
        <div class="input-group">
          <label>Role:</label>
          <select v-model="role" required>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Billing">Billing Management</option>
            <option value="RoomAssignment">Room Assignment</option>
            <option value="Inventory">Inventory Management</option>
          </select>
        </div>
        <button type="submit" class="register-btn">Register</button>
      </form>
    </div>
  </div>
</template>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '', // Selected role
      };
    },
    methods: {
      async handleRegister() {
        try {
          // Post data to the API
          const response = await axios.post('http://localhost:1000/api/auth/register', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            role: this.role,
          });
  
          alert('Registration successful!');
          console.log(response.data);
  
          // Redirect based on the selected role
          switch (this.role) {
            case 'Admin':
              this.$router.push('/'); // Admin dashboard route
              break;
            case 'User':
              this.$router.push('/'); // User dashboard route
              break;
            case 'Billing':
              this.$router.push('/'); // Billing dashboard route
              break;
            case 'RoomAssignment':
              this.$router.push('/'); // Room assignment dashboard route
              break;
            case 'Inventory':
              this.$router.push('/'); // Inventory dashboard route
              break;
            default:
              alert('Invalid role selected.');
          }
        } catch (error) {
          alert('Registration failed. Please try again.');
          console.error(error.response?.data || error.message);
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
  }
  
  .register-box {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    transition: background-color 0.3s ease;
  }
  
  .register-btn {
    background-color: #28a745;
    color: white;
  }
  
  .register-btn:hover {
    background-color: #218838;
  }
.input-group {
  margin-bottom: 20px;
  text-align: left;
}

/* Label styling */
.input-group label {
  font-weight: bold;
  margin-bottom: 8px;
  display: inline-block;
  color: #333;
}

/* Dropdown styling */
.input-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
  appearance: none;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Focus state */
.input-group select:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

/* Hover state */
.input-group select:hover {
  border-color: #0056b3;
}

/* Add a dropdown arrow */
.input-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23999' d='M10 12l-6-6h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px 12px;
}

/* Dropdown styling for smaller screens */
@media (max-width: 768px) {
  .input-group select {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
