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
          <div className="questopn_h2">
            <h1>
              Next up: Tell us your hopes, your dreams, your aspirations and
              your goals...
            </h1>
          </div>
          <div className="question_p">
            <p>
              Unify is a place for everyone. We want to understand your
              motivations so we can help you get the best out of your
              experience with us.
            </p>
          </div>
        </div>
        <Row className="justify-content-center">
          <div className="hi_bx_head3"> Pick which suits you best below. </div>
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
                  I'm here to earn a make a <br /> full-time income
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
                  I'm here to make <br /> money on the side.
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
                  I'm here to gain <br /> experience, to help me <br /> find a
                  full-time role.
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
                  I'm just exploring for <br /> now
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

        <div className="theme_btnsQuestionTwo">
          <div className="questionTwobtn">
            <Link to="/freelancer/question1">
              <button className="first_button">Back</button>
            </Link>
            <button className="second_button" onClick={nextTab}>
              Next
            </button>
          </div>
          <Link to="/freelancer/profile-intro/takeTimeToIntro">
            <div
              className="fo_btn_c next_b_btn_c"
              style={{
                color: "#6d2ef1",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Skip For Now 	&#62;&#62;
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Screen;
