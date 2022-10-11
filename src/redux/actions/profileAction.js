import Axios from "../axios";
import { SET_ADD_EXPRIENCE, SET_DELETE_EXPRIENCE, SET_FREELANCER_PROFILE, SET_FREELANCER_SKILLS } from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

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
        payload: res.data
      })
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
        payload: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
};
