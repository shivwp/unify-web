import {
  appleProvider,
  auth,
  googleAuthProvider,
  signInWithPopup,
  signOut,
} from "../../firebase/firebase";
import Axios from "../axios";
import {
  GOOGLE_SIGN_IN_FAIL,
  APPLE_SIGN_IN_FAIL,
  SET_COUNTRY,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  FORGOT_PASS_ERROR,
  FORGOT_OTP_ERROR,
  HOME_PAGE_DATA,
  FOOTER_PAGE_DATA,
  VERIFY_OTP_ERROR,
  RESEND_OTP_SUCCESS,
  CATEGORY_SKILL_DATA,
  SKILLS_DEVELOPER_DATA,
  VERIFY_SIGNUP_ERROR,
} from "../types";
import { GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_token")}`,
  },
};

export const getHomePageData = () => async (dispatch) => {
  await Axios.get(`/home-data`)
    .then((res) => {
      dispatch({
        type: HOME_PAGE_DATA,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getSkillsByCat = (data) => async (dispatch) => {
  await Axios.post(`/category-skills`, data)
    .then((res) => {
      dispatch({
        type: CATEGORY_SKILL_DATA,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getDevelopersBySkills = (data) => async (dispatch) => {
  await Axios.post(`/skill-freelancer`, data)
    .then((res) => {
      dispatch({
        type: SKILLS_DEVELOPER_DATA,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onLogin = (data, navigate, setMessage) => async (dispatch) => {
  try {
    const res = await Axios.post(`/login`, data);
    if (res.data.status) {
      localStorage.setItem("unify_token", res.data.auth_token);
      localStorage.setItem("unify_user", JSON.stringify(res.data.data.user));
      if (res.data.data.user.user_type === "freelancer") {
        if (res.data.data.user.is_profile_complete === true) {
          navigate("/freelancer/dashboard");
        } else {
          navigate("/freelancer/question1");
        }
      } else if (res.data.data.user.user_type === "client") {
        if (res.data.data.user.is_profile_complete === true) {
          navigate("/dashboard");
        } else {
          navigate("/businesssize");
        }
      }
      window.location.reload();
    }
  } catch (err) {
    setMessage(err.response.data.message);
  }
};

export const onRegister = (data, navigate, setMessage) => async (dispatch) => {
  try {
    const res = await Axios.post(`/signup`, data);
    if (res.data.status) {
      navigate("/verify-signup");
    }
  } catch (err) {
    setMessage(err.response.data.message);
  }
};

export const onVerifySignup =
  (data, navigate, setMessage) => async (dispatch) => {
    try {
      const res = await Axios.post(`/verifysignup`, data);
      if (res.data.status) {
        navigate("/signin");
        window.location.reload();
      }
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

export const onResendOtp = (data, setOtpSuccess) => async (dispatch) => {
  try {
    const res = await Axios.post(`/resend-otp`, data);
    dispatch({
      type: RESEND_OTP_SUCCESS,
      payload: res.data.message,
    });
    setOtpSuccess(res.data.message);
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

export const onForgotPassword =
  (data, navigate, setForgotPassError) => async (dispatch) => {
    await Axios.post(`/forget-password`, data)
      .then((res) => {
        if (res.data.status) {
          navigate("/verify-forgot-otp");
        }
      })
      .catch((err) => {
        setForgotPassError(err.response.data.message);
      });
  };

export const onVerifyForgot =
  (data, navigate, setMessage) => async (dispatch) => {
    await Axios.post(`/verify-forgot-otp`, data)
      .then((res) => {
        if (res.data.status) {
          navigate("/reset-password");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

export const onResetPassword = (data, navigate) => async (dispatch) => {
  try {
    const res = await Axios.post(`/reset-password`, data);
    if (res.data.status) {
      navigate("/signin");
    }
  } catch (err) {}
};

export const onPasswordChange =
  (data, popup, successPopup, setSuccessPopup, setMessage) =>
  async (dispatch) => {
    try {
      const res = await Axios.post(`/change-password`, data, config);
      if (res.data.status) {
        popup();
        setSuccessPopup(
          <SuccessPopup
            Popup={() => setSuccessPopup(!successPopup)}
            message="Password changed successfully"
            // afterSuccess={afterSuccess}
          />
        );
      }
    } catch (err) {
      setMessage(err.response.data.message);
    }
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
      localStorage.setItem("unify_token", res.data.auth_token);
      localStorage.setItem("unify_user", JSON.stringify(res.data.data.user));
      if (res.data.data.user.user_type === "freelancer") {
        if (res.data.data.user.is_profile_complete === true) {
          navigate("/freelancer/dashboard");
        } else {
          navigate("/freelancer/question1");
        }
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
      localStorage.setItem("unify_token", res.data.auth_token);
      localStorage.setItem("unify_user", JSON.stringify(res.data.data.user));
      if (res.data.data.user.user_type === "freelancer") {
        if (!res.data.data.user.is_profile_complete === true) {
          navigate("/freelancer/dashboard");
        } else {
          navigate("/freelancer/question1");
        }
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
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.idToken;
        dispatch(
          appleSignInSuccess(
            {
              provider: "apple",
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

export const getFooterPageData = (pagename) => async (dispatch) => {
  await Axios.get(`/page/${pagename}`)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: FOOTER_PAGE_DATA,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
