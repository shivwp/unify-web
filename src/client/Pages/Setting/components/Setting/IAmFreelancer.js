import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Button from 'react-bootstrap/Button'

const IAmFreelancer = () => {
  return (
    <>
      <div className="bg-gray_bd">
        <Container>
          <div className="browse_head_h pb-3 pt-2">Browse Help Categories</div>
          <Row>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="RocketLaunchIcon"
                  >
                    <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
                  </svg>
                </div>
                <div className="help_ame_h">Get Started</div>
                <div className="help_val_h">
                  How It Works, Getting Started, Fees & Protection
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/21121.png" alt="" />
                </div>
                <div className="help_ame_h">Bulid Your Profile</div>
                <div className="help_val_h">
                  Profile Settings, Edit Profile, Freelancer Programs, Stats
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/Path 4713.png" alt="" />
                </div>
                <div className="help_ame_h">Find a Project</div>
                <div className="help_val_h">
                  Search, Send Proposals, Interview, Accept Offers
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/start_working.png" alt="" />
                </div>
                <div className="help_ame_h">Start Working</div>
                <div className="help_val_h">
                  Messages, Work Diary, Contracts, Feedback
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/invoice (1).png" alt="" />
                </div>
                <div className="help_ame_h">Get Paid</div>
                <div className="help_val_h">
                  Get Paid, Payment Options, Reports, Earnings, Taxes
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/service.png" alt="" />
                </div>
                <div className="help_ame_h">Payment Issues</div>
                <div className="help_val_h">
                  Payment Schedule, Troubleshooting, Disputes
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/Path 4715.png" alt="" />
                </div>
                <div className="help_ame_h">Account </div>
                <div className="help_val_h">
                  Account Settings, Manage Teams, Team Permissions
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/mobile.png" alt="" />
                </div>
                <div className="help_ame_h">Apps</div>
                <div className="help_val_h">
                  Mobile App, Desktop App, Time Tracker
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/shield.png" alt="" />
                </div>
                <div className="help_ame_h">Trust & Safty</div>
                <div className="help_val_h">
                  Terms Of Service, Online Safety, Personal Data
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/api.png" alt="" />
                </div>
                <div className="help_ame_h">Unify API</div>
                <div className="help_val_h">Development Resources</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/katman 2.png" alt="" />
                </div>
                <div className="help_ame_h">Project Catalog</div>
                <div className="help_val_h">Pre-Packaged Projects On Unify</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="help_box_h">
                <div className="help_icon_rou">
                  <img src="/assets/Layer 13.png" alt="" />
                </div>
                <div className="help_ame_h">What's New</div>
                <div className="help_val_h">
                  Announcement Of New Features, Services And More
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <div className="browse_head_h pt-4 pb-2">Access Your Account</div>
          <Row>
            <Col lg={3}>
              <div className="acc_bxo_h">
                <div className="acc_icon_h">
                  <img src="/assets/reset_profile.png" alt="" />
                </div>
                <div className="help_ame_h">Reset Profile Visibility</div>
                <div className="help_val_h">Change Your Profile To Public</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="acc_bxo_h">
                <div className="acc_icon_h">
                  <img src="/assets/cert_earn.png" alt="" />
                </div>
                <div className="help_ame_h">Certificate Of Earning</div>
                <div className="help_val_h">
                  Your Last Twelve Months Earning
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="acc_bxo_h">
                <div className="acc_icon_h">
                  <img src="/assets/reset_pass.png" alt="" />
                </div>
                <div className="help_ame_h">Reset Password</div>
                <div className="help_val_h">Change Account Password</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="acc_bxo_h">
                <div className="acc_icon_h">
                  <img src="/assets/my_stats.png" alt="" />
                </div>
                <div className="help_ame_h">My Stats</div>
                <div className="help_val_h">Change Your Account Password</div>
              </div>
            </Col>
          </Row>
          <div className="browse_head_h pt-4 pb-2">
            A Few Recommended Topics For You
          </div>
          <Row>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              className="help_swip"
              loop="true"
              modules={[Navigation]}
              navigation={true}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperSlide>
                <div className="acc_bxo_h">
                  <div className="help_ame_h">Staying Safe On Unify</div>
                  <div className="help_val_h">Online Safty Best Practice</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="acc_bxo_h">
                  <div className="help_ame_h">Edit Account Information</div>
                  <div className="help_val_h">Update Your Account Info</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="acc_bxo_h">
                  <div className="help_ame_h">Profle Change To "Private"</div>
                  <div className="help_val_h">
                    Change Your Profile Back To Public
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="acc_bxo_h">
                  <div className="help_ame_h">Staying Safe On Unify</div>
                  <div className="help_val_h">Online Safty Best Practice</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Row>
        </Container>
      </div>
      <div className="bg-gray_bd">
        <Container>
          <div className="browse_head_h mt-30-px">
            Learn More About What’s New At Unify
          </div>
          <div className="btn_foot_sec justify-content-center flex-wrap no-border ImFreelancer_btn fo_btn_c mb-0 pb-0 next_b_btn_c">
            <Button className="active_btn_blue mi-width-2 pnew">
              Learn More
            </Button>
          </div>
          <div className="btn_foot_sec mt-2 justify-content-end flex-wrap no-border p-0 m-0 fo_btn_c next_b_btn_c ImFreelancer_btn">
            <Button className="active_btn_blue m-0 support_d_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chat-right-text"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
              Get Support
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default IAmFreelancer;
