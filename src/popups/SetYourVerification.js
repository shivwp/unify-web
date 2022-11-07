import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SetYourVerification = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "set-varification-popup" }}
        center
      >
        <h5>Set your verification preferences</h5>
        <div className="varification-first">
          <h6>If we need to confirm it's you, which should we try first?</h6>
          <div>
            <ul className="popup-radio">
              <li>
                <Form.Label htmlFor="reason-1">
                  <Form.Check type="radio" id="reason-1" name="p" />{" "}
                  <span>Authenticator app code</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-2">
                  <Form.Check type="radio" name="p" id="reason-2" />{" "}
                  <span>Mobile app prompt</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-3">
                  <Form.Check type="radio" name="p" id="reason-3" />{" "}
                  <span>Text message</span>
                </Form.Label>
              </li>
            </ul>
          </div>
        </div>
        <div className="when-confirm">
          <h6>When should we confirm ?</h6>
          <div>
            <ul className="popup-radio">
              <li>
                <Form.Label htmlFor="reason-1">
                  <Form.Check type="radio" id="reason-1" name="p" />{" "}
                  <span>When my login or activity seems risky</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-2">
                  <Form.Check type="radio" name="p" id="reason-2" />{" "}
                  <span>
                    At every login and when my login or activity seems risky
                  </span>
                </Form.Label>
              </li>
            </ul>
          </div>
        </div>
        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button  variant="" className="remove-posting-btns" onClick={onCloseModal}>
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button variant=""  className="active_btn_blue">SAVE</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SetYourVerification;
