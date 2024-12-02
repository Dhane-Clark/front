<template>
    <div class="container py-4">
      <h2 class="text-center mb-4">Patient Information</h2>
      <div class="display-container">
        <div class="mb-3"><strong>First Name:</strong> {{ patient.firstName }}</div>
        <div class="mb-3"><strong>Last Name:</strong> {{ patient.lastName }}</div>
        <div class="mb-3"><strong>Date of Birth:</strong> {{ patient.dob }}</div>
        <div class="mb-3"><strong>Gender:</strong> {{ patient.gender }}</div>
        <div class="mb-3"><strong>Contact Number:</strong> {{ patient.contact }}</div>
        <div class="mb-3"><strong>Email Address:</strong> {{ patient.email }}</div>
        <div class="mb-3"><strong>Address:</strong> {{ patient.address }}</div>
        <div class="text-center">
          <button @click="editForm" class="btn btn-secondary px-4 py-2">Edit Information</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      patient: {
        type: Object,
        required: true,
      },
    },
    methods: {
      editForm() {
        // Emit an event to return to the form
        this.$emit('edit');
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
  
  .display-container {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  