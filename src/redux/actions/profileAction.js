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
} from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

// FREELANCER
export const onEditTestimonialInfo = (data) => (dispatch) => {
  Axios.post("/edit-testimonial-info", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFreelancerProfile = () => (dispatch) => {
  Axios.get("/get-freelancer-profile", config)
    .then((res) => {
      dispatch({
        type: SET_FREELANCER_PROFILE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getFreelancerSkills = () => (dispatch) => {
  Axios.get("/skill-list")
    .then((res) => {
      dispatch({
        type: SET_FREELANCER_SKILLS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onAddEmployment = (data, popup) => (dispatch) => {
  Axios.post("/edit-employment-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_ADD_EXPRIENCE,
        payload: res.data,
      });
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onDeleteEmployment = (data) => (dispatch) => {
  Axios.post("/delete-employment-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_DELETE_EXPRIENCE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// CLIENT
export const getClientInfoDetails = (data) => (dispatch) => {
  Axios.get("/get-client-info", config)
    .then((res) => {
      dispatch({
        type: SET_CLIENT_INFO_DETAILS,
        payload: res.data.data.client,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getIndustriesList = () => (dispatch) => {
  Axios.get("/industries-list")
    .then((res) => {
      dispatch({
        type: SET_INDUSTRIES_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTimezoneList = () => (dispatch) => {
  Axios.get("/timezone_list")
    .then((res) => {
      dispatch({
        type: SET_TIMEZONE_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addEditClientInfo = (data, setOpen) => (dispatch) => {
  Axios.post("/edit-client-info", data, config)
    .then((res) => {
      if (res.data.status === true) {
        dispatch({
          type: SET_EDIT_CLIENT_INFO,
          payload: res.data,
        });
        setOpen(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const closeAccountReasonList = () => (dispatch) => {
  Axios.get("/close-account-reason-list")
    .then((res) => {
      dispatch({
        type: SET_CLOSE_ACCOUNT_REASON_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onCloseAccount = (data) => (dispatch) => {
  Axios.post("/close-account", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFreelancerDegreeList = () => (dispatch) => {
  Axios.get("/degree-list")
    .then((res) => {
      dispatch({
        type: SET_DEGREE_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onAddEducation = (data, popup) => (dispatch) => {
  Axios.post("/edit-education-info", data, config)
    .then((res) => {
      console.log(res);
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onDeleteEducation = (data) => (dispatch) => {
  Axios.post("/delete-education-info", data, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_DELETE_EDUCATION,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onEditContactInfo = (data, setEditAccount) => (dispatch) => {
  Axios.post("/edit-contact-info", data, config)
    .then((res) => {
      console.log(res);
      setEditAccount(false);
      dispatch({
        type: SET_EDIT_FREELANCER_INFO,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onEditLocationInfo = (data, setEditLocation) => (dispatch) => {
  Axios.post("/edit-location", data, config)
    .then((res) => {
      console.log(res);
      setEditLocation(false);
      dispatch({
        type: SET_EDIT_FREELANCER_LOCATION,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
