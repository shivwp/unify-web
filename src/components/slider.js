import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/less/autoplay";
import Navbar from "./Layouts/Header/HeaderMain";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Home from "../Home";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const slider = ({ nonavbg, hero, used_by }) => {
  return (
    <div className="carousal_top slider_pos">
      <div className="nav_realat">
        <Navbar nonavbg={nonavbg} />
        <Carousel controls={false}>
          <Carousel.Item>
            <div className="">
              <div className="container home_top_header">
                <div className="home_left">
                  <div className="heading">
                    {hero?.title} <span className="blue_ater_s"> </span>
                  </div>
                  <div className="description">{hero?.description}</div>
                  <div className="sliderbtn mdd-none mt-4">
                    <Link to="/signup">
                      <button variant="" className="active_btn active_btnM ">
                        {hero?.button_text || "Learn & Earn"}
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button variant="" className="active_btn">
                        {hero?.button_text2 || "FIND A PROFESSIONAL"}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="home_right">
                  <img src={hero?.image} alt="" />
                  {/* <img src={hero?.image} alt="" /> */}
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
              lg={3}
              md={3}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="as_used">As used by</div>
            </Col>
            <Col lg={9} md={9} className="flex_client ">
              <Swiper
                className="w-100"
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
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
                {used_by?.used_by_section_image?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="client_imag">
                      <img src={item} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default slider;
