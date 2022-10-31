import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          <h6 style={{ fontWeight: 600 }}>Select a reason for leaving</h6>
          <div>
            <ul className="popup-radio">
              <li>
                <Form.Label htmlFor="reason-1">
                  <Form.Check type="radio" id="reason-1" name="p" />{" "}
                  <span>Closing duplicate account </span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-2">
                  <Form.Check type="radio" name="p" id="reason-2" />{" "}
                  <span>I want to change my username</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-3">
                  <Form.Check type="radio" name="p" id="reason-3" />{" "}
                  <span>Unify is not easy to use</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-4">
                  <Form.Check type="radio" name="p" id="reason-4" />{" "}
                  <span>
                    I am not satisfied with quality of freelancers on Upwork
                  </span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-5">
                  <Form.Check type="radio" name="p" id="reason-5" />{" "}
                  <span>I signed up for the wrong type of account</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-6">
                  <Form.Check type="radio" name="p" id="reason-6" />{" "}
                  <span>The freelancers on Upwork did not fit my needs</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-7">
                  <Form.Check type="radio" name="p" id="reason-7" />{" "}
                  <span>I no longer need work done through Unify</span>
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
            <Button className="active_btn_blue">CLOSE ACCOUNT</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CloseAccountPopup;
