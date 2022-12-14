import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screen = ({
  proposalShortlist,
  handleRemoveProposalShortList,
  handleSaveProposalShortList,
}) => {
  return (
    <>
      {proposalShortlist?.length === 0 ? (
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/data-not-found.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>You have no shortlisted proposals</h1>
            </div>
            <div className="no_foun_para_ce">
              Use the shortlist feature to add your preferred proposals.
            </div>
          </div>
        </div>
      ) : (
        <>
          {proposalShortlist?.map((data, key) => (
            <div className="freelancer_box_in" key={key}>
              <Row>
                <Col lg={12}>
                  <div className="freelancer_box_area_in">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="d-flex flex-wrap">
                        <div className="freelancer_img_in_r online_profile">
                          <img src={data.profile_image} alt="" />
                        </div>
                        <div className="freel_det_bin">
                          <div className="freelancer_ame_in">
                            {data.first_name} {data.last_name}
                          </div>
                          <div className="freelancer_exp_in">
                            {data.occcuption}
                          </div>
                          <div className="freelancer_exp_in freelancer_loc_in">
                            {data.city}, {data.country}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap">
                        {/* <button className="transp_fil_btn heart_roun_btn mt-2">
                          <i
                            className="bi bi-hand-thumbs-down"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </button> */}

                        {data.isShortlist === true ? (
                          <button
                            className="transp_fil_btn heart_roun_btn mt-2"
                            onClick={() =>
                              handleRemoveProposalShortList(data.freelancer_id)
                            }
                          >
                            <i
                              className="bi bi-hand-thumbs-up-fill"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </button>
                        ) : (
                          <button
                            className="transp_fil_btn heart_roun_btn mt-2"
                            onClick={() =>
                              handleSaveProposalShortList(data.freelancer_id)
                            }
                          >
                            <i
                              className="bi bi-hand-thumbs-up"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </button>
                        )}
                        <div className="ts_btn attach_f_btn wid_30_in d-flex flex-wrap">
                          <button className="transp_fil_btn mt-2 font-weight-500">
                            Message
                          </button>
                          <Link
                            to={`/hire-freelancer/${data.proposal_id}/${data.freelancer_id}`}
                          >
                            <button className="mt-2 font-weight-500 hover_white_io">
                              Hire
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="freelancer_timin d-flex">
                      <div className="amount_hir_in p-0 m-0">
                        <b>${parseInt(data.amount).toFixed(2)}</b> /hr
                      </div>
                      <div className="amount_hir_in p-0">
                        <b>${data.earned}k+</b> earned
                      </div>
                    </div>
                    <div className="cover_letter_in">
                      <b>Cover Letter </b> - {data.cover_letter}
                    </div>
                    <div className="overflow-scroll">
                      <div className="slide_btnss freelancer_skill_sc">
                        {data.skills.map((item, key) => (
                          <button key={key}>{item.skill_name}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default Screen;
