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

  useEffect(() => {
    if (profileList) {
      setValues(profileList);
    }
  }, [profileList]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const afterSuccess = () => {
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
      errorsObject.occuption = true;
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
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      title: values.occuption,
      description: values.description,
    };

    dispatch(
      onEditDesignation(
        data,
        popup,
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
          <div className="whatdoyoudo">
            <div className="heading">
              Got it. Now, add a title to tell the world what do you do.
            </div>
            <div className="desc">
              It's the very first thing clients see, so make it count. Stand out
              by describing your expertise in your own words.
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
                {errors.occuption && "Please enter your title"}
              </span>
            </div>
            <div className="popup_form_element mb-0">
              <Form.Control
                as="textarea"
                name="description"
                className="AfterSignUpYrselfTxt"
                maxLength="5000"
                value={values?.description}
                onChange={onInputChange}
                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
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
