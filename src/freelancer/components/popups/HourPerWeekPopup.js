import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";

const HourPerWeekPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "freelancer_popups HWP_Popup" }}
        center
      >
        <h5>Hours Per Week</h5>
        <p>
          Knowing how much you can work helps Unify find the right jobs for you.{" "}
          <span>How we can use this info.</span>
        </p>
        <div className="content">
          <h5>I can currently work</h5>
          <ul className="popup-radio">
            <li>
              <label htmlFor="op-1">
                <input type="radio" id="op-1" name="p" />{" "}
                <span>More then 3 Hours per week</span>
              </label>
            </li>
            <li>
              <label htmlFor="op-2">
                <input type="radio" id="op-2" name="p" />{" "}
                <span>Less then 3 Hours per week</span>
              </label>
            </li>
            <li>
              <label htmlFor="op-3">
                <input type="radio" id="op-3" name="p" />{" "}
                <span>As needed - open to offers</span>
              </label>
            </li>
            <li>
              <label htmlFor="op-4">
                <input type="radio" id="op-4" name="p" /> <span> None</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="freelancer_popup_btns">
          <div className="_cancle_submit">
            <button onClick={onCloseModal}>CANCEL</button>
          </div>
          <div className="_save_submit">
            <button>SAVE</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HourPerWeekPopup;
