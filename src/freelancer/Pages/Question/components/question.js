import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Screen = () => {
  Title(" | Question 1");
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
      values?.freelancerBefore === "" ||
      values?.freelancerBefore === null ||
      values?.freelancerBefore === undefined
    ) {
      errorsObject.freelancerBefore = "Kindly select at least one";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    history("/freelancer/question2");
  };

  return (
    <>
      <Container>
        <div className="mt-5">
          <div className="questopn_h1">
            <h1>
              A few quick questions: First, have <br /> you freelanced before?
            </h1>
          </div>
          <div className="question_p">
            <p>
              This lets us know how much help to give you along the way. <br />(
              We won't share you answer with anyone else, including potestial
              clients.)
            </p>
          </div>
        </div>
        <Row className="justify-content-center row_quexenwt">
          <Col lg={3} md={6} sm={10} className="mb-3">
            <label htmlFor="firstBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check
                  type="radio"
                  id="firstBox"
                  value="firstBox"
                  name="freelancerBefore"
                  onChange={onInputChange}
                />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/sprout.svg" alt="" />
                </div>
                <div className="hi_bx_head2">Nope: it's new to me</div>
              </div>
            </label>
          </Col>

          <Col lg={3} md={6} sm={10} className="mb-3">
            <label htmlFor="secondBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check
                  type="radio"
                  id="secondBox"
                  value="secondBox"
                  name="freelancerBefore"
                  onChange={onInputChange}
                />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/help-file.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  I've tried it but still
                  <br /> might need tips
                </div>
              </div>
            </label>
          </Col>
          <Col lg={3} md={6} sm={10} className="mb-3">
            <label htmlFor="thirdBox" className="hire_box_yh new_hbyh">
              <div className="sub_radio">
                <Form.Check
                  type="radio"
                  id="thirdBox"
                  value="thirdBox"
                  name="freelancerBefore"
                  onChange={onInputChange}
                />
              </div>
              <div>
                <div className="hire_b_im">
                  <img src="/assets/star.svg" alt="" />
                </div>
                <div className="hi_bx_head2">
                  Yep. I've freelanced for <br /> years
                </div>
              </div>
            </label>
          </Col>

          <span
            style={{
              color: "red",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            {errors.freelancerBefore && errors.freelancerBefore}
          </span>

          <Col lg={12} className="mb-3 d-flex justify-content-center">
            <div onClick={nextTab} className="get-startedQuestion">
              Get Started
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Screen;
