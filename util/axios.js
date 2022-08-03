import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.URL,
});

export default axiosInstance;
