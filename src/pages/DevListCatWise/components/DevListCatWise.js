import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDevelopersBySkills } from "../../../redux/actions/authActions";
import InstantBookingPopup from "./InstantBookingPopup";

const DevListCatWise = () => {
  const dispatch = useDispatch();
  const skillId = useParams();
  const [popup, setPopup] = useState();

  const skillDevData = useSelector((state) => state?.auth?.skillDevData);

  useEffect(() => {
    dispatch(getDevelopersBySkills({ skill_id: skillId.skill }));
  }, []);

  return (
    <>
      <div className="dev_cat_wise">
        <div className="header">
          <div className="container">
            <div className="header_left">
              <h1 className="heading">
                {skillDevData?.skill_data?.short_description}
              </h1>
              <p className="desc">
                Schedule a risk-free consultation with Top Rated talent to scope
                out your project.
              </p>
              <div className="header_btns">
                <div className="hire_btn">
                  <button>Hire a Freelancer</button>
                </div>
                <div className="talk_to_client">Talk to a Recruiter</div>
              </div>
              <div className="review">
                <span>Clients rate Java developers</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.527"
                    height="20.503"
                    viewBox="0 0 21.527 20.503"
                  >
                    <path
                      id="f35e3bcbde3528bceb03a6a775c06def"
                      d="M-50.544,61.508c-.766.546-5.68-2.912-6.621-2.92s-5.911,3.371-6.668,2.813,1.023-6.287.739-7.182-5.042-4.564-4.744-5.454,6.312-.973,7.078-1.518,2.795-6.191,3.736-6.184,2.878,5.685,3.635,6.243,6.769.737,7.053,1.632-4.533,4.487-4.831,5.377S-49.778,60.963-50.544,61.508Z"
                      transform="translate(67.851 -41.064)"
                      fill="#f8b84e"
                    />
                  </svg>
                  <span>{skillDevData?.skill_data?.rating}</span>
                </span>
                <span className="count">
                  based on {skillDevData?.skill_data?.total_client} client
                  reviews
                </span>
              </div>
            </div>
            <div className="header_right">
              <div className="header_img">
                <img src={skillDevData?.skill_data?.banner_image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Container>
          {/* developers list cards */}
          <div className="developers_list">
            <div className="heading">
              <h2>{skillDevData?.skill_data?.long_description}</h2>
            </div>
            <div className="desc">
              Find someone with the skills and background you’re looking for.{" "}
              <span>How it works</span>
            </div>
            <div className="cards">
              <Row>
                {skillDevData?.freelancer_data?.map((item, index) => (
                  <Col lg={4} xl={3} md={6} key={index}>
                    <div className="dev_card">
                      <div className="image">
                        <img src={item.profile_image} alt="" />
                      </div>
                      <div className="name">{`${
                        item.first_name
                      } ${item?.last_name?.charAt(0)?.toUpperCase()}`}</div>
                      <div className="designation">{item.occcuption}</div>
                      <div className="ratings">
                        <div className="top_rated">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="38"
                              height="38"
                              viewBox="0 0 38 38"
                            >
                              <g
                                id="Group_3623"
                                data-name="Group 3623"
                                transform="translate(-91.584 -1362.584)"
                              >
                                <circle
                                  id="Ellipse_758"
                                  data-name="Ellipse 758"
                                  cx="19"
                                  cy="19"
                                  r="19"
                                  transform="translate(91.584 1362.584)"
                                  fill="#ff88fe"
                                />
                                <path
                                  id="f35e3bcbde3528bceb03a6a775c06def"
                                  d="M-55.671,55.451c-.539.384-4-2.05-4.66-2.055s-4.16,2.372-4.692,1.98.72-4.424.52-5.054-3.548-3.212-3.338-3.838,4.442-.685,4.981-1.069,1.967-4.357,2.629-4.352,2.026,4,2.558,4.394,4.764.519,4.963,1.149-3.19,3.157-3.4,3.784S-55.132,55.067-55.671,55.451Z"
                                  transform="translate(170.469 1333.441)"
                                  fill="#fff"
                                />
                              </g>
                            </svg>
                          </span>
                          <span>Top Rated</span>
                        </div>
                        <div className="rate">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.15"
                              height="14.429"
                              viewBox="0 0 15.15 14.429"
                            >
                              <path
                                id="f35e3bcbde3528bceb03a6a775c06def"
                                d="M-55.671,55.451c-.539.384-4-2.05-4.66-2.055s-4.16,2.372-4.692,1.98.72-4.424.52-5.054-3.548-3.212-3.338-3.838,4.442-.685,4.981-1.069,1.967-4.357,2.629-4.352,2.026,4,2.558,4.394,4.764.519,4.963,1.149-3.19,3.157-3.4,3.784S-55.132,55.067-55.671,55.451Z"
                                transform="translate(67.851 -41.064)"
                                fill="#ff88fe"
                              />
                            </svg>
                          </span>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="skills">
                        {item?.skills?.slice(0, 3)?.map((skill, index) => (
                          <div key={index} className="skill">
                            {skill.skill_name}
                          </div>
                        ))}
                      </div>
                      <hr />
                      <div className="details_btn">
                        <button
                          onClick={() =>
                            setPopup(
                              <InstantBookingPopup setPopup={setPopup} />
                            )
                          }
                        >
                          See More
                        </button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {popup}
    </>
  );
};

export default DevListCatWise;
