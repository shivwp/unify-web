import {
  appleProvider,
  auth,
  googleAuthProvider,
  signInWithPopup,
  signOut,
} from "../../firebase/firebase";
import Axios from "../axios";
import { GOOGLE_SIGN_IN_FAIL, APPLE_SIGN_IN_FAIL, SET_COUNTRY } from "../types";
import { GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

export const onLogin = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/login`, data);
    if (res.data.status) {
      localStorage.setItem("unify_Token", res.data.auth_token);
      localStorage.setItem("unify_user", JSON.stringify(res.data.data.user));
      if (res.data.data.user.user_type === "freelancer") {
        navigate("/freelancer/dashboard");
      } else if (res.data.data.user.user_type === "client") {
        navigate("/dashboard");
      }
      window.location.reload();
    }
  } catch (err) {}
};

export const onRegister = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/signup`, data);
    if (res.data.status) {
      navigate("/verify-signup");
    }
  } catch (err) {}
};

export const onVerifySignup = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/verifysignup`, data);
    if (res.data.status) {
      navigate("/businesssize");
      window.location.reload();
    }
  } catch (err) {}
};

export const onResendOtp = (data) => async (dispatch) => {
  try {
    const res = await Axios.post(`/resend-otp`, data);
    console.log(res);
  } catch (err) {}
};

export const countryList = () => async (dispatch) => {
  try {
    const res = await Axios.get(`/coutrylist`);
    if (res.data.status) {
      dispatch({
        type: SET_COUNTRY,
        payload: res.data.countrylist,
      });
    }
  } catch (err) {}
};

export const onForgotPassword = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/forget-password`, data);
    if (res.data.status) {
      navigate("/verify-forgot-otp");
    }
  } catch (err) {}
};

export const onVerifyForgot = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/verify-forgot-otp`, data);
    if (res.data.status) {
      navigate("/reset-password");
    }
  } catch (err) {}
};

export const onResetPassword = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/reset-password`, data);
    if (res.data.status) {
      navigate("/signin");
    }
  } catch (err) {}
};

export const onPasswordChange = (data, popup) => async (dispatch) => {
  try {
    const res = await Axios.post(`/change-password`, data, config);
    if (res.data.status) {
      console.log(res);
      popup();
    }
  } catch (err) {}
};

export const onOnlineStatus = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/online-status`, data, config);
    if (res.data.status) {
      window.location.reload();
    }
  } catch (err) {}
};

export const googleSignInSuccess = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/social-login`, data);
    if (res.data.status) {
      localStorage.setItem("unify_Token", res.data.auth_token);
      localStorage.setItem("unify_user", JSON.stringify(res.data.data.user));
      if (res.data.data.user.user_type === "freelancer") {
        navigate("/freelancer/dashboard");
      } else if (res.data.data.user.user_type === "client") {
        navigate("/dashboard");
      }
      window.location.reload();
    }
  } catch (err) {}
};

export const googleSignInFail = (error) => ({
  type: GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

export const googleSignInInitiate = (userType, navigate) => {
  return function (dispatch) {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        signInWithPopup(auth, googleAuthProvider)
          .then((res) => {
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const accessToken = credential.accessToken;
            dispatch(
              googleSignInSuccess(
                {
                  provider: "google",
                  token: accessToken,
                  user_type: userType,
                },
                navigate
              )
            );
          })
          .catch((error) => {
            console.log(error);
            dispatch(googleSignInFail(error.message));
          });
      })
      .catch((error) => {
        // An error happened.
      });
  };
};

export const appleSignInSuccess = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/social-login`, data, config);
    if (res.data.status) {
      localStorage.setItem("unify_Token", res.data.auth_token);
      localStorage.setItem("unify_user", JSON.stringify(res.data.data.user));
      console.log(res);
      if (res.data.data.user.user_type === "freelancer") {
        navigate("/freelancer/dashboard");
      } else if (res.data.data.user.user_type === "client") {
        navigate("/dashboard");
      }
      window.location.reload();
    }
  } catch (err) {}
};

export const appleSignInFail = (error) => ({
  type: APPLE_SIGN_IN_FAIL,
  payload: error,
});

export const appleSignInInitiate = (userType, navigate) => {
  return function (dispatch) {
    signInWithPopup(auth, appleProvider)
      .then((result) => {
        console.log(result);
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        dispatch(
          appleSignInSuccess(
            {
              provider: "google",
              token: accessToken,
              user_type: userType,
            },
            navigate
          )
        );
      })
      .catch((error) => {
        console.log(error);
        appleSignInFail(error);
      });
  };
};
