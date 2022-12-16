import { Col } from "react-bootstrap";
import Switch from "react-switch";
import { useState } from "react";
import ChangePasswordPopup from "../../../../popups/ChagePasswordPopup";
import SetYourVerification from "../../../../popups/SetYourVerification";
import Button from "react-bootstrap/Button";

const PasswordSecurity = () => {
  const [checked, setChecked] = useState(false);
  const [successPopup, setSuccessPopup] = useState();
  const [openChangePass, setOpenChangePass] = useState(false);
  const [openVerification, setOpenVerification] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <>
      <Col lg={9}>
        <div className="s_nav_body">
          <div className="s_b_head no-border">
            <h2>Password & Security</h2>
          </div>
          <div className="r-box_setting">
            <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
              <div className="setting_b_head_s">Password</div>
              <div>
                <Button
                  variant=""
                  className="round_b_btn"
                  type="button"
                  onClick={() => {
                    setOpenChangePass(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#D4D4D5"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div>
                  <div className="user_nme_set pl-0">Password has been set</div>
                  <div className="user_mal_set pl-0">
                    Choose a strong, unique password that’s at least 8
                    characters long.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="r-box_setting">
            <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
              <div>
                <div className="setting_b_head_s">
                  Two-step verification options
                </div>
                <div className="user_mal_set pl-0">
                  Add an extra layer of security to block unauthorized access
                  and protect your account.
                </div>
              </div>
              <div>
                <Button
                  variant=""
                  className="round_b_btn"
                  onClick={() => {
                    setOpenVerification(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#D4D4D5"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="d-flex justify-content-between b-bottom-gr pb-2">
              <div className="d-flex">
                <div>
                  <div className="user_nme_set pl-0 span_s_fon">
                    Authenticator app code
                    <span>
                      (Recommended)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                  </div>
                  <div className="user_mal_set pl-0">
                    Enter a code generated by your authenticator app to confirm
                    it’s you.
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Switch
                  boxShadow={false}
                  activeBoxShadow={false}
                  offColor={`#EEEEEE`}
                  onColor={`#EEEEEE`}
                  onHandleColor={`#fff`}
                  offHandleColor={`#E2E2E2`}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between b-bottom-gr pb-2">
              <div className="d-flex">
                <div>
                  <div className="user_nme_set pl-0 span_s_fon">
                    Mobile app prompt
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                  </div>
                  <div className="user_mal_set pl-0">
                    Receive a prompt from your mobile app to confirm it’s you.
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Switch
                  boxShadow={false}
                  activeBoxShadow={false}
                  offColor={`#EEEEEE`}
                  onColor={`#EEEEEE`}
                  onHandleColor={`#fff`}
                  offHandleColor={`#E2E2E2`}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between b-bottom-gr pb-2">
              <div className="d-flex">
                <div>
                  <div className="user_nme_set pl-0 span_s_fon">
                    Text message
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                  </div>
                  <div className="user_mal_set pl-0">
                    Receive a six digit code by text message to confirm it’s
                    you.
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Switch
                  boxShadow={false}
                  activeBoxShadow={false}
                  offColor={`#EEEEEE`}
                  onColor={`#EEEEEE`}
                  onHandleColor={`#fff`}
                  offHandleColor={`#E2E2E2`}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <div className="d-flex">
                <div>
                  <div className="user_nme_set pl-0 span_s_fon">
                    Security question
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                  </div>
                  <div className="user_nme_set pt-2 pl-0 span_s_fon d-flex align-items-center">
                    <span className="ml-0 mr-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                    Not enabled
                  </div>
                  <div className="user_mal_set pl-0">
                    Answer a question you choose to confirm it’s you.
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Switch
                  boxShadow={false}
                  activeBoxShadow={false}
                  offColor={`#EEEEEE`}
                  onColor={`#EEEEEE`}
                  onHandleColor={`#fff`}
                  offHandleColor={`#E2E2E2`}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={handleChange}
                  checked={checked}
                  id={`2`}
                  className="react-switch"
                />
              </div>
            </div>
          </div>
        </div>
      </Col>

      {openChangePass && (
        <ChangePasswordPopup
          open={openChangePass}
          successPopup={successPopup}
          setSuccessPopup={setSuccessPopup}
          onCloseModal={() => setOpenChangePass(!openChangePass)}
        />
      )}
      {openVerification && (
        <SetYourVerification
          open={openVerification}
          onCloseModal={() => setOpenVerification(false)}
        />
      )}
      {successPopup}
    </>
  );
};
export default PasswordSecurity;
