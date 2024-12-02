<template>
    <div class="container py-4">
      <h2 class="text-center mb-4">Patient Information Form</h2>
      <form @submit.prevent="submitPatientInfo" class="form-container">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="patient.firstName" 
            class="form-control" 
            placeholder="Enter first name" 
            required 
          />
        </div>
  
        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            v-model="patient.lastName" 
            class="form-control" 
            placeholder="Enter last name" 
            required 
          />
        </div>
  
        <div class="mb-3">
          <label for="dob" class="form-label">Date of Birth</label>
          <input 
            type="date" 
            id="dob" 
            v-model="patient.dob" 
            class="form-control" 
            required 
          />
        </div>
  
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select 
            id="gender" 
            v-model="patient.gender" 
            class="form-select" 
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label for="contact" class="form-label">Contact Number</label>
          <input 
            type="tel" 
            id="contact" 
            v-model="patient.contact" 
            class="form-control" 
            placeholder="Enter contact number" 
            required 
          />
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="patient.email" 
            class="form-control" 
            placeholder="Enter email address" 
            required 
          />
        </div>
  
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea 
            id="address" 
            v-model="patient.address" 
            class="form-control" 
            placeholder="Enter address" 
            rows="3" 
            required
          ></textarea>
        </div>
  
        <div class="text-center">
          <button type="submit" class="btn btn-primary px-4 py-2">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        patient: {
          firstName: '',
          lastName: '',
          dob: '',
          gender: '',
          contact: '',
          email: '',
          address: '',
        },
      };
    },
    methods: {
      submitPatientInfo() {
        // Simulate a form submission
        console.log('Patient Information Submitted:', this.patient);
  
        // Clear the form
        this.patient = {
          firstName: '',
          lastName: '',
          dob: '',
          gender: '',
          contact: '',
          email: '',
          address: '',
        };
  
        alert('Patient information submitted successfully!');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .form-container {
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  