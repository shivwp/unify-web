import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../../../redux/actions/profileAction";

const TitleBody = ({ setCurrentTab, onInputChange, values }) => {
  const dispatch = useDispatch();
  const [viewCategory, setViewCategory] = useState(3);
  const categoryList = useSelector((state) => state.profile.categoryList);

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
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
          <Form.Control disabled type="text" value={values?.job_title} />
        </div>
        <div className="t_inp_bt_text mt-1 mb-2">
          We’ll match you with candidates that specialize in{" "}
          <span>UX/UI Design</span>
        </div>
        <div className="on_time_h3 d-block no-border pb-0 mt-4">
          <h3 className="j_cat_he mb-2">Job Category</h3>
          <div className="d-flex flex-wrap">
            {categoryList
              ?.filter((item, index) => index < viewCategory)
              .map((item, key) => (
                <div className="s_b_r mrr_riiis d-block" key={key}>
                  <div className="flex_aling">
                    <Form.Label
                      htmlFor={key}
                      className="d-flex align-items-center"
                    >
                      <Form.Check
                        type="radio"
                        id={key}
                        name="category_id"
                        value={item.id}
                        checked={item.id == values?.category_id ? true : false}
                        onChange={(e) => onInputChange(e)}
                      />
                      <p className="litt_sm_para">{item.name}</p>
                    </Form.Label>
                  </div>
                </div>
              ))}
          </div>
          {categoryList?.length > viewCategory ? (
            <div
              className="see_cat_link"
              onClick={() => setViewCategory(categoryList?.length)}
            >
              See all categories
            </div>
          ) : (
            <div className="see_cat_link" onClick={() => setViewCategory(3)}>
              See less
            </div>
          )}
        </div>
        <div className="btn_foot_sec flex-wrap">
          <div className="fo_btn_c next_b_btn_c">
            <button
              onClick={() => setCurrentTab("title")}
              className="mrright-gppnew"
            >
              Back
            </button>
          </div>

          {!values?.category_id ? (
            <div className="fo_btn_c next_b_btn_c">
              <button disabled className="active_btn_blueDiabled">
                Next
              </button>
            </div>
          ) : (
            <div className="fo_btn_c next_b_btn_c">
              <button
                onClick={() => setCurrentTab("skills")}
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
