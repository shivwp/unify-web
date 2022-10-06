import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onEditTestimonialInfo } from "../../redux/actions/profileAction";

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
      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
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
                <div className="skill_bxr_gry">
                  Mobile App <button>X</button>
                </div>
                <div className="skill_bxr_gry">
                  Website Design <button>X</button>
                </div>
                <div className="skill_bxr_gry">
                  Web Development <button>X</button>
                </div>
                <div className="skill_bxr_gry">
                  Logo Design <button>X</button>
                </div>
                <div className="skill_bxr_gry">
                  Logo Design <button>X</button>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search here skills..."
                  className="no-border font-size-13px search_skilloiouo"
                />
              </div>
            </div>
            <div className="maxlabel_atcxt mt-3">Maximum 15 skills.</div>
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
const EditTitle = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit your title</div>
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
            <div className="mt-4 pt-1 mb-4">
              <div className="pouphed_skll">Your title</div>
              <div className="popuphead_smparcr">
                Enter a single sentence description of your professional
                skills/experience (e.g. Expert Web Designer with Ajax
                experience)
              </div>
            </div>

            <div className="popup_form_element mb-5">
              <input
                type="text"
                className="font-size-13px"
                placeholder="Senior UI/UX, Website Designer And Graphic Designer"
              />
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
const VideoIntro = (props) => {
  const options1 = [
    {
      name: "me talking about my skills",
      label: "me talking about my skills",
    },
    {
      name: "visual samples of my works",
      label: "visual samples of my works",
    },
    {
      name: "something else",
      label: "something else",
    },
  ];
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-4 pt-1 mb-4"></div>

            <div className="mb-5 ">
              <div className="popup_form_element">
                <label className="text-black font-size-13px font-weight-500">
                  Link to your YouTube video
                </label>
                <input
                  type="text"
                  className="font-size-13px"
                  placeholder="Ex: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
              </div>
              <div className="popup_form_element">
                <label className="text-black font-size-13px font-weight-500">
                  What type of video is this?
                </label>
                <Select
                  className="font-size-13px"
                  placeholder="What type of video is this?"
                  options={options1}
                />
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <div className="popup_form_element">
                <label className="text-black font-size-13px font-weight-500">
                  Subject
                </label>
                <input type="text" className="font-size-13px" placeholder=" " />
              </div>
              <div className="popup_form_element">

                <label className="text-black font-size-13px font-weight-500">
                  Description
                </label>
                <textarea
                  className="font-size-13px"
                  placeholder="Enter Here"
                ></textarea>
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Company
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Unify"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Location
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Country
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Country"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Title
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Unify"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      From Month
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="From Month"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      From Year
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="From Year"
                    />
                  </div>
                </Col>
                <Col className="text-right">
                  <div className="agrement_ineoeu flex-row d-flex justify-content-end mt-1 pt-0">
                    <label className="text-black text-right font-size-13px font-weight-500">
                      <input type="checkbox" /> I currently work here
                    </label>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </label>
                    <textarea
                      className="font-size-13px"
                      placeholder="Enter Here"
                    ></textarea>
                  </div>
                </Col>
              </Row>
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <div className="popup_form_element">
                <label className="text-black font-size-13px font-weight-500">
                  Old Password
                </label>
                <input
                  type="password"
                  className="font-size-13px"
                  placeholder=" "
                />
              </div>
              <Row className="mt-1">
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      New password
                    </label>
                    <input
                      type="password"
                      className="font-size-13px"
                      placeholder=" "
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="font-size-13px"
                      placeholder=" "
                    />
                  </div>
                </Col>
              </Row>
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <label className="text-black font-size-13px font-weight-500">
                  <input type="checkbox" /> All devices will be required to sign
                  in with new password
                </label>
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-3">
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <div className="headiwuewopiu">
                  If we need to confirm it's you, which should we try first?
                </div>
                <label className="text-black font-size-13px font-weight-500 mt-3 pb-1 radiolablepopo">
                  <input type="radio" name="g" /> Authenticator app code
                </label>
                <label className="text-black font-size-13px font-weight-500 mt-2 pb-1 radiolablepopo">
                  <input type="radio" name="g" /> Mobile app prompt
                </label>
                <label className="text-black font-size-13px font-weight-500 mt-2 pb-1 radiolablepopo">
                  <input type="radio" name="g" /> Text message
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="popup_form_element agrement_ineoeu mt-3 pt-1">
                <div className="headiwuewopiu">When should we confirm?</div>
                <label className="text-black font-size-13px font-weight-500 mt-3 pb-1 radiolablepopo">
                  <input type="radio" name="g" /> When my login or activity
                  seems risky
                </label>
                <label className="text-black font-size-13px font-weight-500 mt-2 pb-1 radiolablepopo">
                  <input type="radio" name="g" /> At every login and when my
                  login or activity seems risky
                </label>
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

const LanguageEdit = (props) => {
  const options1 = [
    {
      name: "Fluent",
      label: "Fluent",
    },
  ];
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-3 pt-1 mb-3"></div>

            <div className="mb-3 ">
              <Row>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Language
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="English"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Proficiency level
                    </label>
                    <Select
                      className="font-size-13px"
                      placeholder="Fluent"
                      options={options1}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Language
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="English"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Proficiency level
                    </label>
                    <Select
                      className="font-size-13px"
                      placeholder="Fluent"
                      options={options1}
                    />
                  </div>
                </Col>
              </Row>
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
const AddEduc = (props) => {
  const options1 = [
    {
      name: "Fluent",
      label: "Fluent",
    },
  ];
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-3 pt-1 mb-3"></div>

            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      School
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Northwestern University"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Dates Attended (Optional)
                    </label>
                    <Select
                      className="font-size-13px"
                      placeholder="From"
                      options={options1}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Proficiency level
                    </label>
                    <Select
                      className="font-size-13px"
                      placeholder="Fluent"
                      options={options1}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Degree (Optional)
                    </label>
                    <Select
                      className="font-size-13px"
                      placeholder="Degree (Optional)"
                      options={options1}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Area of Study (Optional)
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Computer Science"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </label>
                    <textarea
                      className="font-size-13px"
                      placeholder="Enter Here"
                    ></textarea>
                  </div>
                </Col>
              </Row>
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
const AddCert = (props) => {
  const options1 = [
    {
      name: "Adobe Certified Expert",
      label: "Adobe Certified Expert",
    },
  ];
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-4">
              <div className="popup_form_element">
                <label className="text-black font-size-13px font-weight-500">
                  Proficiency level
                </label>
                <Select
                  className="font-size-13px"
                  placeholder="Select Certificate Type"
                  options={options1}
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
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Enter Here"
                    />
                  </div>
                </Col>
              </Row>
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
const ReqTestimonial = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const testimonialSubmit = (e) => {
    e.preventDefault();
    dispatch(onEditTestimonialInfo(values));
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
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
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
                    <label className="text-black font-size-13px font-weight-500">
                      First Name
                    </label>
                    <input
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

                    <label className="text-black font-size-13px font-weight-500">
                      Last name{" "}
                    </label>
                    <input
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

                    <label className="text-black font-size-13px font-weight-500">
                      Business email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="font-size-13px"
                      value={values?.email}
                      onChange={(e) => onInputChange(e)}
                      placeholder=""
                    />

                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Client's LinkedIn Profile
                    </label>
                    <input
                      type="text"
                      name="linkedin_url"
                      className="font-size-13px"
                      value={values?.linkedin_url}
                      onChange={(e) => onInputChange(e)}
                      placeholder="http://"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Client's title (Optional)
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="font-size-13px"
                      value={values?.title}
                      onChange={(e) => onInputChange(e)}
                      placeholder=" Degree (Optional)"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Project Type (Optional)
                    </label>
                    <input
                      type="text"
                      name="type"
                      className="font-size-13px"
                      value={values?.type}
                      onChange={(e) => onInputChange(e)}
                      placeholder=" Degree (Optional)"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </label>
                    <textarea
                      name="description"
                      className="font-size-13px"
                      value={values?.description}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></textarea>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">

              <button
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
const Overview = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Overview</div>
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
            <div className="gbxewueyuien">
              theDesignerz offers professional and high-quality graphic design
              services. We have been designing for companies worldwide since
              2018. We are a customer service oriented firm, and we will work
              with you until you are completely satisfied with the outcome of
              your design projects. We are the most experienced team of
              designers working on Freelancer since 2017
            </div>
            <div className="maxlabel_atcxt mt-2 text-right">
              4120 characters left
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

const UnifyFreelancer = () => {
  const [popup, Setpopup] = useState();
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
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt=""
                    />
                  </div>
                  <div className="profile_thumb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                  </div>
                </div>
                <div className="han_oad">

                  <div className="freelancer_name font-size-20px">
                    Hannah Finn
                  </div>

                  <div className="freelancer_work">Website Designer</div>
                  <div className="freelance_map">Victoria, Australia</div>
                  <div className="flex_stars">
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
                <button>See Public View</button>
                <Link to="/freelancer/contact-info">
                  <button>Profile Setting</button>
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
              <div className="myskill_prof_node">
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
              </div>
              <div className="profile_detail">
                <div className="pd_flex flex-wrap">
                  <div className="flex_pt">
                    <div className="pt_title">
                      Total <br />
                      Earning
                    </div>
                    <div className="pt_num pt_n1">$100K</div>
                  </div>
                  <div className="flex_pt">
                    <div className="pt_title">
                      Total <br />
                      Jobs
                    </div>
                    <div className="pt_num pt_n2">18</div>
                  </div>
                </div>
                <div className="pd_flex flex-wrap">
                  <div className="flex_pt no-border">
                    <div className="pt_title">
                      Total <br />
                      Hours
                    </div>
                    <div className="pt_num pt_n3">2065</div>
                  </div>
                  <div className="flex_pt no-border">
                    <div className="pt_title">
                      Pending <br />
                      Projects
                    </div>
                    <div className="pt_num pt_n4">05</div>
                  </div>
                </div>
              </div>
              <div className="my_skill_sec">
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
              </div>
              <div className="myskill_prof_node">
                <div className="myskill_hdingn">
                  Video introduction
                  <button
                    onClick={() => {
                      Setpopup(<VideoIntro Popup={Setpopup} />);
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
                  </button>
                </div>
                <div className="myskill_hdingn">
                  Hours per week
                  <button>
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
                  </button>
                </div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  As Needed - Open to Offers
                </div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  3+ days response time
                </div>
                <div className="myskill_hdingn">
                  Languages
                  <div className="d-flex justify-content-start">
                    <button
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
                    </button>
                    <button>
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
                    </button>
                  </div>
                </div>
                <div className="myskill_hdingn">Verification</div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  ID: Verified{" "}
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
                </div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  Hannah Finn
                </div>
                <div className="myskill_hdingn">
                  Education
                  <div className="d-flex justify-content-start">
                    <button
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
                    </button>
                    <button>
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
                    </button>
                  </div>
                </div>
                <div className="myskill_hdingn ms_hdsmall font-size-15px">
                  Tallinna University Bachelor or Engineering (BEng), Computer
                  science 2016-2017
                  <div className="d-flex justify-content-start">
                    <button>
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
                    </button>
                    <button>
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
                    </button>
                  </div>
                </div>
              </div>
              <div className="award_sec">
                <div className="my_skil_head">
                  <h3>Diplomas, certificates</h3>
                </div>
                <div className="row">{Listaward()}</div>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head font-weight-500 line-height-30">
                  Senior UI/UX, Website Designer And Graphic <br /> Designer
                </div>
                <div className="myskill_hdingn">
                  <button
                    onClick={() => {
                      Setpopup(<EditTitle Popup={Setpopup} />);
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
                </div>
              </div>
              <div className="d-flex mt-3">
                <div className="descri_pfro">
                  the Designerz offers professional and high-quality graphic
                  design services. We have been designing for companies
                  worldwide since 2018. We are a customer service oriented firm,
                  and we will work with you until you are completely satisfied
                  with the outcome of your design projects. We are the most
                  experienced team of designers working on Freelancer since 2017
                </div>
                <div className="myskill_hdingn">
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
                  <button className="activetabbar_btn">
                    Commpleted Jobs (2)
                  </button>
                  <button>In Progress (1)</button>
                </div>
                <WorkHistory />
              </div>
            </div>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Portfolio (2)</div>
                <div className="myskill_hdingn">
                  <button>
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
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="d-flex justify-content-center ertr4h6j65esdv align-items-center">
                  <div className="imgbox_bccp">
                    <img src="/assets/123.png" alt="" />
                  </div>
                  <div className="imgbox_bccp">
                    <img src="/assets/1234.png" alt="" />
                  </div>
                  <div className="imgbox_bccp">
                    <img src="/assets/12345.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-profile-bck mb-0">
              <div className="bpbck_txt d-flex mt-0">
                <div className="bpck_head">Skills</div>
                <div className="myskill_hdingn">
                  <button
                    onClick={() => {
                      Setpopup(<EditSkill Popup={Setpopup} />);
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
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="d-flex flex-wrap">
                  <div className="skill_bxr_gry">Mobile App Design</div>
                  <div className="skill_bxr_gry">Website Design</div>
                  <div className="skill_bxr_gry">Logo Design</div>
                  <div className="skill_bxr_gry">Web development</div>
                  <div className="skill_bxr_gry">Banner Design</div>
                  <div className="skill_bxr_gry">App Development</div>
                </div>
              </div>
            </div>
            <div className="box-profile-bck mb-0">
              <div className="d-flex justify-content-end myskill_hdingn">
                <button
                  onClick={() => {
                    Setpopup(<Overview Popup={Setpopup} />);
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
                </button>
              </div>
              <div className="bpbck_txt">
                <div className="bpck_head">Your Project Catalog</div>
              </div>
              <div className="d-flex flex-wrap">
                <div className="d-flex flex-wrap">
                  <div className="imgbox_bccp">
                    <img src="/assets/123.png" alt="" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="heading_pcatlog">
                    UI/UX And Graphic Design
                  </div>
                  <div className="d-flex mt-2 flex-wrap">
                    <div className="catactive_box mt-2">From $40</div>
                    <div className="delivery_time_bckp mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.75"
                        height="20.75"
                        viewBox="0 0 20.75 20.75"
                      >
                        <g
                          id="Icon_ionic-md-time"
                          data-name="Icon ionic-md-time"
                          transform="translate(-3.375 -3.375)"
                          opacity="0.56"
                        >
                          <path
                            id="Path_4754"
                            data-name="Path 4754"
                            d="M13.74,3.375A10.375,10.375,0,1,0,24.125,13.75,10.371,10.371,0,0,0,13.74,3.375Zm.01,18.675a8.3,8.3,0,1,1,8.3-8.3A8.3,8.3,0,0,1,13.75,22.05Z"
                            fill="rgba(0,0,0,0.9)"
                          />
                          <path
                            id="Path_4755"
                            data-name="Path 4755"
                            d="M18.094,10.688H16.538v6.225l5.447,3.267.778-1.277-4.669-2.768Z"
                            transform="translate(-3.825 -2.125)"
                            fill="rgba(0,0,0,0.9)"
                          />
                        </g>
                      </svg>
                      4 days delivery
                    </div>
                  </div>
                  <div className="catbgwhite_bxo">View Project</div>
                </div>
              </div>
            </div>
            <div className="box-profile-bck">
              <div className="d-flex justify-content-end myskill_hdingn">
                <button
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
                </button>
              </div>
              <div className="bpbck_txt">
                <div className="bpck_head">Testimonials</div>
                <div className="bpck_para">Endorsements from past clients</div>
              </div>
              <div className="d-flex justify-content-center flex-column text-center">
                <div className="img_min_bpck">
                  <img src="/assets/consumer.png" alt="" />
                </div>
                <div className="bpck_sm_txt_a mt-4">
                  Showcase your skills with non-Unify client testimonials
                </div>
                <div className="bpck_sm_txt_a">
                  <Link to="">Request a testimonial</Link>
                </div>
              </div>
            </div>
            <div className="box-profile-bck">
              <div className="d-flex justify-content-end myskill_hdingn">
                <button
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
                </button>
              </div>
              <div className="bpbck_txt">
                <div className="bpck_head">Certifications</div>
              </div>
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
                  <Link to="">Add manually</Link>
                </div>
              </div>
            </div>
            <Row>
              <Col md={6}>
                <div className="box-profile-bck minei400">
                  <div className="d-flex justify-content-end myskill_hdingn">
                    <button
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
                    </button>
                  </div>
                  <div className="bpbck_txt">
                    <div className="bpck_head font-weight-600">
                      Employment history
                    </div>
                  </div>
                  <div className="d-flex justify-content-center flex-column pl-20">
                    <div className="bpck_sm_txt_a mt-4 ehistory_uxdes">
                      UI/UX Designer | Expert Web Technplogies
                    </div>
                    <div className="ehitory_dtine">
                      January 2019 - February 2021
                    </div>
                    <div className="bpck_sm_txt_a mt-4 mb-0">
                      <div className="d-flex myskill_hdingn mb-0">
                        <button className="m-0">
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
                        </button>
                        <button>
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="box-profile-bck minei400">
                  <div className="d-flex justify-content-end myskill_hdingn">
                    <button
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
                    </button>
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {popup}
    </div>
  );
};
export default UnifyFreelancer;
