import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutYourSelf = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">
              Great! Now write a bio to tell the world about yourself.
            </h5>
            <p className="startIntroTwoP">
              Help people get to know you at a glance. What work are you best
              at? Tell them clearly, using paragraphs or bullet point, you can
              always edit later-just make sure you proofread now!
            </p>
            <div className="popup_form_element mb-0">
              <Form.Control
                as="textarea"
                name="description"
                className="AfterSignUpYrselfTxt"
                maxlength="5000"
                onChange={inputHandler}
                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
              ></Form.Control>
            </div>
            <span className="maxlabel_atcxt2">
              {" "}
              {5000 - input.length} characters left{" "}
            </span>
            <div className="theme_btns mt-0">
              <Link to="/freelancer/profile-intro5">
                <button className="first_button">Back</button>
              </Link>
              <Link to="/freelancer/profile-intro7">
                <button className="second_button">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutYourSelf;
