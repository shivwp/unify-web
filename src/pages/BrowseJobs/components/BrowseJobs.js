import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import star from ".././../../icons/star.svg";
import $ from "jquery";
import { getJobsList } from "../../../redux/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
  getCategoryList,
  getFreelancerSkills,
  getLanguageList,
} from "../../../redux/actions/profileAction";

const BrowseJobs = () => {
  const [page, setPage] = useState(1);
  const [filterValues, setFilterValues] = useState([]);
  const dispatch = useDispatch();
  const totalPages = [];

  const jobsList = useSelector((state) => state?.job?.jobsList?.data);
  const jobsPagination = useSelector((state) => state?.job?.jobsList?.meta);

  const [filters, setFilters] = useState({});
  let getSkillList = useSelector((state) => state?.profile?.getSkillList);
  const [showSuggestedSkills, setShowSuggestedSkills] = useState(false);
  const languageList = useSelector((state) => state?.profile?.getLanguageList);
  const categoryList = useSelector((state) => state.profile.categoryList);

  const [selectSkills, setSelectSkills] = useState([]);
  const [selectCategory, setSeleceCategory] = useState({});
  const [selectLanguages, setSelecetLanguages] = useState({});

  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };

  const handleFilterChange = (e) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  };

  for (let i = 1; i < jobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }
  useEffect(() => {
    dispatch(getJobsList({ pagination: 10, page, ...filters }, ScrollTop));
  }, [page, filters]);

  useEffect(() => {
    dispatch(getLanguageList());
    dispatch(getCategoryList());
  }, []);

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  const addSkills = (item) => {
    if (selectSkills.length <= 15) {
      if (
        selectSkills.find((ele) => {
          return ele.skill_id == item.id;
        }) == undefined
      ) {
        setSelectSkills([
          ...selectSkills,
          { skill_id: item.id, skill_name: item.name },
        ]);
      }
    }
    document.getElementById("search_skill_inp").value = null;
  };

  const onSearchSkill = (e) => {
    setShowSuggestedSkills(true);
    let data;
    if (e.target.value.length >= 1) {
      data = { [e.target.name]: e.target.value };
      dispatch(getFreelancerSkills(data));
    } else {
      data = { skill: "undefined" };
      dispatch(getFreelancerSkills(data));
    }
    $("#suggest_skills").show();
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      setShowSuggestedSkills(false);
    }
  });

  const onFilterJobList = () => {
    var languageKeys = Object.keys(selectLanguages);
    var categoryKeys = Object.keys(selectCategory);
    setFilters({
      ...filterValues,
      language: languageKeys
        ?.filter(function (key) {
          return selectLanguages[key];
        })
        ?.toString(),
      project_category: categoryKeys
        ?.filter(function (key) {
          return selectCategory[key];
        })
        ?.toString(),
      skills: selectSkills?.map((item) => item.skill_id)?.toString(),
    });
  };

  return (
    <>
      <div className="browse_jobs">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="filter_area">
                <div className="sef_box">
                  <div className="sef_na_ea ps_n_sef">
                    <h3>Search Filters</h3>
                  </div>
                  <div className="sef_p_c ps_n_sefp">
                    <p>Clear all</p>
                  </div>
                </div>
                <div className="s_cat_bo">
                  <div className="s_na_box">
                    <div className="s_na_h4">
                      <h4>Search by keyword</h4>
                    </div>
                    <div className="s_na_inpu">
                      <Form.Control
                        type="text"
                        placeholder="what are you looking for"
                        name="search"
                        onChange={(e) => handleFilterChange(e)}
                      />
                    </div>
                  </div>
                  <div className="s_na_box">
                    <div className="s_na_h4">
                      <h4>Job type</h4>
                    </div>
                    <div className="s_na_inpu">
                      <Form.Select
                        className=" smtxt_selct_newug"
                        placeholder="what are you looking for"
                        name="type"
                        onChange={(e) => handleFilterChange(e)}
                      >
                        <option value="short_term">Sort Term </option>
                        <option value="long_term">Long Term </option>
                      </Form.Select>
                    </div>
                  </div>

                  <div className="s_na_box">
                    <div className="selected_skills_filter_jobs">
                      {selectSkills?.map((item, index) => (
                        <div class="skill">
                          <span>{item.skill_name}</span>
                          <button
                            type="button"
                            class="btn"
                            onClick={() => removeSkills(index)}
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="s_na_h4">
                      <h4>Skills</h4>
                    </div>
                    <div className="s_na_inpu">
                      <input
                        type="text"
                        placeholder="Search skills"
                        id="search_skill_inp"
                        name="skill"
                        onChange={(e) => onSearchSkill(e)}
                      />
                      <div className="pls_s_na_input">+</div>
                      {showSuggestedSkills ? (
                        <div className="suggessted_skills" id="suggest_skills">
                          {getSkillList?.map((item) => (
                            <>
                              {" "}
                              <span onClick={() => addSkills(item)}>
                                {item.name}
                              </span>{" "}
                            </>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="s_na_box">
                    <div className="s_na_h4">
                      <h4>Project duration</h4>
                    </div>
                    <div className="s_na_inpu">
                      <select
                        name="cars"
                        id="cars"
                        className="font-size-13px projectDurationOption"
                        placeholder="Select a duration"
                      >
                        <option disabled selected hidden>
                          Select a duration
                        </option>
                        <option value="volvo">More then 6 months</option>
                        <option value="saab">3 to 6 months</option>
                        <option value="opel">1 to 3 months</option>
                        <option value="audi">Less then 1 month</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="s_na_box s_cat_bo">
                  <div className="s_na_h4">
                    <h4>Category</h4>
                  </div>
                  {categoryList?.map((item) => (
                    <div className="s_na_categ">
                      <Form.Check
                        type="checkbox"
                        name="category"
                        value={item.id}
                        onChange={(e) => {
                          setSeleceCategory({
                            ...selectCategory,
                            [e.target.value]: e.target.checked,
                          });
                        }}
                      />
                      <Form.Label>{item.name}</Form.Label>
                    </div>
                  ))}
                </div>
                <div className="s_cat_bo">
                  <div className="s_na_h4">
                    <h4>Price</h4>
                  </div>
                  <div className="ran_fl_inp">
                    <Form.Control
                      type="number"
                      placeholder="0"
                      name="min_price"
                      onChange={(e) => handleFilterChange(e)}
                    />
                    <Form.Control
                      type="number"
                      placeholder="1,500"
                      name="max_price"
                      onChange={(e) => handleFilterChange(e)}
                    />
                  </div>
                </div>

                <div className="s_na_box s_cat_bo mb-0">
                  <div className="s_na_h4">
                    <h4>English Level</h4>
                  </div>

                  <div className="s_na_categ">
                    <Form.Check
                      type="radio"
                      name="english_level"
                      value="fluent"
                      id="fluent"
                      onChange={(e) => handleFilterChange(e)}
                    />
                    <Form.Label htmlFor="fluent">Fluent </Form.Label>
                  </div>
                  <div className="s_na_categ">
                    <Form.Check
                      type="radio"
                      name="english_level"
                      value="native"
                      onChange={(e) => handleFilterChange(e)}
                      id="native"
                    />
                    <Form.Label htmlFor="native">Native </Form.Label>
                  </div>
                  <div className="s_na_categ">
                    <Form.Check
                      type="radio"
                      name="english_level"
                      value="conversational"
                      id="conversational"
                      onChange={(e) => handleFilterChange(e)}
                    />
                    <Form.Label htmlFor="conversational">
                      Conversational{" "}
                    </Form.Label>
                  </div>
                </div>
                <div className="s_na_box s_cat_bo mt-0">
                  <div
                    className="flex_slide_ta toggle_shutter p-0"
                    onClick={(e) => hanDleSlide(e)}
                  >
                    <div className="s_na_h4">
                      <h4>Languages</h4>
                    </div>
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
                  <div className="slide_btnss slider_shutter languages_overflow">
                    {languageList?.map((item) => (
                      <div className="s_na_categ">
                        <Form.Check
                          type="checkbox"
                          value={item.name}
                          onChange={(e) => {
                            setSelecetLanguages({
                              ...selectLanguages,
                              [e.target.value]: e.target.checked,
                            });
                          }}
                        />
                        <Form.Label>{item.name}</Form.Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="desc_hin">
                  <p>
                    Select the options and press the Filter Result button to
                    apply the changes
                  </p>
                </div>
                <div className="fr_btn">
                  <Button
                    variant=""
                    className="btnhovpple"
                    onClick={onFilterJobList}
                  >
                    Filter Result
                  </Button>
                </div>
              </div>
            </Col>
            {/* Job start */}
            <Col lg={9} className="top_main_c_job">
              {jobsList?.map((item) => (
                <Link to={`/job-details/${item.id}`}>
                  <div className="job_box_card" key={item.id}>
                    <div className="heat_lef">
                      <img src={star} alt="" />
                    </div>
                    <Row>
                      <Col lg={9} md={9}>
                        <div className="job_head_s mt-3">
                          {/* <Link to={`/job-details/${item.id}`}> */}
                          <h2>{item.name}</h2>
                          {/* </Link> */}
                        </div>
                        <div className="dlex_sk_block flex-wrap">
                          {item.skills?.map((skill) => (
                            <div key={skill.id} className="b_skil">
                              {skill.name}
                            </div>
                          ))}
                        </div>
                        <div className="job_d_par">
                          <p>{item.description} </p>
                        </div>
                      </Col>
                      <Col lg={3} md={3}>
                        <div className="price_ar_jjob">
                          <h1>
                            {item.budget_type === "fixed"
                              ? `$${item?.price}`
                              : item.budget_type === "hourly"
                              ? `$${item?.min_price} - $${item.price} /hr`
                              : null}
                          </h1>
                          <p>({item?.budget_type})</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Link>
              ))}
              <Col lg={12}>
                <div className="pagiantion_node">
                  {totalPages.map((number) => (
                    <>
                      <Button
                        variant=""
                        className={`pagi_butt ${
                          jobsPagination?.current_page == number
                            ? "PageActive"
                            : ""
                        }`}
                        key={number}
                        onClick={() => setPage(number)}
                      >
                        {number}
                      </Button>
                    </>
                  ))}
                </div>
              </Col>
            </Col>

            {/* Job end */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BrowseJobs;
