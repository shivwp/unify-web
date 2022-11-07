import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form';
const Question = () => {
  Title(" | question 2");
  return (
    <>
      <Container>
        <div className="question_box box_border">
          <div className="questio_heading">
            <h1 className="cewfoueqjs">
              Try estimating the scope of your work
            </h1>
          </div>
          <div className="on_time_h3">
            <h3>One-time</h3>
            <Button variant="" className="round_b_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#D4D4D5"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Button>
          </div>
          <div className="on_time_h3 d-block padd_fou">
            <h3>How long will your work take?</h3>
            <div className="d-flex flex-wrap">
              <div className="s_b_r mrr_riii">
                <Form.Check type="radio" id="r_2" name="g" />
                <Form.Label htmlFor="r_2">
                  <p className="months_6">More than 6 months</p>
                </Form.Label>
              </div>
              <div className="s_b_r mrr_riii">
                <Form.Check type="radio" id="r_3" name="g" />
                <Form.Label htmlFor="r_3">
                  <p className="months_6">3 to 6 months</p>
                </Form.Label>
              </div>
              <div className="s_b_r mrr_riii">
                <Form.Check type="radio" id="r_1" name="g" />
                <Form.Label htmlFor="r_1">
                  <p className="months_6">1 to 3 months</p>
                </Form.Label>
              </div>
            </div>
          </div>
          <div className="on_time_h3 d-block padd_fou">
            <h3>What level of experience will it need?</h3>
            <p className="litt_sm_para cewuohq">
              This won't restrict any proposals, but helps match expertise to
              your budget.
            </p>
            <div className="d-flex flex-wrap">
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check type="radio" id="r_2" name="g" />
                  <Form.Label htmlFor="r_2">
                    <p>
                      <b className="text-black">Entry</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para cewuohq">
                    Looking for someone relatively new to this field
                  </p>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check type="radio" id="r_1" name="g" />
                  <Form.Label htmlFor="r_1">
                    <p>
                      <b className="text-black">Intermediate</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para cewuohq">
                    Looking for someone relatively new to this field
                  </p>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check type="radio" id="r_4" name="g" />
                  <Form.Label htmlFor="r_4">
                    <p>
                      <b className="text-black">Expert</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para cewuohq">
                    Looking for someone relatively new to this field
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_foot_sec flex-wrap d-flex no-border mt-2">
            <Link to="/question1">
              <div className="fo_btn_c next_b_btn_c">
                <Button variant="" className="mrright-gppnew">Back</Button>
              </div>
            </Link>
            <Link to="/businesssize">
              <div className="fo_btn_c next_b_btn_c">
                <Button variant="" className="active_btn_blue">Next</Button>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Question;
