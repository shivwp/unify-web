import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { SET_JOB_DATA_LISTING } from "../../../../redux/types";

const TitleBody = () => {
  Title(" | Title");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [jobTitle, setJobTitle] = useState();
  const jobListingData = useSelector((state) => state.profile.jobListingData);

  useEffect(() => {
    if (jobListingData === undefined) {
      navigate("/gettingstarted");
    }
  }, []);

  const nextButton = () => {
    dispatch({
      type: SET_JOB_DATA_LISTING,
      payload: {
        ...jobListingData,
        job_title: jobTitle,
      },
    });

    navigate("/title14");
  };

  return (
    <div className="bg-f2f8ff min_pad_m">
      <Container>
        <Row>
          <SideNav />
          <Col lg={9}>
            <div className="s_nav_body">
              <div className="s_b_head">
                <h2>Title</h2>
                <div className="s_on">Step 2 of 5</div>
              </div>
              <br />
              <div className="bl_head">
                <h3>Write a title for your job post</h3>
              </div>
              <div className="t_area_ob mb-3">
                <Form.Control
                  type="text"
                  name="title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div className="bl_head mt-4 mb-3">
                <h3>Example titles</h3>
              </div>
              <ul className="poi_box">
                <li className="point_li">
                  Developer needed for crating a responsive web site
                </li>
                <li className="point_li">
                  Developer needed for crating a responsive web site
                </li>
                <li className="point_li">
                  Developer needed for crating a responsive web site
                </li>
              </ul>
              <div className="btn_foot_sec flex-wrap">
                <div className="fo_btn_c next_b_btn_c">
                  <Link to="/gettingstarted">
                    <Button className="mrright-gppnew">Back</Button>
                  </Link>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  {/* <Link to="/title14"> */}
                  <Button className="active_btn_blue" onClick={nextButton}>
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
export default TitleBody;
