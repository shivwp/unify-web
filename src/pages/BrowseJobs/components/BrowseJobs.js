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
import FreeProfile from "../../Popup/FreeProfile";
import ResultNotFound from "../../../freelancer/Pages/ProjectSearch/ResultNotFound";
import LoadingSpinner from "../../../components/LoadingSpinner";

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
  const categoryList = useSelector((state) => state.profile.categoryList);

  const [selectSkills, setSelectSkills] = useState([]);
  const [selectCategory, setSeleceCategory] = useState({});
  const [selectLanguages, setSelecetLanguages] = useState({});
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [skillsList, setSkillsList] = useState([]);

  const handleFilterChange = (e) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });

    if (e.target.name == "max_price" || e.target.name == "min_price") {
      setErrors({ ...errors, price: false });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  for (let i = 1; i < jobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  // remove item which is selected
  useEffect(() => {
    const myArray = getSkillList?.filter(function (item) {
      return !selectSkills?.find(function (ele) {
        return item?.id === ele?.skill_id;
      });
    });
    setSkillsList(myArray || []);
  }, [getSkillList, selectSkills]);
  // remove item which is selected

  // for filter jobs
  useEffect(() => {
    setLoading(true);
    dispatch(
      getJobsList({ pagination: 10, page, ...filters }, ScrollTop, setLoading)
    );
  }, [page, filters]);

  // to get language list and get category list
  useEffect(() => {
    setLoading(true);
    dispatch(getLanguageList(), setLoading);
    dispatch(getCategoryList(), setLoading);
  }, []);

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  // Remove Skill
  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

  // to filter jobs by skills
  useEffect(() => {
    setFilters({
      ...filters,
      skills: selectSkills?.map((item) => item.skill_id)?.toString(),
    });
  }, [selectSkills]);

  // // to filter jobs by category select
  // useEffect(() => {
  //   var categoryKeys = Object.keys(selectCategory);
  //   setFilters({
  //     ...filters,
  //     project_category: categoryKeys
  //       ?.filter(function (key) {
  //         return selectCategory[key];
  //       })
  //       ?.toString(),
  //   });
  // }, [selectCategory]);

  // to select skills
  const addSkills = (item) => {
    if (selectSkills.length <= 10) {
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

  // skill search
  const onSearchSkill = (e) => {
    setShowSuggestedSkills(true);
    let data;
    if (e.target.value.length >= 1) {
      data = { [e.target.name]: e.target.value };
      dispatch(getFreelancerSkills(data), setLoading);
    } else {
      data = { skill: "undefined" };
      dispatch(getFreelancerSkills(data), setLoading);
    }
    $("#suggest_skills").show();
  };

  // hide skills on click outside
  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      setShowSuggestedSkills(false);
    }
  });

  // project duration
  const projectDuration = [
    { name: "More then 6 months" },
    { name: "3 to 6 months" },
    { name: "1 to 3 months" },
    { name: "Less then 1 month" },
  ];

  const clearAllFilters = () => {
    setFilters({});
    setSelectSkills([]);
    setFilterValues([]);
    setSeleceCategory({});
    setSelecetLanguages({});
  };

  // to set values in setFilter state
  const onFilterJobList = () => {
    let errorExist = false;
    let errorsObject = {};
    if (filterValues?.min_price < 3) {
      errorsObject.price = "Minimum price must be 3$";
      errorExist = true;
    } else if (
      Number(filterValues?.max_price) < Number(filterValues?.min_price)
    ) {
      errorsObject.price =
        "Max price must be greater then or equal to min price ";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

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
                  <div
                    className="sef_p_c ps_n_sefp clearAllBtn"
                    onClick={clearAllFilters}
                  >
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
                        value={filterValues?.search || ""}
                        onChange={(e) => handleFilterChange(e)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && onFilterJobList(e)
                        }
                      />
                      <div
                        className="pls_s_na_input enterIcon"
                        onClick={onFilterJobList}
                      >
                        &#62;
                      </div>
                    </div>
                  </div>
                  <div className="s_na_box">
                    <div className="s_na_h4">
                      <h4>Job type</h4>
                    </div>
                    <div className="s_na_inpu">
                      <select
                        className=" smtxt_selct_newug"
                        placeholder="what are you looking for"
                        name="type"
                        value={filters?.type || "default"}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            [e.target.name]: e.target.value,
                          })
                        }
                        defaultValue="default"
                      >
                        <option value="default" hidden disabled>
                          Project Type{" "}
                        </option>
                        <option value="short_term">Short Term </option>
                        <option value="long_term">Long Term </option>
                      </select>
                    </div>
                  </div>

                  <div className="s_na_box">
                    <div className="selected_skills_filter_jobs">
                      {selectSkills?.map((item, index) => (
                        <div className="skill">
                          <span>{item.skill_name}</span>
                          <button
                            type="button"
                            className="btn"
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
                      {showSuggestedSkills ? (
                        <div className="suggessted_skills" id="suggest_skills">
                          {skillsList?.map((item) => (
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
                    {/* <div className="s_na_inpu">
                      <select
                        name="duration"
                        value={values?.duration}
                        className="font-size-13px projectDurationOption"
                        placeholder="Select a duration"
                        onChange={(e) => handleFilterChange(e)}
                      >
                        <option disabled selected hidden>
                          Select a duration
                        </option>
                        {projectDuration.map((item) => (
                          <option value={item.name}>{item.name}</option>
                        ))}
                      </select>
                    </div> */}
                    <div className="s_na_inpu">
                      <select
                        name="project_duration"
                        value={filters?.project_duration || "default"}
                        className="font-size-13px projectDurationOption"
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            [e.target.name]: e.target.value,
                          })
                        }
                        defaultValue="dafault"
                      >
                        <option value="dafault" hidden>
                          Select a duration
                        </option>
                        <option value="More then 6 months">
                          More then 6 months
                        </option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="1 to 3 months">1 to 3 months</option>
                        <option value="Less then 1 month">
                          Less then 1 month
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="s_na_box">
                    <div className="s_na_h4">
                      <h4>Budget type</h4>
                    </div>
                    <div className="s_na_inpu">
                      <select
                        name="budget_type"
                        value={filters?.budget_type || "default"}
                        onChange={(e) =>
                          setFilters({
                            ...filters,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="font-size-13px projectDurationOption"
                        defaultValue="default"
                      >
                        <option value="default" hidden>
                          Select budget
                        </option>
                        <option value="hourly">Hourly</option>
                        <option value="fixed">Fixed</option>
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
                        checked={selectCategory[item.id] || false}
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
                  <div className="jobPriceRange">
                    <div
                      className="inp_bdg_pdsp priceStartRange"
                      style={{ position: "relative" }}
                    >
                      <span> $ </span>
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        name="min_price"
                        value={filterValues?.min_price || ""}
                        onChange={(e) => handleFilterChange(e)}
                        className="project_details_Num_inp send_proposal_num_inp"
                        onWheel={(e) => e.target.blur()}
                      />
                    </div>
                    <div
                      className="inp_bdg_pdsp priceStartRange"
                      style={{ position: "relative" }}
                    >
                      <span> $ </span>
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        name="max_price"
                        value={filterValues?.max_price || ""}
                        onChange={(e) => handleFilterChange(e)}
                        className="project_details_Num_inp send_proposal_num_inp"
                        onWheel={(e) => e.target.blur()}
                      />
                    </div>
                  </div>
                  <span className="jobSignInError">
                    {errors.price && errors.price}
                  </span>
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
                      checked={
                        filters?.english_level
                          ? filters?.english_level == "fluent"
                          : false
                      }
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <Form.Label htmlFor="fluent">Fluent </Form.Label>
                  </div>
                  <div className="s_na_categ">
                    <Form.Check
                      type="radio"
                      name="english_level"
                      value="native"
                      checked={
                        filters?.english_level
                          ? filters?.english_level == "native"
                          : false
                      }
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          [e.target.name]: e.target.value,
                        })
                      }
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
                      checked={
                        filters?.english_level
                          ? filters?.english_level == "conversational"
                          : false
                      }
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <Form.Label htmlFor="conversational">
                      Conversational{" "}
                    </Form.Label>
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
                    {/* <div className="heat_lef">
                      <img src={star} alt="" />
                    </div> */}
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
              {jobsPagination?.total_page > 1 ? (
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
              ) : (
                ""
              )}
              {jobsList?.length == 0 ? (
                <ResultNotFound msg="There are no results that match your search " />
              ) : null}
            </Col>

            {/* Job end */}
          </Row>
        </Container>
      </div>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default BrowseJobs;
