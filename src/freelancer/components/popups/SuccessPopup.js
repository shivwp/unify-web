import React from "react";
import "./popup.css";

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
const SuccessPopup = ({ Popup, message, afterSuccess }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn success_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding"></div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="success_heading">
            <h2>Success</h2>
          </div>
          <div className="sucess_message">
            <div>{message}</div>
          </div>

          <div className="success_popup_btn ">
            {afterSuccess ? (
              <button onClick={() => afterSuccess()}>Ok</button>
            ) : (
              <button onClick={() => Popup()}>Ok</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPopup;
