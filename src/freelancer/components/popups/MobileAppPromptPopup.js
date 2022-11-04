import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";

const MobileAppPromptPopup = ({onCloseModal, open}) => {
    const options1 = [{ name: "india", label: "india" }];
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          modal:
            "freelancer_popups authenticator_verification_popup popup_padd",
        }}
        center
      >
        <h5>Authenticator Verification</h5>
        <div className="addMobPopup_heading">
          <div className="message_header_img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#004ce5" d="M326.2 123.9c-68.2 0-123.5 55.3-123.5 123.5 0 39.1 18.2 73.9 46.5 96.5-11 15.6-26.4 32.4-46.9 43.8 0 0 37.9 4.3 83.2-23.7 12.7 4.4 26.4 6.9 40.7 6.9 68.2 0 123.5-55.3 123.5-123.5s-55.3-123.5-123.5-123.5zm-62.3 149.5c-11.7 0-21.1-9.5-21.1-21.1 0-11.7 9.5-21.1 21.1-21.1 11.7 0 21.1 9.5 21.1 21.1 0 11.6-9.5 21.1-21.1 21.1zm62.1 0c-11.7 0-21.1-9.5-21.1-21.1 0-11.7 9.5-21.1 21.1-21.1 11.7 0 21.1 9.5 21.1 21.1 0 11.6-9.4 21.1-21.1 21.1zm62.1 0c-11.7 0-21.1-9.5-21.1-21.1 0-11.7 9.5-21.1 21.1-21.1 11.7 0 21.1 9.5 21.1 21.1 0 11.6-9.4 21.1-21.1 21.1z"/><path fill="#b0c4ef" d="M326.2 391.8c-10.4 0-20.7-1.2-30.8-3.4 0 23.4.1 46.8.2 70 0 4.5-1.1 7.9-3.4 10.2-2.3 2.3-6 3.6-10.2 3.5-27.2-.2-54.6-.2-81.8-.2h-90.1c-10.3 0-13.6-3.3-13.6-13.6V53.6C96.5 43.3 99.8 40 110 40h23.8c.1.3.2.8.3 1.3l.3 1.7c.3 1.4.5 2.9.9 4.3 2.5 9.2 10.2 15.2 19.6 15.2 27.8.1 55.6.1 83.4 0 9.7 0 17.1-5.8 19.8-15.4l.3-1.3c.5-3.2 1-4.9 1.3-5.9 1.2-.1 2.9 0 4.4 0h2.7c1.4 0 2.9 0 4.3.1 3.7.1 7.5.2 11.5-.2 3.7-.3 6.9.7 9.1 2.8 2.5 2.3 3.8 6.1 3.8 10.9-.1 17.6-.2 35.2-.2 52.9 9.9-2.2 20.2-3.3 30.8-3.3 1.1 0 2.2.1 3.3.1V52.3C329.4 24.6 310.7 6 283 6H109.8C81.1 6 62.5 24.6 62.5 53.4v98.5c0 98.7.1 200.7-.2 301.1-.1 18 3.6 43.1 35.8 52.6l1.2.4h194l2.1-1.3s.1 0 .1-.1c21.9-6.3 33.9-22.3 33.9-45.2v-67.8c-1 .2-2.1.2-3.2.2z"/></svg>
          </div>
          <h5 style={{marginTop: 15}}>We have sent a prompt to your phone</h5>
          <span style={{ fontSize: 12, marginTop: 18, marginBottom: 45 }}>
           
            Open the prompt to confirm that you want to access your Settings. If you don't see the prompt, select Resend below.
          </span>
        </div>
     
        <div className="freelancer_popup_btns ">
          <div className="_cancle_submit">
            <button onClick={onCloseModal}>CANCEL</button>
          </div>
          <div className="_save_submit">
            <button>SEND</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MobileAppPromptPopup;
