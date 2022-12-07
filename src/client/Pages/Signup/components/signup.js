import Title from "../../../../components/title";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  appleSignInInitiate,
  googleSignInInitiate,
} from "../../../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import logo from "../../../../assets/logo.svg";
import TermsAndConditionPopup from "../../../../popups/TermsAndConditionPopup";
import UserAgreementPopup from "../../../../popups/UserAgreementPopup";
import PrivacyPolicyPopup from "../../../../popups/PrivacyPolicyPopup";

const Signup = ({
  onInputChange,
  submitForm,
  getCountryList,
  selectUserType,
  userType,
  setCountry,
  values,
  errors,
  selectCountry,
  message,
}) => {
  Title(" | signup");
  const [hidePass, setHidePass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [termsPopup, setTermsPopup] = useState(false);
  const [userAgreementPopup, setUserAgreementPopup] = useState(false);
  const [privacyPopup, setPrivacyPopup] = useState(false);

  const options1 = getCountryList?.map((data) => ({
    name: data.name,
    label: data.name,
    color: "#000",
  }));
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#000" : "#000",
      padding: 20,
    }),
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate(userType, navigate));
  };

  const handleAppleSignIn = () => {
    dispatch(appleSignInInitiate(userType, navigate));
  };

  return (
    <>
      <div className="bg-body-wrapper">
        <div className="container">
          <div className="width_100_sm newnav_v2_wauto">
            <a href="/">
              <Navbar.Brand>
                <img src={logo} className="img-fluid rounded-top" alt="" />
              </Navbar.Brand>
            </a>
          </div>
          <div className="bg_body">
            <div className="sign_form_shap"></div>
            <div className="sign_form_shapb"></div>
            <div className="sign_box">
              <div className="sign_u_head">
                <h1>Complete Your Free Account Setup</h1>
              </div>
              <div className="sign_form_sm_head">
                <h3>I Want to:</h3>
              </div>
              <div className="sign_buttons_group sign_upbtn_heffect">
                <Button
                  variant=""
                  onClick={(e) => selectUserType(e)}
                  type="button"
                  className={
                    userType === "client" ? "userTypeActive" : "userType"
                  }
                  value="client"
                >
                  Hire for a Project
                </Button>
                <Button
                  variant=""
                  type="button"
                  onClick={(e) => selectUserType(e)}
                  className={
                    userType === "freelancer" ? "userTypeActive" : "userType"
                  }
                  value="freelancer"
                >
                  Earn and Learn
                </Button>
              </div>
              {userType && (
                <>
                  <Form onSubmit={(e) => submitForm(e)}>
                    <div className="input_group">
                      <div className="input_bo">
                        <div className="input_icoa">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.449"
                            height="18.255"
                            viewBox="0 0 16.449 18.255"
                          >
                            <g
                              id="Icon_feather-user"
                              data-name="Icon feather-user"
                              transform="translate(-5 -3.5)"
                            >
                              <path
                                id="Path_4542"
                                data-name="Path 4542"
                                d="M20.449,27.918V26.112A3.612,3.612,0,0,0,16.837,22.5H9.612A3.612,3.612,0,0,0,6,26.112v1.806"
                                transform="translate(0 -7.163)"
                                fill="none"
                                stroke="#808080"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                id="Path_4543"
                                data-name="Path 4543"
                                d="M19.225,8.112A3.612,3.612,0,1,1,15.612,4.5,3.612,3.612,0,0,1,19.225,8.112Z"
                                transform="translate(-2.388)"
                                fill="none"
                                stroke="#808080"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="input_nodxq">
                          <Form.Control
                            type="text"
                            value={values?.first_name}
                            onChange={(e) => onInputChange(e)}
                            name="first_name"
                            placeholder="First Name"
                          />
                          <span className="signInError">
                            {errors.first_name && errors?.first_name}
                          </span>
                        </div>
                      </div>
                      <div className="input_bo">
                        <div className="input_icoa">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16.449"
                            height="18.255"
                            viewBox="0 0 16.449 18.255"
                          >
                            <g
                              id="Icon_feather-user"
                              data-name="Icon feather-user"
                              transform="translate(-5 -3.5)"
                            >
                              <path
                                id="Path_4542"
                                data-name="Path 4542"
                                d="M20.449,27.918V26.112A3.612,3.612,0,0,0,16.837,22.5H9.612A3.612,3.612,0,0,0,6,26.112v1.806"
                                transform="translate(0 -7.163)"
                                fill="none"
                                stroke="#808080"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                              <path
                                id="Path_4543"
                                data-name="Path 4543"
                                d="M19.225,8.112A3.612,3.612,0,1,1,15.612,4.5,3.612,3.612,0,0,1,19.225,8.112Z"
                                transform="translate(-2.388)"
                                fill="none"
                                stroke="#808080"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="input_nodxq">
                          <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            value={values?.last_name}
                            onChange={(e) => onInputChange(e)}
                          />
                          <span className="signInError">
                            {errors.last_name && errors?.last_name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input_group">
                      <div className="input_bo">
                        <div className="input_icoa">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#808080"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </div>
                        <div className="input_nodxq">
                          <Form.Control
                            type="text"
                            name="email"
                            value={values?.email}
                            onChange={(e) => onInputChange(e)}
                            placeholder="Email"
                          />
                          <span className="signInError">
                            {errors.email ? errors.email : message && message}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input_group">
                      <div className="input_bo">
                        <div className="input_icoa">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.449"
                            height="18.965"
                            viewBox="0 0 14.449 18.965"
                          >
                            <path
                              id="Icon_material-lock-open"
                              data-name="Icon material-lock-open"
                              d="M13.225,15.949a1.806,1.806,0,1,0-1.806-1.806A1.811,1.811,0,0,0,13.225,15.949Zm5.418-8.128h-.9V6.015a4.515,4.515,0,0,0-9.031,0h1.716a2.8,2.8,0,1,1,5.6,0V7.822H7.806A1.811,1.811,0,0,0,6,9.628v9.031a1.811,1.811,0,0,0,1.806,1.806H18.643a1.811,1.811,0,0,0,1.806-1.806V9.628A1.811,1.811,0,0,0,18.643,7.822Zm0,10.837H7.806V9.628H18.643Z"
                              transform="translate(-6 -1.5)"
                              fill="#808080"
                            />
                          </svg>
                        </div>
                        <div className="input_nodxq">
                          <Form.Control
                            name="password"
                            onChange={(e) => onInputChange(e)}
                            type={hidePass ? "password" : "text"}
                            value={values?.password}
                            placeholder="Create a Password"
                          />
                          {hidePass ? (
                            <i
                              className="fa fa-eye-slash showInpPass"
                              onClick={() => setHidePass(!hidePass)}
                              aria-hidden="true"
                              style={{ top: 9 }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-eye showInpPass"
                              style={{ top: 9 }}
                              onClick={() => setHidePass(!hidePass)}
                              aria-hidden="true"
                            ></i>
                          )}
                          <span className="signInError">
                            {errors?.password && errors?.password}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input_group">
                      <div className="input_bo">
                        <div className="input_icoa">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.449"
                            height="18.965"
                            viewBox="0 0 14.449 18.965"
                          >
                            <path
                              id="Icon_material-lock-open"
                              data-name="Icon material-lock-open"
                              d="M13.225,15.949a1.806,1.806,0,1,0-1.806-1.806A1.811,1.811,0,0,0,13.225,15.949Zm5.418-8.128h-.9V6.015a4.515,4.515,0,0,0-9.031,0h1.716a2.8,2.8,0,1,1,5.6,0V7.822H7.806A1.811,1.811,0,0,0,6,9.628v9.031a1.811,1.811,0,0,0,1.806,1.806H18.643a1.811,1.811,0,0,0,1.806-1.806V9.628A1.811,1.811,0,0,0,18.643,7.822Zm0,10.837H7.806V9.628H18.643Z"
                              transform="translate(-6 -1.5)"
                              fill="#808080"
                            />
                          </svg>
                        </div>
                        <div className="input_nodxq">
                          <Form.Control
                            name="confirmPassword"
                            onChange={(e) => onInputChange(e)}
                            type={hideConfPass ? "password" : "text"}
                            value={values?.confirmPassword}
                            placeholder="Confirm Password"
                          />
                          {hideConfPass ? (
                            <i
                              className="fa fa-eye-slash showInpPass"
                              onClick={() => setHideConfPass(!hideConfPass)}
                              aria-hidden="true"
                              style={{ top: 9 }}
                            ></i>
                          ) : (
                            <i
                              className="fa fa-eye showInpPass"
                              style={{ top: 9 }}
                              onClick={() => setHideConfPass(!hideConfPass)}
                              aria-hidden="true"
                            ></i>
                          )}
                          <span className="signInError">
                            {errors?.confirmPassword && errors?.confirmPassword}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input_group">
                      <div className="input_bo selec_n_cs">
                        <div className="input_nodxq signup_custom_select">
                          <Select
                            className="custom_css_select"
                            placeholder="Select a country"
                            onChange={selectCountry}
                            options={options1}
                          />
                          <span className="signInError">
                            {errors.country && <>Please select your country</>}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="input_group">
                      <div className="input_bo">
                        <div className="input_icoa"></div>
                        <div className="input_nodxq">
                          <Form.Control
                            type="text"
                            placeholder="invitation code"
                            name="referal_code"
                            onChange={(e) => onInputChange(e)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sign_legal_not">
                      <div>
                        <div className="sign_l_n_text">
                          <Form.Check
                            type="checkbox"
                            name="send_email"
                            onChange={(e) => onInputChange(e)}
                          />
                          <Form.Label className="tb_mob_f12px">
                            Yes - sign me up for useful emails to get the most
                            out of Unify!
                          </Form.Label>
                        </div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div className="sign_l_n_text">
                          <Form.Check
                            type="checkbox"
                            name="agree_terms"
                            onChange={(e) => onInputChange(e)}
                          />
                          <Form.Label className="tb_mob_f12px">
                            Yes! I understand and agree to the{" "}
                            <span onClick={() => setTermsPopup(true)}>
                              <span>UnifyTerms of Service</span>
                            </span>
                            , including the{" "}
                            <span>
                              <span onClick={() => setUserAgreementPopup(true)}>
                                User Agreement
                              </span>
                            </span>{" "}
                            and{" "}
                            <span>
                              <span onClick={() => setPrivacyPopup(true)}>
                                Privacy Policy
                              </span>
                            </span>
                          </Form.Label>
                        </div>
                        <span
                          className="signInError"
                          style={{ top: "25px", left: "12px" }}
                        >
                          {errors.agree_terms && (
                            <>Please Agree Terms and Conditions</>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="sign_form_btn_subm">
                      <button className="hovbgblew" type="submit">
                        CREATE MY ACCOUNT
                      </button>
                    </div>
                  </Form>

                  <div className="sign_form_btn_subm sign_in_social_btn mr_sign_in_n signup_social_btn_n">
                    <button
                      variant=""
                      className="apple_btn mr_sign_in_n"
                      style={{ fontSize: 15 }}
                      onClick={handleAppleSignIn}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-apple"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                      </svg>
                      Continue with Apple
                    </button>
                    <button
                      variant=""
                      className="google_btn"
                      style={{ fontSize: 15 }}
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
                    </button>
                  </div>
                </>
              )}
              <div className="sin_dont_accou">
                Already have an account?{" "}
                <span className="link_don_acc">
                  <Link to="/signin">Log In</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {termsPopup && (
        <TermsAndConditionPopup
          open={termsPopup}
          onCloseModel={() => setTermsPopup(false)}
        />
      )}
      {userAgreementPopup && (
        <UserAgreementPopup
          open={userAgreementPopup}
          onCloseModel={() => setUserAgreementPopup(false)}
        />
      )}
      {privacyPopup && (
        <PrivacyPolicyPopup
          open={privacyPopup}
          onCloseModel={() => setPrivacyPopup(false)}
        />
      )}
    </>
  );
};
export default Signup;
