import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screen = ({ proposalArchievedlist, handleRemoveProposalArchieved }) => {
  return (
    <>
      {proposalArchievedlist?.length === 0 ? (
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/archieved-image.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h2>You have no archived proposals</h2>
            </div>
            <div className="no_foun_para_ce">
              Use the archived feature to add your preferred proposals.
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="sort_by_pa width-inherit d-flex align-items-center color-puple mt-2">
            {proposalArchievedlist?.length} Archived
          </div>
          {proposalArchievedlist?.map((data, key) => (
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
                          <Link
                            to={`/freelancer-details/${data.freelancer_id}`}
                          >
                            <div className="freelancer_ame_in">
                              {data.first_name} {data.last_name}
                            </div>
                          </Link>
                          <div className="freelancer_exp_in">
                            {data.occcuption}
                          </div>
                          <div className="freelancer_exp_in freelancer_loc_in">
                            {data.city}, {data.country}
                          </div>
                        </div>
                      </div>
                      <div className="ts_btn attach_f_btn wid_30_in d-flex flex-wrap">
                        <button className="transp_fil_btn mt-2 font-weight-500">
                          Decline
                        </button>
                        <button
                          className="mt-2 font-weight-500 hover_white_io"
                          onClick={() =>
                            handleRemoveProposalArchieved(data.freelancer_id)
                          }
                        >
                          Unarchive
                        </button>
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
