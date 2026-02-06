import axios from "axios";

const url = "https://optibook-backend-w1991885-production.up.railway.app/api";
const API = axios.create({
  baseURL: url, // change if needed
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
