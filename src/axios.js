import axios from "axios";

export const backendAPI = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});