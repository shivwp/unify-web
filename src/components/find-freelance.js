import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/less/autoplay";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const findfreelance = ({
  trusted_brands,
  trusted_brand_title,
  trusted_brand_description,
}) => {
  return (
    <div className="find_frelance mb-5">
      <div className="">
        <div className="find-freel-head">
          <h1>
            {trusted_brand_title} <span className="ffh"></span>
          </h1>
        </div>
        <div className="find-freel-para">
          <p>{trusted_brand_description}</p>
        </div>
        {/* <div className="f_freel_swip"> */}
        <div className="container">
          <Swiper
            className="find_swip"
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
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 0,
              },
            }}
          >
            {trusted_brands?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="brands">
                  <div className="brand_icon">
                    <img src={item?.logo} alt="" />
                  </div>
                  <div className="brand_title">{item.brand_description}</div>
                  <div className="brand_officer">{item.designation}</div>
                  <div className="Results">
                    <div className="result">Results</div>
                    <div className="projects">
                      <div>
                        <span className="count">{item.total_projects}</span>
                        <span className="title">Projects Completed</span>
                      </div>{" "}
                      <div>
                        <span className="count">
                          {item.launch_projects} Fast
                        </span>
                        <span className="title">Launch of Projects</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default findfreelance;
