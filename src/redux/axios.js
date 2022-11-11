import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.API_URL || "https://unify.eoxyslive.com/api",
});

export default Axios;
