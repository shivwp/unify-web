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

  const id = useParams();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const testimonialData = useSelector(
    (state) => state?.profile?.getTestimonial
  );

  const afterSuccess = () => {
    navigate("/");
  };

  console.log(testimonialData)

  useEffect(() => {
    dispatch(onGetTestmonial(id, setValues, navigate));
  }, []);

  const onSave = () => {
    const data = {
      id,
      description: values?.description,
      first_name: values?.first_name,
      last_name: values?.last_name,
      title: values.title,
    };
    dispatch(
      onSubmitTestimonial(data, successPopup, setSuccessPopup, afterSuccess)
    );
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
                      </div>
                    </Col>
                  </Row>
                  <div className="testimonial_info_btn">
                    <Button variant="" onClick={(e) => setEditDetails(false)}>
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
