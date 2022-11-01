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
  SET_EDIT_TESTIMONIAL,
  SET_EDIT_EDUCATION,
  SET_EDIT_DESIGNATION,
  SET_EDIT_PORTFOLIO,
  SET_EDIT_VIDEO,
  SET_VISIBLITY,
  SET_EXPRIENCE_LEVEL,
  SET_DELETE_PORTFOLIO,
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

// FREELANCER
export const onEditTestimonialInfo = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/edit-testimonial-info`, data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_TESTIMONIAL,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const getFreelancerProfile = () => async (dispatch) => {
  try {
    const res = await Axios.post(`/get-freelancer-profile`, config);
    if (res.data.status) {
      dispatch({
        type: SET_FREELANCER_PROFILE,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const getFreelancerSkills = (data) => async (dispatch) => {
  try {
    const res = await Axios.post(`/skill-list`, data);
    if (res.data.status) {
      dispatch({
        type: SET_FREELANCER_SKILLS,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const onAddEmployment = (data, popup) => async (dispatch) => {
  try {
    const res = await Axios.post(`/edit-employment-info`, data, config);
    if (res.data.status) {
      dispatch({
        type: SET_ADD_EXPRIENCE,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onDeleteEmployment = (data) => async (dispatch) => {
  try {
    const res = await Axios.post(`/delete-employment-info`, data, config);
    if (res.data.status) {
      dispatch({
        type: SET_DELETE_EXPRIENCE,
        payload: res.data,
      });
    }
  } catch (err) {}
};

// CLIENT
export const getClientInfoDetails = (data) => async (dispatch) => {
  try {
    const res = await Axios.post(`/get-client-info`, config);
    if (res.data.status) {
      dispatch({
        type: SET_CLIENT_INFO_DETAILS,
        payload: res.data.data.client,
      });
    }
  } catch (err) {}
};

export const getIndustriesList = (data) => async (dispatch) => {
  try {
    const res = await Axios.get(`/industries-list`);
    if (res.data.status) {
      dispatch({
        type: SET_INDUSTRIES_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const getTimezoneList = (data) => async (dispatch) => {
  try {
    const res = await Axios.get(`/timezone_list`);
    if (res.data.status) {
      dispatch({
        type: SET_TIMEZONE_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const addEditClientInfo = (data, setOpen) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-client-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_CLIENT_INFO,
        payload: res.data,
      });
      setOpen(false);
    }
  } catch (err) {}
};

export const closeAccountReasonList = () => async (dispatch) => {
  try {
    const res = Axios.get("/close-account-reason-list");
    if (res.data.status) {
      dispatch({
        type: SET_CLOSE_ACCOUNT_REASON_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const onCloseAccount = (data) => async (dispatch) => {
  try {
    const res = Axios.post("/close-account", data, config);
    if (res.data.status) {
    }
  } catch (err) {}
};

export const getFreelancerDegreeList = (data) => async (dispatch) => {
  try {
    const res = Axios.get("/degree-list");
    if (res.data.status) {
      dispatch({
        type: SET_DEGREE_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const onAddEducation = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-education-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_EDUCATION,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onDeleteEducation = (data) => async (dispatch) => {
  try {
    const res = Axios.post("/delete-education-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_DELETE_EDUCATION,
        payload: res.data,
      });
    }
  } catch (err) {}
};

export const onEditContactInfo = (data, setEditAccount) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-contact-info", data, config);
    if (res.data.status) {
      setEditAccount(false);
      dispatch({
        type: SET_EDIT_FREELANCER_INFO,
        payload: res.data,
      });
    }
  } catch (err) {}
};

export const onEditLocationInfo =
  (data, setEditLocation) => async (dispatch) => {
    try {
      const res = Axios.post("/edit-location", data, config);
      if (res.data.status) {
        setEditLocation(false);
        dispatch({
          type: SET_EDIT_FREELANCER_LOCATION,
          payload: res.data,
        });
      }
    } catch (err) {}
  };

export const onEditVideo = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-video", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_VIDEO,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onEditDesignation = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-designation-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_DESIGNATION,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onEditPortfolio = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-portfolio-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_PORTFOLIO,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onEditLanguage = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-language", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_LANGUAGE,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const getLanguageList = () => async (dispatch) => {
  try {
    const res = Axios.get("/languages-list");
    if (res.data.status) {
      dispatch({
        type: SET_LANGUAGE_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const getHoursPerWeekList = () => async (dispatch) => {
  try {
    const res = Axios.get("/hours-per-week");
    if (res.data.status) {
      dispatch({
        type: SET_HWP_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const onEditHourPerWeek = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-hours-per-week", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_HOURS_PER_WEEK,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onEditSkills = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-skills-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_SKILLS,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onEditCertificate = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-certificate-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EDIT_CERTIFICATE,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const onDeleteCertificate = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/delete-certificate-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_DELETE_CERTIFICATE,
        payload: res.data,
      });
      popup();
    }
  } catch (err) {}
};

export const editNameInfo = (data) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-name-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_PROFILE_IMG_CHANGE,
        payload: res.data,
      });
    }
  } catch (err) {}
};

export const editVisiblity = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/set-visibility", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_VISIBLITY,
        payload: res.data,
      });
      popup(false);
    }
  } catch (err) {}
};

export const editExprienceLev = (data, popup) => async (dispatch) => {
  try {
    const res = Axios.post("/edit-experience-level", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_EXPRIENCE_LEVEL,
        payload: res.data,
      });
      popup(false);
    }
  } catch (err) {}
};

export const onDeletePortfolio = (data) => async (dispatch) => {
  try {
    const res = Axios.post("/delete-portfolio-info", data, config);
    if (res.data.status) {
      dispatch({
        type: SET_DELETE_PORTFOLIO,
        payload: res.data,
      });
    }
  } catch (err) {}
};
