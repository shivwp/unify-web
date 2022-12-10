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
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isChange, setIsChange] = useState(false);
  const [showError, setShowError] = useState();
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

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setIsChange(true);
  };

 
  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};
    if (
      values?.timezone === "" ||
      values?.timezone === null ||
      values?.timezone === undefined
    ) {
      errorsObject.timezone = true;
      errorExist = true;
    }
    if (
      values?.country === "" ||
      values?.country === null ||
      values?.country === undefined
    ) {
      errorsObject.country = true;
      errorExist = true;
    }
    if (
      values?.address === "" ||
      values?.address === null ||
      values?.address === undefined
    ) {
      errorsObject.address = true;
      errorExist = true;
    }
    if (
      values?.city === "" ||
      values?.city === null ||
      values?.city === undefined
    ) {
      errorsObject.city = "Please enter your city";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.city)) {
      errorsObject.city = "please input a valid city ";
      errorExist = true;
    }
    if (
      values?.zip_code === "" ||
      values?.zip_code === null ||
      values?.zip_code === undefined
    ) {
      errorsObject.zip_code = "Please enter your zip code";
      errorExist = true;
    } else if (values?.zip_code?.length < 6 || values?.zip_code?.length > 6) {
      errorsObject.zip_code = "please input a valid zip code";
      errorExist = true;
    }

    if (
      values?.phone === "" ||
      values?.phone === null ||
      values?.phone === undefined
    ) {
      errorsObject.phone = "Please enter your phone number";
      errorExist = true;
    } else if (values?.phone?.length < 10 || values?.phone?.length > 12) {
      errorsObject.phone = "The phone must be between 10 and 12 digits.";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    if (isChange) {
      const formData = new FormData();
      if (profileImage) {
        formData.append("profile_image", profileImage);
      }

      formData.append("timezone", values?.timezone);
      formData.append("country", values?.country);
      formData.append("address", values?.address);
      formData.append("city", values?.city);
      formData.append("zip_code", values?.zip_code);
      formData.append("phone", values?.phone);
      dispatch(
        onEditLocationInfo(
          formData,
          false,
          successPopup,
          setSuccessPopup,
          setCurrentTab,
          navigate
        )
      );
    } else {
      setCurrentTab("previewProfile");
      navigate(`/freelancer/profile-intro/previewProfile`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5>
              Right, we're almost done. The last few bits before you are on your
              way to Learn and Earn.
            </h5>
            <p className="startIntroP2 mt-3">
              We need some personal information, clients need to know who you
              are and where you're from.
              <p className="startIntroP2 mt-1">
                Your address and phone number are just for us - we will not show
                this to clients or release this information.
              </p>
            </p>
            <div className="publishPhoto publishPhotoImg">
              <div className="image_to_show">
                {showingImage ? (
                  <img
                    src={showingImage}
                    type="file"
                    onChange={(e) => onInputChange(e)}
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
                      setIsChange={setIsChange}
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
                    onChange={(e) => onInputChange(e)}
                    className="font-size-11px"
                    placeholder="Select TimeZone"
                    name="timezone"
                  >
                    <option value="">Select timezone</option>
                    {timezoneList?.map((item, index) => (
                      <option key={index} value={item.timezone}>
                        {item.timezone}
                      </option>
                    ))}
                  </select>
                  <span className="signup-error">
                    {errors.timezone && "Please Select your timezone"}
                  </span>
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
                    onChange={(e) => onInputChange(e)}
                    className="font-size-11px"
                    placeholder="Select ID"
                    name="country"
                  >
                    <option value="">Select Country</option>
                    {getCountryList?.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <span className="signup-error">
                    {errors.country && "Please Select your country"}
                  </span>
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
                    onChange={(e) => onInputChange(e)}
                  />
                  <span className="signup-error">
                    {errors.address && "Please enter your address"}
                  </span>
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
                    onChange={(e) => onInputChange(e)}
                  />
                  <span className="signup-error">
                    {/* {errors.city && "Please enter your city"} */}
                    {errors.city && errors.city}
                  </span>
                </div>
              </Col>
              <Col lg={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Zip/Postal Code *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="font-size-13px"
                    placeholder=""
                    name="zip_code"
                    value={values?.zip_code || ""}
                    onChange={(e) => onInputChange(e)}
                  />
                  <span className="signup-error">
                    {/* {errors.zip_code && "Please enter your zip code" } */}
                    {errors.zip_code && errors.zip_code}
                  </span>
                </div>
              </Col>

              <Col lg={6}>
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Phone Number *
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="font-size-13px"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={values?.phone || ""}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                  <span className="signup-error">
                    {errors.phone && errors.phone}
                  </span>
                </div>
              </Col>
            </Row>
            <div className="theme_btns">
              <button
                className="first_button"
                onClick={() => {
                  setCurrentTab("hourlyRate");
                  navigate(`/freelancer/profile-intro/hourlyRate`);
                }}
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
