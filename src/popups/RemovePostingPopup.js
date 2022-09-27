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
        <h5>Close Jobs</h5>
        <p>
          Use this to close your job to new applicants and notify current
          applicants.Those you have hired will not be affected.
        </p>
        <div className="reason-to-remove-posting">
          <h6>Reason for closing</h6>
          <div>
            <ul className="popup-radio">
              <li>
                <label htmlFor="reason-1">
                  <input type="radio" id="reason-1" name="p" /> Accidental job
                  Posting creation
                </label>
              </li>
              <li>
                <label htmlFor="reason-2">
                  <input type="radio" name="p" id="reason-2" /> All Position
                  filled
                </label>
              </li>
              <li>
                <label htmlFor="reason-3">
                  <input type="radio" name="p" id="reason-3" /> Filled by
                  alternate source 
                </label>
              </li>
              <li>
                <label htmlFor="reason-4">
                  <input type="radio" name="p" id="reason-4" /> No freelancer
                  for requested skills
                </label>
              </li>
              <li>
                <label htmlFor="reason-5">
                  <input type="radio" id="reason-5" name="p" /> Porject was
                  cancelled
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Link to="/title14">
              <button className="remove-posting-btns">CANCEL</button>
            </Link>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Link to="/scope">
              <button className="active_btn_blue">YES, CLOSE JOB</button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RemovePostingPopup;
