import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "./Layouts/Header/HeaderMain";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const slider = (props) => {
  return (
    <div className="carousal_top slider_pos">
      {/* <div className="zero_one ri_twh">01</div> */}
      <div className="nav_realat">
        <Navbar nonavbg={props.nonavbg} />
        <Carousel controls={false}>
          <Carousel.Item>
            <div className="">
              <div className="container home_top_header">
                <div className="home_left">
                  <div className="heading">
                    The World's first Earn & <br />
                    Learn <span className="blue_ater_s"> Platform</span>
                  </div>
                  <div className="description">
                    Post a job for free and connect with independent talent
                    today.
                  </div>
                  <div className="slider_get_btn mdd-none">
                    <Link to="/signup">
                      <Button variant="" className="active_btn">
                        Learn & Earn
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="home_right">
                  <img src="/assets/home_img.png" alt="" />
                </div>
                <div className="svg_sup1">
                  <img src="/assets/Group2272.png" alt="" />
                </div>
                <div className="svg_sup2">
                  <img src="/assets/Group2273.png" alt="" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="clients_sec">
        <div className="container">
          <Row className="row">
            <Col
              lg={2}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="as_used">As used by</div>
            </Col>
            <Col lg={10} md={10} className="flex_client ">
              <Swiper
                className="w-100"
                spaceBetween={30}
                slidesPerView={4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: true,
                  },
                  500: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="client_imag">
                    <img src="assets/macdonald.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client_imag">
                    <img src="assets/talabat.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client_imag">
                    <img src="assets/bruce_clay.png" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default slider;
