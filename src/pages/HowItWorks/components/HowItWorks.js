import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import TalentMarketPlace from "./TalentMarketPlace";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/less/autoplay";
import ProjectCatalog from "./ProjectCatalog";
import TalentScout from "./TalentScout";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay]);

const HowItWorks = () => {
  const [currentTab, setCurrentTab] = useState("ViewJob");
  return (
    <>
      <div className="how_it_works ">
        {/* -------------------- header start ------------------------------------------------------------------*/}
        
        <div className="container-fluid"  style={{backgroundColor: '#6d2ef1'}}>
        <div className="header container" style={{backgroundColor: 'unset'}} >
          <div className="header_left">
            <h1 className="heading">Learn... Whilst you Eran $$</h1>
            <p className="desc">
              Unify is the world first learn and earn platform, allowing
              freelancers to enhance their skills, Whilst getting paid along the
              way.
            </p>
            <p className="desc">
              Browse our extensive course catalogue and diversify your skillset.
            </p>
            <div className="signup_btn">
              <Link to="/signup">
                <button>Sign up</button>
              </Link>
            </div>
          </div>
          <div className="header_right">
            <div className="header_img">
              <img src="/assets/selfie_hiw.png" alt="" />
            </div>
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
            <div className="overflow-scroll">
              <div className="d-flex flex-wrap tab_m_nodea mt-4 how_it_works tab_scroll_cont">
                {/* Talent Marketplace <sup>TM</sup> */}
                {/* <button >*/}
                <div
                  className={`tab_btn_vs ${
                    currentTab === "ViewJob" ? "active_bvs " : ""
                  }`}
                  onClick={() => setCurrentTab("ViewJob")}
                >
                  Talent Marketplace
                  {/* </button> */}
                </div>
                {/* Project Catalog <sup>TM</sup> */}
                {/* <button > */}
                <div
                  className={`tab_btn_vs ${
                    currentTab === "invite" ? "active_bvs " : ""
                  }`}
                  onClick={() => setCurrentTab("invite")}
                >
                  Project Catalog
                  {/* </button> */}
                </div>
                {/* Talent Scout <sup>TM</sup> */}
                {/* <button >*/}
                {/* // className="tab" */}
                <div
                  className={`tab_btn_vs ${
                    currentTab === "hire" ? "active_bvs" : ""
                  }`}
                  onClick={() => setCurrentTab("hire")}
                >
                  Talent Scout
                  {/* </button> */}
                </div>
              </div>
            </div>

            {/* <TalentMarketPlace /> */}

            {currentTab === "ViewJob" && <TalentMarketPlace />}
            {currentTab === "invite" && <ProjectCatalog />}
            {currentTab === "hire" && <TalentScout />}
          </div>
        </div>
        {/* section 1st end */}

        {/* -------------------  section 2nd start  ------------------------------------------------------------------*/}
        <div className="award_winning_platform">
          <div className="container">
            <Row>
              <Col lg={6}>
                <div className="heading">Our award-winning Platform</div>
                <Row className="my-4">
                  <Col lg={1} xs={1} className="p-0 mb-3">
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
                  <Col lg={11} xs={11} className="p-0 mb-3">
                    <div className="desc">
                      Take control. Find work that hits your financial goals
                      faster with ambitious startups and well-known brands.
                    </div>
                  </Col>
                  <Col lg={1} xs={1} className="p-0 mb-3">
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
                  <Col lg={11} xs={11} className="p-0 mb-3">
                    <div className="desc">
                      Create lasting relationships. Build a predictable pipeline
                      of projects, big and small, through strong connections.
                    </div>
                  </Col>
                  <Col lg={1} xs={1} className="p-0 mb-3">
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
                  <Col lg={11} xs={11} className="p-0 mb-3">
                    <div className="desc">
                      Work and earn your way. Search for jobs or have clients
                      come to you. The opportunities are endless.
                    </div>
                  </Col>
                  <Col lg={1} xs={1} className="p-0 mb-3">
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
                  <Col lg={11} xs={11} className="p-0 mb-3">
                    <div className="desc">
                      Connect & engage. Learn, share information, and build your
                      community with like-minded professionals.
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <div className="box_container">
                  <div className="box">
                    <h2>4.9/5</h2>
                    <span>rating of clients by professionals</span>
                  </div>
                  <div className="box">
                    <h2>2022</h2>
                    <span>#1 freelance platform</span>
                  </div>
                  <div className="box">
                    <h2>49K+</h2>
                    <span>signed contracts every week </span>
                  </div>
                  <div className="box">
                    <h2>$2.3B</h2>
                    <span>freelancers earned on Unify in 2020</span>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="awp_btn">
              <button>Create Your Profile</button>
            </div>
          </div>
        </div>
        {/* section 2nd end */}
        {/* ---------------------- section 3rd start ------------------------------------------------------------------ */}

        <div className="top_freelancers">
          <h2>Top Rated Freelancer</h2>
          <div className="container">
            <Swiper
              className="t_r_freelancers"
              spaceBetween={30}
              slidesPerView={2}
              navigation={true}
              modules={[Navigation, Pagination]}
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: true,
                },
                500: {
                  centeredSlides: true,
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  centeredSlides: false,
                },
                992: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  spaceBetween: 0,
                },
              }}
            >
              <SwiperSlide>
                <div className="top_freelancer">
                  <div className="image">
                    <img src="/assets/PRO-2.png" alt="" />
                    <div className="rate">$119 /hr</div>
                  </div>
                  <div className="name">Laurel K.</div>
                  <div className="address">Derby, United Kingdom</div>
                  <div className="designation">
                    Professional Editor * Published Writer *
                  </div>
                  <div className="about">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29.588"
                        height="46.815"
                        viewBox="0 0 29.588 46.815"
                      >
                        <g id="XMLID_457_" transform="translate(-94.074)">
                          <path
                            id="XMLID_458_"
                            d="M208.6,296.118l2.759-1.451,2.759,1.451-.527-3.073,2.232-2.176-3.085-.448-1.38-2.8-1.38,2.8-3.085.448,2.232,2.176Z"
                            transform="translate(-102.489 -261.291)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_463_"
                            d="M133.229,14.527h6.277L131.55,0h-6.669Z"
                            transform="translate(-27.986)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_469_"
                            d="M112.566,116.385l3.589,6.554h-12.5l-3.807-6.624H94.074V152.48h29.588v-36.1Zm-6.9,15.9,3.2-6.492,3.2,6.492,7.164,1.041-5.184,5.053,1.224,7.135-6.407-3.369-6.407,3.369,1.224-7.135L98.5,133.326Z"
                            transform="translate(0 -105.665)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_470_"
                            d="M261.959,7.973h4.3L270.615,0h-7.843L260.18,4.724Z"
                            transform="translate(-150.898)"
                            fill="#0777fd"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="job_status">
                      100% JOB SUCCESS <span>(63 jobs)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="top_freelancer">
                  <div className="image">
                    <img src="/assets/PRO-2.png" alt="" />
                    <div className="rate">$119 /hr</div>
                  </div>
                  <div className="name">Alex K.</div>
                  <div className="address">Derby, United Kingdom</div>
                  <div className="designation">
                    Professional Editor * Published Writer *
                  </div>
                  <div className="about">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29.588"
                        height="46.815"
                        viewBox="0 0 29.588 46.815"
                      >
                        <g id="XMLID_457_" transform="translate(-94.074)">
                          <path
                            id="XMLID_458_"
                            d="M208.6,296.118l2.759-1.451,2.759,1.451-.527-3.073,2.232-2.176-3.085-.448-1.38-2.8-1.38,2.8-3.085.448,2.232,2.176Z"
                            transform="translate(-102.489 -261.291)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_463_"
                            d="M133.229,14.527h6.277L131.55,0h-6.669Z"
                            transform="translate(-27.986)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_469_"
                            d="M112.566,116.385l3.589,6.554h-12.5l-3.807-6.624H94.074V152.48h29.588v-36.1Zm-6.9,15.9,3.2-6.492,3.2,6.492,7.164,1.041-5.184,5.053,1.224,7.135-6.407-3.369-6.407,3.369,1.224-7.135L98.5,133.326Z"
                            transform="translate(0 -105.665)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_470_"
                            d="M261.959,7.973h4.3L270.615,0h-7.843L260.18,4.724Z"
                            transform="translate(-150.898)"
                            fill="#0777fd"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="job_status">
                      100% JOB SUCCESS <span>(63 jobs)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="top_freelancer">
                  <div className="image">
                    <img src="/assets/PRO-2.png" alt="" />
                    <div className="rate">$119 /hr</div>
                  </div>
                  <div className="name">Mark C.</div>
                  <div className="address">Derby, United Kingdom</div>
                  <div className="designation">
                    Professional Editor * Published Writer *
                  </div>
                  <div className="about">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29.588"
                        height="46.815"
                        viewBox="0 0 29.588 46.815"
                      >
                        <g id="XMLID_457_" transform="translate(-94.074)">
                          <path
                            id="XMLID_458_"
                            d="M208.6,296.118l2.759-1.451,2.759,1.451-.527-3.073,2.232-2.176-3.085-.448-1.38-2.8-1.38,2.8-3.085.448,2.232,2.176Z"
                            transform="translate(-102.489 -261.291)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_463_"
                            d="M133.229,14.527h6.277L131.55,0h-6.669Z"
                            transform="translate(-27.986)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_469_"
                            d="M112.566,116.385l3.589,6.554h-12.5l-3.807-6.624H94.074V152.48h29.588v-36.1Zm-6.9,15.9,3.2-6.492,3.2,6.492,7.164,1.041-5.184,5.053,1.224,7.135-6.407-3.369-6.407,3.369,1.224-7.135L98.5,133.326Z"
                            transform="translate(0 -105.665)"
                            fill="#0777fd"
                          />
                          <path
                            id="XMLID_470_"
                            d="M261.959,7.973h4.3L270.615,0h-7.843L260.18,4.724Z"
                            transform="translate(-150.898)"
                            fill="#0777fd"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="job_status">
                      100% JOB SUCCESS <span>(63 jobs)</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* section 3rd end */}
      </div>
    </>
  );
};

export default HowItWorks;
