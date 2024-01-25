import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:7000",
});

export default http;
