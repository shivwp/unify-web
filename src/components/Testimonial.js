import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onForgotPassword } from "../redux/actions/authActions";
import { Link, useNavigate } from "react-router-dom";

const Testimonial = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg_body testimonial_bg"
        style={{ flexDirection: "column" }}
      >
        <div className="testimonial_heading">
          <h2> Help Kartik G with a testimonial</h2>
        </div>
        <div className="testimonial_container">
          <div className="about_requester">
            <div className="testimonial_img">
              <img src="https://unify.eoxyslive.com/images/profile-image/demo%20img.jpg" />
            </div>
            <div className="testimonial_about">
              <div className="test_name">Kartik G</div>
              <div className="test_designation">Mobile App Developer</div>
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
            <textarea placeholder="I hired Kartik G to help with our company's re branding effort. he was reliable, and very responsive, Highly posses knowledge, excellence in skills. Highly recommend !"></textarea>
          </div>
          <div className="your_info">
            <div className="heading">
              Your Information <Link to="#">Edit This</Link>
            </div>
            <div className="name">
              <span>Name</span>
              <span>Ajay Kumar</span>
            </div>
            <div className="title">
              <span>Title</span>
              <span>Developer</span>
            </div>
          </div>
          <div className="testimonial_btn">
            <button>Submit Testimonial</button>
          </div>
        </div>
        <div className="testimonial_info">
          <span>By submitting a testimonial. you give Upwork consent to send you relevant news and promotional emails.</span>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
