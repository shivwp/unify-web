import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RemovePostingPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup" }}
        center
      >
        <h5 style={{ fontWeight: "700" }}>Close Job</h5>
        <p>
          Use this to close your job to new applicants and notify current
          applicants.Those you have hired will not be affected.
        </p>
        <div className="reason-to-remove-posting">
          <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
            Reason for closing
          </h6>
          <div>
            <ul className="popup-radio">
              <li>
                <Form.Label htmlFor="reason-1">
                  <Form.Check type="radio" id="reason-1" name="p" />{" "}
                  <span>Accidental job Posting creation</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-2">
                  <Form.Check type="radio" name="p" id="reason-2" />{" "}
                  <span>All Position filled</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-3">
                  <Form.Check type="radio" name="p" id="reason-3" />{" "}
                  <span>Filled by alternate source</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-4">
                  <Form.Check type="radio" name="p" id="reason-4" />{" "}
                  <span>No freelancer for requested skills</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-5">
                  <Form.Check type="radio" id="reason-5" name="p" />{" "}
                  <span>Project was cancelled</span>
                </Form.Label>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button className="remove-posting-btns" onClick={onCloseModal}>
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button className="active_btn_blue" style={{ fontWeight: 600 }}>
              YES, CLOSE JOB
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RemovePostingPopup;
