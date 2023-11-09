import axios from "axios";
const token = localStorage.getItem("x-auth-token");
const api = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    Accept: " X_auth_token",
    x_auth_token: token,
  },
});

export default api;
