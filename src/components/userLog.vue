<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Email:</label>
          <input type="email" v-model="email" required placeholder="Enter your email" />
        </div>
        <div class="input-group">
          <label>Password:</label>
          <input type="password" v-model="password" required placeholder="Enter your password" />
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <div class="actions">
        <p>Don't have an account?</p>
        <router-link to="/register">
          <button class="register-btn">Register</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Login and fetch role
        const response = await axios.post("http://localhost:1000/api/auth/login", {
          email: this.email,
          password: this.password,
        });

        // Assume the backend sends back user role and token
        // Log response to check the data
        console.log(response.data);

        const { role, token } = response.data;
        localStorage.setItem('authToken', token);
        // Redirect based on role
        switch (role) {
          case "Admin":
            this.$router.push("/admin-dashboard");
            break;
          case "User":
            this.$router.push("/user-dashboard");
            break;
          case "Billing":
            this.$router.push("/billing-dashboard");
            break;
          case "RoomAssignment":
            this.$router.push("/room-assignment-dashboard");
            break;
          case "Inventory":
            this.$router.push("/inventory-dashboard");
            break;
          default:
            alert("Invalid role detected. Please contact support.");
        }
      } catch (err) {
        this.error = err.response?.data?.error || "An error occurred during login.";
      }
    },
  },
};
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.login-box {
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

.login-btn {
  background-color: #007bff;
  color: white;
}

.login-btn:hover {
  background-color: #0056b3;
}

.register-btn {
  background-color: #28a745;
  color: white;
  margin-top: 10px;
}

.register-btn:hover {
  background-color: #218838;
}

.error {
  color: red;
  margin-top: 10px;
}

.actions {
  margin-top: 20px;
  text-align: center;
}
</style>