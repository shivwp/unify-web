import * as React from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../components/title";
import star from "../../icons/star.svg";

const Screen = () => {
  Title(" | Send Proposal");

  return (
    <>
      <Container>
        <div className="propo_box_sp">
          <Row>
            <Col lg={5}>
              <div className="send_propo_hdsp">Submit a proposal</div>
              <div className="ssmtxto_hdsp mt-2">
                Propose with a Specialized profile
              </div>
              <div className="sm_select_hdsp">
                <select>
                  <option>General Profile</option>
                </select>
              </div>
              <div className="ssmtxto_hdsp">
                This proposal requires 4 Connects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#F1A2D1"
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </div>
              <div className="ssmtxto_hdsp">
                When you submit this proposal, you'll have 132 Connects
                remaining.
              </div>
            </Col>
          </Row>
        </div>
        <div className="propo_box_sp">
          <div className="heat_lef">
            <img src={star} alt="" />
          </div>
          <Row className="bbtm_gay mt-3">
            <Col lg={9} className="bright_gay">
              <div className="send_prp_blew_hsp">Job Details</div>
              <div className="send_propo_hdsp">
                Graphic Design Logo design for companies and the brand
              </div>
              <div className="d-flex mt-3 mb-3">
                <div className="blue_bx_sp_ct">Graphic Design</div>
                <div className="trs_css-76">Posted Aug 3, 2022</div>
              </div>
              <div className="pbsp_prs">
                Logo design for companies and the brand Choosing the idea of his
                design for the company's name and content
              </div>
              <div className="pbsp_prs">
                The design will be similar in name or contain abbreviated
                letters of the name
              </div>
              <div className="pbsp_prs">
                Message the project supervisor on telegram @Michellewilliams460
              </div>
              <div className="bbsp_linkn">
                <a href="#0">View job posting</a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="box_bgay">
                <div className="d-flex br_sc_gay">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 28 28"
                    >
                      <g
                        id="Group_3311"
                        data-name="Group 3311"
                        transform="translate(-1432 -789)"
                      >
                        <circle
                          id="Ellipse_622"
                          data-name="Ellipse 622"
                          cx="14"
                          cy="14"
                          r="14"
                          transform="translate(1432 789)"
                          fill="#6d2ef1"
                        />
                        <g
                          id="_3790073_book_expert_guru_pundit_sage_icon"
                          data-name="3790073_book_expert_guru_pundit_sage_icon"
                          transform="translate(1436 794)"
                        >
                          <path
                            id="Path_4553"
                            data-name="Path 4553"
                            d="M17,2.242l-.078-.012a13.791,13.791,0,0,0-6.263.523L10,2.966l-.659-.295a13.791,13.791,0,0,0-6.263-.523L3,2.16v8.448l1.538-.367A6.37,6.37,0,0,1,7.2,10.177a3.594,3.594,0,0,1,.635.191L10,11.293l2.184-.851a3.415,3.415,0,0,1,.592-.179,6.37,6.37,0,0,1,2.686.059L17,10.69ZM9.179,9.07a2.558,2.558,0,0,0-.5-.164,12.789,12.789,0,0,0-4.907-.06L3.681,8.37a13.264,13.264,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm0-1.448a2.558,2.558,0,0,0-.5-.164A12.789,12.789,0,0,0,3.767,7.4l-.086-.475a13.261,13.261,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm0-1.448a2.558,2.558,0,0,0-.5-.164,12.789,12.789,0,0,0-4.907-.06l-.086-.475a13.262,13.262,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm0-1.448a2.558,2.558,0,0,0-.5-.164A12.789,12.789,0,0,0,3.767,4.5l-.086-.475a13.261,13.261,0,0,1,5.092.063,3.043,3.043,0,0,1,.6.2Zm1.063,5.844H9.759V3.328h.483Zm5.991-1.724a12.788,12.788,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.27,13.27,0,0,1,5.092-.063Zm0-1.448a12.79,12.79,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.27,13.27,0,0,1,5.092-.063Zm0-1.448a12.788,12.788,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.263,13.263,0,0,1,5.092-.063Zm0-1.448a12.79,12.79,0,0,0-4.908.06,2.561,2.561,0,0,0-.5.164l-.194-.442a3.046,3.046,0,0,1,.6-.2,13.267,13.267,0,0,1,5.092-.063Z"
                            fill="#fff"
                          />
                          <path
                            id="Path_4554"
                            data-name="Path 4554"
                            d="M9.259,38.054c-.055-.022-.1-.036-.156-.054v1.24H7.369A2.369,2.369,0,0,0,5,41.609v2.217H18.034V41.609a2.369,2.369,0,0,0-2.369-2.369H13.931V38.081c-.047.017-.091.03-.142.05l-.341.133v.976a1.948,1.948,0,0,1-3.862,0V38.194Z"
                            transform="translate(-1.517 -27.31)"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="br_sec_name_cwss">Expert</div>
                    <div className="br_sec_val_cwss">Experience Level</div>
                  </div>
                </div>
                <div className="d-flex br_sc_gay">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 28 28"
                    >
                      <g
                        id="Group_3310"
                        data-name="Group 3310"
                        transform="translate(-1432 -881)"
                      >
                        <circle
                          id="Ellipse_623"
                          data-name="Ellipse 623"
                          cx="14"
                          cy="14"
                          r="14"
                          transform="translate(1432 881)"
                          fill="#6d2ef1"
                        />
                        <path
                          id="_171279_alarm_clock_bell_time_icon"
                          data-name="171279_alarm_clock_bell_time_icon"
                          d="M7.438,4.648a.93.93,0,0,0-.93.93V8l-.655.654a.85.85,0,0,0-.275.648.93.93,0,0,0,.93.93.9.9,0,0,0,.647-.275l.963-.962a.875.875,0,0,0,.25-.622V5.578A.93.93,0,0,0,7.438,4.648Zm0-2.789a6.5,6.5,0,0,0-5.2,10.408L1.2,13.3a.875.875,0,0,0-.27.641.94.94,0,0,0,.93.93.881.881,0,0,0,.641-.27l1.037-1.037a6.474,6.474,0,0,0,7.8,0L12.374,14.6a.88.88,0,0,0,.641.27.94.94,0,0,0,.93-.93.877.877,0,0,0-.27-.641l-1.037-1.037a6.5,6.5,0,0,0-5.2-10.408Zm0,11.156a4.648,4.648,0,1,1,4.648-4.648A4.649,4.649,0,0,1,7.438,13.016ZM12.086,0A2.785,2.785,0,0,0,9.733,1.3a7.454,7.454,0,0,1,4.248,3.536A2.786,2.786,0,0,0,12.086,0ZM5.142,1.3A2.787,2.787,0,1,0,.893,4.831,7.455,7.455,0,0,1,5.142,1.3Z"
                          transform="translate(1438.563 887.563)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="br_sec_name_cwss">$25.00-$45.00</div>
                    <div className="br_sec_val_cwss">Hourly Range</div>
                  </div>
                </div>
                <div className="d-flex br_sc_gay">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 28 28"
                    >
                      <g
                        id="Group_3309"
                        data-name="Group 3309"
                        transform="translate(-1432 -974)"
                      >
                        <circle
                          id="Ellipse_624"
                          data-name="Ellipse 624"
                          cx="14"
                          cy="14"
                          r="14"
                          transform="translate(1432 974)"
                          fill="#6d2ef1"
                        />
                        <path
                          id="_7787502_clock_time_watch_timer_alarm_icon"
                          data-name="7787502_clock_time_watch_timer_alarm_icon"
                          d="M24.531,15a9.523,9.523,0,1,0,6.742,2.789A9.531,9.531,0,0,0,24.531,15Zm0,16.82a7.274,7.274,0,1,1,5.158-2.131A7.289,7.289,0,0,1,24.531,31.82Zm2.691-8.578-1.57.673V20.046a1.121,1.121,0,0,0-2.243,0v5.607a1.1,1.1,0,0,0,.5.953,1.041,1.041,0,0,0,1.065.056l3.14-1.4a1.1,1.1,0,0,0-.9-2.018Z"
                          transform="translate(1421 963)"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="br_sec_name_cwss">
                      Less than 30 hrs/week
                    </div>
                    <div className="br_sec_val_cwss">Hourly</div>
                  </div>
                </div>
                <div className="d-flex br_sc_gay">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 28 28"
                    >
                      <g
                        id="Group_3308"
                        data-name="Group 3308"
                        transform="translate(-1432 -1056)"
                      >
                        <circle
                          id="Ellipse_625"
                          data-name="Ellipse 625"
                          cx="14"
                          cy="14"
                          r="14"
                          transform="translate(1432 1056)"
                          fill="#6d2ef1"
                        />
                        <g id="icons" transform="translate(1436.625 1059.625)">
                          <g id="calendar" transform="translate(2 2)">
                            <path
                              id="Path_4555"
                              data-name="Path 4555"
                              d="M13.8,3.475a1.475,1.475,0,0,0-2.95,0H7.9a1.475,1.475,0,0,0-2.95,0A2.959,2.959,0,0,0,2,6.425V13.8a2.959,2.959,0,0,0,2.95,2.95H13.8a2.959,2.959,0,0,0,2.95-2.95V6.425A2.959,2.959,0,0,0,13.8,3.475Zm1.475,11.062a.7.7,0,0,1-.738.738H4.213a.7.7,0,0,1-.738-.738v-5.9A.7.7,0,0,1,4.213,7.9H14.537a.7.7,0,0,1,.738.737Z"
                              transform="translate(-2 -2)"
                              fill="#fff"
                            />
                            <path
                              id="Path_4556"
                              data-name="Path 4556"
                              d="M11.95,12H10.475A1.479,1.479,0,0,0,9,13.475V14.95a1.479,1.479,0,0,0,1.475,1.475H11.95a1.479,1.479,0,0,0,1.475-1.475V13.475A1.479,1.479,0,0,0,11.95,12Z"
                              transform="translate(-3.838 -4.625)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div className="br_sec_name_cwss">1 to 3 months</div>
                    <div className="br_sec_val_cwss">Project Length</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-3">
            <div className="skll_hding">Skills and expertise</div>
            <div className="d-flex flex-wrap cwcss_cw">
              <div className="blue_bx_sp_ct">Backend Developer</div>
              <div className="blue_bx_sp_ct">Designer</div>
              <div className="blue_bx_sp_ct">Support Agent</div>
              <div className="blue_bx_sp_ct">IOS Developer</div>
            </div>
          </div>
        </div>
        <div className="propo_box_sp bg_gray_sp no-border">
          <Row className="mt-3">
            <Col lg={9}>
              <div className="send_prp_blew_hsp">Terms</div>
              <div className="send_propo_hdsp mt-2">
                What is the rate you'd like to bid for this job?
              </div>
              <div className="sphd_btext_protection mt-2">
                Your profile rate: $15.00/hr
              </div>
              <div className="pbx_pdd_sp">
                <div className="mt-2">
                  <div className="hraet_pdd_sp">Hourly Rate</div>
                  <div className="tamoun_pdd_sp">
                    Total amount the client will see on your proposal
                  </div>
                </div>
                <div>
                  <div className="sli_bdg_pddsp">
                    Client’s budget: $25.00 - $45.00/hr
                  </div>
                  <div className="d-flex">
                    <div className="inp_bdg_pdsp">
                      $
                      <input type="text" value={`15.00`} />
                    </div>
                    <div className="sli_bdg_pddsp d-flex align-items-center slsh_rh">
                      /hr
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbx_pdd_sp mt-1 mb-1">
                <div className="mt-2 d-flex align-items-center">
                  <div className="hraet_pdd_sp">20% Unify Service Fee</div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex">
                    <div className="inp_bdg_pdsp">
                      $
                      <input type="text" value={`03.00`} />
                    </div>
                    <div className="sli_bdg_pddsp d-flex align-items-center slsh_rh">
                      /hr
                    </div>
                  </div>
                </div>
              </div>
              <div className="pbx_pdd_sp no-border">
                <div className="mt-2">
                  <div className="hraet_pdd_sp">You'll receive</div>
                  <div className="tamoun_pdd_sp">
                    The estimated amount you'll receive after service fees
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="inp_bdg_pdsp">
                      $
                      <input type="text" value={`12.00`} />
                    </div>
                    <div className="sli_bdg_pddsp d-flex align-items-center slsh_rh">
                      /hr
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="bc_vrwprotection">
                <div className="img_bx_protection">
                  <img src="/assets/protection.png" alt="" />
                </div>
                <div className="css-name-proetction mt-3">
                  Includes Upwork Unify Protection.
                </div>
                <div className="css-rve-prt pt-1">Learn More</div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="propo_box_sp bg_gray_sp no-border">
          <Row className="mt-3">
            <Col lg={12}>
              <div className="skll_hding">Cover Letter</div>
              <div className="cvr_ltr_textbox">
                <textarea></textarea>
              </div>
              <div className="skll_hding mt-4">Attachments</div>
              <div className="skll_hding mt-4 drag_file_bx"><input type="file"   />Drag or <span>upload</span> project files</div>
              <div className="tamoun_pdd_sp mt-4">
                You may attach up to 10 files under the size of 25MB each.
                Include work samples or other documents to support your
                application. Do not attach your résumé — your Unify profile is
                automatically forwarded to the client with your proposal.
              </div>
            </Col>
          </Row>
        </div>
              <div className="mt-4 mb-4">
                <button className="send_pros_btn">send proposal</button>
              </div>
      </Container>
    </>
  );
};
export default Screen;
