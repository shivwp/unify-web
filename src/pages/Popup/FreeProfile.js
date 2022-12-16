import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopupsCloseIcon from "../../freelancer/components/popups/PopupsCloseIcon";
import { googleSignInInitiate } from "../../redux/actions/authActions";
import { INSTANT_LOGIN_EMAIL, POST_JOB_LIKE_THIS } from "../../redux/types";

const FreeProfile = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({});
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setEmail({ [e.target.name]: e.target.value });
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate("freelancer", navigate));
  };

  const InstentLogin = () => {
    let errorExist = false;
    let errorsObject = {};
    if (
      values?.email === "" ||
      values?.email === null ||
      values?.email === undefined
    ) {
      errorsObject.email = "Please enter email ";
      errorExist = true;
    } else if (!values?.email.trim()) {
      errorsObject.email = "Email is required";
      errorExist = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values?.email)
    ) {
      errorsObject.email = "Please type a valid email address";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    dispatch({ type: INSTANT_LOGIN_EMAIL, payload: email });
    navigate("/signup");
  };

  return (
    <>
      <>
        <div className="bg_wrapper_popup_new">
          <div className="popup_box_bpn profile_nceqoi_popup py-4 rounded">
            <div className="popup_body_bpn max_height_popucwui">
              <div className="border_bx_sec no_pad right_job_detail_home">
                <div className="heading">
                  <h2>Create a free profile to find work like this</h2>
                </div>
                <div className="sign_form_btn_subm sign_in_social_btn mr_sign_in_n">
                  <Button
                    variant=""
                    className="google_btn"
                    onClick={handleGoogleSignIn}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-google"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    Continue with Google
                  </Button>
                </div>
                <div className="job_details_or">or</div>
                <div className="with_email">
                  <div className="email_inp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#808080"
                      className="forgot_pass_email_icon"
                      viewBox="0 0 16 16"
                      style={{ top: 15 }}
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <Form.Control
                      type="text"
                      placeholder="Enter your email address"
                      name="email"
                      value={values?.email}
                      required
                      onChange={(e) => onHandleChange(e)}
                    />
                    <span className="jobSignInError">
                      {errors.email && errors.email}
                    </span>
                  </div>
                </div>
                <div className="sign_up_btn">
                  <button onClick={InstentLogin}>Sign Up </button>
                </div>
                <hr />

                <div className="job_post_heading">Hiring for similar work?</div>
                <div className="post_job_btn_home">
                  <div>
                    <button   onClick={() => {
                    dispatch({ type: POST_JOB_LIKE_THIS, payload: "client" });
                    navigate("/signup");
                  }}>Post a Job Like This</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default FreeProfile;
