import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Exprience = () => {
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <h5 className="startIntroTwoH5">
              {" "}
              If you have relevent work experience, add it here.{" "}
            </h5>
            <p className="startIntroTwoP">
              {" "}
              Freelancers who add their experience are twice as likely to win
              work. But if you're just starting out, you can still create a
              great profile. Just head on to the next page.{" "}
            </p>
            <Row>
              <Col md={4} lg={3} className="startIntroDe">
                <div className="startIntroBox">
                  <div>
                    <h5 className="startIntroSkil"> Laravel </h5>
                    <p className="startIntroCompny"> Company Name </p>
                    <p className="startIntroTwoDate"> June 2019 - Present </p>
                    <p className="startIntroTwoDate"> Jaipur, India </p>
                  </div>
                  <div className="startIntroTwoIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Group_3330"
                        data-name="Group 3330"
                        transform="translate(-464 -2581)"
                      >
                        <g
                          id="Ellipse_689"
                          data-name="Ellipse 689"
                          transform="translate(464 2581)"
                          fill="#fff"
                          stroke="#707070"
                          stroke-width="1"
                          opacity="0.43"
                        >
                          <circle cx="20" cy="20" r="20" stroke="none" />
                          <circle cx="20" cy="20" r="19.5" fill="none" />
                        </g>
                        <path
                          id="_8665767_pen_icon"
                          data-name="8665767_pen_icon"
                          d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                          transform="translate(477.099 2593.145)"
                          fill="#6d2ef1"
                        />
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Group_3329"
                        data-name="Group 3329"
                        transform="translate(-516 -2581)"
                      >
                        <g
                          id="Ellipse_690"
                          data-name="Ellipse 690"
                          transform="translate(516 2581)"
                          fill="#fff"
                          stroke="#707070"
                          stroke-width="1"
                          opacity="0.43"
                        >
                          <circle cx="20" cy="20" r="20" stroke="none" />
                          <circle cx="20" cy="20" r="19.5" fill="none" />
                        </g>
                        <path
                          id="_2203546_bin_delete_gabage_trash_icon"
                          data-name="2203546_bin_delete_gabage_trash_icon"
                          d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                          transform="translate(528 2593)"
                          fill="#6d2ef1"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Col>
              <Col md={4} lg={3} className="startIntroDe">
                <div className="startIntroBoxAdd">
                  <div className="profile_intro_add_col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 79 79"
                    >
                      <g
                        id="Group_3560"
                        data-name="Group 3560"
                        transform="translate(-287 -442)"
                      >
                        <circle
                          id="Ellipse_749"
                          data-name="Ellipse 749"
                          cx="39.5"
                          cy="39.5"
                          r="39.5"
                          transform="translate(287 442)"
                          fill="#6d2ef1"
                        />
                        <path
                          id="plus"
                          d="M13.576,1V26.152M1,13.576H26.152"
                          transform="translate(312.5 467.5)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          fill-rule="evenodd"
                        />
                      </g>
                    </svg>
                    <h6 className="startIntroExp2"> Add Experience </h6>
                  </div>
                </div>
              </Col>
            </Row>
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

export default Exprience;