import Axios from "../axios";
import {
  SET_JOB_BASED_FREELANCER_LIST,
  SET_INVITED_FREELANCER_LIST,
  SET_FREELANCER_INVITED,
  SET_SAVED_TALENT_LIST,
  SET_SAVED_TALENT,
  SET_REMOVE_SAVED_TALENT,
  SET_MAKE_PRIVATE_JOB,
  SET_ALL_JOB_PROPOSALS_LIST,
  SET_SAVE_PROPOSAL_IN_SHORTLIST,
  SET_REMOVE_PROPOSAL_IN_SHORTLIST,
  SET_PROPOSAL_SHORTLIST,
  SET_ARCHIEVED_LIST,
  SET_SAVE_PROPOSAL_IN_ARCHIEVED,
  SET_REMOVE_PROPOSAL_IN_ARCHIEVED,
  SET_SINGLE_FREELANCER,
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
    .catch((err) => {});
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

export const getAllJobProposalsList = (data) => async (dispatch) => {
  await Axios.post(`/job-proposal-list`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_ALL_JOB_PROPOSALS_LIST,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllProposalShortList = (data) => async (dispatch) => {
  await Axios.get(`/shortlist-list/${data.project_id}`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_PROPOSAL_SHORTLIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onSaveInShortList = (data) => async (dispatch) => {
  await Axios.post(`/save-shortlist`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVE_PROPOSAL_IN_SHORTLIST,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onRemoveInShortList = (data) => async (dispatch) => {
  await Axios.post(`/remove-shortlist`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_REMOVE_PROPOSAL_IN_SHORTLIST,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllProposalArchievedList = (data) => async (dispatch) => {
  await Axios.get(`/arvhive-list/${data.project_id}`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_ARCHIEVED_LIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveProposalArchived = (data) => async (dispatch) => {
  await Axios.post(`/save-archive`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVE_PROPOSAL_IN_ARCHIEVED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const removeProposalArchived = (data) => async (dispatch) => {
  await Axios.post(`/remove-archive`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_REMOVE_PROPOSAL_IN_ARCHIEVED,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleFreelancer = (freelancer_id) => async (dispatch) => {
  await Axios.get(`/single-freelancer/${freelancer_id}`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SINGLE_FREELANCER,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
