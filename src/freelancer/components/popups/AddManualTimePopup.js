import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
            <Form.Label htmlFor="date">
              <span>Date</span>
              <Select
                className="custom_css_select"
                placeholder="Wed, Oct 12, 2022"
                options={date}
              />
            </Form.Label>
            <Form.Label htmlFor="date">
              <span>Time Zone</span>
              <Select
                className="custom_css_select"
                placeholder="Mine"
                options={timezone}
              />
            </Form.Label>
            <Row>
              <Col md={6} sm={12} lg={6}>
                <Form.Label htmlFor="date">
                  <span>Start Time</span>
                  <Select
                    className="custom_css_select"
                    placeholder="Start Time"
                    options={startTime}
                  />
                </Form.Label>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <Form.Label htmlFor="date">
                  <span>End Time</span>
                  <Select
                    className="custom_css_select"
                    placeholder="End time"
                    options={startTime}
                  />
                </Form.Label>
              </Col>
            </Row>
            <Form.Label htmlFor="date">
              <span>Demo </span>
              <div className="freelancer_popup_textarea">
                <Form.Control
                  as="textarea"
                  placeholder="Short description of the work done"
                ></Form.Control>
                <div className="left_Characters">
                  <span>140 Characters left</span>
                </div>
              </div>
            </Form.Label>
          </div>
          <p className="Popup_note">
            <b>Note:</b> Menual time does not qualify for Unify Hourly
            Protaction. <span>Learn More</span>
          </p>
        </div>

        <div className="freelancer_popup_btns">
          <div className="_cancle_submit">
            <Button variant="" onClick={onCloseModal}>
              CANCEL
            </Button>
          </div>
          <div className="_save_submit">
            <Button variant="">SAVE</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddManualTimePopup;
