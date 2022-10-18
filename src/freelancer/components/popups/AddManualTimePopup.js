import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";

const AddManualTimePopup = ({ open, onCloseModal }) => {
  const date = [
    { name: "10 Oct 2022", label: "10 Oct 2022" },
    { name: "11 Oct 2022", label: "11 Oct 2022" },
  ];
  const timezone = [
    { name: "Mine", label: "Mine" },
    { name: "UTC", label: "UTC" },
  ];
  const startTime = [
    { name: "9.10 PM", label: "9.10 PM" },
    { name: "9.20 PM", label: "9.20 PM" },
    { name: "9.30 PM", label: "9.30 PM" },
    { name: "9.40 PM", label: "9.40 PM" },
    { name: "9.50 PM", label: "9.50 PM" },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "freelancer_popups AMT_Popup" }}
        center
      >
        <h5>Add Manual Time</h5>
        <div className="content">
          <div className="freelancer_popup_inps">
            <label htmlFor="date">
              <span>Date</span>
              <Select
                className="custom_css_select"
                placeholder="Wed, Oct 12, 2022"
                options={date}
              />
            </label>
            <label htmlFor="date">
              <span>Time Zone</span>
              <Select
                className="custom_css_select"
                placeholder="Mine"
                options={timezone}
              />
            </label>
            <Row>
              <Col md={6} sm={12} lg={6}>
                <label htmlFor="date">
                  <span>Start Time</span>
                  <Select
                    className="custom_css_select"
                    placeholder="Start Time"
                    options={startTime}
                  />
                </label>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <label htmlFor="date">
                  <span>End Time</span>
                  <Select
                    className="custom_css_select"
                    placeholder="End time"
                    options={startTime}
                  />
                </label>
              </Col>
            </Row>
            <label htmlFor="date">
              <span>Memo </span>
              <div className="freelancer_popup_textarea">
                <textarea placeholder="Short description of the work done"></textarea>
                <div className="left_Characters">
                  <span>140 Characters left</span>
                </div>
              </div>
            </label>
          </div>
          <p className="Popup_note">
            <b>Note:</b> Menual time does not qualify for Upwork Hourly
            Protaction. <span>Learn More</span>
          </p>
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

export default AddManualTimePopup;
