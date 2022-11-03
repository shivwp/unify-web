import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Screen = (props) => {
  return (
    <>
      <div className="search_area_in">
        <div className="select_inp_in d-flex">
          <div className="sort_by_pa width-inherit d-flex align-items-center">
            Sort By
          </div>
          <select>
            <option>Best match</option>
            <option>Newest applicants</option>
            <option>Oldest applicants</option>
            <option>Highest hourly rate</option>
            <option>Lowest hourly rate</option>
            <option>Highest earnings</option>
          </select>
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
          <input type={`text`} placeholder={`search...`} />
        </div>
      </div>
      <div className="freelancer_box_in">
        <Row>
          <Col lg={12}>
            <div className="freelancer_box_area_in">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex flex-wrap">
                  <div className="freelancer_img_in_r online_profile">
                    <img src="/assets/PRO-2.png" alt="" />
                  </div>
                  <div className="freel_det_bin">
                    <div className="freelancer_ame_in">Mario Speedwagon</div>
                    <div className="freelancer_exp_in">
                      Expert in Mobile and Web Development.
                    </div>
                    <div className="freelancer_exp_in freelancer_loc_in">
                      Kharkov, Ukraine
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                  <button
                    className="transp_fil_btn heart_roun_btn mt-2"
                    onClick={() => {
                      props.changetab("archive");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
                      />
                    </svg>
                  </button>
                  <div className="ts_btn attach_f_btn wid_30_in d-flex flex-wrap">
                    <button className="transp_fil_btn mt-2 font-weight-500">
                      Message
                    </button>
                    <Link to="/hire-freelancer">
                      <button className="mt-2 font-weight-500">Hire</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="freelancer_timin d-flex">
                <div className="amount_hir_in p-0 m-0">
                  <b>$15.00</b> /hr
                </div>
                <div className="amount_hir_in p-0">
                  <b>$25k+</b> earned
                </div>
              </div>
              <div className="cover_letter_in">
                <b>Cover Letter </b> - Hello! I am a professional UI/UX
                Designer. There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Screen;
