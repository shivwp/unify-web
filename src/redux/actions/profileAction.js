import Axios from "../axios";
import { SET_FREELANCER_PROFILE } from "../types";

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
