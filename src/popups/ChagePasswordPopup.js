import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";

const ChagePasswordPopup = ({ onCloseModal, open }) => {
  const [hideNewPass, setHideNewPass] = useState(true);
  const [hideOldPass, setHideOldPass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);


  console.log(open)
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "change-password-popup" }}
        center
      >
        <h5 style={{ marginBottom: "25px" }}>Change Password</h5>
        <form>
          <div className="password-inp">
            <div className="inp-label">Old Password</div>
            <div className="input-grp">
              <input type={hideOldPass ? "password" : "text"} />
              {hideOldPass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHideOldPass(!hideOldPass)}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  onClick={() => setHideOldPass(!hideOldPass)}
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
          <div className="password-inp">
            <div className="inp-label">New Password</div>
            <div className="input-grp">
              <input type={hideNewPass ? "password" : "text"} />
              {hideNewPass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHideNewPass(!hideNewPass)}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  onClick={() => setHideNewPass(!hideNewPass)}
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
          <div className="password-inp">
            <div className="inp-label">Confirm New Password</div>
            <div className="input-grp">
              <input type={hideConfPass ? "password" : "text"} />
              {hideConfPass ? (
                <i
                  className="fa fa-eye-slash showInpPass"
                  onClick={() => setHideConfPass(!hideConfPass)}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-eye showInpPass"
                  onClick={() => setHideConfPass(!hideConfPass)}
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>
          <div className="alert-inp">
            <input type="checkbox" /> {"  "}{" "}
            <span>
              All Device will be required to sign in with new password
            </span>
          </div>
        </form>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns" onClick={onCloseModal}>CANCEL</button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button type="submit" className="active_btn_blue">
              SAVE
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChagePasswordPopup;
