import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screen = ({ getSavedTalentList, handleRemoveSavedTalent, jobId }) => {
  return (
    <>
      {getSavedTalentList?.length === 0 ? (
        <div className="d-flex justify-content-center flex-column align-items-center py-4">
          <img src="/assets/saved-talent.png" alt="" />
          <h3>You haven’t saved anyone yet</h3>
          <p>
            Select the heart icon to save your favorite talent and agencies to
            custom lists.
          </p>
        </div>
      ) : (
        <>
          {getSavedTalentList?.map((data, key) => (
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
                            {data.occuption}
                          </div>
                          <div className="freelancer_exp_in freelancer_loc_in">
                            {data.city}, {data.country}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="transp_fil_btn heart_roun_btn"
                          onClick={() => handleRemoveSavedTalent(data.id)}
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
                        <div className="ts_btn attach_f_btn wid_30_in d-flex">
                          <Link to={`/hire-freelancer/${jobId}/${data.id}`}>
                            <button className="transp_fil_btn font-weight-500">
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
                        <b>${data.total_earning}k+</b> earned
                      </div>
                      <div className="amount_hir_in p-0">
                        <b>{data.success_rate}</b> Job Success
                      </div>
                    </div>
                    <div className="cover_letter_in">
                      <b>What I Do </b> - {data.description}
                    </div>
                    <div className="overflow-scroll">
                      <div className="slide_btnss freelancer_skill_sc">
                        {data.skills.map((item, key) => (
                          <button>{item.skill_name}</button>
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
