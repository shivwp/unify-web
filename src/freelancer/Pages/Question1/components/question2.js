import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
const Screen = () => {
  Title(" | Question 2");
  return (
    <>
      <Container>
        <div className="mt-5">
          <div className="questopn_h1">
            <h1>
              Got it: So what's your biggest goal <br /> for freelancing?
            </h1>
          </div>
          <div className="question_p">
            <p>
              Different people come to Unify for different reasons. We want to
              highlight the opportunities that fit your goals <br /> best -
              while still showing you all the possibilities. Which of these
              feels most right for you?
            </p>
          </div>
        </div>
        <Row className="justify-content-center">
          <Col lg={3} md={6} sm={10}>
            <label htmlFor="oneBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check type="radio" name="s" id="oneBox" />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/diamond.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  To earn my main <br /> income
                </div>
              </div>
            </label>
          </Col>
          <Col lg={3} md={6} sm={10}>
            <label htmlFor="twoBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check type="radio" name="s" id="twoBox" />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/invoice.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  To make money on <br /> the side
                </div>
              </div>
            </label>
          </Col>
          <Col lg={3} md={6} sm={10}>
            <label htmlFor="threeBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check type="radio" name="s" id="threeBox" />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/top-rated.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  To get experience so I can find a fill-time job
                </div>
              </div>
            </label>
          </Col>
          <Col lg={3} md={6} sm={10}>
            <label htmlFor="fourBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check type="radio" name="s" id="fourBox" />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/search.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  I don't have a goal <br /> yet: I'm exploring
                </div>
              </div>
            </label>
          </Col>
        </Row>
        <div className="theme_btns">
          <Link to="/freelancer/question1">
            <button className="first_button">Back</button>
          </Link>
          <Link to="/freelancer/profile-intro">
            <button className="second_button">Next</button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Screen;
