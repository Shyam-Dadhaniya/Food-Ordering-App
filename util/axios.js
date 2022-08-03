import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/"
      : "https://main--food-delivery-application.netlify.app/api/",
});

export default axiosInstance;
