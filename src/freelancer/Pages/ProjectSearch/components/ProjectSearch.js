import ResultNotFound from "../ResultNotFound";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import $ from "jquery";
import "../../../../styles/freelancer.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  onDislikePostReasons,
  removeSaveJob,
  saveJobs,
} from "../../../../redux/actions/jobActions";
import ReasonsList from "./ReasionList";
import Filter from "./Filter";

const ProjectSearch = ({
  setLoading,
  tabActive,
  setTabActive,
  savedJobsMeta,
  setPage,
  SaveJob,
  UnSaveJob,
  filters,
  setFilters,
}) => {
  const totalPages = [];
  const dispatch = useDispatch();
  const jobsList = useSelector((state) => state?.job?.jobsList?.data);
  const jobsPagination = useSelector((state) => state?.job?.jobsList?.meta);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  for (let i = 1; i < jobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  useEffect(() => {
    setLoading(true);
    dispatch(onDislikePostReasons(setLoading));
  }, []);

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  $(document).mouseup(function (e) {
    if (
      $(e.target).closest(".dislikeJobRreasonsList, #dislike_button").length ===
      0
    ) {
      setDropdownOpen(false);
    }
  });

  return (
    <>
      <Row>
        <Row>
          <Filter
            setLoading={setLoading}
            setFilters={setFilters}
            filters={filters}
          />
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
                      tabActive === "search" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      setTabActive("search");
                    }}
                  >
                    SEARCH
                  </Button>
                </Link>
                <Link to="/freelancer/project-search/saved">
                  <Button
                    variant=""
                    className={`tab_btn_vs ${
                      tabActive === "saved" ? "active_bvs" : ""
                    }`}
                    onClick={() => {
                      setTabActive("saved");
                    }}
                  >
                    SAVED JOBS({savedJobsMeta?.total_item})
                  </Button>
                </Link>
              </div>
            </div>
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
                        <p style={{ wordBreak: "break-word" }}>
                          {item?.description}
                        </p>
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
                        onClick={() => {
                          setDropdownOpen(dropdownOpen ? false : item.id);
                        }}
                        style={{ padding: 0, transform: "rotate(180deg)" }}
                        id="dislike_button"
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
                              <circle
                                cx="26.5"
                                cy="26.5"
                                r="26.5"
                                stroke="none"
                              />
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
                              <circle
                                cx="26.5"
                                cy="26.5"
                                r="26.5"
                                stroke="none"
                              />
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
                          {item.is_proposal_send
                            ? "Proposal Sent"
                            : "Send Proposal"}
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
                        jobsPagination?.current_page == number
                          ? "PageActive"
                          : ""
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
          </Col>
        </Row>

        {jobsList?.length == 0 ? <ResultNotFound /> : null}
      </Row>
    </>
  );
};
export default ProjectSearch;
