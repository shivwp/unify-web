import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation } from "swiper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'

const Services = () => {
    return (
        <div className="services_sec">
            <div className="container">
                <div className="services_sec_heading"><div className="zero_one zer_to">02</div><h2>Popular  
                <span className="blue_ater_s blue_ater_h_min"> professional</span> <br /> services</h2></div>
                <Swiper
                className='services_swip'
                    spaceBetween={30}
                    slidesPerView={4}
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
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="service_box">
                            <div className="service_icon"><img src="/assets/logo.svg"  alt=""/></div>
                            <div className="service_head">Logo Design</div>
                            <div className="service_para">Build your brand</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service_box">
                            <div className="service_icon"><img src="/assets/wordpress.svg"  alt=""/></div>
                            <div className="service_head">Wordpress</div>
                            <div className="service_para">Customize your site</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service_box">
                            <div className="service_icon"><img src="/assets/socialmedia.svg"  alt=""/></div>
                            <div className="service_head">Social Media</div>
                            <div className="service_para">Reach more customers</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service_box">
                            <div className="service_icon"><img src="/assets/dataentry.svg"  alt=""/></div>
                            <div className="service_head">Data Entry</div>
                            <div className="service_para">Reach more customers</div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Row>
                    <Col lg={12}>
                        <div className="d-flex justify-content-center btn_services"><Button>View All The Services</Button></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Services;