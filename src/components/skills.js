import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from './title';
import $ from 'jquery';

const Skill = () => {
    Title(' | Skills')
    const hanDleSlide = (e) => {
        $(e.target.nextSibling).slideToggle();
    }
    $(".slider_shutter").slideDown();
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head"><h2>Skills</h2><div className="s_on">Step 3 of 5</div></div>
                            <br />
                            <div className="bl_head search_h3_ip"><h3>Search or add up to 10 skills</h3></div>
                            <div className="t_area_ob pr_inp_a">
                                <div className="input_icon_l">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6D2EF1" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <input type="text" /></div>
                            <div className="t_inp_bt_text">For the best results, add 3-5 skills</div>
                            <div className="slide_mar">
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name'>Popular Skills</div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <button>Mobile App Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                    <button>User Experience Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                    <button>User Interface Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                    <button>Graphic Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='s_slides'>
                                <div className="flex_slide_ta toggle_shutter" onClick={(e) => hanDleSlide(e)}>
                                    <div className='sli_ta_name'>Popular Skills</div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='slide_btnss slider_shutter'>
                                    <button>Mobile App Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                    <button>User Experience Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                    <button>User Interface Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                    <button>Graphic Design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#393939" className="bi bi-plus" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            </div>
                            <div className="see_cat_link">Change your skill category</div>
                            <div className="btn_foot_sec no-border flex-wrap d-flex">
                                <div className='fo_btn_c next_b_btn_c'><button>Back</button></div>
                                <div className='fo_btn_c next_b_btn_c'><button className="active_btn_blue">Next</button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Skill