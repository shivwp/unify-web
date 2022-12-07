import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onEditDesignation } from "../../../../redux/actions/profileAction";

const WhatDoYouDo = ({ setCurrentTab, profileList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [popup, Setpopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (profileList) {
      setValues(profileList);
    }
  }, [profileList]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    setIsChange(true);
  };

  const afterSuccess = () => {
    setCurrentTab("exprience");
    navigate(`/freelancer/profile-intro/exprience`);
  };

  const onEditProfile = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.occuption === "" ||
      values?.occuption === null ||
      values?.occuption === undefined
    ) {
      errorsObject.occuption = "Please enter your title";
      errorExist = true;
    } 
    // else if (/\s/g.test(values?.occuption)) {
    //   errorsObject.occuption = "Field is required";
    //   errorExist = true;
    // } 
    else if (/^[0-9]\d*$/.test(values?.occuption)) {
      errorsObject.occuption = "please input a valid title ";
      errorExist = true;
    } 

    if (
      values?.description === "" ||
      values?.description === null ||
      values?.description === undefined
    ) {
      errorsObject.description = "Please enter your description";
      errorExist = true;
    } else if (values?.description?.length < 100) {
      errorsObject.description = "Description minimum length is 100 characters";
      errorExist = true;
    } else if (/\s/g.test(values?.description)) {
      errorsObject.description = "Field is required";
      errorExist = true;
    }else if (/^[0-9]\d*$/.test(values?.description)) {
      errorsObject.description = "please input a valid description ";
      errorExist = true;
    } 

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      title: values.occuption,
      description: values.description,
    };

    if (isChange) {
      dispatch(
        onEditDesignation(
          data,
          popup,
          successPopup,
          setSuccessPopup,
          afterSuccess
        )
      );
    } else {
      setCurrentTab("exprience");
      navigate(`/freelancer/profile-intro/exprience`);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="whatdoyoudo">
            <div className="heading">Ok Great! Now we need a headline</div>
            <div className="desc">
              This will be the first thing a client sees when looking for a
              freelancer. It'll also allow them to quickly get an overview of
              your skills. Be unique!
            </div>
            <div className="popup_form_element mb-3">
              <Form.Control
                type="text"
                className="font-size-13px"
                name="occuption"
                onChange={onInputChange}
                value={values?.occuption}
                placeholder="ex. Full Stack Developer | Web & Mobile"
              />
              <span className="signup-error">
                {errors.occuption && errors.occuption}
              </span>
            </div>
            <div className="popup_form_element mb-0">
            <Form.Label className="whatdoYoudo-head"> Ok, time to shine! Sell yourself to the world of Unify. </Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                className="AfterSignUpYrselfTxt"
                maxLength="5000"
                value={values?.description}
                onChange={onInputChange}
                placeholder="A short bio..."
              ></Form.Control>

              <span className="signup-error">
                {errors.description && errors.description}
              </span>
            </div>
            <span className="maxlabel_atcxt2">
              {" "}
              {5000 - values?.description?.length} characters left{" "}
            </span>

            <div className="theme_btns">
              <button
                className="first_button"
                onClick={() => {
                  setCurrentTab("takeTimeToIntro");
                  navigate(`/freelancer/profile-intro/takeTimeToIntro`);
                }}
              >
                Back
              </button>
              <button
                className="second_button"
                disabled={
                  values?.description?.length == 0 ||
                  values?.occuption?.length == 0
                }
                onClick={onEditProfile}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {confirmPopup}
      {successPopup}
    </>
  );
};

export default WhatDoYouDo;
