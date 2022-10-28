import {
  appleProvider,
  auth,
  googleAuthProvider,
  signInWithPopup,
  signOut,
} from "../../firebase/Firebase";
import Axios from "../axios";
import { GOOGLE_SIGN_IN_FAIL, APPLE_SIGN_IN_FAIL, SET_COUNTRY } from "../types";
import { GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("unify_Token")}`,
  },
};

export const onLogin = (data, navigate) => (dispatch) => {
  Axios.post("/login", data)
    .then((res) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onRegister = (data, navigate) => (dispatch) => {
  Axios.post("/signup", data)
    .then((res) => {
      if (res.data.status) {
        navigate("/verify-signup");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onVerifySignup = (data, navigate) => (dispatch) => {
  Axios.post("/verifysignup", data)
    .then((res) => {
      navigate("/create-category");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onResendOtp = (data, navigate) => (dispatch) => {
  Axios.post("/resend-otp", data)
    .then((res) => {
      console.log(res);
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

export const onForgotPassword = (data, navigate) => (dispatch) => {
  Axios.post("/forget-password", data)
    .then((res) => {
      navigate("/verify-forgot-otp");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onVerifyForgot = (data, navigate) => (dispatch) => {
  Axios.post("/verify-forgot-otp", data)
    .then((res) => {
      navigate("/reset-password");
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onResetPassword = (data, navigate) => (dispatch) => {
  Axios.post("/reset-password", data)
    .then((res) => {
      navigate("/signin");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onPasswordChange = (data, popup) => (dispatch) => {
  Axios.post("/change-password", data, config)
    .then((res) => {
      console.log(res);
      popup();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onOnlineStatus = (data) => (dispatch) => {
  Axios.post("/online-status", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const googleSignInSuccess = (data, navigate) => (dispatch) => {
  Axios.post("/social-login", data)
    .then((res) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
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

export const appleSignInSuccess = (data, navigate) => (dispatch) => {
  Axios.post("/social-login", data)
    .then((res) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
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
