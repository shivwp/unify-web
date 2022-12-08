import Axios from "../axios";
import {
  SET_JOB_BASED_FREELANCER_LIST,
  SET_INVITED_FREELANCER_LIST,
  SET_FREELANCER_INVITED,
  SET_SAVED_TALENT_LIST,
  SET_SAVED_TALENT,
  SET_REMOVE_SAVED_TALENT,
  SET_SAVED_TALENT_ERROR,
  SET_MAKE_PRIVATE_JOB,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_token")}`,
  },
};

export const getJobBasedFreelancerList = (data) => async (dispatch) => {
  await Axios.post(`/job-freelancer-list`, data, config)
    .then((res) => {
      dispatch({
        type: SET_JOB_BASED_FREELANCER_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const inviteFreelancer = (data, onCloseModal) => async (dispatch) => {
  await Axios.post(`/invite-freelancer`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_FREELANCER_INVITED,
          payload: res.data,
        });
        onCloseModal();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllInvitedFreelancers = (data) => async (dispatch) => {
  await Axios.post(`/all-invite-freelancers`, data, config)
    .then((res) => {
      dispatch({
        type: SET_INVITED_FREELANCER_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onSavedTalent = (data) => async (dispatch) => {
  await Axios.post(`/save-talent`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVED_TALENT,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onRemoveSavedTalent = (data) => async (dispatch) => {
  await Axios.post(`/remove-save-talent`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_REMOVE_SAVED_TALENT,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const savedTalentList = (data) => async (dispatch) => {
  await Axios.post(`/save-talent-list`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVED_TALENT_LIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_SAVED_TALENT_ERROR,
        payload: err.response.data.message,
      });
    });
};

export const makePrivatePublicJob = (data) => async (dispatch) => {
  await Axios.post("/public-private-job", data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_MAKE_PRIVATE_JOB,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
