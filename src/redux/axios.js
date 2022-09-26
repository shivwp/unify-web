import axios from "axios";

const Axios = axios.create({
  baseURL: "https://unify.eoxyslive.com/api",
});

export default Axios;
