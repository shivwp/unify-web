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
    Authorization: `Bearer ${localStorage.getItem("unify_token")}`,
  },
};

export const getHomePageData = (setLoading) => async (dispatch) => {
  await Axios.get(`/home-data`)
    .then((res) => {
      dispatch({
        type: HOME_PAGE_DATA,
        payload: res.data.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    });
};
export const getSkillsByCat = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/category-skills`, data)
    .then((res) => {
      dispatch({
        type: CATEGORY_SKILL_DATA,
        payload: res.data.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    });
};
export const getDevelopersBySkills = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/skill-freelancer`, data)
    .then((res) => {
      dispatch({
        type: SKILLS_DEVELOPER_DATA,
        payload: res.data.data,
      });
      if (setLoading) {
        setLoading(false);
      }
    })
    .catch((err) => {
      console.log(err);
      if (setLoading) {
        setLoading(false);
      }
    });
};

export const onLogin =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    await Axios.post(`/login`, data)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("unify_token", res.data.auth_token);
          localStorage.setItem(
            "unify_user",
            JSON.stringify(res.data.data.user)
          );
          if (res.data.data.user.user_type === "freelancer") {
            if (res.data.data.user.is_profile_complete === true) {
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
          if (setLoading) {
            setLoading(false);
          }
          window.location.reload();
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const onRegister =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    await Axios.post(`/signup`, data)
      .then((res) => {
        if (res.data.status) {
          navigate("/verify-signup");
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const onVerifySignup =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    await Axios.post(`/verifysignup`, data)
      .then((res) => {
        if (res.data.status) {
          navigate("/signin");
          window.location.reload();
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const onResendOtp =
  (data, setOtpSuccess, setLoading) => async (dispatch) => {
    await Axios.post(`/resend-otp`, data)
      .then((res) => {
        dispatch({
          type: RESEND_OTP_SUCCESS,
          payload: res.data.message,
        });
        if (setLoading) {
          setLoading(false);
        }

        setOtpSuccess(res.data.message);
      })
      .catch((err) => {
        if (setLoading) {
          setLoading(false);
        }
      });
  };

export const countryList = (setLoading) => async (dispatch) => {
  await Axios.get(`/coutrylist`)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_COUNTRY,
          payload: res.data.countrylist,
        });
        if (setLoading) {
          setLoading(false);
        }
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
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
        if (setLoading) {
          setLoading(false);
        }
        setMessage(err.response.data.message);
      });
  };

export const onResetPassword = (data, navigate) => async (dispatch) => {
  await Axios.post(`/reset-password`, data)
    .then((res) => {
      if (res.data.status) {
        navigate("/signin");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onPasswordChange =
  (data, popup, successPopup, setSuccessPopup, setMessage) =>
  async (dispatch) => {
    await Axios.post(`/change-password`, data, config)
      .then((res) => {
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
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

export const onOnlineStatus = (data, setLoading) => async (dispatch) => {
  await Axios.post(`/online-status`, data, config)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: SET_ONLINE_STATUS,
          payload: res.data,
        });
        if (setLoading) {
          setLoading(false);
        }
        // window.location.reload();
      }
    })
    .catch((err) => {
      if (setLoading) {
        setLoading(false);
      }
    });
};

export const googleSignInSuccess =
  (data, navigate, setMessage, setLoading) => async (dispatch) => {
    await Axios.post(`/social-login`, data)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("unify_token", res.data.auth_token);
          localStorage.setItem(
            "unify_user",
            JSON.stringify(res.data.data.user)
          );
          if (res.data.data.user.user_type === "freelancer") {
            if (res.data.data.user.is_profile_complete === true) {
              navigate("/freelancer/dashboard");

              setLoading(false);
            } else {
              setLoading(false);
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
        } else {
          setLoading(false);
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessage(err?.data?.message);
      });
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
                navigate,
                setMessage,
                setLoading
              )
            );

            console.log(accessToken);
            if (setLoading) {
              setLoading(false);
            }
          })
          .catch((error) => {
            setLoading(false);
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
    await Axios.post(`/social-login`, data, config)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("unify_token", res.data.auth_token);
          localStorage.setItem(
            "unify_user",
            JSON.stringify(res.data.data.user)
          );
          if (res.data.data.user.user_type === "freelancer") {
            if (res.data.data.user.is_profile_complete === true) {
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
          window.location.reload();
        } else {
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        setMessage(err?.data?.message);
      });
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
        }
        if (setLoading) {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        if (setLoading) {
          setLoading(false);
        }
      });
  };
