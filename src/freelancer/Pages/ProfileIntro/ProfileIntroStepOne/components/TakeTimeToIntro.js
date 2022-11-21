import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const TakeTimeToIntro = () => {
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5> How would you like to tell us about yourself? </h5>
            <p className="startIntroP">
              {" "}
              we need to get a sense of your education, experience and skills.
              It's quickest to import our information - you can edit it before
              your profile goes live.{" "}
            </p>
            <div className="startIntroFillOut">
              <div className="startIntroRadiobtn">
                {" "}
                <Form.Check type="radio" name="p" />{" "}
              </div>
              <div className="startIntroSVG">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61.527"
                  className="startIntroIcon"
                  height="66.258"
                  viewBox="0 0 61.527 66.258"
                >
                  <g
                    id="Layer_2"
                    data-name="Layer 2"
                    transform="translate(-3 -2)"
                  >
                    <path
                      id="Path_4794"
                      data-name="Path 4794"
                      d="M50.327,28.03V9.1a7.1,7.1,0,0,0-7.1-7.1H10.1A7.1,7.1,0,0,0,3,9.1v52.06a7.1,7.1,0,0,0,7.1,7.1H43.228a7.1,7.1,0,0,0,7.1-7.1V44.594a4.733,4.733,0,0,0-4.733,4.733V61.159a2.366,2.366,0,0,1-2.366,2.366H10.1a2.366,2.366,0,0,1-2.366-2.366V9.1A2.366,2.366,0,0,1,10.1,6.733H43.228A2.366,2.366,0,0,1,45.594,9.1V32.763A4.733,4.733,0,0,0,50.327,28.03Z"
                      transform="translate(0 0)"
                      fill="#e4eaef"
                    />
                    <path
                      id="Path_4795"
                      data-name="Path 4795"
                      d="M33.03,7H9.366a2.366,2.366,0,0,0,0,4.733H33.03A2.366,2.366,0,0,0,33.03,7ZM35.4,18.832a2.366,2.366,0,0,0-2.366-2.366H9.366a2.366,2.366,0,1,0,0,4.733H33.03A2.366,2.366,0,0,0,35.4,18.832Zm-26.03,7.1a2.366,2.366,0,1,0,0,4.733h9.465a2.366,2.366,0,0,0,0-4.733Z"
                      transform="translate(5.465 6.832)"
                      fill="#e4eaef"
                    />
                    <path
                      id="Path_4796"
                      data-name="Path 4796"
                      d="M15.78,47.255A2.366,2.366,0,0,1,13.465,44.4l1.779-8.474a2.366,2.366,0,0,1,.641-1.183L38.177,12.455a7.272,7.272,0,0,1,10.04,0,7.1,7.1,0,0,1,0,10.04l-22.3,22.284a2.35,2.35,0,0,1-1.183.644L16.265,47.2a2.45,2.45,0,0,1-.485.05ZM24.265,43.106Zm-4.522-5.516-.89,4.236,4.229-.89L44.872,19.145a2.366,2.366,0,0,0,0-3.346,2.416,2.416,0,0,0-3.346,0Z"
                      transform="translate(14.23 11.538)"
                      fill="#e4eaef"
                    />
                  </g>
                </svg>
              </div>
              <div className="startIntroText"> Fill Out Manually (15 Min) </div>
            </div>
            <div className="theme_btns">
              <button className="first_button">Back</button>
              <button className="second_button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeTimeToIntro;
