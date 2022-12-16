import React from "react";
import "./popup.css";

const SuccessPopup = ({ Popup, message, afterSuccess }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn success_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding"></div>
            {/* <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div> */}
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
