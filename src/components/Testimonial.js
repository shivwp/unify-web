import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { onForgotPassword } from "../redux/actions/authActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  onGetTestmonial,
  onSubmitTestimonial,
} from "../redux/actions/profileAction";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Testimonial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [editDetails, setEditDetails] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errors, setErrors] = useState(false);

  const id = useParams();

  const editClientDetails = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.first_name === "" ||
      values?.first_name === null ||
      values?.first_name === undefined
    ) {
      errorsObject.first_name = "Please enter your first name";
      errorExist = true;
    }
    if (
      values?.last_name === "" ||
      values?.last_name === null ||
      values?.last_name === undefined
    ) {
      errorsObject.last_name = "Please enter your last name";
      errorExist = true;
    }
    if (
      values?.title === "" ||
      values?.title === null ||
      values?.title === undefined
    ) {
      errorsObject.title = "Please enter your Title";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    setEditDetails(false);
  };

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };
  const testimonialData = useSelector(
    (state) => state?.profile?.getTestimonial
  );

  const afterSuccess = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(onGetTestmonial(id, setValues, navigate));
  }, []);

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.description === "" ||
      values?.description === null ||
      values?.description === undefined
    ) {
      errorsObject.description = "Please enter your testimonial";
      errorExist = true;
    }
    if (values?.description?.length < 100) {
      errorsObject.description = "Testimonial minimum length is 100 characters";
      errorExist = true;
    }
    if (
      values?.first_name === "" ||
      values?.first_name === null ||
      values?.first_name === undefined
    ) {
      errorsObject.first_name = "Please enter your first name";
      errorExist = true;
    }
    if (
      values?.last_name === "" ||
      values?.last_name === null ||
      values?.last_name === undefined
    ) {
      errorsObject.last_name = "Please enter your last name";
      errorExist = true;
    }
    if (
      values?.title === "" ||
      values?.title === null ||
      values?.title === undefined
    ) {
      errorsObject.title = "Please enter your Title";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      id,
      description: values?.description,
      first_name: values?.first_name,
      last_name: values?.last_name,
      title: values.title,
    };
    // dispatch(
    //   onSubmitTestimonial(data, successPopup, setSuccessPopup, afterSuccess)
    // );
  };

  return (
    <>
      <div className="bg-body-wrapper">
        <div
          className="bg_body testimonial_bg"
          style={{ flexDirection: "column" }}
        >
          <div className="testimonial_heading">
            <h2>
              {" "}
              Help {`${testimonialData?.freelancer_name || "Someone"} `} with a
              testimonial
            </h2>
          </div>
          <div className="testimonial_container">
            <div className="about_requester">
              <div className="testimonial_img">
                <img
                  src={
                    testimonialData?.freelancer_profile_image ||
                    "https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                  }
                />
              </div>
              <div className="testimonial_about">
                <div className="test_name">{`${
                  testimonialData?.freelancer_name || "Your Name"
                }`}</div>
                <div className="test_designation">
                  {testimonialData?.occcuption || "Occcuption"}
                </div>
              </div>
            </div>
            <div className="submit_testimo_inp">
              <Form.Label>
                <span style={{ marginRight: 10 }}>
                  {" "}
                  Enter your testimonial{" "}
                </span>
                <span style={{ color: "#6d2ef1", fontSize: 12 }}>
                  {" "}
                  Tip: Showcase their expertise, project results or soft skills.
                </span>
              </Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => handleOnChange(e)}
                name="description"
                placeholder="Enter Your Testimonial"
              ></Form.Control>
              <div
                className="max_char"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span className="signup-error">
                  {errors.description && errors.description}
                </span>
                <span style={{ fontSize: 12, color: "#7f7f7f" }}>
                  {800 - values?.description?.length || 0} characters left
                </span>
              </div>
            </div>
            <div className="your_info">
              <div className="heading">
                Your Information{" "}
                <Link to="#" onClick={() => setEditDetails(!editDetails)}>
                  Edit This
                </Link>
              </div>
              {!editDetails ? (
                <div style={{ marginTop: 8 }}>
                  <div className="name">
                    <span style={{ width: "20%" }}>Name</span>
                    <span style={{ width: "80%" }}>{`${
                      values?.first_name || "First Name"
                    } ${values?.last_name || "Last Name"}`}</span>
                  </div>
                  <div className="title">
                    <span style={{ width: "20%" }}>Title</span>
                    <span style={{ width: "80%" }}>{`${
                      values?.title || "Project Manager"
                    }`}</span>
                  </div>
                </div>
              ) : (
                <>
                  <Row>
                    <Col md={6} sm={12}>
                      <div className="edit_name">
                        <Form.Label htmlFor="first_name">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="first_name"
                          value={values?.first_name}
                          name="first_name"
                          onChange={(e) => handleOnChange(e)}
                        />
                        <span className="signup-error">
                          {errors.first_name && errors.first_name}
                        </span>
                      </div>
                    </Col>
                    <Col md={6} sm={12}>
                      <div className="edit_title">
                        <Form.Label htmlFor="last_name">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="last_name"
                          value={values?.last_name}
                          name="last_name"
                          onChange={(e) => handleOnChange(e)}
                        />
                        <span className="signup-error">
                          {errors.last_name && errors.last_name}
                        </span>
                      </div>
                    </Col>
                    <Col md={6} sm={12}>
                      <div className="edit_title">
                        <Form.Label htmlFor="title">Title</Form.Label>
                        <Form.Control
                          type="text"
                          id="title"
                          name="title"
                          value={values?.title}
                          onChange={(e) => handleOnChange(e)}
                        />
                        <span className="signup-error">
                          {errors.title && errors.title}
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <div className="testimonial_info_btn">
                    <Button variant="" onClick={editClientDetails}>
                      Save
                    </Button>
                  </div>
                </>
              )}
            </div>
            <div className="testimonial_btn">
              <Button variant="" onClick={onSave}>
                Submit Testimonial
              </Button>
            </div>
          </div>
          <div className="testimonial_info">
            <span>
              By submitting a testimonial. you give Upwork consent to send you
              relevant news and promotional emails.
            </span>
          </div>
        </div>
      </div>
      {successPopup}
    </>
  );
};

export default Testimonial;
