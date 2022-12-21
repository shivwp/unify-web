import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerProfile,
  onDeleteEmployment,
  onDeleteEducation,
  onDeleteCertificate,
  editNameInfo,
  editExprienceLev,
  onDeletePortfolio,
} from "../../../../redux/actions/profileAction";
import moment from "moment";
import HourPerWeekPopup from "../../../components/popups/HourPerWeekPopup";
import PortfolioPupup from "../../../components/popups/PortfolioPupup";
import IntroVideoPopup from "../../../../popups/IntroVideoPopup";
import ReactPaginate from "react-paginate";
import ConfirmationPopup from "../../../components/popups/ConfirmationPopup";
import SuccessPopup from "../../../components/popups/SuccessPopup";
import Form from "react-bootstrap/Form";

import VisiblityPopup from "./popups/VisiblityPopup";
import UserVerification from "./popups/UserVerification";
import WorkHistory from "./popups/WorkHistory";
import EditSkill from "./popups/EditSkill";
import EditTitle from "./popups/EditTitle";
import VideoIntro from "./popups/VideoIntro";
import AddEmployment from "./popups/AddEmployment";
import LanguageEdit from "./popups/LanguageEdit";
import AddEduc from "./popups/AddEduc";
import AddCert from "./popups/AddCert";
import ReqTestimonial from "./popups/ReqTestimonial";
import StarRating from "../../../components/rating/Rating";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ErrorPopup from "../../../components/popups/ErrorPopup";

function PortfolioPaginate({
  itemsPerPage,
  data,
  setPortfolioPopup,
  setEditPortfoData,
  setConfirmPopup,
  confirmPopup,
  setLoading,
}) {
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };
  const deletePortf = (id) => {
    setLoading(true);
    dispatch(onDeletePortfolio({ id: id }, setConfirmPopup, setLoading));
  };

  return (
    <>
      <div className="d-flex ertr4h6j65esdv align-items-center">
        {currentItems?.map((item) => (
          <>
            <div className="portfolio">
              <div className="imgbox_bccp">
                <img src={item.image} alt="" />
                <div className="port_folio_icons">
                  <Button
                    variant=""
                    onClick={() =>
                      setConfirmPopup(
                        <ConfirmationPopup
                          Popup={() => setConfirmPopup(!confirmPopup)}
                          confirm={() => deletePortf(item?.id)}
                        />
                      )
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        id="_2203546_bin_delete_gabage_trash_icon"
                        data-name="2203546_bin_delete_gabage_trash_icon"
                        d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                  <Button
                    variant=""
                    onClick={() => {
                      setPortfolioPopup(true);
                      setEditPortfoData(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.714"
                      viewBox="0 0 15.709 15.714"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.002)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <a href={item.name}>{item.name}</a>
            </div>
          </>
        ))}
        {currentItems?.length == 2 && <div style={{ width: "33.3%" }}></div>}
        {currentItems?.length == 1 && <div style={{ width: "66.6%" }}></div>}
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
    </>
  );
}

const Star = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12.754"
        height="12.165"
        viewBox="0 0 12.754 12.165"
      >
        <path
          id="Path_4730"
          data-name="Path 4730"
          d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
          transform="translate(-3.649 -4.034)"
          fill="#6d2ef1"
        />
      </svg>
    </>
  );
};

const UnifyFreelancer = () => {
  const dispatch = useDispatch();
  let userDetails = JSON.parse(localStorage.getItem("unify_user"));

  const basicInfo = useSelector(
    (state) => state?.profile?.freelancerProfileList?.basic_info
  );
  const freelancerProfileList = useSelector(
    (state) => state?.profile?.freelancerProfileList
  );

  const [showingProImage, setShowingProImage] = useState();
  const [popup, Setpopup] = useState();
  const [hwpPopup, setHwpPopup] = useState(false);
  const [workHistoryTab, setWorkHistoryTab] = useState("completedJobs");
  const [portfolioPopup, setPortfolioPopup] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);
  const [showExprienceLevOpt, setShowExprienceLevOpt] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [editPortfoData, setEditPortfoData] = useState([]);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const deleteExprience = useSelector(
    (state) => state?.profile?.deleteExprience
  );
  const deleteCertificate = useSelector(
    (state) => state?.profile?.deleteCertificate
  );
  const editLanguage = useSelector(
    (state) => state?.profile?.editFreelancerLanguage
  );
  const editVideo = useSelector((state) => state?.profile?.editVideo);
  const editHoursPerWeek = useSelector(
    (state) => state?.profile?.editHoursPerWeek
  );
  const deleteEducation = useSelector(
    (state) => state?.profile?.deleteEducation
  );
  const deletePortfolio = useSelector(
    (state) => state?.profile?.deletePortfolio
  );
  const editCertificate = useSelector(
    (state) => state?.profile?.editCertificate
  );
  const verifyDocs = useSelector((state) => state?.profile?.verifyDocs);
  const profileImgChange = useSelector(
    (state) => state?.profile?.profileImgChange
  );
  const edtiTestimonial = useSelector(
    (state) => state?.profile?.edtiTestimonial
  );
  const editDesignation = useSelector(
    (state) => state?.profile?.editDesignation
  );
  const editProfileVisiblity = useSelector(
    (state) => state?.profile?.editProfileVisiblity
  );
  const editExprienceLevel = useSelector(
    (state) => state?.profile?.editExprienceLevel
  );
  const requestTestimonial = useSelector(
    (state) => state?.profile?.requestTestimonial
  );
  const editPortfolio = useSelector((state) => state?.profile?.editPortfolio);
  const editEducation = useSelector((state) => state?.profile?.editEducation);

  const editSkills = useSelector((state) => state?.profile?.editSkills);

  const addExprience = useSelector((state) => state?.profile?.addExprience);

  useEffect(() => {
    setLoading(true);
    dispatch(getFreelancerProfile(setLoading));
  }, [
    deleteExprience,
    addExprience,
    deleteEducation,
    editLanguage,
    editHoursPerWeek,
    editSkills,
    editCertificate,
    deleteCertificate,
    profileImgChange,
    edtiTestimonial,
    editEducation,
    editDesignation,
    editPortfolio,
    editVideo,
    editProfileVisiblity,
    editExprienceLevel,
    deletePortfolio,
    verifyDocs,
    requestTestimonial,
  ]);

  const deleteExp = (id) => {
    setLoading(true);
    dispatch(onDeleteEmployment({ id }, setConfirmPopup, setLoading));
  };

  const deleteEdu = (id) => {
    setLoading(true);
    dispatch(onDeleteEducation({ id }, setConfirmPopup, setLoading));
  };
  const deleteCert = (id) => {
    setLoading(true);
    dispatch(onDeleteCertificate({ id }, setConfirmPopup, setLoading));
  };

  const onProfleImgChange = (e) => {
    setLoading(true);
    const profileImage = e.target.files[0];
    let errorExit = false;
    if (!profileImage?.name.match(/\.(jpg|jpeg|png)$/)) {
      setErrors({
        ...errors,
        profileImage: "Image type must be JPG, JPEG or PNG format.",
      });
      errorExit = true;
    }
    if (profileImage?.size > 1048576 * 10) {
      setErrors({
        ...errors,
        profileImage: "Image size must be maximum 10 MB",
      });
      errorExit = true;
    }
    if (errorExit) {
      setLoading(false);
      return false;
    }
    setShowingProImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append("first_name", basicInfo?.first_name);
    formData.append("last_name", basicInfo?.last_name);
    formData.append("occcuption", basicInfo?.occuption);
    formData.append("profile_image", profileImage);
    setErrors({ ...errors, profileImage: false });

    dispatch(editNameInfo(formData, successPopup, setSuccessPopup, setLoading));
  };
  const IntroVideoThumb = ({ data }) => {
    let vidId = data?.url?.split("v=")[1]?.substring(0, 11);
    vidId = vidId || data?.url?.split("youtu.be/")[1];

    const thumbnail = data
      ? `https://img.youtube.com/vi/${vidId}/0.jpg`
      : `https://img.youtube.com/vi/0.jpg`;

    useEffect(() => {
      setVideoURL(`https://www.youtube.com/embed/${vidId}?rel=0`);
    }, [data]);

    return (
      <>
        <div
          className="thumbnail"
          style={{
            width: "100%",
            height: "auto",
            margin: "10px 0 10px 0",
            padding: 0,
          }}
        >
          <img
            src={thumbnail}
            style={{ width: "100%", height: "auto" }}
            onClick={() => setVideoPopup(true)}
          />
        </div>
      </>
    );
  };

  const borderNone = {
    border: "unset",
  };

  const handleExprienceLevel = (level) => {
    const data = { experience_level: level };
    setLoading(true);
    dispatch(
      editExprienceLev(
        data,
        setShowExprienceLevOpt,
        successPopup,
        setSuccessPopup,
        setLoading
      )
    );
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#exprience_level_ops").length === 0) {
      setShowExprienceLevOpt(false);
    }
  });

  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="border_bx_sec">
              <div className="flex_profile_frel">
                <div className="profile_box">
                  <div className="user_profile_bg">
                    <img
                      src={
                        basicInfo?.profile_image ||
                        "https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                      }
                    />
                  </div>
                  <Form.Label htmlFor="profile_img_change">
                    <div className="profile_thumb">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <g
                          id="Group_3335"
                          data-name="Group 3335"
                          transform="translate(-340 -2040)"
                        >
                          <g
                            id="Ellipse_684"
                            data-name="Ellipse 684"
                            transform="translate(340 2040)"
                            fill="#fff"
                            stroke="#707070"
                            strokeWidth="1"
                            opacity="0.43"
                          >
                            <circle cx="20" cy="20" r="20" stroke="none" />
                            <circle cx="20" cy="20" r="19.5" fill="none" />
                          </g>
                          <path
                            id="_8665767_pen_icon"
                            data-name="8665767_pen_icon"
                            d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                            transform="translate(353.099 2052.145)"
                            fill="#6d2ef1"
                          />
                        </g>
                      </svg>
                    </div>
                    <Form.Control
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      id="profile_img_change"
                      onChange={(e) => onProfleImgChange(e)}
                      style={{
                        width: 0,
                        height: 0,
                        position: "absolute",
                        padding: 0,
                      }}
                    />
                  </Form.Label>
                </div>

                <div className="han_oad">
                  <div
                    className="freelancer_name font-size-20px"
                    style={{ lineHeight: "25px" }}
                  >
                    {basicInfo && basicInfo.first_name}{" "}
                    {basicInfo && basicInfo.last_name}
                  </div>

                  <div
                    className="freelancer_work"
                    style={{ wordBreak: "break-word" }}
                  >
                    {basicInfo && basicInfo.occuption}
                  </div>
                  <div className="freelance_map">
                    {basicInfo && basicInfo.city},{" "}
                    {basicInfo && basicInfo.country}
                  </div>

                  <div className="flex_stars">
                    {/* <Rating rating={1} /> */}
                    {<StarRating rating={basicInfo?.rating} />}

                    <div className="review_par">
                      <p>Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="uploadImgEror"> {errors.profileImage} </p>
              <div className="profile_pf_btn">
                <Link to="/freelancer/contact-info">
                  <Button variant="">Profile Setting</Button>
                </Link>
              </div>
              <div className="hourly_amout_node flex-wrap">
                <div className="wallet_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wallet2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                </div>
                <div className="hourly_am">
                  <h1>${basicInfo?.amount}</h1> <span>(Per Hourly)</span>
                </div>
              </div>

              <div className="profile_detail">
                <div className="pd_flex flex-wrap">
                  <div className="flex_pt">
                    <div className="pt_title">
                      Total <br />
                      Earning
                    </div>
                    <div className="pt_num pt_n1">
                      ${basicInfo && basicInfo?.total_earning}
                    </div>
                  </div>
                  <div className="flex_pt">
                    <div className="pt_title">
                      Total <br />
                      Jobs
                    </div>
                    <div className="pt_num pt_n2">
                      {basicInfo && basicInfo?.total_jobs}
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
                      {basicInfo && basicInfo?.total_hours}
                    </div>
                  </div>
                  <div className="flex_pt no-border">
                    <div className="pt_title">
                      Pending <br />
                      Projects
                    </div>
                    <div className="pt_num pt_n4">
                      {basicInfo && basicInfo?.pending_project}
                    </div>
                  </div>
                </div>
              </div>
              <div className="myskill_prof_node">
                <div className="intro_video">
                  <div className="myskill_hdingn profile_icon_25px">
                    Video introduction
                    <Button
                      variant=""
                      onClick={() => {
                        Setpopup(
                          <VideoIntro
                            data={freelancerProfileList?.video}
                            Popup={Setpopup}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                            setLoading={setLoading}
                          />
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <path
                          id="_134224_add_plus_new_icon_2_"
                          data-name="134224_add_plus_new_icon (2)"
                          d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                          transform="translate(-2 -2)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </Button>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <IntroVideoThumb data={freelancerProfileList?.video} />
                  </div>
                </div>
                <div
                  className="myskill_hdingn profile_icon_25px profile_heading_mb"
                  style={{ position: "relative" }}
                >
                  Visibility
                  <Button
                    onClick={() => {
                      Setpopup(<VisiblityPopup Popup={Setpopup} />);
                      Setpopup(
                        <VisiblityPopup
                          Popup={Setpopup}
                          data={{
                            visibility: basicInfo?.visibility,
                            project_preference: basicInfo?.project_preference,
                          }}
                          successPopup={successPopup}
                          setSuccessPopup={setSuccessPopup}
                        />
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.714"
                      viewBox="0 0 15.709 15.714"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.002)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                </div>
                <div
                  className="myskill_hdingn ms_hdsmall font-size-15px"
                  style={{ textTransform: "capitalize" }}
                >
                  {basicInfo?.visibility == "public"
                    ? "Public"
                    : basicInfo?.visibility == "private"
                    ? "Private"
                    : basicInfo?.visibility == "unify_users"
                    ? "Only Unify Users"
                    : "Public"}
                </div>
                <div
                  className="myskill_hdingn profile_icon_25px profile_heading_mb"
                  style={{ position: "relative" }}
                >
                  Exprience Level
                  <Button
                    variant=""
                    onClick={() => setShowExprienceLevOpt(!showExprienceLevOpt)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.714"
                      viewBox="0 0 15.709 15.714"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.002)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                  {showExprienceLevOpt && (
                    <>
                      <div
                        id="exprience_level_ops"
                        className="exprience_level_ops"
                      >
                        <span onClick={() => handleExprienceLevel("entry")}>
                          Entry
                        </span>
                        <span
                          onClick={() => handleExprienceLevel("intermediate")}
                        >
                          Intermediate
                        </span>
                        <span onClick={() => handleExprienceLevel("expert")}>
                          Expert
                        </span>
                        <div className="exprience_level_ops_arrow">&#60;</div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="myskill_hdingn ms_hdsmall font-size-15px "
                  style={{ textTransform: "capitalize" }}
                >
                  {basicInfo?.experience_level}
                </div>
                <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                  Hours per week
                  <Button variant="" onClick={() => setHwpPopup(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.714"
                      viewBox="0 0 15.709 15.714"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.002)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                </div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  {freelancerProfileList?.hours_per_week}
                </div>

                <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                  Languages
                  <div className="d-flex justify-content-start">
                    {!freelancerProfileList?.language?.length && (
                      <Button
                        variant=""
                        onClick={() => {
                          Setpopup(
                            <LanguageEdit
                              Popup={Setpopup}
                              successPopup={successPopup}
                              setSuccessPopup={setSuccessPopup}
                              setLoading={setLoading}
                            />
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="_134224_add_plus_new_icon_2_"
                            data-name="134224_add_plus_new_icon (2)"
                            d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                            transform="translate(-2 -2)"
                            fill="#6d2ef1"
                          />
                        </svg>
                      </Button>
                    )}
                    <Button
                      variant=""
                      onClick={() => {
                        Setpopup(
                          <LanguageEdit
                            Popup={Setpopup}
                            data={freelancerProfileList?.language}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                            setLoading={setLoading}
                          />
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15.709"
                        height="15.714"
                        viewBox="0 0 15.709 15.714"
                      >
                        <path
                          id="_8665767_pen_icon"
                          data-name="8665767_pen_icon"
                          d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                          transform="translate(-0.047 0.002)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div style={{ margin: "0 0 10px 0" }} className="ms_hdsmall">
                  {freelancerProfileList?.language?.map((item) => (
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
                  <div className="d-flex justify-content-start">
                    {basicInfo?.is_verified != "approve" &&
                      basicInfo?.is_verified != "requested" && (
                        <Button
                          variant=""
                          onClick={() => {
                            Setpopup(
                              <UserVerification
                                Popup={Setpopup}
                                successPopup={successPopup}
                                setSuccessPopup={setSuccessPopup}
                                setLoading={setLoading}
                              />
                            );
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                          >
                            <path
                              id="_134224_add_plus_new_icon_2_"
                              data-name="134224_add_plus_new_icon (2)"
                              d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                              transform="translate(-2 -2)"
                              fill="#6d2ef1"
                            />
                          </svg>
                        </Button>
                      )}
                  </div>
                </div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  ID:{" "}
                  {basicInfo?.is_verified == "approve" ? (
                    <>
                      <span> Verified</span>
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
                {/* <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  Hannah Finn
                </div> */}
                <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                  Education
                  <div className="d-flex justify-content-start">
                    <Button
                      variant=""
                      onClick={() => {
                        Setpopup(
                          <AddEduc
                            Popup={Setpopup}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                            setLoading={setLoading}
                          />
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <path
                          id="_134224_add_plus_new_icon_2_"
                          data-name="134224_add_plus_new_icon (2)"
                          d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                          transform="translate(-2 -2)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div
                  className="myskill_hdingn profile_icon_25px ms_hdsmall font-size-15px"
                  style={{ flexDirection: "column" }}
                >
                  {freelancerProfileList?.education?.map((edu) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 5,
                        }}
                      >
                        <div>
                          {edu?.school}, {edu?.area_study}
                          {moment(edu.date).format("YYYY")}
                        </div>
                        <div className="d-flex justify-content-start">
                          <figure></figure>
                          <Button
                            variant=""
                            onClick={() => {
                              Setpopup(
                                <AddEduc
                                  education={edu}
                                  Popup={Setpopup}
                                  successPopup={successPopup}
                                  setSuccessPopup={setSuccessPopup}
                                  setLoading={setLoading}
                                />
                              );
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15.709"
                              height="15.714"
                              viewBox="0 0 15.709 15.714"
                            >
                              <path
                                id="_8665767_pen_icon"
                                data-name="8665767_pen_icon"
                                d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                                transform="translate(-0.047 0.002)"
                                fill="#6d2ef1"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant=""
                            onClick={() =>
                              setConfirmPopup(
                                <ConfirmationPopup
                                  Popup={() => setConfirmPopup(!confirmPopup)}
                                  confirm={() => deleteEdu(edu?.id)}
                                />
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            >
                              <path
                                id="_2203546_bin_delete_gabage_trash_icon"
                                data-name="2203546_bin_delete_gabage_trash_icon"
                                d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                                fill="#6d2ef1"
                              />
                            </svg>
                          </Button>
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
                    <div className="freelancer_work p-0">October 5, 2020</div>
                  </div>
                </div>
              </div>
              <div className="profileDiploma mb-4 mt-2">
                <div className="mt-2">
                  <img src="/assets/diplomaAward.png" className="DiplomaImg" />
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
                    <div className="freelancer_work p-0">October 5, 2020</div>
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
                <div className="myskill_hdingn">
                  <Button
                    variant=""
                    onClick={() => {
                      Setpopup(
                        <EditTitle
                          data={{
                            occuption: basicInfo.occuption,
                            description: basicInfo.description,
                          }}
                          Popup={Setpopup}
                          successPopup={successPopup}
                          setSuccessPopup={setSuccessPopup}
                          setLoading={setLoading}
                        />
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.709"
                      height="15.715"
                      viewBox="0 0 15.709 15.715"
                    >
                      <path
                        id="_8665767_pen_icon"
                        data-name="8665767_pen_icon"
                        d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                        transform="translate(-0.047 0.003)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
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
                      workHistoryTab === "inProgress" ? "activetabbar_btn" : ""
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
                  Portfolio ({freelancerProfileList?.portfolio.length})
                </div>
                <div className="myskill_hdingn">
                  <Button
                    variant=""
                    onClick={() => {
                      setPortfolioPopup(true);
                      setEditPortfoData([]);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <PortfolioPaginate
                itemsPerPage={3}
                setEditPortfoData={setEditPortfoData}
                setPortfolioPopup={setPortfolioPopup}
                confirmPopup={confirmPopup}
                setConfirmPopup={setConfirmPopup}
                data={freelancerProfileList?.portfolio}
                setLoading={setLoading}
              />
            </div>

            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Skills</div>
                <div className="myskill_hdingn">
                  <Button
                    variant=""
                    onClick={() => {
                      Setpopup(
                        <EditSkill
                          Popup={Setpopup}
                          data={freelancerProfileList?.skills}
                          setSuccessPopup={setSuccessPopup}
                          successPopup={successPopup}
                          setLoading={setLoading}
                        />
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="d-flex flex-wrap">
                  {freelancerProfileList?.skills?.map((skill, key) => (
                    <div className="skill_bxr_gry" key={key}>
                      {skill.skill_name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="box-profile-bck">
              <div className="d-flex justify-content-end myskill_hdingn">
                <Button
                  variant=""
                  onClick={() => {
                    Setpopup(
                      <ReqTestimonial
                        Popup={Setpopup}
                        successPopup={successPopup}
                        setSuccessPopup={setSuccessPopup}
                        setLoading={setLoading}
                      />
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                  >
                    <path
                      id="_134224_add_plus_new_icon_2_"
                      data-name="134224_add_plus_new_icon (2)"
                      d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                      transform="translate(-2 -2)"
                      fill="#6d2ef1"
                    />
                  </svg>
                </Button>
              </div>
              <div className="bpbck_txt">
                <div className="bpck_head">Testimonials</div>
                <div className="bpck_para">Endorsements from past clients</div>
              </div>
              {freelancerProfileList?.testimonial?.map((item, index) => (
                <>
                  {item.status == "approve" && (
                    <div className="freelancer_testimonials my-2 mt-4">
                      <div
                        className="testimonial_box"
                        style={
                          freelancerProfileList?.testimonial?.length - 1 ==
                          index
                            ? borderNone
                            : {}
                        }
                      >
                        <Row>
                          <Col lg={12}>
                            <div className="reviews testimonials_head ">
                              <div className="f_user_name">{`${item.first_name} ${item.last_name}`}</div>
                              <span className="testimonial_time">
                                {moment
                                  .utc(item.request_sent)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </span>
                            </div>
                            <div
                              className="testimonial_description"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {item.description}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  )}
                  {item.status == "pending" && (
                    <div className="freelancer_testimonials my-2 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          borderBottom: " 1px solid #d5d5d5",
                          marginBottom: 5,
                        }}
                      >
                        <div className="testimonial_description my-1">
                          <i className="fa fa-history" aria-hidden="true"></i>
                          {` ${item.message}`}
                        </div>
                        <div>
                          <span className="ps-2" style={{ color: "#62646a" }}>
                            {moment
                              .utc(item.request_sent)
                              .local()
                              .startOf("seconds")
                              .fromNow()}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
            <div className="box-profile-bck">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="bpbck_txt" style={{ marginTop: 0 }}>
                  <div className="bpck_head">Certifications</div>
                </div>
                <div className="myskill_hdingn">
                  <Button
                    variant=""
                    onClick={() => {
                      Setpopup(
                        <AddCert
                          Popup={Setpopup}
                          successPopup={successPopup}
                          setSuccessPopup={setSuccessPopup}
                          setLoading={setLoading}
                        />
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                    >
                      <path
                        id="_134224_add_plus_new_icon_2_"
                        data-name="134224_add_plus_new_icon (2)"
                        d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                        transform="translate(-2 -2)"
                        fill="#6d2ef1"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              {freelancerProfileList?.certificates?.map((item, key) => (
                <div key={key} className="ms-4">
                  <div className="bpck_sm_txt_a mt-3 ehistory_uxdes">
                    {item.name}
                  </div>
                  <div className="ehitory_dtine">{item.description}</div>

                  <div className="bpck_sm_txt_a mt-4 mb-0">
                    <div className="d-flex myskill_hdingn mb-0">
                      <Button
                        variant=""
                        className="m-0"
                        onClick={() => {
                          Setpopup(
                            <AddCert
                              certificates={item}
                              Popup={Setpopup}
                              successPopup={successPopup}
                              setSuccessPopup={setSuccessPopup}
                              setLoading={setLoading}
                            />
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.709"
                          height="15.714"
                          viewBox="0 0 15.709 15.714"
                        >
                          <path
                            id="_8665767_pen_icon"
                            data-name="8665767_pen_icon"
                            d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                            transform="translate(-0.047 0.002)"
                            fill="#6d2ef1"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant=""
                        onClick={() =>
                          setConfirmPopup(
                            <ConfirmationPopup
                              Popup={() => setConfirmPopup(!confirmPopup)}
                              confirm={() => deleteCert(item.id)}
                            />
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <path
                            id="_2203546_bin_delete_gabage_trash_icon"
                            data-name="2203546_bin_delete_gabage_trash_icon"
                            d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                            fill="#6d2ef1"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              {freelancerProfileList?.certificates?.length == 0 && (
                <div className="d-flex justify-content-center flex-column text-center">
                  <div className="">
                    <img src="/assets/Graduate.png" alt="" />
                  </div>
                  <div className="bpck_sm_txt_a mt-4">
                    Listing your certifications can help prove your specific
                    knowledge or abilities. (+10%)
                    <br />
                    You can add them manually
                  </div>
                  <div className="bpck_sm_txt_a">
                    <Link
                      to=""
                      onClick={() => {
                        Setpopup(<AddCert Popup={Setpopup} />);
                      }}
                    >
                      Add manually
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Row>
              <Col md={12}>
                <div className="box-profile-bck minei400">
                  <div className="d-flex justify-content-end myskill_hdingn">
                    <Button
                      variant=""
                      onClick={() => {
                        Setpopup(
                          <AddEmployment
                            Popup={Setpopup}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                            setLoading={setLoading}
                          />
                        );
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                      >
                        <path
                          id="_134224_add_plus_new_icon_2_"
                          data-name="134224_add_plus_new_icon (2)"
                          d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                          transform="translate(-2 -2)"
                          fill="#6d2ef1"
                        />
                      </svg>
                    </Button>
                  </div>
                  <div className="bpbck_txt">
                    <div
                      className="bpck_head font-weight-600"
                      onClick={() =>
                        setConfirmPopup(
                          <SuccessPopup
                            Popup={() => setSuccessPopup(!successPopup)}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                          />
                        )
                      }
                    ></div>
                    <div className="bpck_head font-weight-600">
                      Employment history
                    </div>
                    {freelancerProfileList?.employment?.length == 0 && (
                      <div className="d-flex justify-content-center align-items-center flex-column pl-20">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 80,
                            height: 80,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="109.081"
                            height="96.833"
                            viewBox="0 0 109.081 96.833"
                          >
                            <g id="employee" transform="translate(-8)">
                              <circle
                                id="Ellipse_741"
                                data-name="Ellipse 741"
                                cx="28.976"
                                cy="28.976"
                                r="28.976"
                                transform="translate(59.128 17.978)"
                                fill="#6d2ef1"
                                opacity="0.23"
                              />
                              <path
                                id="Path_4784"
                                data-name="Path 4784"
                                d="M8,85.477v19.669a4.544,4.544,0,0,0,4.539,4.539H88.19a4.544,4.544,0,0,0,4.539-4.539V85.477a33.336,33.336,0,0,0-27.069-32.7,24.3,24.3,0,0,1-3.78,2.542A30.3,30.3,0,0,1,89.7,85.477v19.669a1.515,1.515,0,0,1-1.513,1.513H12.539a1.515,1.515,0,0,1-1.513-1.513V85.477A30.3,30.3,0,0,1,38.848,55.323a24.3,24.3,0,0,1-3.78-2.542A33.336,33.336,0,0,0,8,85.476Z"
                                transform="translate(0 -12.852)"
                                fill="#25134a"
                              />
                              <path
                                id="Path_4785"
                                data-name="Path 4785"
                                d="M78.364,21.182A21.182,21.182,0,1,0,57.182,42.364,21.182,21.182,0,0,0,78.364,21.182ZM57.182,45.39a24.132,24.132,0,0,1-6.511-.9h0L46.6,77.622a1.514,1.514,0,0,0,.725,1.483l9.037,5.409a1.512,1.512,0,0,0,1.549,0l9.119-5.409a1.513,1.513,0,0,0,.73-1.486L63.693,44.494h0a24.133,24.133,0,0,1-6.511.9Z"
                                transform="translate(-6.818)"
                                fill="#6d2ef1"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="bpck_sm_txt_a mt-4 ehistory_uxdes">
                          Eoxys IT | ReactJS Developer`
                        </div>
                        <div className="ehitory_dtine">
                          21-April-2022 To 24-Oct-2022
                        </div>
                      </div>
                    )}
                    <div className="d-flex justify-content-center flex-column ">
                      {freelancerProfileList?.employment?.map(
                        (experience, key) => (
                          <div key={key}>
                            <div className="bpck_sm_txt_a mt-4 ehistory_uxdes">
                              {`${experience.subject || ""} | ${
                                experience.company
                              }`}
                            </div>
                            <div className="ehitory_dtine">
                              {moment(experience.start_date).format(
                                "DD MMM YYYY"
                              )}{" "}
                              -{" "}
                              {experience.currently_working
                                ? "Currently Working"
                                : moment(experience.end_date).format(
                                    "DD MMM YYYY"
                                  )}
                            </div>
                            <div className="ehitory_dtine">
                              {`${experience.description}`}
                            </div>

                            <div className="bpck_sm_txt_a mt-4 mb-0">
                              <div className="d-flex myskill_hdingn mb-0">
                                <Button
                                  variant=""
                                  className="m-0"
                                  onClick={(e) => {
                                    Setpopup(
                                      <AddEmployment
                                        Popup={Setpopup}
                                        experience={experience}
                                        successPopup={successPopup}
                                        setSuccessPopup={setSuccessPopup}
                                        setLoading={setLoading}
                                      />
                                    );
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15.709"
                                    height="15.714"
                                    viewBox="0 0 15.709 15.714"
                                  >
                                    <path
                                      id="_8665767_pen_icon"
                                      data-name="8665767_pen_icon"
                                      d="M15.327,2.274,13.482.429a1.475,1.475,0,0,0-2.085,0L9.662,2.165l3.9,3.929L15.3,4.358A1.447,1.447,0,0,0,15.327,2.274Zm-6.356.585L1,10.83a.491.491,0,0,0-.134.251L.057,15.123a.491.491,0,0,0,.576.58l4.042-.808a.491.491,0,0,0,.251-.134L12.9,6.789Z"
                                      transform="translate(-0.047 0.002)"
                                      fill="#6d2ef1"
                                    />
                                  </svg>
                                </Button>
                                <Button
                                  variant=""
                                  onClick={() =>
                                    setConfirmPopup(
                                      <ConfirmationPopup
                                        Popup={() =>
                                          setConfirmPopup(!confirmPopup)
                                        }
                                        confirm={() => deleteExp(experience.id)}
                                      />
                                    )
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      id="_2203546_bin_delete_gabage_trash_icon"
                                      data-name="2203546_bin_delete_gabage_trash_icon"
                                      d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                                      fill="#6d2ef1"
                                    />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {hwpPopup && (
        <HourPerWeekPopup
          open={hwpPopup}
          onCloseModal={() => setHwpPopup(false)}
          setSuccessPopup={setSuccessPopup}
          successPopup={successPopup}
          amount={basicInfo?.amount}
          hours_per_week={freelancerProfileList?.hours_per_week}
          hours_per_week_id={freelancerProfileList?.hours_per_week_id}
          setLoading={setLoading}
        />
      )}
      {portfolioPopup && (
        <PortfolioPupup
          open={portfolioPopup}
          onCloseModal={() => setPortfolioPopup(false)}
          data={editPortfoData}
          setSuccessPopup={setSuccessPopup}
          successPopup={successPopup}
          setLoading={setLoading}
        />
      )}
      {videoPopup && (
        <IntroVideoPopup
          open={videoPopup}
          onCloseModal={() => setVideoPopup(false)}
          videoUrl={videoURL}
        />
      )}
      {loading ? <LoadingSpinner /> : null}
      {popup}
      {confirmPopup}
      {successPopup}
      {errorPopup}
    </div>
  );
};
export default UnifyFreelancer;
