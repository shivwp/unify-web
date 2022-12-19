import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import heart from "../../../../icons/heart.svg";
import like from "../../../../icons/like.svg";
import Title from "../../../../components/title";
import $ from "jquery";
import "../../../../styles/freelancer.css";
import { useParams, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  onDislikePostReasons,
  getJobsList,
  getSavedJobsList,
  onDislikeJobPost,
  removeSaveJob,
  saveJobs,
} from "../../../../redux/actions/jobActions";
import {
  getCategoryList,
  getFreelancerSkills,
  getLanguageList,
} from "../../../../redux/actions/profileAction";
import { filter } from "dom7";
import ResultNotFound from "../ResultNotFound";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const ReasonsList = ({ jobId, data, setDropdownOpen, setLoading }) => {
  const dispatch = useDispatch();

  const dislikeJobPost = (id) => {
    setLoading(true);
    dispatch(
      onDislikeJobPost(
        { job_id: jobId, reason_id: id },
        setDropdownOpen,
        setLoading
      )
    );
  };
  return (
    <>
      <div className="ddown_psr dislikeJobRreasonsList ps-absolute">
        <div className="ddown_mcotrct psearch-pnpou">
          {data?.map((item, index) => (
            <div
              key={index}
              className="ddwon_lis"
              onClick={() => dislikeJobPost(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectSearch = ({ filters, setLoading }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const totalPages = [];
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const jobsList = useSelector((state) => state?.job?.jobsList?.data);
  const jobsPagination = useSelector((state) => state?.job?.jobsList?.meta);
  const onDislikeJobPost = useSelector((state) => state?.job?.onDislikeJobPost);
  const unSaveJobsPost = useSelector((state) => state?.job?.unSaveJobsPost);
  const saveJobsPost = useSelector((state) => state?.job?.saveJobsPost);
  const dislikeJobReasons = useSelector(
    (state) => state?.job?.dislikeJobReasons
  );

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getSavedJobsList({ pagination: 10, page }, ScrollTop, setLoading));
  }, [page, onDislikeJobPost, unSaveJobsPost, saveJobsPost, filters]);

  useEffect(() => {
    dispatch(onDislikePostReasons(setLoading));
  }, []);

  for (let i = 1; i < jobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  const SaveJob = (id) => {
    setLoading(true);
    dispatch(saveJobs({ job_id: id }), setLoading);
  };

  const UnSaveJob = (id) => {
    setLoading(true);
    dispatch(removeSaveJob({ job_id: id }), setLoading);
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".dislikeJobRreasonsList").length === 0) {
      setDropdownOpen(false);
    }
  });

  return (
    <>
      {jobsList?.map((item, index) => (
        <div className="job_box_card" key={index}>
          <div className="heat_lef">
            <img src={star} alt="" />
          </div>
          <Link to={`/freelancer/project-detail/${item.id}`}>
            <Row>
              <Col lg={9}>
                <div className="job_head_s">
                  <h2>{item?.name}</h2>
                </div>
                <div className="dlex_sk_block flex-wrap">
                  {item?.skills?.map((skill, index) => (
                    <div key={index} className="b_skil">
                      {skill?.name}
                    </div>
                  ))}
                </div>
                <div className="job_d_par">
                  <p style={{ wordBreak: "break-word" }}>{item?.description}</p>
                </div>
              </Col>
              <Col lg={3}>
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
          </Link>
          <div className="jb_foot flex-wrap">
            <div className="flex_itm">
              <div className="">
                <div className="ex_name_fb">Location:</div>
                <div className="ex_val_f">{item.location}</div>
              </div>
            </div>
            <div className="ps-relative mt-sesix-5">
              {dropdownOpen == item.id ? (
                <ReasonsList
                  jobId={item.id}
                  data={dislikeJobReasons}
                  setDropdownOpen={setDropdownOpen}
                  setLoading={setLoading}
                />
              ) : (
                ""
              )}
              <div className="fb_btns_s_pro">
                <Button
                  variant=""
                  className="bg-trans_s_pro btn_psnewrb"
                  onClick={() =>
                    setDropdownOpen(dropdownOpen ? false : item.id)
                  }
                  style={{ padding: 0, transform: "rotate(180deg)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 53 53"
                  >
                    <g
                      id="Group_3306"
                      data-name="Group 3306"
                      transform="translate(-1380 -582)"
                    >
                      <g
                        id="Ellipse_620"
                        data-name="Ellipse 620"
                        transform="translate(1380 582)"
                        fill="none"
                        stroke="#dedede"
                        strokeWidth="1"
                      >
                        <circle cx="26.5" cy="26.5" r="26.5" stroke="none" />
                        <circle cx="26.5" cy="26.5" r="26" fill="none" />
                      </g>
                      <g
                        id="_7830784_like_icon"
                        data-name="7830784_like_icon"
                        transform="translate(1395 594.783)"
                      >
                        <path
                          id="Path_4550"
                          data-name="Path 4550"
                          d="M24,11.034a2.5,2.5,0,0,0-2.5-2.5H15.189a.25.25,0,0,1-.237-.328,8.684,8.684,0,0,0,.52-4.407c-.588-2.095-1.834-2.7-2.809-2.565A2,2,0,0,0,11,3.284C11,6.03,8.871,9.03,6.966,10.345a.5.5,0,0,0-.216.412V20.873a.5.5,0,0,0,.405.491c.357.069.681.135.987.2a17.309,17.309,0,0,0,4.108.471h6.5c1.957,0,2.25-1.1,2.25-1.75a2.24,2.24,0,0,0-.232-.994,2.248,2.248,0,0,0,1-3A2.252,2.252,0,0,0,23,14.284a2.226,2.226,0,0,0-.273-1.072A2.5,2.5,0,0,0,24,11.034Z"
                          fill="#dedede"
                        />
                        <path
                          id="Path_4551"
                          data-name="Path 4551"
                          d="M5.25,10.784a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v11a1,1,0,0,0,1,1H4.25a1,1,0,0,0,1-1Zm-1.5,9.25a.75.75,0,1,1-.75-.75A.75.75,0,0,1,3.75,20.034Z"
                          fill="#dedede"
                        />
                      </g>
                    </g>
                  </svg>
                </Button>
                <Button
                  variant=""
                  className="bg-trans_s_pro btn_psnewrb"
                  onClick={
                    item.is_saved
                      ? () => UnSaveJob(item.id)
                      : () => SaveJob(item.id)
                  }
                  style={{ padding: 0 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 53 53"
                    className={item.is_saved ? "proposal_saved" : ""}
                  >
                    <g
                      id="Group_3307"
                      data-name="Group 3307"
                      transform="translate(-1466 -582)"
                    >
                      <g
                        id="Ellipse_619"
                        data-name="Ellipse 619"
                        transform="translate(1466 582)"
                        fill="none"
                        stroke="#dedede"
                        strokeWidth="1"
                      >
                        <circle cx="26.5" cy="26.5" r="26.5" stroke="none" />
                        <circle cx="26.5" cy="26.5" r="26" fill="none" />
                      </g>
                      <path
                        id="_3671774_heart_icon"
                        data-name="3671774_heart_icon"
                        d="M11.857,3.617,11.132,2.9a6.533,6.533,0,0,0-9.241,9.229L11.857,22.1l9.966-9.977a6.533,6.533,0,0,0-9.241-9.229l-.725.725Z"
                        transform="translate(1481.031 598.234)"
                        fill="#dedede"
                      />
                    </g>
                  </svg>
                </Button>
                <Link to={`/freelancer/project-detail/${item.id}`}>
                  <Button variant="" disabled={item.is_proposal_send}>
                    {item.is_proposal_send ? "Proposal Sent" : "Send Proposal"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {jobsPagination?.total_page > 1 ? (
        <Col lg={12}>
          <div className="pagiantion_node">
            {totalPages.map((number) => (
              <Button
                variant=""
                key={number}
                className={`pagi_butt ${
                  jobsPagination?.current_page == number ? "PageActive" : ""
                }`}
                onClick={() => setPage(number)}
              >
                {number}
              </Button>
            ))}
          </div>
        </Col>
      ) : (
        ""
      )}
      {jobsList?.length == 0 ? <ResultNotFound /> : null}
    </>
  );
};
const ProjectSaved = ({ setLoading }) => {
  const [dropdownOpen, setDropdownOpen] = useState(0);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const savedJobsList = useSelector((state) => state?.job?.savedJobsList?.data);

  const unSaveJobsPost = useSelector((state) => state?.job?.unSaveJobsPost);
  const savedjobsPagination = useSelector(
    (state) => state?.job?.savedJobsList?.meta
  );

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const totalPages = [];
  for (let i = 1; i < savedjobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  const UnSaveJob = (id) => {
    setLoading(true);
    dispatch(removeSaveJob({ job_id: id }, setLoading));
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getSavedJobsList({ pagination: 10, page }, ScrollTop, setLoading));
  }, [page, unSaveJobsPost]);

  return (
    <>
      {savedJobsList?.map((item, index) => (
        <div className="job_box_card" key={index}>
          <div className="heat_lef">
            <img src={star} alt="" />
          </div>
          <Link to={`/freelancer/project-detail/${item.id}`}>
            <Row>
              <Col lg={9}>
                <div className="job_head_s">
                  <h2>{item.name}</h2>
                </div>
                <div className="dlex_sk_block flex-wrap">
                  {item.skills.map((skill, index) => (
                    <div key={index} className="b_skil">
                      {skill.name}
                    </div>
                  ))}
                </div>
                <div className="job_d_par">
                  <p style={{ wordBreak: "break-word" }}>{item.description}</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="price_ar_jjob">
                  <h1>
                    {item.budget_type === "fixed"
                      ? `$${item?.price}`
                      : item.budget_type === "hourly"
                      ? `$${item?.min_price} - $${item.price} /hr`
                      : null}
                  </h1>
                  <p>({item.budget_type})</p>
                </div>
              </Col>
            </Row>
          </Link>
          <div className="jb_foot flex-wrap">
            <div className="flex_itm">
              {/* <div className="">
                <div className="ex_name_fb">Expiry:</div>
                <div className="ex_val_f">914 DAYS LEFT</div>
              </div> */}
              {/* <div className="f_b_obx">
                <div className="ex_name_fb">Proposals:</div>
                <div className="ex_val_f">9 Received</div>
              </div> */}
              <div className="">
                <div className="ex_name_fb">Location:</div>
                <div className="ex_val_f">{item.location}</div>
              </div>
            </div>
            <div className="ps-relative mt-sesix-5">
              {/* {dropdownOpen ? <ReasonsList id={item.id} /> : ""} */}
              <div className="fb_btns_s_pro">
                {/* <button className="bg-trans_s_pro btn_psnewrb" onClick={()=>{TogglePopup()}}>
                  <img src={like} alt="" className="heart_btn" />
                </button> */}
                <button
                  className="bg-trans_s_pro btn_psnewrb "
                  onClick={() => UnSaveJob(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 53 53"
                    className={"proposal_saved"}
                  >
                    <g
                      id="Group_3307"
                      data-name="Group 3307"
                      transform="translate(-1466 -582)"
                    >
                      <g
                        id="Ellipse_619"
                        data-name="Ellipse 619"
                        transform="translate(1466 582)"
                        fill="none"
                        stroke="#dedede"
                        strokeWidth="1"
                      >
                        <circle cx="26.5" cy="26.5" r="26.5" stroke="none" />
                        <circle cx="26.5" cy="26.5" r="26" fill="none" />
                      </g>
                      <path
                        id="_3671774_heart_icon"
                        data-name="3671774_heart_icon"
                        d="M11.857,3.617,11.132,2.9a6.533,6.533,0,0,0-9.241,9.229L11.857,22.1l9.966-9.977a6.533,6.533,0,0,0-9.241-9.229l-.725.725Z"
                        transform="translate(1481.031 598.234)"
                        fill="#dedede"
                      />
                    </g>
                  </svg>
                </button>
                <Link to={`/freelancer/project-detail/${item.id}`}>
                  <button>
                    {item.is_proposal_send ? "Proposal Sent" : "Send Proposal"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {savedjobsPagination?.total_page > 1 ? (
        <Col lg={12}>
          <div className="pagiantion_node">
            {totalPages.map((number) => (
              <>
                <Button
                  variant=""
                  key={number}
                  className={`pagi_butt ${
                    savedjobsPagination?.current_page == number
                      ? "PageActive"
                      : ""
                  }`}
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
    </>
  );
};

const Project_Search = () => {
  let { saved } = useParams();
  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [Tab, SetTab] = useState(<ProjectSearch setLoading={setLoading} />);
  const [TabActive, SetTabActive] = useState("search");
  let getSkillList = useSelector((state) => state?.profile?.getSkillList);
  const [showSuggestedSkills, setShowSuggestedSkills] = useState(false);
  const languageList = useSelector((state) => state?.profile?.getLanguageList);
  const categoryList = useSelector((state) => state.profile.categoryList);
  const unSaveJobsPost = useSelector((state) => state?.job?.unSaveJobsPost);
  const savedJobsList = useSelector((state) => state?.job?.savedJobsList?.data);

  const [selectSkills, setSelectSkills] = useState([]);
  const [filterValues, setFilterValues] = useState([]);
  const [selectCategory, setSeleceCategory] = useState({});
  const [selectLanguages, setSelecetLanguages] = useState({});
  const savedJobsMeta = useSelector((state) => state?.job?.savedJobsList?.meta);
  const jobsPagination = useSelector((state) => state?.job?.jobsList?.meta);
  const jobsList = useSelector((state) => state?.job?.jobsList?.data);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const totalPages = [];
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

  function changeTab(componentName) {
    if (componentName === "search") {
      SetTab(<ProjectSearch filters={filters} setLoading={setLoading} />);
      Title(" | Project Search");
      SetTabActive("search");
    } else if (componentName === "saved") {
      Title(" | Project Saved");
      SetTab(<ProjectSaved setLoading={setLoading} />);
      SetTabActive("saved");
    }
  }

  useEffect(() => {
    if (saved === "saved") {
      Title(" | Project Saved");
      SetTab(<ProjectSaved setLoading={setLoading} />);
      SetTabActive("saved");
    }
    dispatch(getCategoryList(setLoading));
    dispatch(getLanguageList(setLoading));
  }, [saved]);
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

  // for filter jobs
  useEffect(() => {
    if (filters) {
      setLoading(true);
      dispatch(getJobsList({ pagination: 10, page, ...filters }, setLoading));
    }
  }, [page, filters, unSaveJobsPost, savedJobsList]);

  // to filter jobs by skills
  useEffect(() => {
    if (selectSkills) {
      setFilters({
        ...filters,
        skills: selectSkills?.map((item) => item.skill_id)?.toString(),
      });
    }
  }, [selectSkills]);

  // to filter jobs by category
  useEffect(() => {
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

  // project duration
  const projectDuration = [
    { name: "More then 6 months" },
    { name: "3 to 6 months" },
    { name: "1 to 3 months" },
    { name: "Less then 1 month" },
  ];

  const removeSkills = (index) => {
    let updateSkills = [...selectSkills];
    updateSkills.splice(index, 1);
    setSelectSkills(updateSkills);
  };

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

  const clearAllFilters = () => {
    setFilters({});
    setFilterValues([]);
    setSelectSkills([]);
    setSeleceCategory({});
    setSelecetLanguages({});
  };

  return (
    <>
      <Container>
        <Row>
          {TabActive == "search" ? (
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
                        options={options1}
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
                        <option value="default" disabled hidden>
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
                    <Form.Label htmlFor="conversational">
                      Conversational
                    </Form.Label>
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
          ) : null}

          <Col lg={9} className="top_main_c_job mx-auto">
            <div className="overflow-scroll">
              <div
                className="d-flex flex-wrap tab_m_nodea mb-4 tab_scroll_cont"
                style={{ justifyContent: "flex-start" }}
              >
                <Link to="/freelancer/project-search">
                  <Button
                    variant=""
                    className={`tab_btn_vs ${
                      TabActive === "search" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      changeTab("search");
                    }}
                  >
                    SEARCH
                  </Button>
                </Link>
                <Link to="/freelancer/project-search/saved">
                  <Button
                    variant=""
                    className={`tab_btn_vs ${
                      TabActive === "saved" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      changeTab("saved");
                    }}
                  >
                    SAVED JOBS({savedJobsMeta?.total_item})
                  </Button>
                </Link>
              </div>
            </div>
            {Tab}
          </Col>
        </Row>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default Project_Search;
