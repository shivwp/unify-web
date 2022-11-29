import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Screen = () => {
  Title(" | Question 2");
  const history = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const nextTab = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.goal === "" ||
      values?.goal === null ||
      values?.goal === undefined
    ) {
      errorsObject.goal = "Kindly select at least one";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    history("/freelancer/profile-intro/takeTimeToIntro");
  };

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
                <Form.Check
                  type="radio"
                  name="goal"
                  id="oneBox"
                  value="oneBox"
                  onChange={onInputChange}
                />
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
                <Form.Check
                  type="radio"
                  name="goal"
                  id="twoBox"
                  value="twoBox"
                  onChange={onInputChange}
                />
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
                <Form.Check
                  type="radio"
                  name="goal"
                  id="threeBox"
                  value="threeBox"
                  onChange={onInputChange}
                />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/top-rated.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  To get experience so I can find a full-time job
                </div>
              </div>
            </label>
          </Col>
          <Col lg={3} md={6} sm={10}>
            <label htmlFor="fourBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check
                  type="radio"
                  name="goal"
                  id="fourBox"
                  value="fourBox"
                  onChange={onInputChange}
                />
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
        <span
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "300",
            paddingTop: "30px",
          }}
        >
          {errors.goal && errors.goal}
        </span>

        <div className="theme_btns">
          <Link to="/freelancer/question1">
            <button className="first_button">Back</button>
          </Link>
          <button className="second_button" onClick={nextTab}>
            Next
          </button>
        </div>
      </Container>
    </>
  );
};
export default Screen;
