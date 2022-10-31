import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Screen = () => {
  return (
    <>
      <div className="search_area_in sm_serch_fll_n">
        <div className="select_inp_in mt-2">
          <Form.Select>
            <option>All</option>
          </Form.Select>
        </div>
        <div className="search_input_in selec_inp_ful_w mt-2 mb-0">
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
      </div>
      <div className="sort_by_pa width-inherit d-flex align-items-center color-puple">
        2 Archived
      </div>
      <div className="freelancer_box_in">
        <Row>
          <Col lg={12}>
            <div className="freelancer_box_area_in">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex">
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
                <div className="ts_btn attach_f_btn wid_30_in d-flex">
                  <Button className="fw-500">unarchive</Button>
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
