import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const TitleBody = ({ setCurrentTab, onInputChange, values }) => {
  return (
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
            name="job_title"
            value={values?.job_title}
            onChange={(e) => onInputChange(e)}
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
            <button
              onClick={() => setCurrentTab("getting-started")}
              className="mrright-gppnew"
            >
              Back
            </button>
          </div>
          {!values?.job_title ? (
            <div className="fo_btn_c next_b_btn_c">
              <button disabled className="active_btn_blueDiabled">
                Next
              </button>
            </div>
          ) : (
            <div className="fo_btn_c next_b_btn_c">
              <button
                onClick={() => setCurrentTab("job-category")}
                className="hov_ttransp active_btn_blue"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
export default TitleBody;
