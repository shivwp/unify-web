import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { countryList } from "../../../../redux/actions/authActions";
import {
  getTimezoneList,
  onEditLocationInfo,
} from "../../../../redux/actions/profileAction";
import UploadPublishProfileImage from "./UploadPublishProfileImage";

const PublishProfile = ({ setCurrentTab, profileList }) => {
  const [popup, setPopup] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showingImage, setShowingImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [successPopup, setSuccessPopup] = useState(null);
  const [values, setValues] = useState();
  const getCountryList = useSelector((state) => state?.auth?.getCountryList);
  const timezoneList = useSelector((state) => state?.profile?.timezoneList);

  useEffect(() => {
    dispatch(countryList());
    dispatch(getTimezoneList());
  }, []);

  useEffect(() => {
    setShowingImage(profileList?.profile_image);
    setValues(profileList);
  }, [profileList]);

  const afterSuccess = () => {
    setCurrentTab("previewProfile");
    navigate(`/freelancer/profile-intro/previewProfile`);
  };

  const onSave = () => {
    const formData = new FormData();

    formData.append("profile_image", profileImage);
    formData.append("phone", values?.phone);
    formData.append("timezone", values?.timezone);
    formData.append("address", values?.address);
    formData.append("city", values?.city);
    formData.append("country", values?.country);
    formData.append("zip_code", values?.zip_code);
    dispatch(
      onEditLocationInfo(
        formData,
        false,
        successPopup,
        setSuccessPopup,
        afterSuccess
      )
    );
  };

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
            <div className="publishPhoto publishPhotoImg">
              <div className="image_to_show">
                {showingImage ? (
                  <img
                    src={showingImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170">
                    <path
                      id="user_1_"
                      data-name="user (1)"
                      d="M87,172A85,85,0,1,0,2,87,85,85,0,0,0,87,172ZM112.5,70A25.5,25.5,0,1,1,87,44.5,25.5,25.5,0,0,1,112.5,70ZM36,129.5a63.75,63.75,0,0,1,102,0,63.75,63.75,0,0,1-102,0Z"
                      transform="translate(-2 -2)"
                      fill="#dedede"
                      fillRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <button
                className="uploadPublish_button"
                onClick={() => {
                  setPopup(
                    <UploadPublishProfileImage
                      Popup={setPopup}
                      setShowingImage={setShowingImage}
                      showingImage={showingImage}
                      setProfileImage={setProfileImage}
                    />
                  );
                }}
              >
                Upload Photo
              </button>
            </div>
            <Row className="popup_uploadProfileImg">
              <Col lg={6}>
                <div className="popup_form_element">
                  <label className="text-black font-size-13px font-weight-500">
                    Time Zone *
                  </label>
                  <select
                    style={{
                      color: "#828282",
                      border: "1px solid rgb(232, 231, 231)",
                      height: 40,
                      borderRadius: 0,
                    }}
                    value={values?.timezone || ""}
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    className="font-size-11px"
                    placeholder="Select TimeZone"
                    name="timezone"
                  >
                    {timezoneList?.map((item, index) => (
                      <option key={index} value={item.timezone}>
                        {item.timezone}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col lg={6}>
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
                    value={values?.country || ""}
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                    className="font-size-11px"
                    placeholder="Select ID"
                    name="country"
                  >
                    {getCountryList?.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Street Address* (won't show on profile)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="address"
                    value={values?.address || ""}
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
              </Col>

              <Col lg={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    City *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="city"
                    value={values?.city || ""}
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Zip/Postal Code
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="zip_code"
                    value={values?.zip_code || ""}
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
              </Col>

              <Col lg={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="font-size-13px"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={values?.phone || ""}
                    onChange={(e) =>
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
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
              <button className="second_button" onClick={onSave}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {popup}
      {successPopup}
    </>
  );
};

export default PublishProfile;
