import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:5119", // Default to localhost if BASE_URL is not set
  timeout: 30000, // Timeout: 30 seconds
});