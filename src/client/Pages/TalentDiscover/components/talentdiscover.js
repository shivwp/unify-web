import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Title from '../../../../components/title';
import $ from 'jquery';
import Button from 'react-bootstrap/Button'

const Screen = () => {
    Title(" | Talent Discover");
    const hanDleSlide = (e) => {
        $(e.target.nextSibling).slideToggle();
    }
    $(".slider_shutter").slideDown();
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar mt-4 mb-4">
                    <div>
                        <div className='disc_head_h1'><h1>Discover</h1></div>
                        <div className='disc_para_h'>Tailored talent matches to help you hire the right person faster</div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='sort_by_pa'>Sort By</div>
                        <div className='disc_sel'>
                            <select>
                                <option>Promoted</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='promoted_boxt'>
                    <div className="propt_head_n"><h2>Promoted</h2></div>
                    <div>
                        <Row>
                            <Col xlg={4} lg={4} md={6} sm={12}>
                                <div className="promo_box_a">
                                    <div className="d-flex justify-content-between">
                                        <div className='d-flex'>
                                        <div className='discover_prof_us'><img src="/assets/PRO-2.png" alt="" /></div>
                                            <div className='ml-10-n'>
                                            <div className='propmo_u_name'>Mario Speedwagon</div>
                                            <div className='promo_exper'>Expert in Mobile App</div>
                                            <div className='avai_btn_promo'><Button variant="">Available</Button></div>
                                            </div>
                                        </div>
                                        <div className='heart_btn_promo'>
                                            <Button variant="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='hourly_amo_promo'>$15.00 <span>/ hr</span></div>
                                        <div className='hourly_amo_promo'><span>|</span></div>
                                        <div className='hourly_amo_promo'>$25k+ <span>earned</span></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-center align-items-center mt-4'>
                            <Button variant="" className='blue_btn_pro font-weight-500'>See More</Button>
                        </div>
                    </div>
                </div>
                <div className='promoted_boxt'>
                    <div className="propt_head_n b-bottom-gr"><h2>Filter By Category</h2></div>
                    <div className='s_slides'>
                        <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                            <div className='sli_ta_name'>Accounting & Consulting</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='slide_btnss slider_shutter'>
                            <Button variant="">Mobile App Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Experience Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Interface Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">Graphic Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className='s_slides'>
                        <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                            <div className='sli_ta_name'>Admin Support</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='slide_btnss slider_shutter'>
                            <Button variant="">Mobile App Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Experience Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Interface Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">Graphic Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                        </div>
                    </div>   
                    <div className='s_slides'>
                        <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                            <div className='sli_ta_name'>Customer Service</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='slide_btnss slider_shutter'>
                            <Button variant="">Mobile App Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Experience Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Interface Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">Graphic Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                        </div>
                    </div>   
                    <div className='s_slides'>
                        <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                            <div className='sli_ta_name'>Data Science & Analytics</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='slide_btnss slider_shutter'>
                            <Button variant="">Mobile App Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Experience Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Interface Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">Graphic Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                        </div>
                    </div> 
                    <div className='s_slides'>
                        <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                            <div className='sli_ta_name'>Design & Creative</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='slide_btnss slider_shutter'>
                            <Button variant="">Mobile App Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Experience Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Interface Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">Graphic Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className='s_slides'>
                        <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                            <div className='sli_ta_name'>It & Networking</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                        <div className='slide_btnss slider_shutter'>
                            <Button variant="">Mobile App Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Experience Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">User Interface Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                            <Button variant="">Graphic Design
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Screen