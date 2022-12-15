import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Screen = () => {
  Title(" | Talent Your Hires");
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between flex-wrap align-items-center disc_top_s_ar mt-4 mb-4 pt-2">
          <div>
            <div className="disc_head_h1">
              <h1>Your Hires</h1>
            </div>
            <div className="disc_para_h">Look up people you've worked with</div>
          </div>
        </div>
        <Row>
          {/* <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/Layer 36.png" alt="" />
                                </div>
                                <div className="hi_bx_head2">An Absolute Lifesaver</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/time (2).png" alt="" />
                                </div>
                                <div className="hi_bx_head2">A Long-Term Collaborator</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={10} className="mb-3">
                        <div className="hire_box_yh">
                            <div>
                                <div className="hire_b_im">
                                    <img src="/assets/idea (2).png" alt="" />
                                </div>
                                <div className="hi_bx_head2">Your Go-To Problem Solver</div>
                            </div>
                        </div>
                    </Col> */}
          <div className="box_vs_m">
            <div className="search_area_in mob_ele_wfull">
              <div className="freelancer_box_in mt-0 pt-4 pb-5">
                <Row>
                  {/* <Col lg={1} sm={1}>
                    <div className="profile_sel_ceck_alne">
                      <Checkbox
                        icon={<Icon.FiCheck color="#6d2ef1" size={17} />}
                        name="my-input"
                        borderRadius={0}
                        borderWidth={1}
                        borderColor="#D8D7D7"
                        style={{
                          cursor: "pointer",
                          height: "24px",
                          width: "24px",
                        }}
                      />
                    </div>
                  </Col> */}
                  <Col lg={12} sm={12}>
                    <div className="freelancer_box_area_in">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex flex-wrap">
                          <div className="freelancer_img_in_r online_profile">
                            <img src="/assets/PRO-2.png" alt="" />
                          </div>
                          <div className="freel_det_bin">
                            <div className="freelancer_ame_in">Ajay Kumar</div>
                            <div className="freelancer_exp_in">
                              React Js Developer
                            </div>
                            <div className="freelancer_timin d-flex">
                              <div className="amount_hir_in p-0 ml-0">
                                <b>$80</b> /hr
                              </div>
                              <div className="line_hr_a">|</div>
                              <div className="amount_hir_in p-0">
                                <b>20%</b> Job Success
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" attach_f_btn wid_30_in d-flex">
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            //   onClick={(e) => RemoveSavedTalent(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </button>
                          <Button
                            variant=""
                            className="transp_fil_btn heart_roun_btn"
                            style={{ position: "relative" }}
                            //   onClick={() =>
                            //     setShowPopup(showPopup ? false : item.id)
                            //   }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots-vertical"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                            {/* {showPopup == item.id ? (
                            <div
                              id="saved_talents_options"
                              className="saved_talents_options"
                            >
                              <span>Hire</span>
                              <span>Invite to job</span>
                              <span>Add a note</span>
                            </div>
                          ) : (
                            ""
                          )} */}
                          </Button>
                        </div>
                      </div>
                      <div className="freelancer_compl_in show_more">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Aperiam esse nulla aut, rerum neque officiis
                          mollitia quaerat molestias nostrum eligendi, omnis
                          doloremque sapiente ad quo cumque, iure ullam
                          voluptatibus ipsum?
                        </p>

                        <span>Show Less</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="search_area_in mob_ele_wfull">
              <div className="freelancer_box_in mt-0 pt-4 pb-5">
                <Row>
                  {/* <Col lg={1} sm={1}>
                    <div className="profile_sel_ceck_alne">
                      <Checkbox
                        icon={<Icon.FiCheck color="#6d2ef1" size={17} />}
                        name="my-input"
                        borderRadius={0}
                        borderWidth={1}
                        borderColor="#D8D7D7"
                        style={{
                          cursor: "pointer",
                          height: "24px",
                          width: "24px",
                        }}
                      />
                    </div>
                  </Col> */}
                  <Col lg={12} sm={12}>
                    <div className="freelancer_box_area_in">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex flex-wrap">
                          <div className="freelancer_img_in_r online_profile">
                            <img src="/assets/PRO-2.png" alt="" />
                          </div>
                          <div className="freel_det_bin">
                            <div className="freelancer_ame_in">Ajay Kumar</div>
                            <div className="freelancer_exp_in">
                              React Js Developer
                            </div>
                            <div className="freelancer_timin d-flex">
                              <div className="amount_hir_in p-0 ml-0">
                                <b>$80</b> /hr
                              </div>
                              <div className="line_hr_a">|</div>
                              <div className="amount_hir_in p-0">
                                <b>20%</b> Job Success
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" attach_f_btn wid_30_in d-flex">
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            //   onClick={(e) => RemoveSavedTalent(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </button>
                          <Button
                            variant=""
                            className="transp_fil_btn heart_roun_btn"
                            style={{ position: "relative" }}
                            //   onClick={() =>
                            //     setShowPopup(showPopup ? false : item.id)
                            //   }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots-vertical"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                            {/* {showPopup == item.id ? (
                            <div
                              id="saved_talents_options"
                              className="saved_talents_options"
                            >
                              <span>Hire</span>
                              <span>Invite to job</span>
                              <span>Add a note</span>
                            </div>
                          ) : (
                            ""
                          )} */}
                          </Button>
                        </div>
                      </div>
                      <div className="freelancer_compl_in show_more">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Aperiam esse nulla aut, rerum neque officiis
                          mollitia quaerat molestias nostrum eligendi, omnis
                          doloremque sapiente ad quo cumque, iure ullam
                          voluptatibus ipsum?
                        </p>

                        <span>Show Less</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="search_area_in mob_ele_wfull">
              <div className="freelancer_box_in mt-0 pt-4 pb-5">
                <Row>
                  {/* <Col lg={1} sm={1}>
                    <div className="profile_sel_ceck_alne">
                      <Checkbox
                        icon={<Icon.FiCheck color="#6d2ef1" size={17} />}
                        name="my-input"
                        borderRadius={0}
                        borderWidth={1}
                        borderColor="#D8D7D7"
                        style={{
                          cursor: "pointer",
                          height: "24px",
                          width: "24px",
                        }}
                      />
                    </div>
                  </Col> */}
                  <Col lg={12} sm={12}>
                    <div className="freelancer_box_area_in">
                      <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex flex-wrap">
                          <div className="freelancer_img_in_r online_profile">
                            <img src="/assets/PRO-2.png" alt="" />
                          </div>
                          <div className="freel_det_bin">
                            <div className="freelancer_ame_in">Ajay Kumar</div>
                            <div className="freelancer_exp_in">
                              React Js Developer
                            </div>
                            <div className="freelancer_timin d-flex">
                              <div className="amount_hir_in p-0 ml-0">
                                <b>$80</b> /hr
                              </div>
                              <div className="line_hr_a">|</div>
                              <div className="amount_hir_in p-0">
                                <b>20%</b> Job Success
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" attach_f_btn wid_30_in d-flex">
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            //   onClick={(e) => RemoveSavedTalent(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </button>
                          <Button
                            variant=""
                            className="transp_fil_btn heart_roun_btn"
                            style={{ position: "relative" }}
                            //   onClick={() =>
                            //     setShowPopup(showPopup ? false : item.id)
                            //   }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-three-dots-vertical"
                              viewBox="0 0 16 16"
                            >
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                            {/* {showPopup == item.id ? (
                            <div
                              id="saved_talents_options"
                              className="saved_talents_options"
                            >
                              <span>Hire</span>
                              <span>Invite to job</span>
                              <span>Add a note</span>
                            </div>
                          ) : (
                            ""
                          )} */}
                          </Button>
                        </div>
                      </div>
                      <div className="freelancer_compl_in show_more">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Aperiam esse nulla aut, rerum neque officiis
                          mollitia quaerat molestias nostrum eligendi, omnis
                          doloremque sapiente ad quo cumque, iure ullam
                          voluptatibus ipsum?
                        </p>

                        <span>Show Less</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
        <div className="d_pbtn_as">
          <div className="disc_para_h">
            You haven’t hired anyone yet. Start searching for the right fit for
            your next project.
          </div>
          <Link to="/search">
            <Button
              variant=""
              className="find_tal_btn pt-3 pb-3 font-weight-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="#fff"
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
              Find Talent
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Screen;
