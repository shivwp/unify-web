import Axios from "../axios";
import { JOBS_LIST } from "../types";

const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
    },
  };
  
  export const getJobsList = () => async (dispatch) => {
    try {
      Axios.post("/jobs-list").then((res) => {
        dispatch({
          type: JOBS_LIST,
          payload: res.data,
        });
      });
    } catch (err) {}
  };
  