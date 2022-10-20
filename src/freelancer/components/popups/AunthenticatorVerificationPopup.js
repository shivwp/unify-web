import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";

const AunthenticatorVerificationPopup = ({ open, onCloseModal }) => {
  const options1 = [{ name: "india", label: "india" }];
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          modal: "freelancer_popups authenticator_verification_popup popup_padd",
        }}
        center
      >
        <h5>Authenticator Verification</h5>
        <div className="addMobPopup_heading">
          <div className="message_header_img">
            <img src="/assets/qr-code.png" alt="" />
          </div>
          <h5>Scan This QR Code Or Request a key</h5>
          <span style={{ fontSize: 12, marginTop: 18 }}>
            Complete set-up by scanning the QR code shown. If you can't scan the
            code we can{" "}
            <span>
              provide you with a key.{" "}
              <i
                class="fa fa-question-circle"
                aria-hidden="true"
                style={{ color: "rgb(78 137 0)" }}
              ></i>
            </span>
          </span>
        </div>
        <div className="content">
          <div className="freelancer_popup_inps mb-3">
            <Row>
              <Col>
                <div className="popup_form_element">
                  <input
                    type="text"
                    className="font-size-13px"
                    placeholder="Enter code generated by your authenticator app"
                    name="qrCode"
                  />
                </div>
              </Col>
            </Row>
            <div className="suggest_qr">
                <span>You can <span>download the authenticator</span> to your phone from App or Google Play store. </span>
            </div>
          </div>
        </div>
        
        <div className="freelancer_popup_btns">
          <div className="_cancle_submit">
            <button onClick={onCloseModal}>CANCEL</button>
          </div>
          <div className="_save_submit">
            <button>NEXT</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AunthenticatorVerificationPopup;