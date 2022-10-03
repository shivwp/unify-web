import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";

const RemovePostingPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup" }}
        center
      >
        <h5 style={{fontWeight: '700'}}>Close Job</h5>
        <p>
          Use this to close your job to new applicants and notify current
          applicants.Those you have hired will not be affected.
        </p>
        <div className="reason-to-remove-posting">
          <h6 style={{fontWeight: '600', fontSize: '16px'}}>Reason for closing</h6>
          <div>
            <ul className="popup-radio">
              <li>
                <label htmlFor="reason-1">
                  <input type="radio" id="reason-1" name="p" /> <span>Accidental job
                  Posting creation</span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-2">
                  <input type="radio" name="p" id="reason-2" /> <span>All Position
                  filled</span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-3">
                  <input type="radio" name="p" id="reason-3" /> <span>Filled by
                  alternate source</span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-4">
                  <input type="radio" name="p" id="reason-4" /> <span>No freelancer
                  for requested skills</span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-5">
                  <input type="radio" id="reason-5" name="p" /> <span>Porject was
                  cancelled</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns" onClick={onCloseModal}>
              CANCEL
            </button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button className="active_btn_blue" style={{fontWeight:600}}>YES, CLOSE JOB</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RemovePostingPopup;
