import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import star from '../icons/star.svg';
import heart from '../icons/heart.svg';
import Footer from './footer';
import React from 'react';


function ListCard() {
    const card = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {card.map((person, index) => (
                <div className="job_box_card" key={index}>
                    <div className='heat_lef'>
                        <img src={star} alt="" />
                    </div>
                    <Row>
                        <Col lg={9}>
                            <div className="com_name_s">VeeGaming Studio</div>
                            <div className="job_head_s"><h2>IOS And Android SENIOR Mobile App Developer</h2></div>
                            <div className='dlex_sk_block'>
                                <div className="b_skil">Backend Developer</div>
                                <div className="b_skil">Designer</div>
                                <div className="b_skil">Support Agent</div>
                                <div className="b_skil">IOS Developer</div>
                            </div>
                            <div className='job_d_par'>
                                <p>
                                    We are a computerized wellbeing startup with a spry and high-speed climate. We are searching for a Senior, RELIABLE portable application…
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="price_ar_jjob">
                                <h1>$140.00</h1>
                                <p>(Hourly)</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="jb_foot">
                        <div className='flex_itm'>
                            <div className="f_b_obx">
                                <div className="ex_name_fb">Expiry:</div>
                                <div className="ex_val_f">914 DAYS LEFT</div>
                            </div>
                            <div className="f_b_obx">
                                <div className="ex_name_fb">Proposals:</div>
                                <div className="ex_val_f">9 Received</div>
                            </div>
                            <div className="f_b_obx">
                                <div className="ex_name_fb">Location:</div>
                                <div className="ex_val_f">Hamburg</div>
                            </div>
                        </div>
                        <div>
                            <div className="fb_btns_s_pro">
                                <button className='bg-trans_s_pro'>
                                    <img src={heart} alt="" className="heart_btn" />
                                </button>
                                <button>Send Proposal</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

const Project_Search = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className="filter_area">
                            <div className="sef_box">
                                <div className="sef_na_ea"><h3>Search Filters</h3></div>
                                <div className="sef_p_c"><p>Clear all</p></div>
                            </div>
                            <div className="s_cat_bo">
                                <div className='s_na_box'>
                                    <div className="s_na_h4"><h4>search by keyword</h4></div>
                                    <div className="s_na_inpu">
                                        <input type="text" placeholder="what are you looking for" />
                                    </div>
                                </div>
                                <div className='s_na_box'>
                                    <div className="s_na_h4"><h4>Job type</h4></div>
                                    <div className="s_na_inpu">
                                        <select>
                                            <option val="">what are you looking for</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='s_na_box'>
                                    <div className="s_na_h4"><h4>Skills</h4></div>
                                    <div className="s_na_inpu">
                                        <input type="text" placeholder="Search skills" />
                                    </div>
                                </div>
                            </div>
                            <div className='s_na_box s_cat_bo'>
                                <div className="s_na_h4"><h4>Category</h4></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Apps Developements (2)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>IOS (2)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Business (10)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Services (10)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Digital Marketing (10)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Video & animation (10)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Website Development (10)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>writing & Translation (10)</label></div>
                            </div>
                            <div className="s_cat_bo">
                                <div className="s_na_h4"><h4>Price</h4></div>
                                <div className="ran_fl_inp">
                                    <input type="num" value="0" placeholder='0' />
                                    <input type="num" value="1,500" placeholder='1,500' />
                                </div>
                            </div>

                            <div className='s_na_box s_cat_bo'>
                                <div className="s_na_h4"><h4>English Level</h4></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Bilingual (1)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Fluent (4)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Native (3)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Professional (1)</label></div>
                            </div>
                            <div className='s_na_box s_cat_bo'>
                                <div className="s_na_h4"><h4>Languages</h4></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>English (1)</label></div>
                                <div className="s_na_categ"><input type="checkbox" /><label>Japinese (4)</label></div>
                            </div>
                            <div className="desc_hin">
                                <p>Select the options and press the Filter Result button to apply the changes</p>
                            </div>
                            <div className="fr_btn">
                                <button>Filter Result</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9} className="top_main_c_job">
                        {ListCard()}
                    </Col>
                    <Col lg={12}>
                        <div className='pagiantion_node'>
                            <button className='pagi_butt'>1</button>
                            <button className='pagi_butt'>2</button>
                            <button className='pagi_butt'>3</button>
                            <button className='pagi_butt'>4</button>
                            <button className='pagi_butt'>5</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}
export default Project_Search