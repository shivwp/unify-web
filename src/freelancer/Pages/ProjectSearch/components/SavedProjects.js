import { useState, useEffect, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import star from "../../../../icons/star.svg";
import "../../../../styles/freelancer.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ResultNotFound from "../ResultNotFound";

const SavedProjects = ({
  setLoading,
  setTabActive,
  tabActive,
  savedJobsMeta,
  setPage,
  SaveJob,
  UnSaveJob,
}) => {
  const totalPages = [];
  const dispatch = useDispatch();
  const savedJobsList = useSelector((state) => state?.job?.savedJobsList?.data);

  const savedjobsPagination = useSelector(
    (state) => state?.job?.savedJobsList?.meta
  );

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };

  for (let i = 1; i < savedjobsPagination?.total_page + 1; i++) {
    totalPages.push(i);
  }

  return (
    <>
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
                SAVED JOBS({savedjobsPagination?.total_item})
              </Button>
            </Link>
          </div>
        </div>
        {savedJobsList?.map((item, index) => (
          <div className="job_box_card" key={index}>
            {/* <div className="heat_lef">
              <img src={star} alt="" />
            </div> */}
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
                    <p style={{ wordBreak: "break-word" }}>
                      {item.description}
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

        {savedJobsList?.length == 0 ? (
          <ResultNotFound msg="No saved jobs" />
        ) : null}
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
      </Col>
    </>
  );
};

export default SavedProjects;
