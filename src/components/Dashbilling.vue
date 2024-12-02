<template>
    <div class="billing-dashboard">
      <h1>Hospital Billing Dashboard</h1>
      
      <!-- Search Bar -->
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search by Patient Name or ID" 
          @input="filterInvoices"
        />
      </div>
      
      <!-- Invoice List -->
      <div class="invoice-list">
        <div v-for="invoice in filteredInvoices" :key="invoice.id" class="invoice-card">
          <h3>{{ invoice.patientName }}</h3>
          <p>Status: {{ invoice.status }}</p>
          <p>Total Due: ${{ invoice.totalDue }}</p>
          <button @click="viewInvoiceDetail(invoice.id)">View Details</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        invoices: [],
        filteredInvoices: [],
        searchQuery: '',
      };
    },
    mounted() {
      this.fetchInvoices();
    },
    methods: {
      async fetchInvoices() {
        try {
          const response = await axios.get('/api/invoices'); // Replace with your API endpoint
          this.invoices = response.data;
          this.filteredInvoices = this.invoices;
        } catch (error) {
          console.error("Error fetching invoices:", error);
        }
      },
      filterInvoices() {
        if (this.searchQuery === '') {
          this.filteredInvoices = this.invoices;
        } else {
          this.filteredInvoices = this.invoices.filter(invoice =>
            invoice.patientName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            invoice.id.toString().includes(this.searchQuery)
          );
        }
      },
      viewInvoiceDetail(invoiceId) {
        this.$router.push({ name: 'invoiceDetail', params: { invoiceId } });
      },
    },
  };
  </script>
  
  <style scoped>
  .billing-dashboard {
    padding: 20px;
  }
  .search-bar {
    margin-bottom: 20px;
  }
  .invoice-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .invoice-card {
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #f9f9f9;
    text-align: center;
  }
  </style>
  