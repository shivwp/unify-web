import Axios from "../axios";
import { SET_COUNTRY } from "../types";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

// console.log(localStorage.getItem("unify_Token"));

export const onLogin = (data, navigate) => (dispatch) => {
  Axios.post("/login", data)
    .then((res) => {
      if (res.data.status) {
        localStorage.setItem("unify_Token", res.data.token);
        localStorage.setItem("unify_user", JSON.stringify(res.data.user));
        navigate("/dashboard");
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onRegister = (data, navigate) => (dispatch) => {
  Axios.post("/signup", data)
    .then((res) => {
      if (res.data.status) {
        navigate("/create-category");
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const countryList = (data) => (dispatch) => {
  Axios.get("/coutrylist", data)
    .then((res) => {
      dispatch({
        type: SET_COUNTRY,
        payload: res.data.countrylist,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
