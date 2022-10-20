import NavbarHeader from "../../../../components/navbarlogin";
import Container from 'react-bootstrap/Container';
import Footer from '../../../../components/footer';
import Title from '../../../../components/title';
import { Link } from "react-router-dom";
 

const Question = () => {
    Title(" | question 1");
    return (
        <>
            <NavbarHeader />
            <Container>
                <div className="question_box">
                    <div className="question_img_br"><img src="/assets/Group 2851.svg"  alt=""/></div>
                    <div className="questopn_h1"><h1>Let's start with a few job details</h1></div>
                    <div className="question_p"><p>this will help your job stand out to talent who fit what you're looking for.</p></div>
                    <div className="question_p">Need help hiring? <a href="#0">Talk to a recruiter</a></div>
                    <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-2">
                        <Link to="/category"><div className='fo_btn_c next_b_btn_c'><button className='mrright-gppnew'>Back</button></div></Link>
                        <Link to="/question2"><div className='fo_btn_c next_b_btn_c'><button className="active_btn_blue">Continue</button></div></Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default Question