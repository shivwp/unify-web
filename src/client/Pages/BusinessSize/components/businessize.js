import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Bsize = () => {
  Title(" | Business Size");
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onNext = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.employees === "" ||
      values?.employees === null ||
      values?.employees === undefined
    ) {
      errorsObject.employees = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    navigate("/question1");
  };

  return (
    <>
      <Container>
        <div className="question_box box_border">
          <div className="questio_heading no-border mt-3 mb-2">
            <h1 className="text-center f-ffff wel_b_headn ">
              Welcome to Unify!
            </h1>
          </div>
          <div>
            <p className="tell_bus_p">
              Tell us about your business and you’ll be on your way to connect
              with talent.
            </p>
          </div>
          <div className="pad_top_bot">
            <div className="b_si_hea">Business Size</div>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <Form.Label className="w-100 bs_s_card">
                  <div className="bs_s_inpu bg_hei_n_i">
                    <Form.Check
                      type="radio"
                      name="employees"
                      value="1"
                      onChange={onInputChange}
                    />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#E4EAEF"
                      className="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </div>
                  <div className="bs_s_h4">
                    <h4>1-10 Employees</h4>
                  </div>
                </Form.Label>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Form.Label className="w-100 bs_s_card">
                  <div className="bs_s_inpu bg_hei_n_i">
                    <Form.Check
                      type="radio"
                      name="employees"
                      value="10"
                      onChange={onInputChange}
                    />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#E4EAEF"
                      className="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </div>
                  <div className="bs_s_h4">
                    <h4>10-100 Employees</h4>
                  </div>
                </Form.Label>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Form.Label className="w-100 bs_s_card">
                  <div className="bs_s_inpu bg_hei_n_i">
                    <Form.Check
                      type="radio"
                      name="employees"
                      value="100"
                      onChange={onInputChange}
                    />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#E4EAEF"
                      className="bi bi-diagram-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                      />
                    </svg>
                  </div>
                  <div className="bs_s_h4">
                    <h4>100-1000 Employees</h4>
                  </div>
                </Form.Label>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Form.Label className="w-100 bs_s_card">
                  <div className="bs_s_inpu bg_hei_n_i">
                    <Form.Check
                      type="radio"
                      name="employees"
                      value="1000"
                      onChange={onInputChange}
                    />
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#E4EAEF"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                  </div>
                  <div className="bs_s_h4">
                    <h4>1000+ Employees</h4>
                  </div>
                </Form.Label>
              </Col>
            </Row>
          </div>

          <span className="signup-error">
            {errors.employees && "Please select any one to continue"}
          </span>
          <div className="justify-content-between btn_foot_sec flex-wrap d-flex no-border mt-2 pt-0">
            <div className="fo_btn_c next_b_btn_c">
              <button className="f-size-to active_btn_blue" onClick={onNext}>
                Continue
              </button>
            </div>
            <Link to="/question1">
              <div
                className="fo_btn_c next_b_btn_c"
                style={{
                  color: "#6d2ef1",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                Skip For Now &#62;&#62;
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Bsize;
