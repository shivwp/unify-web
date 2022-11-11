import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import heart from "../../../../icons/heart.svg";
import like from "../../../../icons/like.svg";
import Title from "../../../../components/title";
import $ from "jquery";
import "../../../../styles/freelancer.css";
import Select from "react-select";
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

const ReasonsList = ({ jobId, data, setDropdownOpen }) => {
  const dispatch = useDispatch();

  const dislikeJobPost = (id) => {
    dispatch(
      onDislikeJobPost({ job_id: jobId, reason_id: id }, setDropdownOpen)
    );
  };
  return (
    <>
      <div className="ddown_psr ps-absolute">
        <div className="ddown_mcotrct psearch-pnpou">
          {data?.map((item) => (
            <div
              key={item.id}
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

const ProjectSearch = () => {
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
    dispatch(getJobsList({ pagination: 10, page }, ScrollTop));
  }, [page, onDislikeJobPost, unSaveJobsPost, saveJobsPost]);

  useEffect(() => {
    dispatch(onDislikePostReasons());
  }, []);

  for (let i = 1; i < jobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  const SaveJob = (id) => {
    dispatch(saveJobs({ job_id: id }));
  };

  const UnSaveJob = (id) => {
    dispatch(removeSaveJob({ job_id: id }));
  };

  return (
    <>
      {jobsList?.map((item, index) => (
        <div className="job_box_card" key={index}>
          <div className="heat_lef">
            <img src={star} alt="" />
          </div>
          <Row>
            <Col lg={9}>
              <div className="job_head_s">
                <h2>{item?.name}</h2>
              </div>
              <div className="dlex_sk_block flex-wrap">
                {item?.skills?.map((skill) => (
                  <>
                    <div key={skill.id} className="b_skil">
                      {skill?.name}
                    </div>
                  </>
                ))}
              </div>
              <div className="job_d_par">
                <p>{item?.description}</p>
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
          <div className="jb_foot flex-wrap">
            <div className="flex_itm">
              {/* <div className="f_b_obx">
                <div className="ex_name_fb">Expiry:</div>
                <div className="ex_val_f">914 DAYS LEFT</div>
              </div>
              <div className="f_b_obx">
                <div className="ex_name_fb">Proposals:</div>
                <div className="ex_val_f">9 Received</div>
              </div> */}
              {/* <div className="f_b_obx"> */}
              <div className="">
                <div className="ex_name_fb">Location:</div>
                <div className="ex_val_f">Hamburg</div>
              </div>
            </div>
            <div className="ps-relative mt-sesix-5">
              {dropdownOpen == item.id ? (
                <ReasonsList
                  jobId={item.id}
                  data={dislikeJobReasons}
                  setDropdownOpen={setDropdownOpen}
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
                  style={{ padding: 0 }}
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
                        stroke-width="1"
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
                        stroke-width="1"
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

                  {/* <img src={heart} alt="" className="heart_btn" /> */}
                </Button>
                <Link to={`/freelancer/project-detail/${item.id}`}>
                  <Button variant="">Send Proposal</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Col lg={12}>
        <div className="pagiantion_node">
          {totalPages.map((number) => (
            <>
              <Button
                variant=""
                className={`pagi_butt ${
                  jobsPagination?.current_page == number ? "PageActive" : ""
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
    </>
  );
};
const ProjectSaved = () => {
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
    dispatch(removeSaveJob({ job_id: id }));
  };

  useEffect(() => {
    dispatch(getSavedJobsList({ pagination: 10, page }, ScrollTop));
  }, [page, unSaveJobsPost]);

  return (
    <>
      {savedJobsList?.map((item, index) => (
        <div className="job_box_card" key={index}>
          <div className="heat_lef">
            <img src={star} alt="" />
          </div>
          <Row>
            <Col lg={9}>
              <div className="job_head_s">
                <h2>{item.name}</h2>
              </div>
              <div className="dlex_sk_block flex-wrap">
                {item.skills.map((skill) => (
                  <div key={skill.id} className="b_skil">
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className="job_d_par">
                <p>{item.description}</p>
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
          <div className="jb_foot flex-wrap">
            <div className="flex_itm">
              <div className="">
                <div className="ex_name_fb">Expiry:</div>
                <div className="ex_val_f">914 DAYS LEFT</div>
              </div>
              {/* <div className="f_b_obx">
                <div className="ex_name_fb">Proposals:</div>
                <div className="ex_val_f">9 Received</div>
              </div>
              <div className="f_b_obx">
                <div className="ex_name_fb">Location:</div>
                <div className="ex_val_f">Hamburg</div>
              </div> */}
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
                        stroke-width="1"
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
                  <button>Send Proposal</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Col lg={12}>
        <div className="pagiantion_node">
          {totalPages.map((number) => (
            <>
              <Button
                variant=""
                className={`pagi_butt ${
                  savedjobsPagination?.current_page == number
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
    </>
  );
};

const Project_Search = () => {
  let { saved } = useParams();
  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  const [Tab, SetTab] = useState(<ProjectSearch />);
  const [TabActive, SetTabActive] = useState("search");
  function changeTab(componentName) {
    if (componentName === "search") {
      SetTab(<ProjectSearch />);
      Title(" | Project Search");
      SetTabActive("search");
    } else if (componentName === "saved") {
      Title(" | Project Saved");
      SetTab(<ProjectSaved />);
      SetTabActive("saved");
    }
  }

  useEffect(() => {
    if (saved === "saved") {
      Title(" | Project Saved");
      SetTab(<ProjectSaved />);
      SetTabActive("saved");
    }
  }, [saved]);
  const options1 = [
    {
      name: "what are you looking for",
      label: "what are you looking for",
    },
  ];
  return (
    <>
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
                    />
                  </div>
                </div>
                <div className="s_na_box">
                  <div className="s_na_h4">
                    <h4>Job type</h4>
                  </div>
                  <div className="s_na_inpu">
                    <Select
                      className=" smtxt_selct_newug"
                      placeholder="what are you looking for"
                      options={options1}
                    />
                  </div>
                </div>
                <div className="s_na_box">
                  <div className="s_na_h4">
                    <h4>Skills</h4>
                  </div>
                  <div className="s_na_inpu">
                    <Form.Control type="text" placeholder="Search skills" />
                    <div className="pls_s_na_input">+</div>
                  </div>
                </div>
              </div>
              <div className="s_na_box s_cat_bo">
                <div className="s_na_h4">
                  <h4>Category</h4>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Apps Developements (2)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>IOS (2)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Business (10)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Services (10)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Digital Marketing (10)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Video & animation (10)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Website Development (10)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>writing & Translation (10)</Form.Label>
                </div>
              </div>
              <div className="s_cat_bo">
                <div className="s_na_h4">
                  <h4>Price</h4>
                </div>
                <div className="ran_fl_inp">
                  <Form.Control type="num" value="0" placeholder="0" />
                  <Form.Control type="num" value="1,500" placeholder="1,500" />
                </div>
              </div>

              <div className="s_na_box s_cat_bo mb-0">
                <div className="s_na_h4">
                  <h4>English Level</h4>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Bilingual (1)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Fluent (4)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Native (3)</Form.Label>
                </div>
                <div className="s_na_categ">
                  <Form.Check type="checkbox" />
                  <Form.Label>Professional (1)</Form.Label>
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
                <div className="slide_btnss slider_shutter">
                  <div className="s_na_categ">
                    <Form.Check type="checkbox" />
                    <Form.Label>English (1)</Form.Label>
                  </div>
                  <div className="s_na_categ">
                    <Form.Check type="checkbox" />
                    <Form.Label>Japinese (4)</Form.Label>
                  </div>
                </div>
              </div>
              <div className="desc_hin">
                <p>
                  Select the options and press the Filter Result button to apply
                  the changes
                </p>
              </div>
              <div className="fr_btn">
                <Button variant="" className="btnhovpple">
                  Filter Result
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={9} className="top_main_c_job">
            <div className="overflow-scroll">
              <div className="d-flex flex-wrap tab_m_nodea mb-4 tab_scroll_cont">
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
                    SAVED JOB(3)
                  </Button>
                </Link>
              </div>
            </div>
            {Tab}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Project_Search;
