// src/api/axiosConfig.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://f5f4024a3131.ngrok-free.app',
  headers: { 'ngrok-skip-browser-warning': 'true' }
});
