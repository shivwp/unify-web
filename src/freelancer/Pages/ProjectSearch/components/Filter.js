import React, { useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import { useState } from "react";
import { getFreelancerSkills } from "../../../../redux/actions/profileAction";
import { getJobsList } from "../../../../redux/actions/jobActions";
import { useMemo } from "react";

const Filter = ({ filters, setFilters }) => {
  const categoryList = useSelector((state) => state.profile.categoryList);
  let getSkillList = useSelector((state) => state?.profile?.getSkillList);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [selectSkills, setSelectSkills] = useState([]);
  const [selectLanguages, setSelecetLanguages] = useState({});
  const [selectCategory, setSeleceCategory] = useState({});
  const [filterValues, setFilterValues] = useState([]);
  const [showSuggestedSkills, setShowSuggestedSkills] = useState(false);
  const [skillsList, setSkillsList] = useState([]);

  // filter start
  const handleFilterChange = (e) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
    if (e.target.name == "max_price" || e.target.name == "min_price") {
      setErrors({ ...errors, price: false });
    } else {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const options1 = [
    {
      name: "what are you looking for",
      label: "what are you looking for",
    },
  ];

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

  // to filter jobs by skills start
  useMemo(() => {
    if (selectSkills) {
      setFilters({
        ...filters,
        skills: selectSkills?.map((item) => item.skill_id)?.toString(),
      });
    }
  }, [selectSkills]);
  // to filter jobs by skills end

  // change categories start
  useMemo(() => {
    if (selectCategory) {
      var categoryKeys = Object.keys(selectCategory);
      setFilters({
        ...filters,
        project_category: categoryKeys
          ?.filter(function (key) {
            return selectCategory[key];
          })
          ?.toString(),
      });
    }
  }, [selectCategory]);
  // change categories end

  // remove skills start
  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };
  // remove skills end

  // add skill start
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
  // add skill end

  // search skills start
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
  // search skills end

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      setShowSuggestedSkills(false);
    }
  });

  // filter function start
  const onFilterJobList = (e) => {
    let errorExist = false;
    let errorsObject = {};
    if (filterValues?.min_price || filterValues?.max_price) {
      if (filterValues?.min_price < 3) {
        errorsObject.price = "Amount must be minimum 3 ";
        errorExist = true;
      } else if (
        Number(filterValues?.max_price) < Number(filterValues?.min_price)
      ) {
        errorsObject.price = "Price must be greater then minimum ";
        errorExist = true;
      }
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    var languageKeys = Object.keys(selectLanguages);
    var categoryKeys = Object.keys(selectCategory);
    const filters = {
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
      skills: selectSkills
        ?.map((item) => {
          return item.skill_id;
        })
        ?.toString(),
    };

    setFilters(filters);
  };
  // filter function end

  // clear all filters start
  const clearAllFilters = () => {
    setFilters({});
    setFilterValues([]);
    setSelectSkills([]);
    setSeleceCategory({});
    setSelecetLanguages({});
  };
  // clear all filters end

  return (
    <>
      <Col lg={3} className="browseJobsLeft">
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
                  onKeyPress={(e) => e.key === "Enter" && onFilterJobList(e)}
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
                  options={options1}
                  name="type"
                  value={filters?.type || "default"}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="default" hidden>
                    Project Type
                  </option>
                  <option value="short_term">Sort Term </option>
                  <option value="long_term">Long Term </option>
                </select>
              </div>
            </div>
            <div className="s_na_box">
              <div className="selected_skills_filter_jobs">
                {selectSkills?.map((item, index) => (
                  <div className="skill" key={index}>
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
                <Form.Control
                  type="text"
                  placeholder="Search skills"
                  id="search_skill_inp"
                  name="skill"
                  onChange={(e) => onSearchSkill(e)}
                />
                {showSuggestedSkills ? (
                  <div className="suggessted_skills" id="suggest_skills">
                    {skillsList?.map((item, index) => (
                      <span key={index} onClick={() => addSkills(item)}>
                        {item.name}
                      </span>
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
                  name="project_duration"
                  value={filters?.project_duration || "default"}
                  className="font-size-13px projectDurationOption"
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="dafault" hidden>
                    Select a duration
                  </option>
                  <option value="More then 6 months">More then 6 months</option>
                  <option value="3 to 6 months">3 to 6 months</option>
                  <option value="1 to 3 months">1 to 3 months</option>
                  <option value="Less then 1 month">Less then 1 month</option>
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
            {categoryList?.map((item, index) => (
              <div className="s_na_categ" key={index}>
                <Form.Check
                  type="checkbox"
                  name="category"
                  key={index}
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
            {/* <div className="ran_fl_inp"> */}
            <div className="jobPriceRange">
              <div
                className="inp_bdg_pdsp priceStartRange"
                style={{ position: "relative" }}
              >
                <span> $ </span>
                <Form.Control
                  type="number"
                  placeholder="3.00"
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
                  placeholder="50.00"
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
            {/* </div> */}
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
                id="fluent"
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
              <Form.Label htmlFor="conversational">Conversational</Form.Label>
            </div>
          </div>
          {/* <div className="s_na_box s_cat_bo mt-0">
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
                </div> */}
          <div className="desc_hin">
            <p>
              Select the options and press the Filter Result button to apply the
              changes
            </p>
          </div>
          <div className="fr_btn">
            <Button variant="" className="btnhovpple" onClick={onFilterJobList}>
              Filter Result
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Filter;
