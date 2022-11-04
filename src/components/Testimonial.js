import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onForgotPassword } from "../redux/actions/authActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  onGetTestmonial,
  onSubmitTestimonial,
} from "../redux/actions/profileAction";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Testimonial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [editDetails, setEditDetails] = useState(false);
  const id = useParams();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const testimonialData = useSelector(
    (state) => state?.profile?.getTestimonial
  );
  console.log(values);

  useEffect(() => {
    dispatch(onGetTestmonial(id, setValues));
  }, []);

  const onSave = () => {
    const data = {
      id,
      description: values?.description,
      first_name: values?.first_name,
      last_name: values?.last_name,
      title: values.title,
    };
    dispatch(onSubmitTestimonial(data));
  };

  return (
    <>
      <div
        className="bg_body testimonial_bg"
        style={{ flexDirection: "column" }}
      >
        <div className="testimonial_heading">
          <h2>
            {" "}
            Help {`${testimonialData?.freelancer_name} `} with a testimonial
          </h2>
        </div>
        <div className="testimonial_container">
          <div className="about_requester">
            <div className="testimonial_img">
              <img src={testimonialData?.freelancer_profile_image} />
            </div>
            <div className="testimonial_about">
              <div className="test_name">{`${testimonialData?.freelancer_name}`}</div>
              <div className="test_designation">
                {testimonialData?.occcuption}
              </div>
            </div>
          </div>
          <div className="submit_testimo_inp">
            <label>
              <span style={{ marginRight: 10 }}> Enter your testimonial </span>
              <span style={{ color: "#6d2ef1", fontSize: 12 }}>
                {" "}
                Tip: Showcase their expertise, project results or soft skills.
              </span>
            </label>
            <textarea
              onChange={(e) => handleOnChange(e)}
              name="description"
              placeholder="I hired Kartik G to help with our company's re branding effort. he was reliable, and very responsive, Highly posses knowledge, excellence in skills. Highly recommend !"
            ></textarea>
          </div>
          <div className="your_info">
            <div className="heading">
              Your Information{" "}
              <Link to="#" onClick={() => setEditDetails(!editDetails)}>
                Edit This
              </Link>
            </div>
            {!editDetails ? (
              <div style={{ width: "250px", marginTop: 8 }}>
                <div className="name">
                  <span>Name</span>
                  <span>{`${testimonialData?.first_name} ${testimonialData?.last_name}`}</span>
                </div>
                <div className="title">
                  <span>Title</span>
                  <span>{`${testimonialData?.title}`}</span>
                </div>
              </div>
            ) : (
              <>
                <Row>
                  <Col md={6} sm={12}>
                    <div className="edit_name">
                      <label htmlFor="first_name">First Name</label>
                      <input
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
                      <label htmlFor="last_name">Last Name</label>
                      <input
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
                      <label htmlFor="title">Title</label>
                      <input
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
                  <button onClick={(e) => setEditDetails(false)}>Save</button>
                </div>
              </>
            )}
          </div>
          <div className="testimonial_btn">
            <button onClick={onSave}>Submit Testimonial</button>
          </div>
        </div>
        <div className="testimonial_info">
          <span>
            By submitting a testimonial. you give Upwork consent to send you
            relevant news and promotional emails.
          </span>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
