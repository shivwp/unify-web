import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Navbar from './Layouts/Header/HeaderMain';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'

const slider = (props) => {
    return (
        <div className='carousal_top slider_pos'>
            <div className='zero_one ri_twh'>01</div>
            <div className='nav_realat'>
                <Navbar nonavbg={props.nonavbg}/>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <div className=''>
                            <div className="container">
                                <div className='shuuter_man'>
                                    <div className='slider_get_btn md_btn_getstarted'>
                                        <Button className="active_btn">GET STARTED</Button>
                                    </div>
                                </div>
                                <div className='position_ab mr_top'>
                                    <div className='slider_headin slider_center'><div>Hire the best freelancers <br />for any <span className="blue_ater_s">job online</span></div>
                                        <div className='slider_subheadin'>Post a job for free and connect with <br /> independent talent today .</div>
                                        <div className='slider_get_btn mdd-none'>
                                            <Button className="active_btn">GET STARTED</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="clients_sec">
                <div className="container">
                    <Row>
                        <div className="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
                            <div className="as_used">As used by</div>
                        </div>
                        <div className="col-lg-10 col-md-10 flex_client">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
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
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 0,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="client_imag"><img src="assets/amazon7.png" alt="" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="client_imag"><img src="assets/sony_logo.png" alt="" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="client_imag"><img src="assets/ibm_PNG19660.png" alt="" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="client_imag"><img src="assets/dell.png" alt="" /></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="client_imag"><img src="assets/armani-hotel-dubai-logo1.png" alt="" /></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default slider;