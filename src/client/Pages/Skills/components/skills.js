import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "../../../../components/site_nav";
import Title from "../../../../components/title";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFreelancerSkills } from "../../../../redux/actions/profileAction";
import { SET_JOB_DATA_LISTING } from "../../../../redux/types";
import Form from "react-bootstrap/Form";

const Skill = () => {
  Title(" | Skills");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();
  const [selectSkills, setSelectSkills] = useState([]);
  const [englishLevel, setEnglishLeval] = useState();
  const [filteredResults, setFilteredResults] = useState([]);
  const jobListingData = useSelector((state) => state.profile.jobListingData);
  const getSkillList = useSelector((state) => state.profile.getSkillList);

  useEffect(() => {
    dispatch(getFreelancerSkills());
  }, []);

  useEffect(() => {
    if (jobListingData === undefined) {
      navigate("/gettingstarted");
    }
  }, []);

  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  const addSkills = (item) => {
    setSelectSkills([...selectSkills, item]);
  };

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
    $("#suggest_skills").show();
    const filteredData = getSkillList.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  };

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      $("#suggest_skills").hide();
    }
  });

  const nextButton = () => {
    dispatch({
      type: SET_JOB_DATA_LISTING,
      payload: {
        ...jobListingData,
        skills: selectSkills?.map((item) => item.id)?.toString(),
        english_level: englishLevel,
      },
    });

    navigate("/scope");
  };

  return (
    <div className="bg-f2f8ff min_pad_m">
      <Container>
        <Row>
          <SideNav />
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
                <Form.Control type="text" onChange={onSearchChange} />

                {filteredResults && (
                  <div id="suggest_skills">
                    <div
                      className="suggest_skills"
                      style={{ position: "absolute" }}
                    >
                      {filteredResults?.map((item) => (
                        <>
                          <span onClick={() => addSkills(item)}>
                            {item.name}
                          </span>
                          <br />
                        </>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="t_inp_bt_text">
                For the best results, add 3-5 skills
              </div>
              <div className="slide_mar">
                <div className="s_slides">
                  <div
                    className="flex_slide_ta toggle_shutter"
                    onClick={(e) => hanDleSlide(e)}
                  >
                    <div className="sli_ta_name">Skills</div>
                    <div>
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
                    </div>
                  </div>
                  <div className="slide_btnss slider_shutter">
                    {selectSkills?.map((item, index) => (
                      <Button variant="" key={item.id}>
                        {item.name}
                        <Button variant="" onClick={() => removeSkills(index)}>
                          X
                        </Button>
                      </Button>
                    ))}

                    {/* <button>
                      User Interface Design
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#393939"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                      </svg>
                    </button>
                     */}
                  </div>
                </div>
              </div>
              <div className="inp_fields" style={{ margin: "30px 0px" }}>
                <span>Language level</span>
                <Form.Select
                  style={{ marginTop: "10px" }}
                  onChange={(e) => setEnglishLeval(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="fluent">fluent</option>
                  <option value="conversational">Conversational</option>
                  <option value="naitve">naitve</option>
                </Form.Select>
              </div>
              <div className="see_cat_link">Change your skill category</div>
              <div className="btn_foot_sec no-border flex-wrap d-flex">
                <div className="fo_btn_c next_b_btn_c">
                  <Link to="/title14">
                    <Button variant="" className="mrright-gppnew">
                      Back
                    </Button>
                  </Link>
                </div>
                <div className="fo_btn_c next_b_btn_c">
                  {/* <Link to="/scope"> */}
                  <Button
                    variant=""
                    className="hov_ttransp active_btn_blue"
                    onClick={nextButton}
                  >
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
