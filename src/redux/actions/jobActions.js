import Axios from "../axios";
import {
  DISLIKE_POST_REASONS,
  JOBS_LIST,
  JOB_POST_DETAILS,
  ON_DISLIKE_JOB_POST,
  SAVED_JOBS_LIST,
  SAVE_JOB_POST,
  SEND_JOB_PROPOSAL,
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

export const getSavedJobsList = (data) => async (dispatch) => {
  try {
    Axios.post("/freelancer-saved-job", data, config).then((res) => {
      dispatch({
        type: SAVED_JOBS_LIST,
        payload: res.data,
      });
    });
  } catch (err) {}
};
export const saveJobs = (data) => async (dispatch) => {
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
export const removeSaveJob = (data) => async (dispatch) => {
  try {
    Axios.post("/remove-saved-jobs", data, config).then((res) => {
      dispatch({
        type: UNSAVE_JOB_POST,
        payload: res.data,
      });
    });
  } catch (err) {}
};
export const singleJobPostDetails = (data) => async (dispatch) => {
  try {
    Axios.post("/single-job", data).then((res) => {
      dispatch({
        type: JOB_POST_DETAILS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
export const onSendJobProposal = (data) => async (dispatch) => {
  try {
    Axios.post("/send-proposal", data, config).then((res) => {
      dispatch({
        type: SEND_JOB_PROPOSAL,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
export const onDislikePostReasons = (data) => async (dispatch) => {
  try {
    Axios.get("/dislike-reasons").then((res) => {
      dispatch({
        type: DISLIKE_POST_REASONS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
export const onDislikeJobPost = (data, setDropdownOpen) => async (dispatch) => {
  try {
    Axios.post("/dislike-job", data, config).then((res) => {
      dispatch({
        type: ON_DISLIKE_JOB_POST,
        payload: res.data.data,
      });
      setDropdownOpen(false);
    });
  } catch (err) {}
};
