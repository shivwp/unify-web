import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";
import Axios from "../axios";
import {
  SET_ADD_EXPRIENCE,
  SET_CLIENT_INFO_DETAILS,
  SET_CLOSE_ACCOUNT_REASON_LIST,
  SET_DELETE_EXPRIENCE,
  SET_EDIT_CLIENT_INFO,
  SET_FREELANCER_PROFILE,
  SET_FREELANCER_SKILLS,
  SET_INDUSTRIES_LIST,
  SET_TIMEZONE_LIST,
  SET_DEGREE_LIST,
  SET_DELETE_EDUCATION,
  SET_EDIT_FREELANCER_INFO,
  SET_EDIT_FREELANCER_LOCATION,
  SET_EDIT_LANGUAGE,
  SET_LANGUAGE_LIST,
  SET_HWP_LIST,
  SET_HOURS_PER_WEEK,
  SET_EDIT_SKILLS,
  SET_EDIT_CERTIFICATE,
  SET_DELETE_CERTIFICATE,
  SET_PROFILE_IMG_CHANGE,
  SET_EDIT_EDUCATION,
  SET_EDIT_DESIGNATION,
  SET_EDIT_PORTFOLIO,
  SET_EDIT_VIDEO,
  SET_VISIBLITY,
  SET_EXPRIENCE_LEVEL,
  SET_DELETE_PORTFOLIO,
  SET_ADDITIONAL_ACCOUNT,
  SET_SUBMIT_VERIF_DOCS,
  REQUEST_TESTIMONIAL,
  GET_TESTIMONIAL,
  SET_CATEGORY_LIST,
  SET_PORTFOLIO_ERROR,
  ADD_CATEGORY,
  HOURLY_PRICE,
} from "../types";
let userDetails = JSON.parse(sessionStorage.getItem("unify_user"));

const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("unify_token")}`,
  },
};

// FREELANCER

export const getFreelancerProfile = () => async (dispatch) => {
  try {
    await Axios.get(`/get-freelancer-profile`, config).then((res) => {
      dispatch({
        type: SET_FREELANCER_PROFILE,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const getFreelancerSkills = (data) => async (dispatch) => {
  try {
    await Axios.post(`/skill-list`, data).then((res) => {
      dispatch({
        type: SET_FREELANCER_SKILLS,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const onAddEmployment =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      await Axios.post(`/edit-employment-info`, data, config).then((res) => {
        dispatch({
          type: SET_ADD_EXPRIENCE,
          payload: res.data,
        });
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Employment history saved Sucessfully"
          />
        );
      });
    } catch (err) {}
  };

export const onDeleteEmployment =
  (data, setConfirmPopup) => async (dispatch) => {
    try {
      await Axios.post(`/delete-employment-info`, data, config).then((res) => {
        dispatch({
          type: SET_DELETE_EXPRIENCE,
          payload: res.data,
        });
        setConfirmPopup(false);
      });
    } catch (err) {}
  };

// CLIENT
export const getClientInfoDetails = (data) => async (dispatch) => {
  try {
    await Axios.get(`/get-client-info`, config).then((res) => {
      dispatch({
        type: SET_CLIENT_INFO_DETAILS,
        payload: res.data.data.client,
      });
    });
  } catch (err) {}
};

export const getIndustriesList = (data) => async (dispatch) => {
  try {
    await Axios.get(`/industries-list`).then((res) => {
      dispatch({
        type: SET_INDUSTRIES_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const getTimezoneList = (data) => async (dispatch) => {
  try {
    await Axios.get(`/timezone_list`).then((res) => {
      dispatch({
        type: SET_TIMEZONE_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const addEditClientInfo = (data, setOpen) => async (dispatch) => {
  try {
    Axios.post("/edit-client-info", data, config).then((res) => {
      dispatch({
        type: SET_EDIT_CLIENT_INFO,
        payload: res.data,
      });
      setOpen(false);
    });
  } catch (err) {}
};

export const closeAccountReasonList = () => async (dispatch) => {
  try {
    Axios.get("/close-account-reason-list").then((res) => {
      dispatch({
        type: SET_CLOSE_ACCOUNT_REASON_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const onCloseAccount =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/close-account", data, config).then((res) => {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Account close successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const getFreelancerDegreeList = (data) => async (dispatch) => {
  try {
    Axios.get("/degree-list").then((res) => {
      dispatch({
        type: SET_DEGREE_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const onAddEducation =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/edit-education-info", data, config).then((res) => {
        dispatch({
          type: SET_EDIT_EDUCATION,
          payload: res.data,
        });
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Education saved successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onDeleteEducation =
  (data, setConfirmPopup) => async (dispatch) => {
    try {
      Axios.post("/delete-education-info", data, config).then((res) => {
        dispatch({
          type: SET_DELETE_EDUCATION,
          payload: res.data,
        });
        setConfirmPopup(false);
      });
    } catch (err) {}
  };

export const onEditContactInfo =
  (data, setEditAccount, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/edit-contact-info", data, config).then((res) => {
        setEditAccount(false);
        dispatch({
          type: SET_EDIT_FREELANCER_INFO,
          payload: res.data,
        });
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Details saved successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onEditLocationInfo =
  (
    data,
    setEditLocation,
    successPopup,
    setSuccessPopup,
    setCurrentTab,
    navigate
  ) =>
  async (dispatch) => {
    try {
      Axios.post("/edit-location", data, config).then((res) => {
        if (setEditLocation) {
          setEditLocation(false);
        }
        dispatch({
          type: SET_EDIT_FREELANCER_LOCATION,
          payload: res.data,
        });
        const afterSuccess = () => {
          userDetails.profile_image = res?.data?.data[0]?.profile_image;
          sessionStorage.setItem("unify_user", JSON.stringify(userDetails));
          setCurrentTab("previewProfile");
          navigate(`/freelancer/profile-intro/previewProfile`);
        };
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Details saved successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const onEditVideo =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/edit-video", data, config).then((res) => {
        dispatch({
          type: SET_EDIT_VIDEO,
          payload: res.data,
        });
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Introduction video saved Successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onEditDesignation =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/edit-designation-info", data, config).then((res) => {
        dispatch({
          type: SET_EDIT_DESIGNATION,
          payload: res.data,
        });
        if (popup) {
          popup();
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Title and bio saved successfully."
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const onEditPortfolio =
  (data, popup, successPopup, setSuccessPopup) => (dispatch) => {
    Axios.post("/edit-portfolio-info", data, config)
      .then((res) => {
        dispatch({
          type: SET_EDIT_PORTFOLIO,
          payload: res.data,
        });

        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Portfolio saved successfully"
          />
        );
      })
      .catch((err) => {
        dispatch({
          type: SET_PORTFOLIO_ERROR,
          payload: err.response.data.message,
        });
      });
  };

export const onEditLanguage =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/edit-language", data, config).then((res) => {
        dispatch({
          type: SET_EDIT_LANGUAGE,
          payload: res.data,
        });
        if (popup) {
          popup();
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Languages saved successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const getLanguageList = () => async (dispatch) => {
  try {
    Axios.get("/languages-list").then((res) => {
      dispatch({
        type: SET_LANGUAGE_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const getHoursPerWeekList = () => async (dispatch) => {
  try {
    Axios.get("/hours-per-week").then((res) => {
      dispatch({
        type: SET_HWP_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};

export const onEditHourPerWeek =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/edit-hours-per-week", data, config).then((res) => {
        dispatch({
          type: SET_HOURS_PER_WEEK,
          payload: res.data,
        });

        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Hourly price saved successfully"
            afterSuccess={afterSuccess}
          />
        );
        if (popup) {
          popup();
        }
      });
    } catch (err) {}
  };

export const onEditSkills =
  (data, popup, successPopup, setSuccessPopup, afterSuccess) =>
  async (dispatch) => {
    try {
      Axios.post("/edit-skills-info", data, config).then((res) => {
        dispatch({
          type: SET_EDIT_SKILLS,
          payload: res.data,
        });
        if (popup) {
          popup();
        }
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Skills saved successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const onEditCertificate =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/edit-certificate-info", data, config).then((res) => {
        dispatch({
          type: SET_EDIT_CERTIFICATE,
          payload: res.data,
        });
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Certificate saved successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onDeleteCertificate =
  (data, setConfirmPopup) => async (dispatch) => {
    try {
      Axios.post("/delete-certificate-info", data, config).then((res) => {
        dispatch({
          type: SET_DELETE_CERTIFICATE,
          payload: res.data,
        });
        setConfirmPopup();
      });
    } catch (err) {}
  };

export const editNameInfo =
  (data, successPopup, setSuccessPopup, profileImageChange) =>
  async (dispatch) => {
    try {
      Axios.post("/edit-name-info", data, config).then((res) => {
        dispatch({
          type: SET_PROFILE_IMG_CHANGE,
          payload: res.data,
        });
        const afterSuccess = () => {
          userDetails.profile_image = res?.data?.data[0]?.profile_image;
          sessionStorage.setItem("unify_user", JSON.stringify(userDetails));
          window?.location?.reload();
        };
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Profile details changed successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const editVisiblity =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/set-visibility", data, config).then((res) => {
        dispatch({
          type: SET_VISIBLITY,
          payload: res.data,
        });
        popup(false);
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Visibility saved successfully"
          />
        );
      });
    } catch (err) {}
  };

export const editExprienceLev =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/edit-experience-level", data, config).then((res) => {
        dispatch({
          type: SET_EXPRIENCE_LEVEL,
          payload: res.data,
        });
        popup(false);
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Exprience level saved successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onDeletePortfolio =
  (data, setConfirmPopup) => async (dispatch) => {
    try {
      Axios.post("/delete-portfolio-info", data, config).then((res) => {
        dispatch({
          type: SET_DELETE_PORTFOLIO,
          payload: res.data,
        });
        setConfirmPopup(false);
      });
    } catch (err) {}
  };

export const onAdditionalAccount = (data, navigate) => async (dispatch) => {
  try {
    Axios.post("/additional-account", data, config).then((res) => {
      dispatch({
        type: SET_ADDITIONAL_ACCOUNT,
        payload: res.data,
      });
      if (data.user_type == "agency") {
        navigate("/agency/dashboard");
      }
      if (data.user_type == "client") {
        navigate("/dashboard");
      }
    });
  } catch (err) {}
};

export const onSubmitVerificationDocs = (data) => async (dispatch) => {
  try {
    Axios.post("/user-document-verify", data, config).then((res) => {
      dispatch({
        type: SET_SUBMIT_VERIF_DOCS,
        payload: res.data,
      });
    });
  } catch (err) {}
};

export const onRequestTestimonial =
  (data, popup, successPopup, setSuccessPopup) => async (dispatch) => {
    try {
      Axios.post("/edit-testimonial-info", data, config).then((res) => {
        dispatch({
          type: REQUEST_TESTIMONIAL,
          payload: res.data,
        });
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Testimonial request sent successfully"
          />
        );
      });
    } catch (err) {}
  };

export const onSubmitTestimonial =
  (data, successPopup, setSuccessPopup, afterSuccess) => async (dispatch) => {
    try {
      Axios.post("/client-testimonial", data, config).then((res) => {
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Testimonial submited successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const onGetTestmonial = (data, setValues) => async (dispatch) => {
  try {
    Axios.post("/get-testimonial", data, config).then((res) => {
      dispatch({
        type: GET_TESTIMONIAL,
        payload: res.data.data,
      });
      setValues(res.data.data);
    });
  } catch (err) {}
};
export const onAddCategory =
  (data, successPopup, setSuccessPopup, afterSuccess) => async (dispatch) => {
    try {
      Axios.post("/add-category", data, config).then((res) => {
        dispatch({
          type: ADD_CATEGORY,
          payload: res.data,
        });
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Your project preference saved successfully"
            afterSuccess={afterSuccess}
          />
        );
      });
    } catch (err) {}
  };

export const getCertificationList =
  (setCertificateList) => async (dispatch) => {
    try {
      Axios.get("/certificate-list", config).then((res) => {
        setCertificateList(res.data.data);
      });
    } catch (err) {}
  };

export const getCategoryList = () => async (dispatch) => {
  try {
    Axios.get("/category-list").then((res) => {
      dispatch({
        type: SET_CATEGORY_LIST,
        payload: res.data.data,
      });
    });
  } catch (err) {}
};
