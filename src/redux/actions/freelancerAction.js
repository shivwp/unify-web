import ErrorPopup from "../../freelancer/components/popups/ErrorPopup";
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
  SET_RECENT_FREELANCER_LIST,
  SET_JOB_DRAFT_FREELANCER_LIST,
  SET_JOB_POST_FREELANCER_LIST,
  SET_CLIENT_CONTRACTS_LIST,
  SET_HIRED_FREELANCER_LIST,
  SET_OFFERED_FREELANCER_LIST,
  SET_FREELANCER_LIST,
  SET_CHANGE_APPROVE_WORK,
  SET_CLIENT_ADD_MILESTONE,
  SET_CLIENT_FUND_MILESTONE,
  SET_CLIENT_DECLINE_MILESTONE,
  SET_CLIENT_TRANSECTION_HISTORY,
  SET_CLIENT_OVERVIEW,
  GET_FREELANCER_TRANSECTION_HISTORY,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_token")}`,
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

export const getSingleFreelancer =
  (freelancer_id, setLoading) => async (dispatch) => {
    await Axios.get(`/single-freelancer/${freelancer_id}`, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_SINGLE_FREELANCER,
            payload: res.data.data,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        console.log(err);
      });
  };

export const hireFreelancer =
  (data, navigate, errorPopup, setErrorPopup, setLoading) =>
  async (dispatch) => {
    await Axios.post(`/hire-freelancer`, data, config)
      .then((res) => {
        var object = {};
        data.forEach((value, key) => {
          object[key] = value;
        });

        if (res.data.status) {
          navigate("/hire-freelancer/edit-address");
        }
        localStorage.setItem("hire_freelancer", JSON.stringify(res.data.data));
        localStorage.setItem("freelancerData", JSON.stringify(object));

        setLoading(false);
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        setErrorPopup(
          <ErrorPopup
            Popup={() => setErrorPopup(!errorPopup)}
            message={err.response.data.message}
          />
        );
      });
  };

export const addPaymentCard =
  (data, Popup, successPopup, setSuccessPopup, setLoading) =>
  async (dispatch) => {
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

export const paymentCardLists = (setLoading) => async (dispatch) => {
  await Axios.get(`/payment-cards-list`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_PAYMENT_CARD_LIST,
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

export const deletePaymentCard =
  (data, setConfirmPopup, successPopup, setSuccessPopup, setLoading) =>
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

export const contractPayment =
  (
    data,
    navigate,
    successPopup,
    setSuccessPopup,
    errorPopup,
    setErrorPopup,
    setLoading
  ) =>
  async (dispatch) => {
    await Axios.post("/contract-payment", data, config)
      .then((res) => {
        const freelancerData = JSON.parse(
          localStorage.getItem("freelancerData")
        );

        if (res.data.status) {
          setSuccessPopup(
            <SuccessPopup
              Popup={() => setSuccessPopup(!successPopup)}
              message={res.data.message}
            />
          );

          setTimeout(() => {
            navigate(
              `/view-job/${freelancerData.project_id}/invite-freelancer`
            );
            localStorage.removeItem("hire_freelancer");
            localStorage.removeItem("freelancerData");
            window.location.reload();
          }, 2000);
        }

        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setErrorPopup(
          <ErrorPopup
            Popup={() => setErrorPopup(!errorPopup)}
            message={err.response.data.message}
          />
        );

        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const getClientDetails = (data, setLoading) => async (dispatch) => {
  await Axios.post("/single-client", data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_CLIENT_DETAILS,
          payload: res.data.data.client,
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

export const getRecentFreelancerList = (data, navigate) => async (dispatch) => {
  await Axios.post("/recent-freelancer-list", data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_RECENT_FREELANCER_LIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getJobDraftFreelancerList = () => async (dispatch) => {
  await Axios.get("/job-draft-freelancer-list", config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_JOB_DRAFT_FREELANCER_LIST,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getJobPostFreelancerList = () => async (dispatch) => {
  await Axios.get("/job-post-freelancer-list", config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_JOB_POST_FREELANCER_LIST,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllClientContractList = (data) => async (dispatch) => {
  await Axios.get("/client-contract-list", config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_CLIENT_CONTRACTS_LIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllHiredFreelancerList = (jobId) => async (dispatch) => {
  await Axios.get(`/hired-freelancer-list/${jobId}`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_HIRED_FREELANCER_LIST,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllOfferedFreelancerList = (jobId) => async (dispatch) => {
  await Axios.get(`/offer-freelancer-list/${jobId}`, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_OFFERED_FREELANCER_LIST,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFreelancerList = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/freelancer-list`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_FREELANCER_LIST,
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

export const reviewRequestForChange =
  (data, popup, setLoading) => async (dispatch) => {
    await Axios.post(`/change-approve-work`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_CHANGE_APPROVE_WORK,
            payload: res.data,
          });
          popup();
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

export const clientAddMilestone =
  (data, popup, setLoading) => async (dispatch) => {
    await Axios.post(`/client-add-milestone`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_CLIENT_ADD_MILESTONE,
            payload: res.data,
          });
          popup();
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const clientDeclineMilestone =
  (data, popup, setLoading) => async (dispatch) => {
    await Axios.post(`/decline-milestone`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_CLIENT_DECLINE_MILESTONE,
            payload: res.data,
          });
          popup();
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const clientFundMilestone =
  (data, popup, setLoading) => async (dispatch) => {
    await Axios.post(`/milestone-payment`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_CLIENT_FUND_MILESTONE,
            payload: res.data,
          });
          popup();
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const getTransectionHistory = (data) => async (dispatch) => {
  await Axios.post(`/client-transaction-history`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_CLIENT_TRANSECTION_HISTORY,
          payload: res.data,
        });
      }
    })
    .catch((err) => {});
};

export const getOverviewHistory = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/client-overview`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_CLIENT_OVERVIEW,
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
    });
};
export const getFreelancerTransectionHistory =
  (data, setLoading) => (dispatch) => {
    Axios.post(`/freelancer-transaction-history`, data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: GET_FREELANCER_TRANSECTION_HISTORY,
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
      });
  };
