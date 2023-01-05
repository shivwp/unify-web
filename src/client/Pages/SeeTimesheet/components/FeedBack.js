import React from "react";
import { Col } from "react-bootstrap";

const FeedBack = () => {
  return (
    <>
      <Col lg={12} md={6}>
        <div className="timesheetDetails">
          <div className="comapanyHead"> Feedback </div>
          <div className="feedbackLogo">
            <div className="feedBackLogoCenter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129.192 96.808"
              >
                <path
                  id="folder"
                  d="M129.192,285.846a7.075,7.075,0,0,1-2.131,4.538l-23.1,27.227a23.314,23.314,0,0,1-8.285,5.947A23.868,23.868,0,0,1,85.808,326H11a9.326,9.326,0,0,1-4.16-.894,3.057,3.057,0,0,1-1.822-2.957,7.075,7.075,0,0,1,2.131-4.538l23.1-27.227a23.313,23.313,0,0,1,8.285-5.947A23.87,23.87,0,0,1,48.4,282H123.21a9.325,9.325,0,0,1,4.16.894A3.057,3.057,0,0,1,129.192,285.846Zm-23.583-23.652v11H48.4a32.34,32.34,0,0,0-13.545,3.266,32.1,32.1,0,0,0-11.276,8.216L.413,311.9l-.344.413q0-.275-.034-.859T0,310.6V244.592a14.822,14.822,0,0,1,4.538-10.863A14.822,14.822,0,0,1,15.4,229.191h22a14.822,14.822,0,0,1,10.863,4.538A14.822,14.822,0,0,1,52.8,244.592v2.2h37.4a15.494,15.494,0,0,1,15.4,15.4Z"
                  transform="translate(0 -229.191)"
                  fill="#6d2ef1"
                />
              </svg>
            </div>
          </div>
          <div className="feedBackSubHead">
            This contract is not yet eligible for feedback
          </div>
          <div className="feedBackPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type.
          </div>
          <div className="feedbackBtnDiv">
            <button className="feedbackBtn">Request Feedback</button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default FeedBack;
