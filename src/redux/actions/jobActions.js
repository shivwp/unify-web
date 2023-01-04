import ErrorPopup from "../../freelancer/components/popups/ErrorPopup";
import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";
import Axios from "../axios";
import {
  ADD_TIMESHEET_TIME,
  DECLINE_REASONS_LIST,
  DISLIKE_POST_REASONS,
  GET_TIMESHEET_DATA,
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
  SINGLE_CONTRACT_DATA,
  UNSAVE_JOB_POST,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_token")}`,
  },
};

export const getJobsList =
  (data, ScrollTop, setLoading) => async (dispatch) => {
    try {
      Axios.post("/jobs-list", data, config).then((res) => {
        dispatch({
          type: JOBS_LIST,
          payload: res.data,
        });
        if (setLoading) {
          setLoading(false);
        }
        if (ScrollTop) {
          ScrollTop();
        }
      });
    } catch (err) {
      if (setLoading) {
        setLoading(false);
      }
    }
  };

export const getSavedJobsList =
  (data, ScrollTop, setLoading) => async (dispatch) => {
    try {
      Axios.post("/freelancer-saved-job", data, config).then((res) => {
        dispatch({
          type: SAVED_JOBS_LIST,
          payload: res.data,
        });
        if (setLoading) {
          setLoading(false);
        }
        if (ScrollTop) {
          ScrollTop();
        }
      });
    } catch (err) {
      if (setLoading) {
        setLoading(false);
      }
    }
  };
export const saveJobs = (data, setLoading) => async (dispatch) => {
  try {
    Axios.post("/saved-jobs", data, config).then((res) => {
      dispatch({
        type: SAVE_JOB_POST,
        payload: res.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    });
  } catch (err) {
    if (setLoading) {
      setLoading(false);
    }
  }
};
export const removeSaveJob = (data, setLoading) => async (dispatch) => {
  try {
    Axios.post("/remove-saved-jobs", data, config).then((res) => {
      dispatch({
        type: UNSAVE_JOB_POST,
        payload: res.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    });
  } catch (err) {
    if (setLoading) {
      setLoading(false);
    }
  }
};
export const singleJobPostDetails = (data, setLoading) => async (dispatch) => {
  try {
    Axios.get(`/single-job/${data.job_id}`, config).then((res) => {
      dispatch({
        type: JOB_POST_DETAILS,
        payload: res.data.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    });
  } catch (err) {
    if (setLoading) {
      setLoading(false);
    }
  }
};
export const onSendJobProposal =
  (data, successPopup, setSuccessPopup, navigate, is_invited, setLoading) =>
  async (dispatch) => {
    Axios.post("/send-proposal", data, config)
      .then((res) => {
        dispatch({
          type: SEND_JOB_PROPOSAL,
          payload: res.data.data,
        });
        const afterSuccess = () => {
          if (is_invited) {
            navigate(`/freelancer/single-active-proposal/${res.data.data}`);
          } else {
            navigate(`/freelancer/single-submited-proposal/${res.data.data}`);
          }
        };

        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Proposal sent successfully"
            afterSuccess={afterSuccess}
          />
        );
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <ErrorPopup
            popup={setSuccessPopup}
            message={err.response.data.message}
          />
        );
      });
  };
export const onDislikePostReasons = (setLoading) => async (dispatch) => {
  try {
    Axios.get("/dislike-reasons").then((res) => {
      dispatch({
        type: DISLIKE_POST_REASONS,
        payload: res.data.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    });
  } catch (err) {
    if (setLoading) {
      setLoading(false);
    }
  }
};
export const onDislikeJobPost =
  (data, setDropdownOpen, setLoading) => async (dispatch) => {
    await Axios.post("/dislike-job", data, config)
      .then((res) => {
        dispatch({
          type: ON_DISLIKE_JOB_POST,
          payload: res.data,
        });
        setDropdownOpen(false);
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

export const onPostYourJobNow = (data, navigate) => async (dispatch) => {
  await Axios.post("/post-job", data, config)
    .then((res) => {
      if (res.data.status) {
        navigate("/dashboard");
        dispatch({
          type: SET_POST_YOUR_JOB_NOW,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllClientPosting = (data, setLoading) => async (dispatch) => {
  await Axios.post("/client-all-posting", data, config)
    .then((res) => {
      dispatch({
        type: SET_ALL_CLIENT_POSTING,
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
    });
};

export const getAllClientDraftPosting =
  (data, setLoading) => async (dispatch) => {
    await Axios.post("/client-draft-posting", data, config)
      .then((res) => {
        dispatch({
          type: SET_ALL_CLIENT_DRAFT_POSTING,
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
      });
  };

export const closeJobReasonList = (setLoading) => async (dispatch) => {
  await Axios.get("/close-job-reason-list")
    .then((res) => {
      dispatch({
        type: SET_CLOSE_JOB_REASON_LIST,
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
    });
};

export const onCloseJob =
  (data, onCloseModal, navigate, setLoading) => async (dispatch) => {
    await Axios.post("/remove-job", data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_REMOVE_JOB_POST,
            payload: res.data,
          });
          onCloseModal();
          navigate("/dashboard");
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

export const editJobPosting =
  (data, navigate, setLoading) => async (dispatch) => {
    await Axios.post("/update-job", data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: SET_UPDATE_JOB_POST,
            payload: res.data,
          });
          navigate("/dashboard");
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

export const getAllProposals = (setLoading) => async (dispatch) => {
  await Axios.get("/all-proposal", config)
    .then((res) => {
      if (setLoading) {
        setLoading(false);
      }
      dispatch({
        type: SET_ALL_PROPOSALS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
};
export const onGetAllContracts = (filters, setLoading) => async (dispatch) => {
  await Axios.get(`/contracts`, {
    params: {
      sort_for: filters?.sort_for,
      sort_by: filters?.sort_by,
      closed_accounts: filters?.closed_accounts,
    },
    ...config,
  })
    .then((res) => {
      dispatch({
        type: SET_ALL_CONTRACTS,
        payload: res.data.data,
      });
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};
export const singleProposalDetails =
  (id, type, setLoading) => async (dispatch) => {
    await Axios.get(`/single-proposal-details/${id}/${type}`, config)
      .then((res) => {
        dispatch({
          type: SET_SINGLE_PROPOSAL_DETAILS,
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
      });
  };
export const declineReasoneList = (type, setLoading) => async (dispatch) => {
  await Axios.get(`/decline-reason-list/${type}`, config)
    .then((res) => {
      dispatch({
        type: DECLINE_REASONS_LIST,
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
    });
};

export const onDeclineForInterview =
  (data, popup, successPopup, setSuccessPopup, afterSuccess, setLoading) =>
  async (dispatch) => {
    await Axios.post("/invite-decline", data, config)
      .then((res) => {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Thank you for your time"
            afterSuccess={afterSuccess}
          />
        );
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <ErrorPopup
            popup={setSuccessPopup}
            message={err.response.data.message}
          />
        );
      });
  };
export const onWithdrawSubmitedProposal =
  (data, popup, successPopup, setSuccessPopup, afterSuccess, setLoading) =>
  async (dispatch) => {
    await Axios.post("/proposal-withdraw", data, config)
      .then((res) => {
        popup();
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Thank you for your time"
            afterSuccess={afterSuccess}
          />
        );
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <ErrorPopup
            popup={setSuccessPopup}
            message={err.response.data.message}
          />
        );
      });
  };

export const onChangeTermsOfProposals =
  (data, successPopup, setSuccessPopup, popup, setLoading) =>
  async (dispatch) => {
    await Axios.post("/update-proposal", data, config)
      .then((res) => {
        dispatch({
          type: PROPOSAL_TERMS_CHANGE,
          payload: res.data,
        });
        if (popup) {
          popup();
        }
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Proposal sent successfully"
          />
        );
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <ErrorPopup
            popup={setSuccessPopup}
            message={err.response.data.message}
          />
        );
      });
  };

export const onDeclineOffer =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    await Axios.post("/decline-offer", data, config)
      .then((res) => {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Thank you for your time"
            afterSuccess={afterSuccess}
          />
        );
      })
      .catch((err) => {
        console.log(err);
        setSuccessPopup(
          <ErrorPopup
            popup={setSuccessPopup}
            message={err.response.data.message}
          />
        );
      });
  };

export const onAcceptOffer =
  (id, successPopup, setSuccessPopup, afterSuccess, setLoading) =>
  async (dispatch) => {
    await Axios.get(`/accept-offer/${id}`, config)
      .then((res) => {
        if (setLoading) {
          setLoading(false);
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Offer accepted successfully."
            afterSuccess={afterSuccess}
          />
        );
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
          setSuccessPopup(
            <ErrorPopup
              popup={setSuccessPopup}
              message={err.response.data.message}
            />
          );
        }
      });
  };
export const SingleContractData = (id, setLoading) => async (dispatch) => {
  await Axios.get(`/single-contract/${id}`, config)
    .then((res) => {
      if (setLoading) {
        setLoading(false);
      }
      dispatch({
        payload: res.data.data,
        type: SINGLE_CONTRACT_DATA,
      });
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
};
export const AddTimeSheetTime = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/add-timesheet`, data, config)
    .then((res) => {
      if (setLoading) {
        setLoading(false);
      }
      dispatch({
        payload: res.data.data,
        type: ADD_TIMESHEET_TIME,
      });
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
};
export const getContractTimesheet = (data, setLoading) => async (dispatch) => {
  console.log(data);
  await Axios.get(`/contract-timesheet/${data.id}`, {
    params: {
      start_date: data?.start_date,
      end_date: data?.end_date,
    },
    ...config,
  })
    .then((res) => {
      if (setLoading) {
        setLoading(false);
      }
      dispatch({
        payload: res.data.data,
        type: GET_TIMESHEET_DATA,
      });
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
};
