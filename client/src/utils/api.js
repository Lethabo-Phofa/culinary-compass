import axios from 'axios';

// Creating an instance of axios with a base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend API base URL
});

export default API;