import axios from "axios";

const api = axios.create({
  baseURL: "https://product-registration-api.herokuapp.com/api"
});

export default api;
