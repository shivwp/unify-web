import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

const findfreelance = ({ trusted_brands }) => {
  return (
    <div className="find_frelance">
      <div className="">
        <div className="find-freel-head">
          <h1>
            Tr<span className="ffh">usted by Le</span>ading
            <br /> brands and startups
          </h1>
        </div>
        <div className="find-freel-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
            <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
            <br /> commodo consequat.{" "}
          </p>
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
            loop="true"
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
                spaceBetween: 10,
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
                    <img src="/assets/macdonald.png" alt="" />
                  </div>
                  <div className="brand_title">"{item.brand_description}"</div>
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
                        <span className="title">Lounch of Projects</span>
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
