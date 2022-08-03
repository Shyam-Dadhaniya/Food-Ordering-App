import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "development"
      ? "https://main--food-delivery-application.netlify.app/api/"
      : "http://localhost:3000/api/",
});

export default axiosInstance;
