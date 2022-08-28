import axios from "axios";

const api = axios.create({
  baseURL: "http://161.35.55.143:3333",
});

export default api;