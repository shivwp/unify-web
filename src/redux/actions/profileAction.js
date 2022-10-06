import Axios from "../axios";

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
