import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";

const Services = ({ category, popular_service }) => {
  const [categories, setCategories] = useState([]);
  const [more, setMore] = useState(true);
  useEffect(() => {
    setCategories(category?.slice(0, 6));
  }, [category]);

  const showMore = () => {
    setCategories(category);
    setMore(false);
  };
  const showLess = () => {
    setCategories(category?.slice(0, 6));
    setMore(true);
  };

  return (
    <div className="services_sec">
      <div className="container">
        <div className="services_sec_heading">
          <h2>
            {popular_service}
            <span className="blue_ater_s blue_ater_h_min"></span>
          </h2>
        </div>
        <Row>
          {categories?.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="home_categories">
                <div className="category_logo">
                  <img src={item.category_image} alt="" />
                </div>
                <div className="category_title">{item.category_name}</div>
                <div className="category_about">
                  <div className="rating">
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
                    </span>
                    <span>{item.rating}</span>
                  </div>
                  <div className="skills_count">{item.skills} Skills</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {more ? (
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-center btn_services">
                <Button onClick={showMore} variant="">
                  View All The Services
                </Button>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={12}>
              <div className="d-flex justify-content-center btn_services">
                <Button onClick={showLess} variant="">
                  Show Less
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};
export default Services;
