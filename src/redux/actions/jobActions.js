import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";
import Axios from "../axios";
import {
  DECLINE_REASONS_LIST,
  DISLIKE_POST_REASONS,
  JOBS_LIST,
  JOB_POST_DETAILS,
  ON_DISLIKE_JOB_POST,
  PROPOSAL_TERMS_CHANGE,
  SAVED_JOBS_LIST,
  SAVE_JOB_POST,
  SEND_JOB_PROPOSAL,
  SET_ALL_CLIENT_DRAFT_POSTING,
  SET_ALL_CLIENT_POSTING,
  SET_ALL_CONTRACTS,
  SET_ALL_PROPOSALS,
  SET_CLOSE_JOB_REASON_LIST,
  SET_POST_YOUR_JOB_NOW,
  SET_REMOVE_JOB_POST,
  SET_SINGLE_PROPOSAL_DETAILS,
  SET_UPDATE_JOB_POST,
  UNSAVE_JOB_POST,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("unify_token")}`,
  },
};

export const getJobsList = (data, ScrollTop) => async (dispatch) => {
  try {
    Axios.post("/jobs-list", data, config).then((res) => {
      dispatch({
        type: JOBS_LIST,
        payload: res.data,
      });
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
    Axios.get(`/single-job/${data.job_id}`, config).then((res) => {
      dispatch({
        type: JOB_POST_DETAILS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
export const onSendJobProposal =
  (data, successPopup, setSuccessPopup, navigate) => async (dispatch) => {
    try {
      Axios.post("/send-proposal", data, config).then((res) => {
        dispatch({
          type: SEND_JOB_PROPOSAL,
          payload: res.data.data,
        });
        const afterSuccess = () => {
          navigate(`/freelancer/single-submited-proposal/${res.data.data}`);
        };
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Proposal sent successfully"
            afterSuccess={afterSuccess}
          />
        );
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

export const onCloseJob =
  (data, onCloseModal, navigate) => async (dispatch) => {
    try {
      Axios.post("/remove-job", data, config).then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_REMOVE_JOB_POST,
            payload: res.data,
          });
          onCloseModal();
          navigate("/dashboard");
        }
      });
    } catch (err) {}
  };

export const editJobPosting = (data, navigate) => async (dispatch) => {
  try {
    Axios.post("/update-job", data, config).then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_UPDATE_JOB_POST,
          payload: res.data,
        });
        navigate("/dashboard");
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
export const singleProposalDetails = (id, type) => async (dispatch) => {
  try {
    Axios.get(`/single-proposal-details/${id}/${type}`, config).then((res) => {
      dispatch({
        type: SET_SINGLE_PROPOSAL_DETAILS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
export const declineReasoneList = (type) => async (dispatch) => {
  try {
    Axios.get(`/decline-reason-list/${type}`, config).then((res) => {
      dispatch({
        type: DECLINE_REASONS_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const onDeclineForInterview =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/invite-decline", data, config).then((res) => {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Thank you for your time"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };
export const onWithdrawSubmitedProposal =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/proposal-withdraw", data, config).then((res) => {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Thank you for your time"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const onChangeTermsOfProposals =
  (data, successPopup, setSuccessPopup, popup) => async (dispatch) => {
    try {
      Axios.post("/update-proposal", data, config).then((res) => {
        dispatch({
          type: PROPOSAL_TERMS_CHANGE,
          payload: res.data.data,
        });
        if (popup) {
          popup();
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Proposal sent successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onDeclineOffer =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/decline-offer", data, config).then((res) => {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Thank you for your time"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const onAcceptOffer =
  (id, successPopup, setSuccessPopup, afterSuccess) => async (dispatch) => {
    try {
      Axios.get(`/accept-offer/${id}`, config).then((res) => {
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Offer accepted successfully."
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };
