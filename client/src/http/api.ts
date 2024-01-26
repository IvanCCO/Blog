import axios from "axios";

const http = axios.create({
  baseURL: "https://taxco-backend.onrender.com",
});

export default http;
