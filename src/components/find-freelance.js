import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination } from "swiper";

const findfreelance = () => {
    return (
        <div className="find_frelance">
            <div className="">
                <div className="find-freel-head"><div className="zero_one zer_to zero_four">04</div><h1>Find <span className="ffh">freelance</span> talent to<br /> take on any project</h1></div>
                <div className="find-freel-para"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br /> commodo consequat. </p></div>
                <div className="f_freel_swip">
                    <div className="container">
                        <Swiper
                        className="find_swip"
                            spaceBetween={30}
                            slidesPerView={4}
                            navigation={true}
                            modules={[Navigation,Pagination]}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            loop="true"
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
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
                                640: {
                                    centeredSlides: true,
                                    slidesPerView: 2,
                                    spaceBetween: 0,
                                },
                                768: {
                                    slidesPerView: 3,
                                    centeredSlides: true,
                                    spaceBetween: 0,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    centeredSlides: true,
                                    spaceBetween: 0,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="freelance_card">
                                    <div className="freelance_card_profile">
                                        <div className="freelancer_pro"><img src="/assets/PRO-2.png" alt="" /></div>
                                        <div className="freel_badge">$119 / hr</div>
                                    </div>
                                    <div className="frel_name">Laurel k.</div>
                                    <div className="frel_loca">Derby, United Kingdom</div>
                                    <div className="frel-serv"><p>Professional Editor * Published Writer *</p></div>
                                    <div className="frel_job"><div className='tropee_svg'><img src="/assets/trofee.svg" alt="" /></div>100% JOB SUCCESS <span>(63 jobs)</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_card">
                                    <div className="freelance_card_profile">
                                        <div className="freelancer_pro"><img src="/assets/PRO-2.png" alt="" /></div>
                                        <div className="freel_badge">$119 / hr</div>
                                    </div>
                                    <div className="frel_name">Laurel k.</div>
                                    <div className="frel_loca">Derby, United Kingdom</div>
                                    <div className="frel-serv"><p>Professional Editor * Published Writer *</p></div>
                                    <div className="frel_job"><div className='tropee_svg'><img src="/assets/trofee.svg" alt="" /></div>100% JOB SUCCESS <span>(63 jobs)</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="freelance_card">
                                    <div className="freelance_card_profile">
                                        <div className="freelancer_pro"><img src="/assets/PRO-2.png"  alt=""/></div>
                                        <div className="freel_badge">$119 / hr</div>
                                    </div>
                                    <div className="frel_name">Laurel k.</div>
                                    <div className="frel_loca">Derby, United Kingdom</div>
                                    <div className="frel-serv"><p>Professional Editor * Published Writer *</p></div>
                                    <div className="frel_job"><div className='tropee_svg'><img src="/assets/trofee.svg" alt="" /></div>100% JOB SUCCESS <span>(63 jobs)</span></div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default findfreelance