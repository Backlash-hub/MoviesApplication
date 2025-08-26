// src/api/axiosConfig.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://ff0f8dfc7daf.ngrok-free.app', // <-- your actual Forwarding URL
  headers: { 'ngrok-skip-browser-warning': 'true' } // <-- REQUIRED to bypass the interstitial
});
