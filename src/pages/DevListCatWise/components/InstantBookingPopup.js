import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAdditionalAccount } from "../../../redux/actions/profileAction";
import { useNavigate } from "react-router-dom";
import { googleSignInInitiate } from "../../../redux/actions/authActions";
import { INSTANT_LOGIN_EMAIL } from "../../../redux/types";

const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};
const InstantBookingPopup = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState({});

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate("freelancer", navigate));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div
          className="popup_box_bpn profile_nceqoi_popup pb-4"
          style={{ borderRadius: "15px" }}
        >
          <div className="popup_header pb-0">
            <div className="instant_booking_popup_heading">
              Instant book a meeting with Monika T.
            </div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.setPopup();
              }}
              style={{ position: "relative", bottom: 15 }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn instant_booking_popup max_height_popucwui">
            <div className="desc">
              Create an account to see Monika T's calender and securly checkout.
            </div>
            <div className="sign_form_btn_subm sign_in_social_btn">
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
                  placeholder="Email"
                  name="email"
                  required
                  onChange={(e) =>
                    setEmail({ [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="sign_up_btn_ibp">
              <button
                disabled={!email?.email}
                onClick={() => {
                  dispatch({ type: INSTANT_LOGIN_EMAIL, payload: email });
                  navigate("/signup");
                }}
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantBookingPopup;
