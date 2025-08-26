// src/api/axiosConfig.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://72d524feead3.ngrok-free.app', // <-- your actual Forwarding URL
  headers: { 'ngrok-skip-browser-warning': 'true' } // <-- REQUIRED to bypass the interstitial
});
