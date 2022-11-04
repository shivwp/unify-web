import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import Title from "../../../../components/title";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoryList } from "../../../../redux/actions/profileAction";
import { SET_JOB_DATA_LISTING } from "../../../../redux/types";
import Form from 'react-bootstrap/Form';

const TitleBody = () => {
  Title(" | Title Screen 14");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobCategory, setJobCategory] = useState();
  const jobListingData = useSelector((state) => state.profile.jobListingData);
  const categoryList = useSelector((state) => state.profile.categoryList);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

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
        job_category: jobCategory,
      },
    });

    navigate("/skills");
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
              <div className="bl_head mb-3">
                <h3>Write a title for your job post</h3>
              </div>
              <div className="t_area_ob">
                <Form.Control type="text" value={jobListingData?.job_title} />
              </div>
              <div className="t_inp_bt_text mt-1 mb-2">
                We’ll match you with candidates that specialize in{" "}
                <span>UX/UI Design</span>
              </div>
              <div className="on_time_h3 d-block no-border pb-0 mt-4">
                <h3 className="j_cat_he mb-2">Job Category</h3>
                {categoryList?.map((item, key) => (
                  <div className="s_b_r mrr_riiis d-block" key={key}>
                    <div className="flex_aling">
                      <Form.Check
                        type="radio"
                        id={key}
                        name="g"
                        onChange={(e) => setJobCategory(item.id)}
                      />
                      <Form.Label htmlFor={key}>
                        <p className="litt_sm_para">{item.name}</p>
                      </Form.Label>
                    </div>
                  </div>
                ))}

                {/* <div className="s_b_r mrr_riii d-block">
                  <div className="flex_aling">
                    <input type="radio" id="r_1" name="g" />
                    <label htmlFor="r_1">
                      <p className="litt_sm_para">Web Design</p>
                    </label>
                  </div>
                </div>
                <div className="s_b_r mrr_riii d-block">
                  <div className="flex_aling">
                    <input type="radio" id="r_4" name="g" />
                    <label htmlFor="r_4">
                      <p className="litt_sm_para">Mobile Design</p>
                    </label>
                  </div>
                </div> */}
                <div className="see_cat_link">See all categories</div>
              </div>
              <div className="btn_foot_sec flex-wrap d-flex">
                <div className="fo_btn_c next_b_btn_c">
                  <Link to="/title">
                    <Button className="mrright-gppnew">Back</Button>
                  </Link>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  {/* <Link to="/skills"> */}
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
