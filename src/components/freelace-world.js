import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Row from "react-bootstrap/Row";

const FreelanceWorld = () => {
    return (
        <div className="flex_cen">
            <div className="container sp-right-0 mdp-0">
                <div className="freelance_section">
                    <div className="bg_nuum zer_thr">03</div>
                    <div className="free_sec_head"><h2>A Whole world of freelance<br /> talent at<span className="blue_ater_s"> your fingertips</span></h2></div>
                    <div className="free_sec_para"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex<br /> ea commodo consequat.</p></div>
                    <Row className="box_area_freelanec">
                        <Swiper
                            slidesPerView={3}
                            className="fworld_swip"
                            loop="true"
                            modules={[Navigation]}
                            navigation={true}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                    centeredSlides: true,
                                },
                                500: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                800: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                },
                                995: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className="freelance_box f_b_border">
                                    <div className="freelance_head"><h2>The best for every<br /> budget</h2></div>
                                    <div className="freelance_para"><p>Find high-quality services at every<br /> price point. No hourly rates, just<br /> project-based pricing.</p></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_box f_b_border">
                                    <div className="freelance_head"><h2>Quality work done<br /> quickly</h2></div>
                                    <div className="freelance_para"><p>Find the right freelancer to begin <br />working on your project within<br /> minutes.</p></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_box">
                                    <div className="freelance_head"><h2>24/7 support</h2></div>
                                    <div className="freelance_para"><p>Questions? Our round-the-clock<br /> support team is available to help<br /> anytime, anywhere.</p></div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                    <Row className="box_area_border nbox_area_border"></Row>
                </div>
            </div>
        </div>
    );
}
export default FreelanceWorld