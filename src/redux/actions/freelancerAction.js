import Axios from "../axios";
import {
  SET_JOB_BASED_FREELANCER_LIST,
  SET_INVITED_FREELANCER_LIST,
  SET_FREELANCER_INVITED,
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

export const savedTalent = (data) => async (dispatch) => {
  await Axios.post(`/save-talent`, data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const savedTalentList = (data) => async (dispatch) => {
  await Axios.post(`/save-talent-list`, data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
