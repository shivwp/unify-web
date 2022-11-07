import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerProfile,
  getFreelancerSkills,
  onAddEmployment,
  onDeleteEmployment,
  getFreelancerDegreeList,
  onAddEducation,
  onDeleteEducation,
  onEditVideo,
  onEditDesignation,
  onEditLanguage,
  getLanguageList,
  onEditSkills,
  onEditCertificate,
  onDeleteCertificate,
  editNameInfo,
  editVisiblity,
  editExprienceLev,
  onDeletePortfolio,
  onSubmitVerificationDocs,
  onRequestTestimonial,
  getCertificationList,
} from "../../../../redux/actions/profileAction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slider from "react-slick";
import moment from "moment";
import HourPerWeekPopup from "../../../components/popups/HourPerWeekPopup";
import PortfolioPupup from "../../../components/popups/PortfolioPupup";
import { countryList } from "../../../../redux/actions/authActions";
import { useRef } from "react";
import { height } from "@mui/system";
import IntroVideoPopup from "../../../../popups/IntroVideoPopup";
import ReactPaginate from "react-paginate";
import ConfirmationPopup from "../../../components/popups/ConfirmationPopup";
import SuccessPopup from "../../../components/popups/SuccessPopup";
import Form from "react-bootstrap/Form";

function Listaward() {
  const card = [1, 2, 3, 4];

  return (
    <>
      {card.map((person, index) => (
        <div className="col-12" key={index}>
          <div className="award_box">
            <div className="awrd_flex">
              <div className="award_img">
                <img src="/assets/awad.jpg" alt="" />
              </div>
              <div className="award_con">
                <div>
                  <div className="awrd_name">Best Game Designer</div>
                  <div className="awrd_date">October 5, 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function PortfolioPaginate({
  itemsPerPage,
  data,
  setPortfolioPopup,
  setEditPortfoData,
  setConfirmPopup,
  confirmPopup,
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
    dispatch(onDeletePortfolio({ id: id }, setConfirmPopup));
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
const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};
const WorkHistory = () => {
  return (
    <>
      <div className="work_historycard">
        <div className="whtroy_head">
          Experienced Developer for Wellenss App
        </div>
        <div className="d-flex star_wbtn_whistory">
          <Star />
          <Star />
          <Star />
          <Star />
          <span>5.00 Oct 29, 2021 - Dec 3, 2021</span>
          <div className="myskill_hdingn m-0">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  id="_3180660_share_sharing_social_icon"
                  data-name="3180660_share_sharing_social_icon"
                  d="M15.906,6.906a3.08,3.08,0,0,0-2.458,1.236l-6.395-3.2a3.051,3.051,0,0,0,.134-.851,3.126,3.126,0,1,0-.636,1.858l6.395,3.2a2.769,2.769,0,0,0,0,1.7l-6.395,3.2a3.078,3.078,0,1,0,.636,1.858,3.052,3.052,0,0,0-.134-.851l6.395-3.2a3.088,3.088,0,1,0,2.458-4.951ZM4.094,6.063A1.969,1.969,0,1,1,6.063,4.094,1.971,1.971,0,0,1,4.094,6.063Zm0,11.813a1.969,1.969,0,1,1,1.969-1.969A1.971,1.971,0,0,1,4.094,17.875Zm11.813-5.906A1.969,1.969,0,1,1,17.875,10,1.971,1.971,0,0,1,15.906,11.969Z"
                  transform="translate(-1 -1)"
                  fill="#6d2ef1"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="whistory_para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing
        </div>
        <div className="d-flex">
          <div className="italic_whistry">$3.000</div>
          <div className="italic_whistry">Fixed Price</div>
        </div>
      </div>
    </>
  );
};
const EditSkill = (props) => {
  const [selectSkills, setSelectSkills] = useState(props?.data);
  console.log(selectSkills);
  const dispatch = useDispatch();
  let getSkillList = useSelector((state) => state?.profile?.getSkillList);

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

  const handleOnChange = (e) => {
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

  const onSave = (e) => {
    const data = {
      skill_id: selectSkills?.map((item) => item.skill_id)?.toString(),
    };
    dispatch(onEditSkills(data, props.Popup));
  };

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#suggest_skills").length === 0) {
      $("#suggest_skills").hide();
    }
  });
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit Skills</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-4 pt-1">
              <div className="pouphed_skll">Skills</div>
              <div className="popuphead_smparcr">
                Keeping your skills up to date helps you get the jobs you want.
              </div>
            </div>
            <div className="catbox_rd_ofive mt-3">
              <div className="d-flex flex-wrap">
                {selectSkills?.map((item, index) => (
                  <div className="skill_bxr_gry" key={item.skill_id}>
                    <span>{item.skill_name}</span>
                    <Button onClick={() => removeSkills(index)}>X</Button>
                  </div>
                ))}
              </div>
              <div style={{ position: "relative" }}>
                <Form.Control
                  type="text"
                  onChange={(e) => handleOnChange(e)}
                  name="skill"
                  id="search_skill_inp"
                  autocomplete="off"
                  placeholder="search here skills..."
                  className="no-border font-size-13px search_skilloiouo"
                />
                {getSkillList && (
                  <div id="suggest_skills">
                    <div
                      className="suggest_skills"
                      style={{ position: "absolute" }}
                    >
                      {getSkillList?.map((item) => (
                        <>
                          {" "}
                          <span onClick={() => addSkills(item)}>
                            {item.name}
                          </span>{" "}
                          <br />
                        </>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="maxlabel_atcxt mt-3">Maximum 15 skills.</div>
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </button>
              <Button onClick={onSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const EditTitle = (props) => {
  const [values, setValues] = useState(props.data);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    const data = {
      title: values.occuption,
      description: values.description,
    };
    dispatch(onEditDesignation(data, props.Popup));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Title And Overview</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-3 pt-1">
              <div className="pouphed_skll">Your title</div>
              <div className="popuphead_smparcr">
                Enter a single sentence description of your professional
                skills/experience (e.g. Expert Web Designer with Ajax
                experience)
              </div>
            </div>

            <div className="popup_form_element mb-3">
              <Form.Control
                type="text"
                className="font-size-13px"
                name="occuption"
                onChange={(e) => handleOnChange(e)}
                value={values?.occuption}
                placeholder="Senior UI/UX, Website Designer And Graphic Designer"
              />
            </div>
            <div className="pouphed_skll mt-3">Overview</div>
            <div>
              <div className="popuphead_smparcr">
                Use this space to show clients you have the skills and
                experience they're looking for.
              </div>
              <ul className="popuphead_smparcr ulist_overpopup mt-1">
                <li>Describe your strengths and skills</li>
                <li>Highlight projects, accomplishments and education</li>
                <li>Keep it short and make sure it's error-free</li>
              </ul>
            </div>
            <div className="_profile_overview popup_form_element mb-0">
              <Form.Control
                as="textarea"
                value={values?.description}
                name="description"
                onChange={(e) => handleOnChange(e)}
                placeholder="theDesignerz offers professional and high-quality graphic design services. We have been designing for companies worldwide since 2018. We are a customer service oriented firm, and we will workwith you until you are completely satisfied with the outcome of your design projects. We are the most experienced team of designers working on Freelancer since 2017"
              ></Form.Control>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button onClick={onSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const VideoIntro = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(props?.data);
  const [type, setType] = useState(
    props?.data && {
      name: props.data?.type,
      label: props.data?.type,
    }
  );

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const videoTypes = [
    {
      name: "Me talking about my skills and Exprience",
      label: "Me talking about my skills and Exprience",
    },
    {
      name: "Visual samples of my work",
      label: "Visual samples of my work",
    },
    {
      name: "Something else",
      label: "Something else",
    },
  ];

  const onSave = () => {
    const data = {
      video: values.url,
      video_type: type.name,
    };
    dispatch(onEditVideo(data, props.Popup));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add video introduction</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-4 pt-1 mb-4"></div>

            <div className="mb-5 ">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Link to your YouTube video
                </Form.Label>
                <Form.Control
                  type="text"
                  className="font-size-13px"
                  name="url"
                  onChange={(e) => handleOnChange(e)}
                  value={values?.url}
                  placeholder="Ex: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </div>
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  What type of video is this?
                </Form.Label>
                <Select
                  className="font-size-13px"
                  placeholder="What type of video is this?"
                  onChange={setType}
                  defaultValue={
                    type
                      ? {
                          name: type?.name,
                          label: type?.label,
                        }
                      : null
                  }
                  options={videoTypes}
                />
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button onClick={onSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AddExperience = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add other Experiences</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Subject
                </Form.Label>
                <Form.Control
                  type="text"
                  className="font-size-13px"
                  placeholder=" "
                />
              </div>
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  className="font-size-13px"
                  placeholder="Enter Here"
                ></Form.Control>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button className="trans_btn">Cancel</button>
              <button
                onClick={() => {
                  props.Popup();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AddEmployment = (props) => {
  const dispatch = useDispatch();
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [country, setCountry] = useState(null);
  const [values, setValues] = useState(
    props?.experience || { currently_working: 0 }
  );
  console.log(props?.exprience);

  useState(() => {
    dispatch(countryList());
  }, []);

  const countryLis = getCountryList?.map((item) => ({
    name: item.name,
    label: item.name,
  }));

  const onInputChange = (e) => {
    if (e.target.name == "currently_working") {
      setValues({ ...values, [e.target.name]: e.target.checked ? 1 : 0 });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  console.log(country);

  const onSave = () => {
    const data = {
      id: props?.experience?.id,
      company: values.company,
      city: values.city,
      country: props?.experience?.country || country.name,
      description: values.description,
      subject: values.subject,
      currently_working: values.currently_working,
      start_date: values.start_date,
      end_date: values.end_date,
    };
    dispatch(onAddEmployment(data, props.Popup));
  };
  console.log(values);

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Employment</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Company
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Unify"
                      name="company"
                      value={values.company}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      className="font-size-13px"
                      value={values.city}
                      onChange={(e) => onInputChange(e)}
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Country
                    </Form.Label>
                    <Select
                      className="font-size-13px"
                      placeholder="India"
                      name="country"
                      defaultValue={
                        values.country
                          ? { name: values.country, label: values.country }
                          : null
                      }
                      onChange={setCountry}
                      options={countryLis}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      onChange={(e) => onInputChange(e)}
                      value={values.subject}
                      className="font-size-13px"
                      placeholder="Like: Developer, React"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Start Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      className="font-size-13px"
                      placeholder="Start Date"
                      name="start_date"
                      value={values.start_date}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      End Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="end_date"
                      className="font-size-13px"
                      value={values.end_date}
                      placeholder="End Date"
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </Col>
                <Col className="text-right">
                  <div className="agrement_ineoeu flex-row d-flex justify-content-end mt-1 pt-0">
                    <Form.Label className="text-black text-right font-size-13px font-weight-500">
                      <Form.Check
                        type="checkbox"
                        name="currently_working"
                        onChange={(e) => onInputChange(e)}
                        defaultChecked={values.currently_working || false}
                      />{" "}
                      I currently work here
                    </Form.Label>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="font-size-13px"
                      value={values.description || ""}
                      name="description"
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button onClick={onSave}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ChangePassword = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Change Password</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Old Password
                </Form.Label>
                <Form.Control
                  type="password"
                  className="font-size-13px"
                  placeholder=" "
                />
              </div>
              <Row className="mt-1">
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      New password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="font-size-13px"
                      placeholder=" "
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Confirm New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="font-size-13px"
                      placeholder=" "
                    />
                  </div>
                </Col>
              </Row>
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  <Form.Check type="checkbox" /> All devices will be required to
                  sign in with new password
                </Form.Label>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button className="trans_btn">Cancel</Button>
              <Button
                onClick={() => {
                  props.Popup();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const VerificationPref = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">
              Set your verification preferences
            </div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-3">
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <div className="headiwuewopiu">
                  If we need to confirm it's you, which should we try first?
                </div>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-3 pb-1 radiolablepopo">
                  <Form.Check type="radio" name="g" /> Authenticator app code
                </Form.Label>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-2 pb-1 radiolablepopo">
                  <Form.Check type="radio" name="g" /> Mobile app prompt
                </Form.Label>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-2 pb-1 radiolablepopo">
                  <Form.Check type="radio" name="g" /> Text message
                </Form.Label>
              </div>
            </div>
            <div className="mb-4">
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <div className="headiwuewopiu">When should we confirm?</div>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-3 pb-1 radiolablepopo">
                  <Form.Check type="radio" name="g" /> When my login or activity
                  seems risky
                </Form.Label>
                <Form.Label className="text-black font-size-13px font-weight-500 mt-2 pb-1 radiolablepopo">
                  <Form.Check type="radio" name="g" /> At every login and when
                  my login or activity seems risky
                </Form.Label>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button className="trans_btn">Cancel</Button>
              <Button
                onClick={() => {
                  props.Popup();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LanguageEdit = (props) => {
  const dispatch = useDispatch();
  const languageList = useSelector((state) => state?.profile?.getLanguageList);
  const [inputList, setInputList] = useState(
    props?.data || [{ language: "", level: "" }]
  );

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { language: "", level: "" }]);
  };
  const proficiencyOptions = [
    { name: "Fluent" },
    { name: "Conversational" },
    { name: "Native" },
  ];

  const removeInputFields = (index) => {
    console.log(index);
    const rows = [...inputList];
    rows.splice(index, 1);
    setInputList(rows);
  };

  const handleSave = () => {
    const data = {};
    inputList.map((ele) => {
      data[ele.language] = ele.level;
    });
    // console.log(data);
    dispatch(onEditLanguage({ languages: data }, props.Popup));
  };

  useEffect(() => {
    dispatch(getLanguageList());
  }, []);
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit languages</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-3 pt-1 mb-3"></div>

            <div className="mb-3 ">
              <Row>
                {inputList?.map((data, i) => {
                  return (
                    <>
                      <Col md={6}>
                        <div className="popup_form_element">
                          <Form.Label className="text-black font-size-13px font-weight-500">
                            Language
                          </Form.Label>
                          <select
                            className="font-size-13px language_sel"
                            name="language"
                            value={data.language}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option selected hidden>
                              Select a Language
                            </option>
                            {languageList?.map((item) => (
                              <option value={item.name}>{item.name}</option>
                            ))}
                          </select>
                          {/* <input
                            className="font-size-13px"
                            placeholder="English"
                            name="language"
                            value={data.language}
                            onChange={(e) => handleInputChange(e, i)}
                          /> */}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="popup_form_element">
                          <Form.Label
                            className="text-black  font-size-13px font-weight-500"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Proficiency level</span>{" "}
                            {inputList?.length !== 1 ? (
                              <button
                                onClick={() => removeInputFields(i)}
                                style={{
                                  border: "none",
                                  background: "transparent",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    id="_2203546_bin_delete_gabage_trash_icon"
                                    data-name="2203546_bin_delete_gabage_trash_icon"
                                    d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                                    fill="#6d2ef1"
                                  />
                                </svg>
                              </button>
                            ) : null}
                          </Form.Label>
                          <select
                            className="font-size-13px language_sel"
                            name="level"
                            value={data.level}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option selected hidden>
                              Select a level
                            </option>
                            {proficiencyOptions.map((item) => (
                              <option value={item.name}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </Col>
                      <div
                        style={{
                          display: "flex",
                          height: "100%",
                          alignItems: "flex-end",
                          justifyContent: "center",
                        }}
                      ></div>
                    </>
                  );
                })}
              </Row>
            </div>
            {/* {inputList.length < 5 && ( */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="addMoreLanguageBtn"
                disabled={
                  !(
                    inputList?.slice(-1)[0].language &&
                    inputList?.slice(-1)[0].level
                  )
                }
                onClick={handleAddClick}
              >
                Add More
              </button>
            </div>
            {/* )} */}
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </button>

              <button
                disabled={
                  !(
                    inputList?.slice(-1)[0].language &&
                    inputList?.slice(-1)[0].level
                  )
                }
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const UserVerification = (props) => {
  const dispatch = useDispatch();
  const [docType, setDocType] = useState({});
  const [frontImg, setFrontImg] = useState(null);
  const [showingFontImg, setShowingFrontImg] = useState();
  const [backImg, setBackImg] = useState(null);
  const [showingBackImg, setShowingBackImg] = useState();

  const onFrontImgChange = (e) => {
    setFrontImg(e.target.files[0]);
    setShowingFrontImg(URL.createObjectURL(e.target.files[0]));
  };
  const onBackImgChange = (e) => {
    setBackImg(e.target.files[0]);
    setShowingBackImg(URL.createObjectURL(e.target.files[0]));
  };
  console.log(docType);

  const documentOptions = [
    { name: "passport", label: "Passport" },
    { name: "driving_license", label: "Driving Licence" },
    { name: "other", label: "Other" },
  ];

  const onSave = () => {
    const formData = new FormData();
    formData.append("type", docType?.name);
    formData.append("document_front", frontImg);
    formData.append("document_back", backImg);

    dispatch(onSubmitVerificationDocs(formData));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">User Verification</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-3 mb-3"></div>

            <div className="mb-3 ">
              <div className="mt-4">
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    ID Proof
                  </Form.Label>
                  <Select
                    className="font-size-13px"
                    placeholder="Select ID"
                    options={documentOptions}
                    onChange={setDocType}
                  />
                </div>
              </div>
              <div className="varifyDocs_pre_img ">
                {showingFontImg ? (
                  <div>
                    <span>Front Image</span>
                    <img src={showingFontImg} alt="" />
                  </div>
                ) : null}
                {showingBackImg ? (
                  <div>
                    <span> Back Image</span>
                    <img src={showingBackImg} alt="" />
                  </div>
                ) : null}
              </div>
              <Row>
                <Col md={6}>
                  <div
                    className="popup_form_element"
                    style={{ position: "relative" }}
                  >
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Upload Document
                    </Form.Label>
                    <Form.Label
                      htmlFor="attach-doc-front"
                      style={{ minHeight: 0 }}
                    >
                      <div
                        style={{
                          border: "1px solid #e8e7e7",
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          fontSize: 11,
                          paddingLeft: 10,
                        }}
                      >
                        Upload Document Front Image
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15.05"
                          viewBox="0 0 20 17.05"
                          style={{
                            position: "absolute",
                            top: 42,
                            right: 8,
                            cursor: "pointer",
                          }}
                        >
                          <path
                            id="_0294701bfa3b26cfab404696f6cf4390"
                            data-name="0294701bfa3b26cfab404696f6cf4390"
                            d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64a1,1,0,0,0,.9.68h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"
                            transform="translate(-2 -3.5)"
                            fill="#828282"
                          />
                        </svg>
                      </div>
                      <Form.Control
                        type="file"
                        id="attach-doc-front"
                        style={{ display: "none" }}
                        onChange={(e) => onFrontImgChange(e)}
                      />
                    </Form.Label>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className="popup_form_element"
                    style={{ position: "relative" }}
                  >
                    <Form.Label className="text-black font_size_14px font-weight-500"></Form.Label>
                    <Form.Label
                      htmlFor="attach-doc-back"
                      style={{ minHeight: 0 }}
                    >
                      <div
                        style={{
                          border: "1px solid #e8e7e7",
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          fontSize: 11,
                          paddingLeft: 10,
                        }}
                      >
                        Upload Document Front Image
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15.05"
                          viewBox="0 0 20 17.05"
                          style={{
                            position: "absolute",
                            top: 42,
                            right: 8,
                            cursor: "pointer",
                          }}
                        >
                          <path
                            id="_0294701bfa3b26cfab404696f6cf4390"
                            data-name="0294701bfa3b26cfab404696f6cf4390"
                            d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64a1,1,0,0,0,.9.68h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"
                            transform="translate(-2 -3.5)"
                            fill="#828282"
                          />
                        </svg>
                      </div>
                      <Form.Control
                        type="file"
                        id="attach-doc-back"
                        style={{ display: "none" }}
                        onChange={(e) => onBackImgChange(e)}
                      />
                    </Form.Label>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button className="trans_btn">Cancel</Button>
              <Button onClick={onSave}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const VisiblityPopup = (props) => {
  const dispatch = useDispatch();
  const [projectPref, setProjectPref] = useState();
  const [visiblity, setVisiblity] = useState();

  const visiblityOps = [
    { name: "public", label: "Public" },
    { name: "private", label: "Private" },
    { name: "unify_users", label: "Unify Users Only" },
  ];
  const projPrefrenceOps = [
    { name: "long_term", label: "Long Term" },
    { name: "short_term", label: "Short Term" },
    { name: "both", label: "Both" },
  ];

  const onSave = () => {
    const data = {
      visibility: visiblity?.name,
      project_preference: projectPref.name,
    };
    console.log(data);
    dispatch(editVisiblity(data, props.Popup));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Visiblity</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-3 mb-3"></div>

            <div className="mb-3 ">
              <div className="mt-4">
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Visiblity
                  </Form.Label>
                  <Select
                    className="font-size-13px"
                    placeholder="Select Visiblity"
                    options={visiblityOps}
                    onChange={setVisiblity}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="popup_form_element">
                  <Form.Label className="text-black font-size-13px font-weight-500">
                    Project Prefrence
                  </Form.Label>
                  <Select
                    className="font-size-13px"
                    placeholder="Select Project Prefrance"
                    options={projPrefrenceOps}
                    onChange={setProjectPref}
                  />
                </div>
              </div>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>
              <Button onClick={onSave}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AddEduc = (props) => {
  const [values, setValues] = useState(props?.education);
  const [endYear, setEndYear] = useState({
    label: values?.end_year,
    name: values?.end_year,
  });
  const [degree, setDegree] = useState({
    label: values?.degree,
    name: values?.degree,
  });
  const [startYear, setStartYear] = useState({
    label: values?.start_year,
    name: values?.start_year,
  });
  const getDegreeList = useSelector((state) => state.profile.getDegreeList);
  const dispatch = useDispatch();

  const startYearList = () => {
    const today = new Date().getFullYear();
    let arr = [];
    for (let i = today; i > today - 40; i--) {
      arr.push({
        name: i,
        label: i,
      });
    }
    return arr;
  };
  const endYearList = () => {
    const today = new Date().getFullYear();
    let arr = [];
    for (let i = today + 3; i > today - 40; i--) {
      arr.push({
        name: i,
        label: i,
      });
    }
    return arr;
  };

  useEffect(() => {
    dispatch(getFreelancerDegreeList());
  }, []);

  const degreeList = getDegreeList?.map((item) => ({
    name: item.title,
    label: item.title,
  }));

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const AddEducation = () => {
    const data = {
      id: values.id,
      school: values?.school,
      start_year: startYear?.name,
      end_year: endYear?.name,
      degree: degree?.name,
      area_study: values?.area_study,
      description: values?.description,
    };
    dispatch(onAddEducation(data, props.Popup));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Education</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-3 pt-1 mb-3"></div>

            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      School
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="school"
                      value={values?.school}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                      placeholder="Ex: Northwestern University"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Dates Attended
                    </Form.Label>
                    <Select
                      className="font-size-11px"
                      name="start_year"
                      defaultValue={
                        values
                          ? {
                              name: values?.start_year,
                              label: values?.start_year,
                            }
                          : null
                      }
                      placeholder="From"
                      onChange={setStartYear}
                      options={startYearList()}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500"></Form.Label>
                    <Select
                      className="font-size-11px"
                      name="end_year"
                      defaultValue={
                        values
                          ? {
                              name: values?.end_year,
                              label: values?.end_year,
                            }
                          : null
                      }
                      onChange={setEndYear}
                      options={endYearList()}
                      placeholder="To (or expected gradution year)"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Degree
                    </Form.Label>
                    <Select
                      className="font-size-11px"
                      defaultValue={
                        values
                          ? {
                              name: values?.degree,
                              label: values?.degree,
                            }
                          : null
                      }
                      options={degreeList}
                      placeholder="Degree "
                      onChange={setDegree}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Area of Study
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => handleOnChange(e)}
                      name="area_study"
                      value={values?.area_study}
                      className="font-size-11px"
                      placeholder="Ex: Computer Science"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                      value={values?.description}
                      name="description"
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button className="trans_btn">Cancel</Button>
              <Button onClick={() => AddEducation()}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AddCert = (props) => {
  const [certName, setCertName] = useState(props?.certificates || null);
  const [values, setValues] = useState(props?.certificates);
  const [certificateList, setCertificateList] = useState([]);
  const dispatch = useDispatch();
  const options1 = certificateList?.map((data) => ({
    name: data.name,
    label: data.name,
  }));

  useEffect(() => {
    dispatch(getCertificationList(setCertificateList));
  }, []);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    let data;
    if (props?.certificates?.id) {
      data = {
        id: props?.certificates?.id,
        name: certName.name,
        description: values.description,
      };
    } else {
      data = {
        name: certName.name,
        description: values.description,
      };
    }
    dispatch(onEditCertificate(data, props.Popup));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Certification</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-4">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Proficiency level
                </Form.Label>
                <Select
                  className="font-size-13px"
                  placeholder="Select Certificate Type"
                  options={options1}
                  onChange={setCertName}
                  defaultValue={
                    certName
                      ? { name: certName.name, label: certName.name }
                      : null
                  }
                />
              </div>
            </div>
            <div className="mt-3 pt-1 mb-3">
              <div className="pouphed_skll">Adobe Certified Expert</div>
              <div className="popuphead_smparcr">
                If you have earned an <b>official certification </b>from{" "}
                <b>Adobe</b>, paste the verification code displayed on your
                certificate into the box below. We will confirm your
                certification and it will appear on your profile within 5 days
                of submission.
              </div>
            </div>

            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Enter Here"
                      name="description"
                      value={values?.description || null}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </button>
              <button onClick={onSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ReqTestimonial = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const testimonialSubmit = (e) => {
    const data = {
      first_name: values?.first_name,
      last_name: values?.last_name,
      email: values?.email,
      title: values?.title,
      type: values?.type,
      description: values?.description,
    };
    dispatch(onRequestTestimonial(data));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Request A Client Testimonial</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-3 pt-1 mb-3">
              <div className="popuphead_smparcr">
                Add your client’s contact details. Don’t worry—we’ll only
                display their first name and last initial.
              </div>
            </div>

            <div className="mb-3 ">
              <Row>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="first_name"
                      className="font-size-13px"
                      value={values?.first_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter First Name"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Last name{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      className="font-size-13px"
                      value={values?.last_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Last name "
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Business email address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      className="font-size-13px"
                      value={values?.email}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Your Business Email"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Client's title (Optional)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      className="font-size-13px"
                      value={values?.title}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Client's Title"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Project Type (Optional)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="type"
                      className="font-size-13px"
                      value={values?.type}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Project Type"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      className="font-size-13px"
                      value={values?.description}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                className="font-weight-600"
                onClick={() => {
                  testimonialSubmit();
                  props.Popup();
                }}
              >
                REQUEST TESTIMONIAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// const Overview = (props) => {
//   return (
//     <>
//       <div className="bg_wrapper_popup_new">
//         <div className="popup_box_bpn profile_nceqoi_popup pb-4">
//           <div className="popup_header pb-0">
//             <div className="p_header_hding">Overview</div>
//             <div
//               className="close_pp_btn"
//               onClick={() => {
//                 props.Popup();
//               }}
//             >
//               <CloseIcon />
//             </div>
//           </div>
//           <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
//             <div className="mt-4 pt-1">
//               <div className="popuphead_smparcr">
//                 Use this space to show clients you have the skills and
//                 experience they're looking for.
//               </div>
//               <ul className="popuphead_smparcr ulist_overpopup mt-1">
//                 <li>Describe your strengths and skills</li>
//                 <li>Highlight projects, accomplishments and education</li>
//                 <li>Keep it short and make sure it's error-free</li>
//               </ul>
//             </div>
//             <div className="gbxewueyuien">
//               theDesignerz offers professional and high-quality graphic design
//               services. We have been designing for companies worldwide since
//               2018. We are a customer service oriented firm, and we will work
//               with you until you are completely satisfied with the outcome of
//               your design projects. We are the most experienced team of
//               designers working on Freelancer since 2017
//             </div>
//             <div className="maxlabel_atcxt mt-2 text-right">
//               4120 characters left
//             </div>
//             <div className="popup_btns_new flex-wrap cwiewyehkk">
//               <button className="trans_btn">Cancel</button>
//               <button
//                 onClick={() => {
//                   props.Popup();
//                 }}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const UnifyFreelancer = () => {
  const dispatch = useDispatch();
  const basicInfo = useSelector(
    (state) => state?.profile?.freelancerProfileList?.basic_info
  );
  const freelancerProfileList = useSelector(
    (state) => state?.profile?.freelancerProfileList
  );

  const [showingProImage, setShowingProImage] = useState();
  const [popup, Setpopup] = useState();
  const [hwpPopup, setHwpPopup] = useState(false);
  const [workHistoryTab, setWorkHistoryTab] = useState("COMPLETED JOBS");
  const [portfolioPopup, setPortfolioPopup] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);
  const [showExprienceLevOpt, setShowExprienceLevOpt] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [editPortfoData, setEditPortfoData] = useState([]);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [confirm, setConfirm] = useState(false);

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
    dispatch(getFreelancerProfile());
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
    dispatch(onDeleteEmployment({ id }, setConfirmPopup));
  };

  const deleteEdu = (id) => {
    dispatch(onDeleteEducation({ id }, setConfirmPopup));
  };
  const deleteCert = (id) => {
    dispatch(onDeleteCertificate({ id }, setConfirmPopup));
  };

  const onProfleImgChange = (e) => {
    const profileImage = e.target.files[0];
    setShowingProImage(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();

    formData.append("first_name", basicInfo?.first_name);
    formData.append("last_name", basicInfo?.last_name);
    formData.append("occcuption", basicInfo?.occuption);
    formData.append("profile_image", profileImage);

    dispatch(editNameInfo(formData));
  };

  const IntroVideoThumb = ({ data }) => {
    const vidId = data?.url?.split("v=")[1]?.substring(0, 11);
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

  const handleExprienceLevel = (level) => {
    const data = { experience_level: level };
    dispatch(editExprienceLev(data, setShowExprienceLevOpt));
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
                        showingProImage ||
                        basicInfo?.profile_image ||
                        "/assets/PRO-2.png"
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
                      id="profile_img_change"
                      onChange={(e) => onProfleImgChange(e)}
                      style={{ width: 0, height: 0, position: "absolute" }}
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

                  <div className="freelancer_work">
                    {basicInfo && basicInfo.occuption}
                  </div>
                  <div className="freelance_map">
                    {basicInfo && basicInfo.city},{" "}
                    {basicInfo && basicInfo.country}
                  </div>

                  <div className="flex_stars">
                    {/* <Rating rating={1} /> */}

                    <div className="review_star">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="review_star">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="review_star">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill fill-none"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="review_par">
                      <p>Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile_pf_btn">
                <Link to="/freelancer/contact-info">
                  <Button>Profile Setting</Button>
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
                  <h1>$140.00</h1>
                  <span>(Per Hourly)</span>
                </div>
              </div>
              {/* <div className="myskill_prof_node">
                <div className="myskill_hdingn font-size-20px font-weight-600">
                  My Skills
                </div>
                <div className="myskill_hdingn font-size-15px">
                  Mobile App Development
                </div>
                <div className="myskill_hdingn font-size-15px">
                  Full Stack Development
                </div>
                <div className="myskill_hdingn font-size-15px">All Work</div>
              </div> */}
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
              {/* <div className="my_skill_sec">
                <div className="my_skil_head">
                  <h3>My Skills</h3>
                </div>
                <div className="prr_box">
                  <div className="d-flex justify-content-between">
                    <div className="skil_nam">
                      <p>Graphich Designer</p>
                    </div>
                    <div className="skil_rr">
                      <p>60%</p>
                    </div>
                  </div>
                  <div className="prr_area_line"></div>
                </div>
                <div className="prr_box">
                  <div className="d-flex justify-content-between">
                    <div className="skil_nam">
                      <p>Front End Developer</p>
                    </div>
                    <div className="skil_rr">
                      <p>60%</p>
                    </div>
                  </div>
                  <div className="prr_area_line"></div>
                </div>
                <div className="prr_box">
                  <div className="d-flex justify-content-between">
                    <div className="skil_nam">
                      <p>Video Editor</p>
                    </div>
                    <div className="skil_rr">
                      <p>60%</p>
                    </div>
                  </div>
                  <div className="prr_area_line"></div>
                </div>
              </div> */}
              <div className="myskill_prof_node">
                <div className="intro_video">
                  <div className="myskill_hdingn profile_icon_25px">
                    Video introduction
                    <Button
                      onClick={() => {
                        Setpopup(
                          <VideoIntro
                            data={freelancerProfileList?.video}
                            Popup={Setpopup}
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
                  <div>
                    <IntroVideoThumb data={freelancerProfileList?.video} />
                  </div>
                </div>
                <div
                  className="myskill_hdingn profile_icon_25px profile_heading_mb"
                  style={{ position: "relative" }}
                >
                  Visiblity
                  <Button
                    onClick={() => {
                      Setpopup(<VisiblityPopup Popup={Setpopup} />);
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
                  {basicInfo?.visibility}
                </div>
                <div
                  className="myskill_hdingn profile_icon_25px profile_heading_mb"
                  style={{ position: "relative" }}
                >
                  Exprience Level
                  <Button
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
                  <Button onClick={() => setHwpPopup(true)}>
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
                        onClick={() => {
                          Setpopup(<LanguageEdit Popup={Setpopup} />);
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
                      onClick={() => {
                        Setpopup(
                          <LanguageEdit
                            Popup={Setpopup}
                            data={freelancerProfileList?.language}
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
                          onClick={() => {
                            Setpopup(<UserVerification Popup={Setpopup} />);
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
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  Hannah Finn
                </div>
                <div className="myskill_hdingn profile_icon_25px profile_heading_mb">
                  Education
                  <div className="d-flex justify-content-start">
                    <Button
                      onClick={() => {
                        Setpopup(<AddEduc Popup={Setpopup} />);
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
                          {edu?.school}, {edu?.area_study}{" "}
                          {moment(edu.date).format("YYYY")}
                        </div>
                        <div className="d-flex justify-content-start">
                          <figure></figure>
                          <Button
                            onClick={() => {
                              Setpopup(
                                <AddEduc education={edu} Popup={Setpopup} />
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

                  {/* Tallinna University Bachelor or Engineering (BEng), Computer
                  science 2016-2017 */}
                </div>
              </div>
              <div className="award_sec">
                <div className="my_skil_head">
                  <h3>Diplomas, certificates</h3>
                </div>
                <Row>{Listaward()}</Row>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head font-weight-500 line-height-30">
                  {basicInfo?.occuption}
                </div>
                <div className="myskill_hdingn">
                  <Button
                    onClick={() => {
                      Setpopup(
                        <EditTitle
                          data={{
                            occuption: basicInfo.occuption,
                            description: basicInfo.description,
                          }}
                          Popup={Setpopup}
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
                <div className="descri_pfro">{basicInfo?.description}</div>
                {/* <div className="myskill_hdingn">
                  <button
                    onClick={() => {
                      Setpopup(<Overview Popup={Setpopup} />);
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
                  </button>
                </div> */}
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
                    onClick={() => setWorkHistoryTab("COMPLETED JOBS")}
                    className={
                      workHistoryTab === "COMPLETED JOBS"
                        ? "activetabbar_btn"
                        : ""
                    }
                  >
                    Commpleted Jobs (2)
                  </Button>
                  <Button
                    onClick={() => setWorkHistoryTab("IN PROGRESS")}
                    className={
                      workHistoryTab === "IN PROGRESS" ? "activetabbar_btn" : ""
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
              />
            </div>

            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Skills</div>
                <div className="myskill_hdingn">
                  <Button
                    onClick={() => {
                      Setpopup(
                        <EditSkill
                          Popup={Setpopup}
                          data={freelancerProfileList?.skills}
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
                  onClick={() => {
                    Setpopup(<ReqTestimonial Popup={Setpopup} />);
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
              {/* <div className="d-flex justify-content-center flex-column text-center">
                <div className="img_min_bpck">
                  <img src="/assets/consumer.png" alt="" />
                </div>
                <div className="bpck_sm_txt_a mt-4">
                  Showcase your skills with non-Unify client testimonials
                </div>
                <div className="bpck_sm_txt_a">
                  <Link to="">Request a testimonial</Link>
                </div>
              </div> */}
              {freelancerProfileList?.testimonial?.map((item) => (
                <>
                  {item.status == "approve" && (
                    <div className="freelancer_testimonials my-2 ">
                      <div
                        style={{
                          borderBottom: " 1px solid #d5d5d5",
                          marginBottom: 5,
                        }}
                      >
                        <Row>
                          <Col lg={1}>
                            <div className="testimonial_img">
                              <img src="/assets/PRO-2.png" alt="" />
                            </div>
                          </Col>
                          <Col lg={11}>
                            <div className="user_details">
                              <div
                                className="f_user_name"
                                style={{ textTransform: "capitalize" }}
                              >{`${item.first_name} ${item.last_name}`}</div>
                              <div className="f_user_country">India</div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={1}></Col>
                          <Col lg={11}>
                            <div className="reviews d-flex mb-2 align-items-center">
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                              <span
                                style={{
                                  color: "rgb(201 201 201)",
                                  paddingLeft: 2,
                                  fontWeight: 100,
                                }}
                              >
                                {" "}
                                |{" "}
                              </span>
                              <span
                                className="ps-2"
                                style={{ color: "#62646a" }}
                              >
                                {" "}
                                {moment
                                  .utc(item.request_sent)
                                  .local()
                                  .startOf("seconds")
                                  .fromNow()}
                              </span>
                            </div>
                            <div
                              className="testimonial_description mt-1"
                              style={{ fontSize: 14 }}
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
                        <div
                          className="testimonial_description my-1"
                          style={{ fontSize: 14 }}
                        >
                          <i class="fa fa-history" aria-hidden="true"></i>
                          {` ${item.message}`}
                        </div>
                        <div>
                          <span className="ps-2" style={{ color: "#62646a" }}>
                            {" "}
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
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                    onClick={() => {
                      Setpopup(<AddCert Popup={Setpopup} />);
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
                  <div className="bpck_sm_txt_a mt-4 ehistory_uxdes">
                    {item.name}
                  </div>
                  <div className="ehitory_dtine">{item.description}</div>

                  <div className="bpck_sm_txt_a mt-4 mb-0">
                    <div className="d-flex myskill_hdingn mb-0">
                      <Button
                        className="m-0"
                        onClick={() => {
                          Setpopup(
                            <AddCert certificates={item} Popup={Setpopup} />
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
                  <div className="img_min_bpck">
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
                      onClick={() => {
                        Setpopup(<AddEmployment Popup={Setpopup} />);
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
                          />
                        )
                      }
                    >
                      Employment history
                    </div>
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
                  <div className="d-flex justify-content-center flex-column pl-20">
                    {freelancerProfileList?.employment?.map(
                      (experience, key) => (
                        <div key={key}>
                          <div className="bpck_sm_txt_a mt-4 ehistory_uxdes">
                            {`${experience.company} | ${experience.description}`}
                          </div>
                          <div className="ehitory_dtine">
                            {`${moment(experience.start_date).format(
                              "MMM-YYYY"
                            )} To ${moment(experience.end_date).format(
                              "MMM-YYYY"
                            )}`}
                          </div>

                          <div className="bpck_sm_txt_a mt-4 mb-0">
                            <div className="d-flex myskill_hdingn mb-0">
                              <Button
                                className="m-0"
                                onClick={(e) => {
                                  Setpopup(
                                    <AddEmployment
                                      Popup={Setpopup}
                                      experience={experience}
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
              </Col>
              {/* <Col md={6}>
                <div className="box-profile-bck minei400">
                  <div className="d-flex justify-content-end myskill_hdingn">
                    <Button
                      onClick={() => {
                        Setpopup(<AddExperience Popup={Setpopup} />);
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
                    <div className="bpck_head font-weight-600">
                      Other Experiences
                    </div>
                  </div>
                  <div className="d-flex justify-content-center flex-column text-center">
                    <div className="img_min_bpck m-0 file_icon_lst">
                      <img src="/assets/files.png" alt="" />
                    </div>
                    <div className="bpck_sm_txt_a font-weight-500">
                      <Link
                        to=""
                        onClick={() => {
                          Setpopup(<AddExperience Popup={Setpopup} />);
                        }}
                      >
                        Add an experience
                      </Link>
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
      {hwpPopup && (
        <HourPerWeekPopup
          open={hwpPopup}
          onCloseModal={() => setHwpPopup(false)}
        />
      )}
      {portfolioPopup && (
        <PortfolioPupup
          open={portfolioPopup}
          onCloseModal={() => setPortfolioPopup(false)}
          data={editPortfoData}
        />
      )}
      {videoPopup && (
        <IntroVideoPopup
          open={videoPopup}
          onCloseModal={() => setVideoPopup(false)}
          videoUrl={videoURL}
        />
      )}
      {popup}
      {confirmPopup}
      {successPopup}
    </div>
  );
};
export default UnifyFreelancer;
