import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ChagePasswordPopup = ({ onCloseModal, open }) => {
  const [hideNewPass, setHideNewPass] = useState(true);
  const [hideOldPass, setHideOldPass] = useState(true);
  const [hideConfPass, setHideConfPass] = useState(true);

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "change-password-popup" }}
        center
      >
        <h5 style={{ marginBottom: "25px" }}>Change Password</h5>
        <Form>
          <div className="password-inp">
            <Form.Label className="inp-label">Old Password</Form.Label>
            <div className="input-grp">
              <Form.Control type={hideOldPass ? "password" : "text"} />
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
            <Form.Label className="inp-label">New Password</Form.Label>
            <div className="input-grp">
              <Form.Control type={hideNewPass ? "password" : "text"} />
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
            <Form.Label className="inp-label">Confirm New Password</Form.Label>
            <div className="input-grp">
              <Form.Control type={hideConfPass ? "password" : "text"} />
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
            <Form.Check type="checkbox" /> {"  "}{" "}
            <span>
              All Device will be required to sign in with new password
            </span>
          </div>
        </Form>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button
              variant=""
              className="remove-posting-btns"
              onClick={onCloseModal}
            >
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" type="submit" className="active_btn_blue">
              SAVE
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChagePasswordPopup;
