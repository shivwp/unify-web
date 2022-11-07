import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SET_JOB_DATA_LISTING } from "../../../../redux/types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Skill = () => {
  Title(" | Scope");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [scope, setScope] = useState();
  const [workTime, setWorkTime] = useState();
  const [level, setLevel] = useState();
  const jobListingData = useSelector((state) => state.profile.jobListingData);

  useEffect(() => {
    if (jobListingData === undefined) {
      navigate("/gettingstarted");
    }
  }, []);

  const handleScopeChange = (e) => setScope(e.target.value);
  const handleWorkChange = (e) => setWorkTime(e.target.value);
  const handleLevelChange = (e) => setLevel(e.target.value);

  const nextButton = () => {
    dispatch({
      type: SET_JOB_DATA_LISTING,
      payload: {
        ...jobListingData,
        scop: scope,
        project_duration: workTime,
        experience_level: level,
      },
    });

    navigate("/budget");
  };

  return (
    <div className="bg-f2f8ff min_pad_m">
      <Container>
        <Row>
          <SideNav />
          <Col lg={9}>
            <div className="s_nav_body">
              <div className="s_b_head">
                <h2>Scope</h2>
                <div className="s_on">Step 4 of 5</div>
              </div>
              <br />
              <div className="on_time_h3 d-block no-border pt-0 pb-0">
                <div className="">
                  <div className="s_b_r mrr_riii d-block mt-0">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="scope-one"
                        name="scope"
                        value="large"
                        onChange={handleScopeChange}
                      />
                      <Form.Label htmlFor="scope-one">
                        <p className="font-20">
                          <b className="text-black">Large</b>
                        </p>
                      </Form.Label>
                    </div>
                    <div className="label_apra">
                      <p className="litt_sm_para f-16">
                        Longer term or complex initiatives (ex. design and build
                        a full website)
                      </p>
                    </div>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="scope-two"
                        name="scope"
                        value="medium"
                        onChange={handleScopeChange}
                      />
                      <Form.Label htmlFor="scope-two">
                        <p className="font-20">
                          <b className="text-black">Medium</b>
                        </p>
                      </Form.Label>
                    </div>
                    <div className="label_apra">
                      <p className="litt_sm_para f-16">
                        Well-defined projects (ex. a landing page)
                      </p>
                    </div>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="scope-three"
                        name="scope"
                        value="small"
                        onChange={handleScopeChange}
                      />
                      <Form.Label htmlFor="scope-three">
                        <p className="font-20">
                          <b className="text-black">Small</b>
                        </p>
                      </Form.Label>
                    </div>
                    <div className="label_apra">
                      <p className="litt_sm_para f-16">
                        Quick and straightforward tasks (ex. update text and
                        images on a webpage)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="scop_head mb-2">
                    <h3>How long will your work take?</h3>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="work-take-one"
                        name="work"
                        value="6"
                        onChange={handleWorkChange}
                      />
                      <Form.Label htmlFor="work-take-one">
                        <p className="litt_sm_para">More than 6 months</p>
                      </Form.Label>
                    </div>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="work-take-two"
                        name="work"
                        value="3"
                        onChange={handleWorkChange}
                      />
                      <Form.Label htmlFor="work-take-two">
                        <p className="litt_sm_para">3 to 6 months</p>
                      </Form.Label>
                    </div>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="work-take-three"
                        name="work"
                        value="1"
                        onChange={handleWorkChange}
                      />
                      <Form.Label htmlFor="work-take-three">
                        <p className="litt_sm_para">1 to 3 months</p>
                      </Form.Label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="scop_head">
                    <h3>What level of experience will it need?</h3>
                  </div>
                  <p className="litt_sm_para">
                    This won't restrict any proposals, but helps match expertise
                    to your budget.
                  </p>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="level-one"
                        name="level"
                        value="entry"
                        onChange={handleLevelChange}
                      />
                      <Form.Label htmlFor="level-one">
                        <p>
                          <b className="text-black">Entry</b>
                        </p>
                      </Form.Label>
                    </div>
                    <div className="label_apra">
                      <p className="litt_sm_para">
                        Looking for someone relatively new to this field
                      </p>
                    </div>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="level-two"
                        name="level"
                        value="intermediate"
                        onChange={handleLevelChange}
                      />
                      <Form.Label htmlFor="level-two">
                        <p>
                          <b className="text-black">Intermediate</b>
                        </p>
                      </Form.Label>
                    </div>
                    <div className="label_apra">
                      <p className="litt_sm_para">
                        Looking for someone relatively new to this field
                      </p>
                    </div>
                  </div>
                  <div className="s_b_r mrr_riii d-block">
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id="lavel-three"
                        name="level"
                        value="expert"
                        onChange={handleLevelChange}
                      />
                      <Form.Label htmlFor="lavel-three">
                        <p>
                          <b className="text-black">Expert</b>
                        </p>
                      </Form.Label>
                    </div>
                    <div className="label_apra">
                      <p className="litt_sm_para">
                        Looking for someone relatively new to this field
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_foot_sec no-border mt-0 flex-wrap d-flex">
                <div className="fo_btn_c next_b_btn_c">
                  <Link to="/skills">
                    <Button variant="" className="mrright-gppnew">Back</Button>
                  </Link>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  {/* <Link to="/budget"> */}
                  <Button variant="" className="active_btn_blue" onClick={nextButton}>
                    Next
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Skill;
