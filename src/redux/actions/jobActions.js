import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";
import Axios from "../axios";
import {
  DISLIKE_POST_REASONS,
  JOBS_LIST,
  JOB_POST_DETAILS,
  ON_DISLIKE_JOB_POST,
  SAVED_JOBS_LIST,
  SAVE_JOB_POST,
  SEND_JOB_PROPOSAL,
  SET_ALL_CLIENT_DRAFT_POSTING,
  SET_ALL_CLIENT_POSTING,
  SET_ALL_CONTRACTS,
  SET_ALL_PROPOSALS,
  SET_CLOSE_JOB_REASON_LIST,
  SET_POST_YOUR_JOB_NOW,
  UNSAVE_JOB_POST,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

export const getJobsList = (data, ScrollTop) => async (dispatch) => {
  try {
    Axios.post("/jobs-list", data, config).then((res) => {
      dispatch({
        type: JOBS_LIST,
        payload: res.data,
      });
      console.log(res.data);
      ScrollTop();
    });
  } catch (err) {}
};

export const getSavedJobsList = (data, ScrollTop) => async (dispatch) => {
  try {
    Axios.post("/freelancer-saved-job", data, config).then((res) => {
      dispatch({
        type: SAVED_JOBS_LIST,
        payload: res.data,
      });
      ScrollTop();
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
export const onSendJobProposal =
  (data, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/send-proposal", data, config).then((res) => {
        dispatch({
          type: SEND_JOB_PROPOSAL,
          payload: res.data.data,
        });
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Proposal Sent Successfully"
          />
        );
        console.log(successPopup);
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
        payload: res.data,
      });
      setDropdownOpen(false);
    });
  } catch (err) {}
};

export const onPostYourJobNow = (data, navigate) => async (dispatch) => {
  try {
    Axios.post("/post-job", data, config).then((res) => {
      if (res.data.status) {
        navigate("/dashboard");

        dispatch({
          type: SET_POST_YOUR_JOB_NOW,
          payload: res.data,
        });
      }
    });
  } catch (err) {}
};

export const getAllClientPosting = (data) => async (dispatch) => {
  try {
    Axios.post("/client-all-posting", data, config).then((res) => {
      dispatch({
        type: SET_ALL_CLIENT_POSTING,
        payload: res.data,
      });
    });
  } catch (err) {}
};

export const getAllClientDraftPosting = (data) => async (dispatch) => {
  try {
    Axios.post("/client-draft-posting", data, config).then((res) => {
      dispatch({
        type: SET_ALL_CLIENT_DRAFT_POSTING,
        payload: res.data,
      });
    });
  } catch (err) {}
};

export const closeJobReasonList = () => async (dispatch) => {
  try {
    Axios.get("/close-job-reason-list").then((res) => {
      dispatch({
        type: SET_CLOSE_JOB_REASON_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const onCloseJob = (data, onCloseModal) => async (dispatch) => {
  try {
    Axios.post("/remove-job", data, config).then((res) => {
      if (res.data.status) {
        onCloseModal();
      }
    });
  } catch (err) {}
};

export const getAllProposals = () => async (dispatch) => {
  try {
    Axios.get("/all-proposal", config).then((res) => {
      dispatch({
        type: SET_ALL_PROPOSALS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
export const onGetAllContracts = () => async (dispatch) => {
  try {
    Axios.get("/contracts", config).then((res) => {
      dispatch({
        type: SET_ALL_CONTRACTS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
