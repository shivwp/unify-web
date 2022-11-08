import Axios from "../axios";
import {
  JOBS_LIST,
  JOB_POST_DETAILS,
  SAVED_JOBS_LIST,
  SAVE_JOB_POST,
  UNSAVE_JOB_POST,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

export const getJobsList = (data) => async (dispatch) => {
  try {
    Axios.post("/jobs-list", data).then((res) => {
      dispatch({
        type: JOBS_LIST,
        payload: res.data,
      });
      console.log(res.data);
    });
  } catch (err) {}
};

export const getSavedJobsList = () => async (dispatch) => {
  try {
    Axios.get("/freelancer-saved-job", config).then((res) => {
      dispatch({
        type: SAVED_JOBS_LIST,
        payload: res.data,
      });
    });
  } catch (err) {}
};
export const SaveJobs = (data) => async (dispatch) => {
  try {
    Axios.post("/saved-jobs", data, config).then((res) => {
      dispatch({
        type: SAVE_JOB_POST,
        payload: res.data,
      });
      console.log(res);
    });
  } catch (err) {}
};
export const RemoveSaveJob = (data) => async (dispatch) => {
  try {
    Axios.post("/remove-saved-jobs", data, config).then((res) => {
      dispatch({
        type: UNSAVE_JOB_POST,
        payload: res.data,
      });
    });
  } catch (err) {}
};
export const SingleJobPostDetails = (data) => async (dispatch) => {
  try {
    Axios.post("/single-job", data).then((res) => {
      dispatch({
        type: JOB_POST_DETAILS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
