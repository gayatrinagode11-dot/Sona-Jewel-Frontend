import axios from "axios";

const api = axios.create({
  baseURL: "https://sona-jewel-backend.onrender.com/api/v1",
});

export default api;