import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/less/autoplay";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkillsByCat } from "../../../redux/actions/authActions";
SwiperCore.use([Autoplay]);

const SkillsListCatWise = () => {
  const [bannerImg, setBannerImg] = useState(1);
  const dispatch = useDispatch();
  const categoryId = useParams();
  // window.scrollTo(0, 0);
  const [skillList, setSkillsList] = useState([]);
  const [more, setMore] = useState(true);

  const categorySkillData = useSelector(
    (state) => state?.auth?.categorySkillData
  );
  const Banner_image = ({ id }) => {
    let render_img = {
      1: <img src="assets/job_banner1.png" alt="" />,
      2: <img src="assets/job_banner2.jpeg" alt="" />,
      3: <img src="assets/job_banner3.png" alt="" />,
      4: <img src="assets/job_banner2.jpeg" alt="" />,
      5: <img src="assets/job_banner1.png" alt="" />,
    };
    return render_img[id];
  };

  console.log(skillList);
  useEffect(() => {
    dispatch(getSkillsByCat({ category_id: categoryId?.category }));
  }, []);

  useEffect(() => {
    setSkillsList(categorySkillData?.category_skills?.slice(0, 8));
  }, [categorySkillData]);

  const showMore = () => {
    setSkillsList(categorySkillData?.category_skills);
    setMore(false);
  };
  const showLess = () => {
    setSkillsList(categorySkillData?.category_skills?.slice(0, 8));
    setMore(true);
  };

  return (
    <>
      <Container>
        <div className="cat_wise_skills">
          <div className="header">
            <div className="header_left">
              <div className="heading">
                <h1>{categorySkillData?.category_data?.short_description}</h1>
              </div>
              <div className="desc">
                {categorySkillData?.category_data?.long_description}
              </div>
              <div className="get_start_btn">
                <Link to="/signup">
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
            <div className="header_right">
              <div className="header_img">
                <img
                  src={categorySkillData?.category_data?.banner_image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="clients_sec_skills">
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
                      delay: 3000,
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
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="client_imag">
                        <img src="/assets/dell.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="client_imag">
                        <img src="/assets/macdonald.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="client_imag">
                        <img src="/assets/dell.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="client_imag">
                        <img src="/assets/visa.png" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Col>
              </Row>
            </div>
            <hr />
          </div>
          <div className="skills_lists">
            <Row>
              <div className="skills_list_heading">
                <h1>Trusted remote development and IT experts</h1>
              </div>
              <Col className="mb-3" md={4} lg={3}>
                <div className="heading">
                  <span className="skill_list_star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill fill-none"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </span>
                  <span>4.91/5</span>
                </div>
                <div className="desc">
                  Average rating for work with tech talent.
                </div>
              </Col>
              <Col className="mb-3" md={4} lg={3}>
                <div className="heading">
                  <span>211K+ contracts</span>
                </div>
                <div className="desc">
                  Involving development and IT work in the past year.
                </div>
              </Col>
              <Col className="mb-3" md={4} lg={3}>
                <div className="heading">
                  <span>1,665 skills</span>
                </div>
                <div className="desc">Represented by talent on Upwork.</div>
              </Col>
            </Row>
            <Row className="mt-4">
              {skillList?.map((item) => (
                <Col md={4} lg={3} key={item.id}>
                  <Link to={`/skill-dev/${item.id}`}>
                    <div className="skill_box">
                      <div className="skill_name">{item.name}</div>
                      <div className="about_skill">
                        <span className="skill_list_star">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill fill-none"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                        <span>{item.rating} average rating</span>
                      </div>
                      <div className="skill_user_imgs">
                        <div className="image1 image">
                          <img src={item.image} alt="" />
                        </div>
                        {/* <div className="image2 image">
                          <img src="assets/profile2.jpeg" alt="" />
                        </div>
                        <div className="image3 image">
                          <img src="assets/profile3.jpeg" alt="" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
              {more ? (
                <div className="more_cat_skills">
                  Looking for something else?{" "}
                  <span onClick={showMore}>See more skills</span>
                </div>
              ) : (
                <div className="more_cat_skills">
                  Looking for something else?{" "}
                  <span onClick={showLess}>See Less skills</span>
                </div>
              )}
            </Row>
          </div>
          <div className="browse_projects mb-5">
            <div className="heading">
              <h2>Development and IT projects for your most pressing work</h2>
            </div>
            <div className="desc">
              A mobile presence is a necessity for any business. Get a custom
              mobile app experience that meets your needs.
            </div>
            <div className="banner">
              <Row style={{ height: "100%" }}>
                <Col lg={4} xl={3} md={5}>
                  <div className="titles">
                    <div
                      onClick={() => setBannerImg(1)}
                      className={`title ${bannerImg == 1 ? "active " : ""}`}
                    >
                      Mobile App Development
                    </div>
                    <div
                      onClick={() => setBannerImg(2)}
                      className={`title ${bannerImg == 2 ? "active " : ""}`}
                    >
                      Shopify Development
                    </div>
                    <div
                      onClick={() => setBannerImg(3)}
                      className={`title ${bannerImg == 3 ? "active " : ""}`}
                    >
                      WordPress Development
                    </div>
                    <div
                      onClick={() => setBannerImg(4)}
                      className={`title ${bannerImg == 4 ? "active " : ""}`}
                    >
                      Data Visualization
                    </div>
                    <div
                      onClick={() => setBannerImg(5)}
                      className={`title ${bannerImg == 5 ? "active " : ""}`}
                    >
                      Cybersecurity & Data Protection
                    </div>
                  </div>
                  <div className="browse_project_btn">
                    <Link to="/browse-jobs">
                      <button>Browse Jobs</button>
                    </Link>
                  </div>
                </Col>
                <Col lg={8} xl={9} md={7} style={{ height: "100%" }}>
                  <div className="image">
                    <Banner_image id={bannerImg} />
                    {/* <img src="assets/job_banner1.png" alt="" /> */}
                    {/* <img src="assets/job_banner2.jpeg" alt="" />
                    <img src="assets/job_banner3.png" alt="" /> */}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SkillsListCatWise;
