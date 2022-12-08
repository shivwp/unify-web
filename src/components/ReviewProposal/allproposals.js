import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screen = ({ jobBasedProposalsList }) => {
  return (
    <>
      {/* <div className="search_area_in">
        <div className="select_inp_in d-flex">
          <div className="sort_by_pa width-inherit d-flex align-items-center">
            Sort By
          </div>
          <Form.Select>
            <option>Best match</option>
            <option>Newest applicants</option>
            <option>Oldest applicants</option>
            <option>Highest hourly rate</option>
            <option>Lowest hourly rate</option>
            <option>Highest earnings</option>
          </Form.Select>
        </div>
        <div className="search_input_in selec_inp_ful_w">
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
        </div>
      </div> */}
      {jobBasedProposalsList?.map((data, key) => (
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
                      <div className="freelancer_exp_in">{data.occcuption}</div>
                      <div className="freelancer_exp_in freelancer_loc_in">
                        {data.city}, {data.country}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    <button className="transp_fil_btn heart_roun_btn mt-2">
                      <i
                        class="bi bi-hand-thumbs-down-fill"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                    <button className="transp_fil_btn heart_roun_btn mt-2">
                      <i
                        class="bi bi-hand-thumbs-up-fill"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                    <button className="transp_fil_btn heart_roun_btn mt-2">
                      <i
                        class="bi bi-hand-thumbs-down"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                    <button className="transp_fil_btn heart_roun_btn mt-2">
                      <i
                        class="bi bi-hand-thumbs-up"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                    <div className="ts_btn attach_f_btn wid_30_in d-flex flex-wrap">
                      <button className="transp_fil_btn mt-2 font-weight-500">
                        Message
                      </button>
                      <Link to="/hire-freelancer">
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
  );
};
export default Screen;
