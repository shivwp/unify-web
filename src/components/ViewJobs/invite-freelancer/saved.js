import { Col, Row } from "react-bootstrap";

const Screen = ({
  getSavedTalentList,
  handleRemoveSavedTalent,
  savedTalentError,
}) => {
  return (
    <>
      {savedTalentError === undefined ? (
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
                          <button className="transp_fil_btn font-weight-500">
                            Hire
                          </button>
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
                        <b>{data.success_rate}%</b> Job Success
                      </div>
                    </div>
                    <div className="cover_letter_in">
                      <b>What I Do </b> - {data.description}
                    </div>
                    <div className="overflow-scroll">
                      <div className="slide_btnss freelancer_skill_sc">
                        {data.skills.map((item, key) => (
                          <button>Mobile App Design</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </>
      ) : (
        <div className="d-flex justify-content-center flex-column align-items-center py-4">
          <img src="/assets/saved-talent.png" alt="" />
          <h3>You haven’t saved anyone yet</h3>
          <p>
            Select the heart icon to save your favorite talent and agencies to
            custom lists.
          </p>
        </div>
      )}

      {/* <div className="search_area_in sm_serch_fll_n">
        <div className="select_inp_in mt-2">
          <Form.Select>
            <option>All Saved</option>
          </Form.Select>
        </div>
        <Form.Group className="search_input_in selec_inp_ful_w mt-2 mb-0">
          <div className="search_icon_in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <Form.Control type={`text`} placeholder={`search...`} />
        </Form.Group>
      </div> */}
    </>
  );
};
export default Screen;
