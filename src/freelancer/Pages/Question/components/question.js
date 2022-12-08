import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
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
            <h1>Help us help you...</h1>
          </div>
          <div className="question_p mt-4 mb-2">
            <p className="questionHeading">
              Have you freelanced before? Are you new to this? Unify is for
              everyone, we just need to know how to help you along the way. This
              information is just for us, it won't be shared with any clients.
              Pick what best suits you from the below.
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
                <div className="hi_bx_head2">I'm completely new to this</div>
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
                  I've dabbled in it here and there, <br /> but I might still
                  need some guidance
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
                  I'm a seasoned <br /> freelancer, let's get <br /> going.
                </div>
              </div>
            </label>
          </Col>

          <span
            style={{
              color: "red",
              fontSize: "14px",
              width:"74%",
              fontWeight: "300",
            }}
          >
            {errors.freelancerBefore && errors.freelancerBefore}
          </span>

          <Col lg={12} className="mb-3 questionOnebtn">
            <div onClick={nextTab} className="get-startedQuestion">
              Let's go!
            </div>
            <Link to="/freelancer/question2">
              <div
                className="fo_btn_c next_b_btn_c"
                style={{
                  color: "#6d2ef1",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Skip For Now &#62;&#62;
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Screen;
