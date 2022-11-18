import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

const FreelanceWorld = () => {
  return (
    <div className="flex_cen">
      <div className="container-fluid">
        <div className=" sp-right-0 mdp-0">
          <div className="freelance_section">
            <div className="free_sec_head">
              <h2>
                A Whole world of freelance
                <br /> talent at
                <span className="blue_ater_s"> your fingertips</span>
              </h2>
            </div>
            <div className="free_sec_para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim
                <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex
                <br /> ea commodo consequat.
              </p>
            </div>
            <Row className="box_area_freelanec">
              <Col md={4}>
                <div className="freelance_box f_b_border">
                  <div className="freelance_head">
                    <h2>
                      The best for every
                      budget
                    </h2>
                  </div>
                  <div className="freelance_para">
                    <p>
                      Find high-quality services at every
                      price point. No hourly rates, just
                      project-based pricing.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="freelance_box f_b_border">
                  <div className="freelance_head">
                    <h2>
                      Quality work done
                      quickly
                    </h2>
                  </div>
                  <div className="freelance_para">
                    <p>
                      Find the right freelancer to begin
                      working on your project within
                     minutes.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="freelance_box">
                  <div className="freelance_head">
                    <h2>24/7 support</h2>
                  </div>
                  <div className="freelance_para">
                    <p>
                      Questions? Our round-the-clock
                   support team is available to help
                       anytime, anywhere.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="box_area_border nbox_area_border"></Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FreelanceWorld;
