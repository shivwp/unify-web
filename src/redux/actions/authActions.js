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
  HOME_PAGE_DATA,
  FOOTER_PAGE_DATA,
  RESEND_OTP_SUCCESS,
  CATEGORY_SKILL_DATA,
  SKILLS_DEVELOPER_DATA,
  CLIENT_BUSINESSSIZE,
  SET_ONLINE_STATUS,
} from "../types";
import { GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import SuccessPopup from "../../freelancer/components/popups/SuccessPopup";

const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("unify_token")}`,
  },
};

export const getHomePageData = (setLoading) => async (dispatch) => {
  await Axios.get(`/home-data`)
    .then((res) => {
      dispatch({
        type: HOME_PAGE_DATA,
        payload: res.data.data,
      });
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
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

export const onLogin =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    try {
      const res = await Axios.post(`/login`, data);
      if (res.data.status) {
        sessionStorage.setItem("unify_token", res.data.auth_token);
        sessionStorage.setItem(
          "unify_user",
          JSON.stringify(res.data.data.user)
        );
        if (res.data.data.user.user_type === "freelancer") {
          if (res.data.data.user.is_profile_complete === true) {
            sessionStorage.setItem(
              "unify_freelancer",
              JSON.stringify(res.data.data.freelancer)
            );
            navigate("/freelancer/dashboard");
          } else {
            navigate("/freelancer/profile-intro/question1");
          }
        } else if (res.data.data.user.user_type === "client") {
          if (res.data.data.user.is_profile_complete === true) {
            navigate("/dashboard");
          } else {
            navigate("/businesssize");
          }
        }
        setLoading(false);
        window.location.reload();
      }
    } catch (err) {
      setMessage(err.response.data.message);
      setLoading(false);
    }
  };

export const onRegister =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    try {
      const res = await Axios.post(`/signup`, data);
      if (res.data.status) {
        navigate("/verify-signup");
      }
      if (setLoading) {
        setLoading(false);
      }
    } catch (err) {
      setMessage(err.response.data.message);
      if (setLoading) {
        setLoading(false);
      }
    }
  };

export const onVerifySignup =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    try {
      const res = await Axios.post(`/verifysignup`, data);
      if (res.data.status) {
        navigate("/signin");
        setLoading(false);
        window.location.reload();
      }
    } catch (err) {
      setMessage(err.response.data.message);
      setLoading(false);
    }
  };

export const onResendOtp =
  (data, setOtpSuccess, setLoading) => async (dispatch) => {
    try {
      const res = await Axios.post(`/resend-otp`, data);
      dispatch({
        type: RESEND_OTP_SUCCESS,
        payload: res.data.message,
      });
      setLoading(false);

      setOtpSuccess(res.data.message);
    } catch (err) {
      setLoading(false);
    }
  };

export const countryList = (setLoading) => async (dispatch) => {
  try {
    const res = await Axios.get(`/coutrylist`);
    if (res.data.status) {
      dispatch({
        type: SET_COUNTRY,
        payload: res.data.countrylist,
      });
      if (setLoading) {
        setLoading(false);
      }
    }
  } catch (err) {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const onForgotPassword =
  (data, navigate, setForgotPassError, setLoading) => async (dispatch) => {
    await Axios.post(`/forget-password`, data)
      .then((res) => {
        if (res.data.status) {
          navigate("/verify-forgot-otp");
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setForgotPassError(err.response.data.message);
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const onVerifyForgot =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    await Axios.post(`/verify-forgot-otp`, data)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          navigate("/reset-password");
        }
      })
      .catch((err) => {
        setLoading(false);
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
        if (popup) {
          popup();
        }
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
      dispatch({
        type: SET_ONLINE_STATUS,
        payload: res.data,
      });
    }
  } catch (err) {}
};

export const googleSignInSuccess =
  (data, navigate, setMessage) => async (dispatch) => {
    try {
      const res = await Axios.post(`/social-login`, data);
      if (res.data.status) {
        sessionStorage.setItem("unify_token", res.data.auth_token);
        sessionStorage.setItem(
          "unify_user",
          JSON.stringify(res.data.data.user)
        );
        if (res.data.data.user.user_type === "freelancer") {
          if (res.data.data.user.is_profile_complete === true) {
            navigate("/freelancer/dashboard");
            sessionStorage.setItem(
              "unify_freelancer",
              JSON.stringify(res.data.data.freelancer)
            );
          } else {
            navigate("/freelancer/profile-intro/question1");
          }
        } else if (res.data.data.user.user_type === "client") {
          if (res.data.data.user.is_profile_complete === true) {
            navigate("/dashboard");
          } else {
            navigate("/businesssize");
          }
        }
        window.location.reload();
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {}
  };

export const googleSignInFail = (error) => ({
  type: GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

export const googleSignInInitiate = (
  userType,
  navigate,
  setMessage,
  setLoading
) => {
  return function (dispatch) {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
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
                navigate,
                setMessage
              )
            );
            if (setLoading) {
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log(error);
            dispatch(googleSignInFail(error.message));
          });
      })
      .catch((error) => {
        if (setLoading) {
          setLoading(false);
        }
      });
  };
};

export const appleSignInSuccess =
  (data, navigate, setMessage) => async (dispatch) => {
    try {
      const res = await Axios.post(`/social-login`, data, config);
      if (res.data.status) {
        sessionStorage.setItem("unify_token", res.data.auth_token);
        sessionStorage.setItem(
          "unify_user",
          JSON.stringify(res.data.data.user)
        );
        if (res.data.data.user.user_type === "freelancer") {
          if (res.data.data.user.is_profile_complete === true) {
            navigate("/freelancer/dashboard");
            sessionStorage.setItem(
              "unify_freelancer",
              JSON.stringify(res.data.data.freelancer)
            );
          } else {
            navigate("/freelancer/profile-intro/question1");
          }
        } else if (res.data.data.user.user_type === "client") {
          if (res.data.data.user.is_profile_complete === true) {
            navigate("/dashboard");
          } else {
            navigate("/businesssize");
          }
        }
        window.location.reload();
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {}
  };

export const appleSignInFail = (error) => ({
  type: APPLE_SIGN_IN_FAIL,
  payload: error,
});

export const appleSignInInitiate = (
  userType,
  navigate,
  setMessage,
  setLoading
) => {
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
            navigate,
            setMessage
          )
        );
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        appleSignInFail(error);
        if (setLoading) {
          setLoading(false);
        }
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
export const setClientCompnySize =
  (data, navigate, setLoading) => async (dispatch) => {
    await Axios.post("/business-size", data, config)
      .then((res) => {
        if (res.data.status) {
          dispatch({
            type: CLIENT_BUSINESSSIZE,
            payload: res.data.data,
          });
          navigate("/question1");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
