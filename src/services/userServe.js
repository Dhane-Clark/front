import axios from 'axios';
 const apiClient = axios.create({
  baseURL:'http://localhost:1000/api/auth',
  headers:{'Content-Type': 'application/json'}
 })

 export default{
      register(email){return apiClient.get(email)}
 }   