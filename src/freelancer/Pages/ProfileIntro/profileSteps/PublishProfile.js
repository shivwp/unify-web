import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import UploadPublishProfileImage from "./UploadPublishProfileImage";

const PublishProfile = ({ setCurrentTab }) => {
  const [popup, setPopup] = useState();

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5>
              {" "}
              A few last details-then you can check and publish your profile.{" "}
            </h5>
            <p className="startIntroP">
              A professional photo helps you build trust with your clients. To
              keep things safe and simple, they'll pay you through us - which is
              why we need your personal information.
            </p>
            <div className="publishPhoto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 170 170"
              >
                <path
                  id="user_1_"
                  data-name="user (1)"
                  d="M87,172A85,85,0,1,0,2,87,85,85,0,0,0,87,172ZM112.5,70A25.5,25.5,0,1,1,87,44.5,25.5,25.5,0,0,1,112.5,70ZM36,129.5a63.75,63.75,0,0,1,102,0,63.75,63.75,0,0,1-102,0Z"
                  transform="translate(-2 -2)"
                  fill="#dedede"
                  fill-rule="evenodd"
                />
              </svg>
              <button
                className="uploadPublish_button"
                onClick={() => {
                  setPopup(<UploadPublishProfileImage Popup={setPopup} />);
                }}
              >
                Upload Photo
              </button>
            </div>
            <Row className="popup_uploadProfileImg">
              <Col>
                <div className="popup_form_element">
                  <label className="text-black font-size-13px font-weight-500">
                    Country *
                  </label>
                  <select
                    style={{
                      color: "#828282",
                      border: "1px solid rgb(232, 231, 231)",
                      height: 40,
                      borderRadius: 0,
                    }}
                    className="font-size-11px"
                    placeholder="Select ID"
                    name="type"
                  >
                    <option value="passport">India</option>
                    <option value="driving_license">UAE</option>
                    <option value="other">USA</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Street Address* (won't show on profile)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="company"
                    // value={values?.company}
                    // onChange={(e) => onInputChange(e)}
                  />
                  {/* <span className="signup-error">
                                        {errors.company && "Please enter your company"}
                                    </span> */}
                </div>
              </Col>
            </Row>
            <Row className="popup_uploadProfileImg">
              <Col>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    City *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="company"
                    // value={values?.company}
                    // onChange={(e) => onInputChange(e)}
                  />
                  {/* <span className="signup-error">
                                        {errors.company && "Please enter your company"}
                                    </span> */}
                </div>
              </Col>
              <Col>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Zip/Postal Code
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="company"
                    // value={values?.company}
                    // onChange={(e) => onInputChange(e)}
                  />
                  {/* <span className="signup-error">
                                        {errors.company && "Please enter your company"}
                                    </span> */}
                </div>
              </Col>
            </Row>
            <Row className="publishProfileImgForMo">
              <Col sm={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="font-size-13px"
                    placeholder="Enter Phone Number"
                    name="company"
                    // value={values?.company}
                    // onChange={(e) => onInputChange(e)}
                  />
                  {/* <span className="signup-error">
                                        {errors.company && "Please enter your company"}
                                    </span> */}
                </div>
              </Col>
            </Row>
            <div className="theme_btns">
              <button
                className="first_button"
                onClick={() => setCurrentTab("hourlyRate")}
              >
                Back
              </button>
              <button
                className="second_button"
                onClick={() => setCurrentTab("previewProfile")}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {
                showPopup ?
                    <UploadPublishProfilepic /> : null
            } */}
      {popup}
    </>
  );
};

export default PublishProfile;
