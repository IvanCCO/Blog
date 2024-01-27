import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "x-api-key": process.env.REACT_APP_API_SECRET,
  },
});

export default http;
