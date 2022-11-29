import Axios from "../axios";
import { SET_SUBSCRIPTION_LIST } from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

export const getSubscriptionList = () => async (dispatch) => {
  await Axios.get(`/subscription-list`)
    .then((res) => {
      dispatch({
        type: SET_SUBSCRIPTION_LIST,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onSubscriptionPayment = (data, navigate) => async (dispatch) => {
  await Axios.post(`/subscription-payment`, data, config)
    .then((res) => {
      if (res.data.status) {
        Axios.get(`/submit-profile`, config)
          .then((res) => {
            console.log("submit-profile");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
