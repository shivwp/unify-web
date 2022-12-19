import React from "react";
import "./popup.css";
import PopupsCloseIcon from "./PopupsCloseIcon";

const ConfirmationPopup = ({ Popup, confirm }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn confirmation_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding"></div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <PopupsCloseIcon />
            </div>
          </div>
          <h2 className="conf-heading">Are You Sure?</h2>
          <h6 className="conf-desc">You won't able to revert these changes!</h6>

          <div className="confirmation_popup_btns ">
            <div>
              <button className="confirm_no_btn" onClick={() => Popup()}>
                No
              </button>
            </div>

            <div>
              <button className="confirm_yes_btn" onClick={confirm}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPopup;
