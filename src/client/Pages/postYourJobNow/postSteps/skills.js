import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerSkills } from "../../../../redux/actions/profileAction";

const Skill = ({ setCurrentTab, onInputChange, setValues, values }) => {
  const dispatch = useDispatch();
  const [selectSkills, setSelectSkills] = useState([]);
  const [showSkillList, setShowSkillList] = useState(false);
  const getSkillList = useSelector((state) => state.profile.getSkillList);

  useEffect(() => {
    if (selectSkills) {
      setValues({ ...values, job_skills: selectSkills });
    }
  }, [selectSkills]);

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  const handleOnChange = (e) => {
    let data;
    if (e.target.value.length >= 1) {
      data = { [e.target.name]: e.target.value };
      dispatch(getFreelancerSkills(data));
    } else {
      data = { skill: "undefined" };
      dispatch(getFreelancerSkills(data));
    }
    setShowSkillList(true);
  };

  const addSkills = (item) => {
    if (selectSkills.length <= 9) {
      if (
        selectSkills.find((ele) => {
          return ele.id == item.id;
        }) == undefined
      ) {
        setSelectSkills([...selectSkills, { id: item.id, name: item.name }]);
        setShowSkillList(false);
      }
    } else {
      setShowSkillList(false);
    }
    document.getElementById("search_skill_inp").value = null;
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".suggest_skills").length === 0) {
      setShowSkillList(false);
    }
  });

  return (
    <Col lg={9}>
      <div className="s_nav_body">
        <div className="s_b_head">
          <h2>Skills</h2>
          <div className="s_on">Step 3 of 5</div>
        </div>
        <br />
        <div className="bl_head search_h3_ip">
          <h3>Search or add up to 10 skills</h3>
        </div>
        <div className="t_area_ob pr_inp_a">
          <div className="input_icon_l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#6D2EF1"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <Form.Control
            type="text"
            onChange={(e) => handleOnChange(e)}
            name="skill"
            id="search_skill_inp"
            autocomplete="off"
            placeholder="Search here skills..."
          />

          {showSkillList && getSkillList ? (
            <div className="suggest_skills" style={{ position: "absolute" }}>
              {getSkillList?.map((item, key) => (
                <>
                  <span key={key} onClick={() => addSkills(item)}>
                    {item.name}
                  </span>{" "}
                  <br />
                </>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="t_inp_bt_text">
          For the best results, add 3-5 skills
        </div>
        <div className="slide_mar">
          <div className="s_slides">
            <div className="flex_slide_ta">
              <div className="sli_ta_name">Skills</div>
              {/* <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div> */}
            </div>
            <div className="slide_btnss">
              {selectSkills?.length === 0 ? (
                <h6 className="text-center">No skills selected</h6>
              ) : (
                <>
                  {selectSkills?.map((item, index) => (
                    <button key={index}>
                      {item.name}
                      <i
                        className="fa fa-remove"
                        style={{ marginLeft: "10px" }}
                        onClick={() => removeSkills(index)}
                      ></i>
                    </button>
                  ))}
                </>
              )}
            </div>
          </div>

          {selectSkills?.length > 9 ? (
            <div
              style={{
                color: "red",
                marginLeft: "10px",
                marginTop: "10px",
                fontSize: "13px",
              }}
            >
              Maximum 10 skills
            </div>
          ) : null}
        </div>
        <div className="inp_fields" style={{ margin: "30px 0px" }}>
          <span>English level</span>
          <Form.Select
            name="english_level"
            value={values?.english_level}
            onChange={(e) => onInputChange(e)}
            style={{ marginTop: "10px" }}
          >
            <option value="">Select</option>
            <option value="fluent">Fluent</option>
            <option value="conversational">Conversational</option>
            <option value="native">Native</option>
          </Form.Select>
        </div>
        {/* <div className="see_cat_link">Change your skill category</div> */}
        <div className="btn_foot_sec flex-wrap">
          <div className="fo_btn_c next_b_btn_c">
            <button
              onClick={() => setCurrentTab("job-category")}
              className="mrright-gppnew"
            >
              Back
            </button>
          </div>

          {selectSkills?.length === 0 ||
          values?.english_level === "" ||
          selectSkills?.length === 0 ||
          values?.english_level === undefined ||
          selectSkills?.length === 0 ||
          values?.english_level === null ? (
            <div className="fo_btn_c next_b_btn_c">
              <button disabled className="active_btn_blueDiabled">
                Next
              </button>
            </div>
          ) : (
            <div className="fo_btn_c next_b_btn_c">
              <button
                onClick={() => setCurrentTab("scope")}
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
export default Skill;
