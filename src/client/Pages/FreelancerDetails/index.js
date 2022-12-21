import Layout from "../../Layout/Layout";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ReactPaginate from "react-paginate";
import Form from "react-bootstrap/Form";
import { getSingleFreelancer } from "../../../redux/actions/freelancerAction";
import StarRating from "../../../freelancer/components/rating/Rating";
import WorkHistory from "../../../freelancer/Pages/Profile/components/popups/WorkHistory";

const Screen = () => {
  const { freelancer_id } = useParams();
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);
  const [workHistoryTab, setWorkHistoryTab] = useState("completedJobs");
  const basicInfo = useSelector(
    (state) => state?.freelancer?.singleFreelancer?.basic_info
  );
  const singleFreelancer = useSelector(
    (state) => state.freelancer.singleFreelancer
  );
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 3;
    setCurrentItems(singleFreelancer?.portfolio?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(singleFreelancer?.portfolio?.length / 3));
  }, [itemOffset, singleFreelancer?.portfolio]);

  useEffect(() => {
    dispatch(getSingleFreelancer(freelancer_id));
  }, []);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * 3) % singleFreelancer?.portfolio?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="slider_pos nin_vh">
      <Layout webtype="client">
        <div className="mt-5 mb-5">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="border_bx_sec">
                  <div className="flex_profile_frel">
                    <div className="profile_box">
                      <div className="user_profile_bg">
                        <img src={basicInfo?.profile_image} />
                      </div>
                    </div>

                    <div className="han_oad">
                      <div
                        className="freelancer_name font-size-20px"
                        style={{ lineHeight: "25px" }}
                      >
                        {basicInfo?.first_name} {basicInfo?.last_name}
                      </div>

                      <div
                        className="freelancer_work"
                        style={{ wordBreak: "break-word" }}
                      >
                        {basicInfo?.occuption}
                      </div>
                      <div className="freelance_map">
                        {basicInfo?.city},{basicInfo?.country}
                      </div>

                      <div className="flex_stars">
                        {<StarRating rating={basicInfo?.rating} />}

                        <div className="review_par">
                          <p>Reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile_pf_btn">
                    <Button variant="">Hire</Button>
                  </div>

                  <div className="profile_detail">
                    <div className="pd_flex flex-wrap">
                      <div className="flex_pt">
                        <div className="pt_title">
                          Total <br />
                          Earning
                        </div>
                        <div className="pt_num pt_n1">
                          {basicInfo?.total_earning}
                        </div>
                      </div>
                      <div className="flex_pt">
                        <div className="pt_title">
                          Total <br />
                          Jobs
                        </div>
                        <div className="pt_num pt_n2">
                          {basicInfo?.total_jobs}
                        </div>
                      </div>
                    </div>
                    <div className="pd_flex flex-wrap">
                      <div className="flex_pt no-border">
                        <div className="pt_title">
                          Total <br />
                          Hours
                        </div>
                        <div className="pt_num pt_n3">
                          {basicInfo?.total_hours}
                        </div>
                      </div>
                      <div className="flex_pt no-border">
                        <div className="pt_title">
                          Pending <br />
                          Projects
                        </div>
                        <div className="pt_num pt_n4">
                          {basicInfo?.pending_project}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="myskill_prof_node">
                    <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                      Hours per week
                    </div>
                    <div className="myskill_hdingn ms_hdsmall font-size-15px">
                      {basicInfo?.hours_per_week}
                    </div>

                    <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                      Languages
                      <div className="d-flex justify-content-start"></div>
                    </div>
                    <div
                      style={{ margin: "0 0 10px 0" }}
                      className="ms_hdsmall"
                    >
                      {singleFreelancer?.language?.map((item) => (
                        <>
                          <span style={{ textTransform: "capitalize" }}>
                            {item.language}
                          </span>{" "}
                          :{" "}
                          <span style={{ textTransform: "capitalize" }}>
                            {item.level}
                          </span>
                          <br />
                        </>
                      ))}
                    </div>
                    <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                      Verification
                      <div className="d-flex justify-content-start"></div>
                    </div>
                    <div className="myskill_hdingn ms_hdsmall font-size-15px">
                      ID:{" "}
                      {basicInfo?.is_verified == "approve" ? (
                        <>
                          <span>Verified</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svgverifie"
                            width="17.079"
                            height="17.869"
                            viewBox="0 0 17.079 17.869"
                          >
                            <path
                              id="Path_4727"
                              data-name="Path 4727"
                              d="M16.911,10.258a2.235,2.235,0,0,1,0-2.623l.566-.782a.745.745,0,0,0,.1-.671.759.759,0,0,0-.477-.477l-.917-.3a2.226,2.226,0,0,1-1.542-2.124V2.315a.745.745,0,0,0-.976-.708l-.924.3a2.235,2.235,0,0,1-2.5-.812L9.683.311a.772.772,0,0,0-1.207,0l-.566.782a2.235,2.235,0,0,1-2.5.812l-.924-.3a.745.745,0,0,0-.976.708v.969A2.226,2.226,0,0,1,1.971,5.407l-.917.3a.759.759,0,0,0-.477.477.745.745,0,0,0,.1.671l.566.782a2.235,2.235,0,0,1,0,2.623l-.566.782a.745.745,0,0,0-.1.671.759.759,0,0,0,.477.477l.917.3A2.226,2.226,0,0,1,3.513,14.61v.969a.745.745,0,0,0,.976.708l.917-.3a2.231,2.231,0,0,1,2.5.812l.566.782a.749.749,0,0,0,1.207,0l.566-.782a2.235,2.235,0,0,1,2.5-.812l.917.3a.745.745,0,0,0,.976-.708V14.61a2.226,2.226,0,0,1,1.542-2.124l.917-.3a.759.759,0,0,0,.477-.477.745.745,0,0,0-.1-.671ZM12.589,7.983,8.863,11.709a.745.745,0,0,1-1.054,0L5.574,9.474A.745.745,0,1,1,6.628,8.42l1.706,1.709,3.2-3.2a.745.745,0,1,1,1.054,1.054Z"
                              transform="translate(-0.54 -0.02)"
                              fill="#6d2ef1"
                            />
                          </svg>
                        </>
                      ) : basicInfo?.is_verified == "pending" ? (
                        "Pending"
                      ) : basicInfo?.is_verified == "reject" ? (
                        "Rejected"
                      ) : (
                        "Requested"
                      )}
                    </div>
                    <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                      Education
                      <div className="d-flex justify-content-start"></div>
                    </div>
                    <div
                      className="myskill_hdingn profile_icon_25px ms_hdsmall font-size-15px"
                      style={{ flexDirection: "column" }}
                    >
                      {singleFreelancer?.education?.map((edu) => (
                        <>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: 5,
                            }}
                          >
                            <div>
                              {edu?.school}, {edu?.area_study}{" "}
                              {moment(edu.date).format("YYYY")}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="profileDiplomaBottom">
                    <div className="intro_video">
                      <div className="myskill_hdingn profile_icon_25px">
                        Diplomas, certificates
                      </div>
                    </div>
                    <div className="profileDiploma">
                      <div className="mt-2">
                        <img
                          src="/assets/diplomaAward.png"
                          className="DiplomaImg"
                        />
                      </div>
                      <div>
                        <div className="myskill_hdingn ms_hdsmall font-size-15px">
                          Unify Accreditations
                        </div>
                        <div className="freelancer_work p-0">
                          October 5, 2020
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profileDiploma mb-4 mt-2">
                    <div className="mt-2">
                      <img
                        src="/assets/diplomaAward.png"
                        className="DiplomaImg"
                      />
                    </div>
                    <div>
                      <div className="myskill_hdingn ms_hdsmall font-size-15px">
                        Unify Accreditations
                      </div>
                      <div className="freelancer_work p-0">October 5, 2020</div>
                    </div>
                  </div>
                  <div className="profileDiplomaBottom">
                    <div className="intro_video">
                      <div className="myskill_hdingn profile_icon_25px">
                        Unify Accreditations
                      </div>
                    </div>
                    <div className="profileDiploma">
                      <div className="mt-2">
                        <img src="/assets/shield.png" className="DiplomaImg" />
                      </div>
                      <div>
                        <div className="myskill_hdingn ms_hdsmall font-size-15px">
                          Unify Accreditations
                        </div>
                        <div className="freelancer_work p-0">
                          October 5, 2020
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profileDiploma mb-4 mt-2">
                    <div className="mt-2">
                      <img src="/assets/shield.png" className="DiplomaImg" />
                    </div>
                    <div>
                      <div className="myskill_hdingn ms_hdsmall font-size-15px">
                        Unify Accreditations
                      </div>
                      <div className="freelancer_work p-0">October 5, 2020</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={9}>
                <div className="box-profile-bck mb-0">
                  <div className="bpbck_txt d-flex mt-0">
                    <div
                      className="bpck_head font-weight-500 line-height-30"
                      style={{ wordBreak: "break-word" }}
                    >
                      {basicInfo?.occuption}
                    </div>
                  </div>
                  <div className="d-flex mt-3">
                    <div
                      className="descri_pfro"
                      style={{ wordBreak: "break-word" }}
                    >
                      {showDescription
                        ? basicInfo?.description
                        : basicInfo?.description?.slice(0, 300)}
                      <br />
                      {basicInfo?.description?.length > 300 ? (
                        <span
                          className="show_more_description"
                          onClick={() => setShowDescription(!showDescription)}
                        >
                          {showDescription ? "show less" : "show more"}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="box-profile-bck mb-0">
                  <div className="bpbck_txt d-flex mt-0">
                    <div className="bpck_head font-weight-500 line-height-30">
                      Work History
                    </div>
                  </div>
                  <div>
                    <div className="tabbar_profle">
                      <Button
                        variant=""
                        onClick={() => setWorkHistoryTab("completedJobs")}
                        className={
                          workHistoryTab === "completedJobs"
                            ? "activetabbar_btn"
                            : ""
                        }
                      >
                        Commpleted Jobs (2)
                      </Button>
                      <Button
                        variant=""
                        onClick={() => setWorkHistoryTab("inProgress")}
                        className={
                          workHistoryTab === "inProgress"
                            ? "activetabbar_btn"
                            : ""
                        }
                      >
                        In Progress (1)
                      </Button>
                    </div>
                    <WorkHistory />
                  </div>
                </div>
                <div className="box-profile-bck mb-0">
                  <div className="bpbck_txt d-flex mt-0">
                    <div className="bpck_head">
                      Portfolio ({singleFreelancer?.portfolio?.length})
                    </div>
                  </div>
                  <div className="d-flex ertr4h6j65esdv align-items-center">
                    {currentItems?.map((item) => (
                      <>
                        <div className="portfolio">
                          <div className="imgbox_bccp">
                            <img src={item.image} alt="" />
                          </div>
                          <a href={item.name}>{item.name}</a>
                        </div>
                      </>
                    ))}
                    {currentItems?.length == 2 && (
                      <div style={{ width: "33.3%" }}></div>
                    )}
                    {currentItems?.length == 1 && (
                      <div style={{ width: "66.6%" }}></div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      height: 50,
                      alignItems: "center",
                    }}
                  >
                    <ReactPaginate
                      breakLabel="..."
                      className="portfolioPaginate"
                      pageClassName="portfolioPageCount"
                      nextClassName="paginationNext"
                      previousClassName="paginationPrev"
                      previousLinkClassName="paginationPrevA"
                      nextLinkClassName="paginationNextA"
                      disabledClassName="disablePaginateBtn"
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageCount}
                      previousLabel="<"
                      renderOnZeroPageCount={null}
                    />
                  </div>
                </div>

                <div className="box-profile-bck mb-0">
                  <div className="bpbck_txt d-flex mt-0">
                    <div className="bpck_head">Skills</div>
                  </div>
                  <div className="d-flex justify-content-center flex-column text-center">
                    <div className="d-flex flex-wrap">
                      {singleFreelancer?.skills?.map((skill, key) => (
                        <div className="skill_bxr_gry" key={key}>
                          {skill.skill_name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default Screen;
