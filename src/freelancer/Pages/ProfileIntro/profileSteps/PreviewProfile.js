import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  editNameInfo,
  onDeleteEducation,
  onDeleteEmployment,
} from "../../../../redux/actions/profileAction";
import ConfirmationPopup from "../../../components/popups/ConfirmationPopup";
import PortfolioPupup from "../../../components/popups/PortfolioPupup";
import SuccessPopup from "../../../components/popups/SuccessPopup";
import AddEduc from "../../Profile/components/popups/AddEduc";
import AddEmployment from "../../Profile/components/popups/AddEmployment";
import EditSkill from "../../Profile/components/popups/EditSkill";
import EditTitle from "../../Profile/components/popups/EditTitle";
import HourlyRatePopup from "../../Profile/components/popups/HourlyRatePopup";
import LanguageEdit from "../../Profile/components/popups/LanguageEdit";

const PreviewProfile = ({ setCurrentTab, profileList }) => {
  const [showingImage, setShowingImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [popup, Setpopup] = useState();
  const [successPopup, setSuccessPopup] = useState();
  const [confirmPopup, setConfirmPopup] = useState();
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setShowingImage(profileList?.basic_info?.profile_image);
  }, [profileList]);

  const deleteExp = (id) => {
    dispatch(onDeleteEmployment({ id }, setConfirmPopup));
  };

  const deleteEdu = (id) => {
    dispatch(onDeleteEducation({ id }, setConfirmPopup));
  };

  const onProfleImgChange = (e) => {
    const profileImage = e.target.files[0];
    setShowingImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();

    formData.append("first_name", profileList?.basic_info?.first_name);
    formData.append("last_name", profileList?.basic_info?.last_name);
    formData.append("occcuption", profileList?.basic_info?.occuption);
    formData.append("profile_image", profileImage);

    dispatch(editNameInfo(formData, successPopup, setSuccessPopup));
  };

  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="startIntroIn">
            <div className="pbx_pdd_sp2 mt-1 mb-1">
              <h5 className="startIntroTwoH5">Preview Profile</h5>
            </div>
            <Row className="previewFirstDiv mt-3">
              <Col sm={10}>
                <div className="hraet_pdd_sp">
                  You're almost there, {profileList?.basic_info?.first_name}
                </div>
                <div className="previewProfileDate">
                  Please review your information below to check it's accurate
                  and then submit your profile. Our team will verify it behind
                  the scenes and let you know once it's ready. You can make
                  changes later on once you're live on the platform.
                </div>
                <Link to="/subscription">
                  <button className="priviewSubmitButton">
                    Submit Profile
                  </button>
                </Link>
              </Col>
              <Col sm={2} className="previewProfileThumbsIco">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 193 193"
                >
                  <g
                    id="Group_3599"
                    data-name="Group 3599"
                    transform="translate(-1595 -383)"
                  >
                    <circle
                      id="Ellipse_754"
                      data-name="Ellipse 754"
                      cx="96.5"
                      cy="96.5"
                      r="96.5"
                      transform="translate(1595 383)"
                      fill="#f8e7f7"
                    />
                    <path
                      id="like-button"
                      d="M58.085,9.966a1.472,1.472,0,0,1-1.041-2.514l2.718-2.718a1.472,1.472,0,1,1,2.082,2.082L59.126,9.535a1.467,1.467,0,0,1-1.041.431Zm7.024,4.758a1.519,1.519,0,0,1-.265-.024l-3.322-.6a1.473,1.473,0,0,1,.527-2.9l3.322.6a1.473,1.473,0,0,1-.262,2.921ZM53.93,6.266a1.473,1.473,0,0,1-1.447-1.209l-.6-3.322a1.472,1.472,0,1,1,2.9-.526l.6,3.322a1.472,1.472,0,0,1-1.185,1.712A1.453,1.453,0,0,1,53.93,6.266ZM11.453,84.7a1.472,1.472,0,1,1,2.082,2.082L10.817,89.5a1.5,1.5,0,0,1-2.082,0,1.472,1.472,0,0,1,0-2.082ZM5.736,79.536l3.322.6A1.472,1.472,0,0,1,8.8,83.061a1.516,1.516,0,0,1-.265-.024l-3.322-.6a1.472,1.472,0,1,1,.526-2.9Zm10.649,8.457A1.469,1.469,0,0,1,18.1,89.179l.6,3.322a1.472,1.472,0,0,1-1.186,1.712,1.514,1.514,0,0,1-.265.024A1.473,1.473,0,0,1,15.8,93.027L15.2,89.7a1.472,1.472,0,0,1,1.186-1.712Zm52.536-3.938c-.236.022-4.278-.1-4.344-.088a8.568,8.568,0,0,0-1.421.906,11.723,11.723,0,0,1-3.4,1.855,3.271,3.271,0,0,1-.847.125L24.46,86.86a8.094,8.094,0,0,1-7.922-8.231,8.556,8.556,0,0,1,.751-3.512,8.318,8.318,0,0,1-3.828-7.053,8.468,8.468,0,0,1,.942-3.909,8.322,8.322,0,0,1-3.262-6.648,8.44,8.44,0,0,1,1.023-4.057A8.33,8.33,0,0,1,9.153,47c0-4.4,2.893-7.244,7.362-7.244H38.389c-1.171-4.889-2.349-11.964-2.187-13.642.4-4.02,1.318-13.421,7.245-16.337a7.877,7.877,0,0,1,6.339-.456,8.841,8.841,0,0,1,2.724,1.686c3.173,2.842,3,6.7,2.857,9.792-.022.633-.052,1.222-.052,1.782v3.269c.339,2.26,9.637,18.531,9.976,19.149.7.412,2.054,1.134,3.5,1.885v-.214a5.529,5.529,0,0,1,5.6-5.441H86.752a5.529,5.529,0,0,1,5.6,5.441V82.9a5.53,5.53,0,0,1-5.6,5.448H74.384a5.563,5.563,0,0,1-5.463-4.292Zm-.133-33.867a54.534,54.534,0,0,1-5.794-3.2C62.361,45.469,52.37,29.14,52.37,25.922V22.58c0-3.3.81-7.024-1.811-9.372A5.14,5.14,0,0,0,47.4,11.787a5.535,5.535,0,0,0-2.65.626c-4.241,2.091-5.19,9.645-5.61,13.981-.228,2.319,2.547,15.431,3.144,16.307H16.516c-2.761,0-4.417,1.377-4.417,4.3a5.336,5.336,0,0,0,2.43,4.535H24.614a1.472,1.472,0,0,1,0,2.945H14.992a5.467,5.467,0,0,0-.906,3.026,5.369,5.369,0,0,0,2.142,4.336h8.386a1.472,1.472,0,1,1,0,2.945H17.48a5.476,5.476,0,0,0-1.075,3.276,5.3,5.3,0,0,0,2.952,4.83c.037,0,.066-.007.1-.007h5.154a1.472,1.472,0,0,1,0,2.945H20.241a5.484,5.484,0,0,0-.758,2.8,5.133,5.133,0,0,0,4.977,5.286l34.448-.007c1.73-.523,3.011-2.061,4.668-2.717A3.971,3.971,0,0,1,65,81c1,0,3.6.133,3.792.118Zm11.78,30.8a4.417,4.417,0,1,0-4.417-4.417,4.417,4.417,0,0,0,4.417,4.417Z"
                      transform="translate(1643 432.002)"
                      fill="#645d74"
                    />
                    <circle
                      id="Ellipse_755"
                      data-name="Ellipse 755"
                      cx="3.5"
                      cy="3.5"
                      r="3.5"
                      transform="translate(1633 439)"
                      fill="#cfb0f5"
                    />
                    <circle
                      id="Ellipse_756"
                      data-name="Ellipse 756"
                      cx="2.5"
                      cy="2.5"
                      r="2.5"
                      transform="translate(1722 549)"
                      fill="#cfb0f5"
                    />
                  </g>
                </svg>
              </Col>
            </Row>
          </div>
          <div className="startIntroIn">
            <div className="pbx_pdd_sp2 mb-1"></div>
            <Row className="mt-3">
              <Col sm={2}>
                <div className="previewImageIcon publishPhotoImg">
                  <div className="image_to_show">
                    {showingImage ? (
                      <img
                        src={showingImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 170 170"
                      >
                        <path
                          id="user_1_"
                          data-name="user (1)"
                          d="M87,172A85,85,0,1,0,2,87,85,85,0,0,0,87,172ZM112.5,70A25.5,25.5,0,1,1,87,44.5,25.5,25.5,0,0,1,112.5,70ZM36,129.5a63.75,63.75,0,0,1,102,0,63.75,63.75,0,0,1-102,0Z"
                          transform="translate(-2 -2)"
                          fill="#dedede"
                          fillRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <label
                    htmlFor="selectImg"
                    className="priviewProfile_button ml-0"
                  >
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      name="profile_image"
                      id="selectImg"
                      style={{ display: "none" }}
                      onChange={(e) => onProfleImgChange(e)}
                    />
                    Edit photo
                  </label>
                </div>
              </Col>
              <Col sm={10}>
                <div className="previewDet">
                  <div className="hraet_pdd_sp">
                    {`${profileList?.basic_info?.first_name} ${profileList?.basic_info?.last_name}`}
                    <div className="previewProfileUsr">
                      {`${profileList?.basic_info?.address}, ${profileList?.basic_info?.city}, ${profileList?.basic_info?.country}`}
                    </div>
                    <div className="previewProfileUsr">
                      {" "}
                      {profileList?.basic_info?.local_time} local time{" "}
                    </div>
                  </div>
                  <div className="tamoun_pdd_sp"></div>
                </div>
              </Col>
              <div className="pbx_pdd_sp2 mt-1"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion">
                  {profileList?.basic_info?.occuption}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    Setpopup(
                      <EditTitle
                        data={profileList?.basic_info}
                        Popup={Setpopup}
                        successPopup={successPopup}
                        setSuccessPopup={setSuccessPopup}
                      />
                    );
                  }}
                >
                  <g
                    id="Group_3589"
                    data-name="Group 3589"
                    transform="translate(-464 -2581)"
                  >
                    <g
                      id="Ellipse_689"
                      data-name="Ellipse 689"
                      transform="translate(464 2581)"
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
                      transform="translate(477.099 2593.145)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
                <div className="tamoun_pdd_sp">
                  {showDescription
                    ? profileList?.basic_info?.description
                    : profileList?.basic_info?.description?.slice(0, 300)}
                  <br />
                  {profileList?.basic_info?.description.length > 300 ? (
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
              <div className="pbx_pdd_sp2"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion"> Hourly Rate </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    Setpopup(
                      <HourlyRatePopup
                        Popup={Setpopup}
                        successPopup={successPopup}
                        setSuccessPopup={setSuccessPopup}
                        data={profileList?.basic_info?.amount}
                      />
                    );
                  }}
                >
                  <g
                    id="Group_3589"
                    data-name="Group 3589"
                    transform="translate(-464 -2581)"
                  >
                    <g
                      id="Ellipse_689"
                      data-name="Ellipse 689"
                      transform="translate(464 2581)"
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
                      transform="translate(477.099 2593.145)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
                <div className="tamoun_pdd_sp">
                  {" "}
                  $ {profileList?.basic_info?.amount}
                </div>
              </div>
              <div className="pbx_pdd_sp2"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion"> Skills </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    Setpopup(
                      <EditSkill
                        Popup={Setpopup}
                        data={profileList?.skills}
                        setSuccessPopup={setSuccessPopup}
                        successPopup={successPopup}
                      />
                    );
                  }}
                >
                  <g
                    id="Group_3589"
                    data-name="Group 3589"
                    transform="translate(-464 -2581)"
                  >
                    <g
                      id="Ellipse_689"
                      data-name="Ellipse 689"
                      transform="translate(464 2581)"
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
                      transform="translate(477.099 2593.145)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
                <div className="skillsDesign">
                  {profileList?.skills?.map((skill, index) => (
                    <button key={index} className="skillsDesign_btn">
                      {skill?.skill_name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pbx_pdd_sp2"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion"> Work Experience </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    Setpopup(
                      <AddEmployment
                        Popup={Setpopup}
                        successPopup={successPopup}
                        setSuccessPopup={setSuccessPopup}
                      />
                    );
                  }}
                >
                  <g
                    id="Group_3592"
                    data-name="Group 3592"
                    transform="translate(-301 -2495)"
                  >
                    <g
                      id="Ellipse_687"
                      data-name="Ellipse 687"
                      transform="translate(301 2495)"
                      fill="#fff"
                      stroke="#707070"
                      strokeWidth="1"
                      opacity="0.43"
                    >
                      <circle cx="20" cy="20" r="20" stroke="none" />
                      <circle cx="20" cy="20" r="19.5" fill="none" />
                    </g>
                    <path
                      id="_134224_add_plus_new_icon_2_"
                      data-name="134224_add_plus_new_icon (2)"
                      d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                      transform="translate(311 2505)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
              </div>
              {profileList?.employment?.map((item, index) => (
                <>
                  <div className="hraet_pdd_sp mt-1" key={index}>
                    <div className="previewWorkExp">
                      <span className="previewPostion">
                        {item?.subject} | {item.company}
                      </span>
                      <svg
                        onClick={(e) => {
                          Setpopup(
                            <AddEmployment
                              Popup={Setpopup}
                              experience={item}
                              successPopup={successPopup}
                              setSuccessPopup={setSuccessPopup}
                            />
                          );
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                      >
                        <g
                          id="Group_3589"
                          data-name="Group 3589"
                          transform="translate(-464 -2581)"
                        >
                          <g
                            id="Ellipse_689"
                            data-name="Ellipse 689"
                            transform="translate(464 2581)"
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
                            transform="translate(477.099 2593.145)"
                            fill="#b9bdc1"
                          />
                        </g>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                        onClick={() =>
                          setConfirmPopup(
                            <ConfirmationPopup
                              Popup={() => setConfirmPopup(!confirmPopup)}
                              confirm={() => deleteExp(item.id)}
                            />
                          )
                        }
                      >
                        <g
                          id="Group_3591"
                          data-name="Group 3591"
                          transform="translate(-516 -2581)"
                        >
                          <g
                            id="Ellipse_690"
                            data-name="Ellipse 690"
                            transform="translate(516 2581)"
                            fill="#fff"
                            stroke="#707070"
                            strokeWidth="1"
                            opacity="0.43"
                          >
                            <circle cx="20" cy="20" r="20" stroke="none" />
                            <circle cx="20" cy="20" r="19.5" fill="none" />
                          </g>
                          <path
                            id="_2203546_bin_delete_gabage_trash_icon"
                            data-name="2203546_bin_delete_gabage_trash_icon"
                            d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                            transform="translate(528 2593)"
                            fill="#b9bdc1"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="previewProfileDate mb-3">
                    {moment(item.start_date).format("DD MMM YYYY")} -{" "}
                    {item.currently_working
                      ? "Currently Working"
                      : moment(item.end_date).format("DD MMM YYYY")}
                  </div>
                </>
              ))}
              <div className="pbx_pdd_sp2"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion"> Education History </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    Setpopup(
                      <AddEduc
                        Popup={Setpopup}
                        successPopup={successPopup}
                        setSuccessPopup={setSuccessPopup}
                      />
                    );
                  }}
                >
                  <g
                    id="Group_3592"
                    data-name="Group 3592"
                    transform="translate(-301 -2495)"
                  >
                    <g
                      id="Ellipse_687"
                      data-name="Ellipse 687"
                      transform="translate(301 2495)"
                      fill="#fff"
                      stroke="#707070"
                      strokeWidth="1"
                      opacity="0.43"
                    >
                      <circle cx="20" cy="20" r="20" stroke="none" />
                      <circle cx="20" cy="20" r="19.5" fill="none" />
                    </g>
                    <path
                      id="_134224_add_plus_new_icon_2_"
                      data-name="134224_add_plus_new_icon (2)"
                      d="M17.786,9.286H11.714V3.214a1.214,1.214,0,0,0-2.429,0V9.286H3.214a1.214,1.214,0,0,0,0,2.429H9.286v6.071a1.214,1.214,0,1,0,2.429,0V11.714h6.071a1.214,1.214,0,1,0,0-2.429Z"
                      transform="translate(311 2505)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
              </div>
              {profileList?.education?.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="my-2"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      className="previewProfileDate respUniversityName"
                      style={{ marginRight: 10 }}
                    >
                      {item.school} <br />
                      {item.area_study}
                      <br />
                      {item.start_year} - {item.end_year}
                    </div>
                    <svg
                      style={{ marginRight: 6 }}
                      onClick={() => {
                        Setpopup(
                          <AddEduc
                            education={item}
                            Popup={Setpopup}
                            successPopup={successPopup}
                            setSuccessPopup={setSuccessPopup}
                          />
                        );
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 40 40"
                    >
                      <g
                        id="Group_3589"
                        data-name="Group 3589"
                        transform="translate(-464 -2581)"
                      >
                        <g
                          id="Ellipse_689"
                          data-name="Ellipse 689"
                          transform="translate(464 2581)"
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
                          transform="translate(477.099 2593.145)"
                          fill="#b9bdc1"
                        />
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 40 40"
                      onClick={() =>
                        setConfirmPopup(
                          <ConfirmationPopup
                            Popup={() => setConfirmPopup(!confirmPopup)}
                            confirm={() => deleteEdu(item?.id)}
                          />
                        )
                      }
                    >
                      <g
                        id="Group_3591"
                        data-name="Group 3591"
                        transform="translate(-516 -2581)"
                      >
                        <g
                          id="Ellipse_690"
                          data-name="Ellipse 690"
                          transform="translate(516 2581)"
                          fill="#fff"
                          stroke="#707070"
                          strokeWidth="1"
                          opacity="0.43"
                        >
                          <circle cx="20" cy="20" r="20" stroke="none" />
                          <circle cx="20" cy="20" r="19.5" fill="none" />
                        </g>
                        <path
                          id="_2203546_bin_delete_gabage_trash_icon"
                          data-name="2203546_bin_delete_gabage_trash_icon"
                          d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                          transform="translate(528 2593)"
                          fill="#b9bdc1"
                        />
                      </g>
                    </svg>
                  </div>
                </>
              ))}
              <div className="pbx_pdd_sp2"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion"> Location </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    setCurrentTab("publishProfile");
                    navigate(`/freelancer/profile-intro/publishProfile`);
                  }}
                >
                  <g
                    id="Group_3589"
                    data-name="Group 3589"
                    transform="translate(-464 -2581)"
                  >
                    <g
                      id="Ellipse_689"
                      data-name="Ellipse 689"
                      transform="translate(464 2581)"
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
                      transform="translate(477.099 2593.145)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
              </div>
              <div className="previewProfileDate">
                {profileList?.basic_info?.city}{" "}
                {profileList?.basic_info?.address}{" "}
                {profileList?.basic_info?.country}{" "}
              </div>
              <div className="pbx_pdd_sp2"></div>
            </Row>
          </div>
          <div className="startIntroIn">
            <Row>
              <div className="hraet_pdd_sp">
                <span className="previewPostion"> Languages </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 40 40"
                  onClick={() => {
                    Setpopup(
                      <LanguageEdit
                        Popup={Setpopup}
                        data={profileList?.language}
                        successPopup={successPopup}
                        setSuccessPopup={setSuccessPopup}
                      />
                    );
                  }}
                >
                  <g
                    id="Group_3589"
                    data-name="Group 3589"
                    transform="translate(-464 -2581)"
                  >
                    <g
                      id="Ellipse_689"
                      data-name="Ellipse 689"
                      transform="translate(464 2581)"
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
                      transform="translate(477.099 2593.145)"
                      fill="#b9bdc1"
                    />
                  </g>
                </svg>
              </div>
              <div className="previewProfileDate">
                {profileList?.language?.map((item) => (
                  <>
                    <span className="tamoun_pdd_sp"> {item.language} : </span>
                    {item.level}
                    <br />
                  </>
                ))}
              </div>
              <Col>
                <Link to="/subscription">
                  <button className="priviewSubmitButton mt-4">
                    Submit Profile
                  </button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {popup}
      {successPopup}
      {confirmPopup}
    </>
  );
};

export default PreviewProfile;
