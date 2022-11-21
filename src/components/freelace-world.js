import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

const FreelanceWorld = ({ for_client }) => {
  return (
    <div className="flex_cen">
      <div className="container-fluid">
        <div className=" sp-right-0 mdp-0">
          <div
            className="freelance_section"
            style={{ backgroundImage: `url("${for_client?.client_banner}")` }}
          >
            <div className="free_sec_head">
              <h2>
                {for_client?.client_title}

                <span className="blue_ater_s"> </span>
              </h2>
            </div>
            <div className="free_sec_para">
              <p>{for_client?.client_description}</p>
            </div>
            <Row className="box_area_freelanec">
              <Col md={4}>
                <div className="freelance_box f_b_border">
                  <div className="freelance_head">
                    <h2>{for_client?.title_1}</h2>
                  </div>
                  <div className="freelance_para">
                    <p>{for_client?.description_1}</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="freelance_box f_b_border">
                  <div className="freelance_head">
                    <h2>{for_client?.title_2}</h2>
                  </div>
                  <div className="freelance_para">
                    <p>{for_client?.description_2}</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="freelance_box">
                  <div className="freelance_head">
                    <h2>{for_client?.title_3}</h2>
                  </div>
                  <div className="freelance_para">
                    <p>{for_client?.description_3}</p>
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
