import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from './title';

const TitleBody = () => {
    Title(' | Title')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head"><h2>Title</h2><div className="s_on">Step 2 of 5</div></div>
                            <br />
                            <div className="bl_head"><h3>Write a title for your job post</h3></div>
                            <div className="t_area_ob mb-3"><input type="text" /></div>
                            <div className="bl_head mt-4 mb-3"><h3>Example titles</h3></div>
                            <ul className="poi_box">
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                            </ul>
                            <div className="btn_foot_sec flex-wrap">
                                <div className='fo_btn_c next_b_btn_c'><button>Back</button></div>
                                <div className='fo_btn_c next_b_btn_c'><button className="active_btn_blue">Next</button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head"><h2>Title</h2><div className="s_on">Step 2 of 5</div></div>
                            <br />
                            <div className="bl_head"><h3>Enter the name of your job post</h3></div>
                            <div className="t_area_ob"><textarea></textarea></div>
                            <div className="bl_head"><h3>Here are some good example:</h3></div>
                            <ul className="poi_box">
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                                <li className="point_li">Developer needed  for crating a responsive web site</li>
                            </ul>
                        </div>
                        <div className="s_nav_body mt-2">
                            <div className="bl_head"><h3>Job Categories </h3></div>
                            <div className="bl_apra">
                                <p>
                                    This is a Great  Moment for us to announce a designer job for our company, The candidate who falls in the criteria can apply. We'll call the candidates who are eligible for an interview.

                                    We are searching for a Senior Developer with quite a long while of experience in Python.

                                    We have a current (work-in-progress) content to advance area information with address, site, telephone. We might want to improve it as depicted underneath.

                                    The content as of now does the accompanying:

                                    They may have various sorts dependent on the shop characteristic

                                    Check if an area is feeling the loss of a location, site, or telephone number

                                    On the off chance, site, or telephone number is feeling the loss of, the content calls the Google Maps Places API

                                    The content at that point calls the API to direct a Google Search and recover all outcomes for that search.

                                    We will give the current content to qualified specialists.
                                </p>
                            </div>
                            <div className="see_all_cat">see all categories</div>
                            <div className="btn_foot_sec d-flex flex-wrap"> 
                                <div className='fo_btn_c'><button>Cancel</button></div>
                                <div className='fo_btn_c'><button>Next</button></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}
export default TitleBody