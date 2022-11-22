import React from "react";
import { Col, Row } from "react-bootstrap";
import TalentMarketPlace from "./TalentMarketPlace";

const HowItWorks = () => {
  return (
    <>
      <div className="how_it_works ">
        {/* -------------------- header start ------------------------------------------------------------------*/}
        <div className="header">
          <div className="header_left">
            <h1 className="heading">Do The Work You Love, Your Way</h1>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
            <div className="signup_btn">
              <button>Sign up</button>
            </div>
          </div>
          <div className="header_right">
            <div className="header_img">
              <img src="/assets/selfie_hiw.png" alt="" />
            </div>
          </div>
        </div>
        {/* header end */}
        {/* -------------------  section 1st start  ------------------------------------------------------------------*/}
        <div className="container">
          <div className="diffrent_ways">
            <div className="heading">
              <h1>Explore The Different Ways To Earn</h1>
            </div>
            <div className="tabs">
              <div className="tab active">
                Talent Marketplace <sup>TM</sup>
              </div>
              <div className="tab">
                Project Catalog <sup>TM</sup>
              </div>
              <div className="tab">
                Talent Scout <sup>TM</sup>
              </div>
            </div>
            <TalentMarketPlace />
          </div>
        </div>
        {/* section 1st end */}
        {/* -------------------  section 2nd start  ------------------------------------------------------------------*/}
        <div className="award_winning_platform">
          <div className="container">
            <Row>
              <Col md={6}>
                <div className="heading">Our award-winning Platform</div>
                <Row>
                  <Col lg={1} xs={1} className="p-0">
                    <div className="right_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29.244"
                        height="15.162"
                        viewBox="0 0 29.244 15.162"
                      >
                        <path
                          id="_9054472_bx_check_double_icon"
                          data-name="9054472_bx_check_double_icon"
                          d="M2.394,17.01l7.165,5.468L21.063,9.33,18.788,7.342,9.145,18.363l-4.92-3.755ZM31.638,9.33,29.363,7.342l-9.621,11L18.6,17.428l-1.888,2.36L20.11,22.5Z"
                          transform="translate(-2.394 -7.342)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </div>
                  </Col>
                  <Col lg={11} xs={11} className="p-0">
                    <div className="desc">
                      Take control. Find work that hits your financial goals
                      faster with ambitious startups and well-known brands.
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}></Col>
            </Row>
          </div>
        </div>
        {/* section 2nd end */}
      </div>
    </>
  );
};

export default HowItWorks;
