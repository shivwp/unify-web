import NavbarHeader from "./navbarlogin";
import Container from 'react-bootstrap/Container';
import Footer from './footer';
import Title from './title';
import { Link } from "react-router-dom";

const Createcategory = () => {
    Title(" | create category");
    return (
        <>
            <NavbarHeader />
            <Container>
                <div className="s_nav_body chose_cat_box">
                    <div className="s_b_head hi_mari"><h2>Hi Marina, what do you need done?</h2></div>
                    <div className="input_box_ccb mt-3 mb-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6D2EF1" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </div>
                        <div className="ccb_inp">
                            <input type="text" placeholder="ex. Build responsive WordPress site with booking/payment funvtionality" />
                        </div>
                    </div>
                    <div className='my_skil_head mr_2_sm get_insp'><h3>Get inspired by starting with a category</h3></div>
                    <div className="flex_ccb_list">
                        <div className="s_b_r">
                            <input type="radio" id="r_1" name="g" />
                            <label htmlFor="r_1"> <p>Development & IT</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_2" name="g" />
                            <label htmlFor="r_2"> <p>Design & Creative</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_3" name="g" />
                            <label htmlFor="r_3"> <p>Sales & Marketing</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_3" name="g" />
                            <label htmlFor="r_3"> <p>Writing & Translation</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_3" name="g" />
                            <label htmlFor="r_3"> <p>Finance & Accounting</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_3" name="g" />
                            <label htmlFor="r_3"> <p>Engineering & Architecture</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_3" name="g" />
                            <label htmlFor="r_3"> <p>Legal</p></label>
                        </div>
                        <div className="s_b_r">
                            <input type="radio" id="r_3" name="g" />
                            <label htmlFor="r_3"> <p>Admin & Customer Support</p></label>
                        </div>
                    </div>
                    <div className="show_less_likn"><a href="/">Show less</a></div>
                    <Link to="/category"><div className='fo_btn_c ccb_next_btn'><button>Next</button></div></Link>
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default Createcategory