import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";
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
  SET_ADD_CARD,
  SET_PAYMENT_CARD_LIST,
  SET_DELETE_CARD,
  SET_CLIENT_DETAILS,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("unify_token")}`,
  },
};

export const getJobBasedFreelancerList =
  (data, setLoading) => async (dispatch) => {
    await Axios.post(`/job-freelancer-list`, data, config)
      .then((res) => {
        dispatch({
          type: SET_JOB_BASED_FREELANCER_LIST,
          payload: res.data,
        });
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
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

export const getAllInvitedFreelancers =
  (data, setLoading) => async (dispatch) => {
    await Axios.post(`/all-invite-freelancers`, data, config)
      .then((res) => {
        dispatch({
          type: SET_INVITED_FREELANCER_LIST,
          payload: res.data.data,
        });
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        console.log(err);
      });
  };

export const onSavedTalent = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/save-talent`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVED_TALENT,
          payload: res.data,
        });
      }
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
      console.log(err);
    });
};

export const onRemoveSavedTalent = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/remove-save-talent`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_REMOVE_SAVED_TALENT,
          payload: res.data,
        });
      }
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
      console.log(err);
    });
};

export const savedTalentList = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/save-talent-list`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVED_TALENT_LIST,
          payload: res.data.data,
        });
        if (setLoading) {
          setLoading(false);
        }
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
};

export const makePrivatePublicJob = (data, setLoading) => async (dispatch) => {
  await Axios.post("/public-private-job", data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_MAKE_PRIVATE_JOB,
          payload: res.data,
        });
      }
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    });
};

export const getAllJobProposalsList =
  (data, setLoading) => async (dispatch) => {
    await Axios.post(`/job-proposal-list`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_ALL_JOB_PROPOSALS_LIST,
            payload: res.data,
          });
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        console.log(err);
      });
  };

export const getAllProposalShortList =
  (data, setLoading) => async (dispatch) => {
    await Axios.get(`/shortlist-list/${data.project_id}`, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_PROPOSAL_SHORTLIST,
            payload: res.data.data,
          });
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        console.log(err);
      });
  };

export const onSaveInShortList = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/save-shortlist`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVE_PROPOSAL_IN_SHORTLIST,
          payload: res.data,
        });
      }
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    });
};
export const onRemoveInShortList = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/remove-shortlist`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_REMOVE_PROPOSAL_IN_SHORTLIST,
          payload: res.data,
        });
      }
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
      console.log(err);
    });
};

export const getAllProposalArchievedList =
  (data, setLoading) => async (dispatch) => {
    await Axios.get(`/arvhive-list/${data.project_id}`, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_ARCHIEVED_LIST,
            payload: res.data.data,
          });
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        console.log(err);
      });
  };

export const saveProposalArchived = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/save-archive`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_SAVE_PROPOSAL_IN_ARCHIEVED,
          payload: res.data,
        });
      }
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
      console.log(err);
    });
};
export const removeProposalArchived =
  (data, setLoading) => async (dispatch) => {
    await Axios.post(`/remove-archive`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_REMOVE_PROPOSAL_IN_ARCHIEVED,
            payload: res.data,
          });
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
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

export const hireFreelancer = (data, navigate) => async (dispatch) => {
  await Axios.post(`/hire-freelancer`, data, config)
    .then((res) => {
      if (res.data.status) {
        navigate("/hire-freelancer/edit-address");
      }
      sessionStorage.setItem("hire_freelancer", JSON.stringify(res.data.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addPaymentCard =
  (data, Popup, successPopup, setSuccessPopup) => async (dispatch) => {
    await Axios.post(`/add-payment-card`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_ADD_CARD,
            payload: res.data,
          });
          Popup();

          setSuccessPopup(
            <SuccessPopup
              Popup={() => setSuccessPopup(!successPopup)}
              message={res.data.message}
            />
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const paymentCardLists = (data) => async (dispatch) => {
  await Axios.get(`/payment-cards-list`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_PAYMENT_CARD_LIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deletePaymentCard =
  (data, setConfirmPopup, successPopup, setSuccessPopup) =>
  async (dispatch) => {
    await Axios.post(`/delete-payment-card`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_DELETE_CARD,
            payload: res.data,
          });
          setConfirmPopup(false);

          setSuccessPopup(
            <SuccessPopup
              Popup={() => setSuccessPopup(!successPopup)}
              message={res.data.message}
            />
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const contractPayment = (data, navigate) => async (dispatch) => {
  await Axios.post("/contract-payment", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getClientDetails = (data, navigate) => async (dispatch) => {
  await Axios.post("/single-client", data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_CLIENT_DETAILS,
          payload: res.data.data.client,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
