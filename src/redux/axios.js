import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.API_URL || "https://unify.eoxyslive.com/api",
});

// const Axios = axios.create({
//   baseURL:
//     process.env.STAGING_API_URL ||
//     "https://unify-backend-staging.eoxyslive.com/api",
// });

export default Axios;
