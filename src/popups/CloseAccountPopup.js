import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";

const CloseAccountPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup" }}
        center
      >
        <h5>Close Account</h5>
        <p>Leaving so soon? We have to see you go.</p>
        <p>
          In face, if there's anything we can do to keep the good work going, we
          want to know. Just ring us at +1-866-676-3375 and select option 3. A
          human will be there to take your call from 6am-12am PT Mon-Fri and
          9am-5pm PT Sat-Sun.
        </p>
        <div className="select-reason">
          <h6>Select a reason for leaving</h6>
          <div>
            <ul className="popup-radio">
              <li>
                <label htmlFor="reason-1">
                  <input type="radio" id="reason-1" name="p" />{" "}
                  <span>When my login or activity seems risky</span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-2">
                  <input type="radio" name="p" id="reason-2" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-3">
                  <input type="radio" name="p" id="reason-3" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-4">
                  <input type="radio" name="p" id="reason-4" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-5">
                  <input type="radio" name="p" id="reason-5" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-6">
                  <input type="radio" name="p" id="reason-6" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </label>
              </li>
              <li>
                <label htmlFor="reason-7">
                  <input type="radio" name="p" id="reason-7" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns" onClick={onCloseModal}>CANCEL</button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button className="active_btn_blue">CLOSE ACCOUNT</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CloseAccountPopup;
