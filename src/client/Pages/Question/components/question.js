import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Question = () => {
  Title(" | question 1");
  return (
    <>
      <Container>
        <div className="question_box">
          <div className="question_img_br">
            <img src="/assets/Group 2851.svg" alt="" />
          </div>
          <div className="questopn_h1">
            <h1>Let's start with a few job details</h1>
          </div>
          <div className="question_p">
            <p>
              this will help your job stand out to talent who fit what you're
              looking for.
            </p>
          </div>
          <div className="question_p">
            Need help hiring? <Link to="#0">Talk to a recruiter</Link>
          </div>
          <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-2">
            <div className="fo_btn_c next_b_btn_c">
              <Link to="/businesssize">
                <Button variant="" className="mrright-gppnew">
                  Back
                </Button>
              </Link>
            </div>
            <div className="fo_btn_c next_b_btn_c">
              <Link to="/create-category">
                <Button variant="" className="active_btn_blue">
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Question;
