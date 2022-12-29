import { Col, Row } from "react-bootstrap";

const Screen = ({ offeredFreelancerList }) => {
  return (
    <>
      {offeredFreelancerList?.length === 0 ? (
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/Group 2945.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h1>You don't have any offers yet</h1>
            </div>
            <div className="no_foun_para_ce">
              Interview promising candidates and make them an offer.
            </div>
          </div>
        </div>
      ) : (
        <>
          {offeredFreelancerList?.map((data, key) => (
            <div className="freelancer_box_in" key={key}>
              <Row>
                <Col lg={12}>
                  <div className="freelancer_box_area_in">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="d-flex">
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
                      <div className="ts_btn attach_f_btn wid_30_in d-flex hir_no_in">
                        <div className="amount_hir_in">
                          <b>${parseInt(data.amount).toFixed(2)} </b>/hr
                        </div>
                        <span>|</span>
                        <div className="amount_hir_in">
                          <b>${data.total_earning}k+</b> earned
                        </div>
                      </div>
                    </div>
                    <div className="freelancer_compl_in">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-journal-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                      </svg>
                      Received 2 months ago
                    </div>
                    <div className="cover_letter_in">
                      <b>Cover letter </b> - {data.cover_letter}
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
