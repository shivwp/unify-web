import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ProjectBudgetPopup = ({ open, onCloseModal, onInputChange, values }) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{ modal: "change-password-popup" }}
      center
    >
      <h5 style={{ fontWeight: 700 }}>Edit Budget</h5>
      <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
        <Row className="mt-3">
          <Col md={5} sm={6}>
            <Form.Label className="form_card_label">
              <div className="select_card subscription_box_r pnew_bud">
                <div className="sub_radio">
                  <Form.Check
                    type="radio"
                    name="budget_type"
                    value="hourly"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="sel_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div className="sho_tit">Hourly Rate</div>
              </div>
            </Form.Label>
          </Col>
          <Col md={5} sm={6}>
            <Form.Label className="form_card_label">
              <div className="select_card subscription_box_r pnew_bud">
                <div className="sub_radio">
                  <Form.Check
                    type="radio"
                    name="budget_type"
                    value="fixed"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="sel_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-ui-checks"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
                <div className="sho_tit">Project budget</div>
              </div>
            </Form.Label>
          </Col>
        </Row>
        {values?.budget_type === "hourly" ? (
          <div className="d-flex">
            <div className="input_ft">
              <div className="input_t_lab bud_new_l_tex">From</div>
              <div className="d-flex">
                <div className="input_from_tlab lign_tex">
                  <div className="d-flex align-items-center">$</div>
                  <Form.Control
                    type="number"
                    name="price"
                    value={values?.price}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input_t_lab input_hour lign_tex pl-2">
                  /hour
                </div>
              </div>
            </div>
            <div className="input_ft">
              <div className="input_t_lab bud_new_l_tex">To</div>
              <div className="d-flex">
                <div className="input_from_tlab lign_tex">
                  <div className="d-flex align-items-center">$</div>
                  <Form.Control
                    type="number"
                    name="min_price"
                    value={values?.min_price}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input_t_lab input_hour lign_tex pl-2">
                  /hour
                </div>
              </div>
            </div>
          </div>
        ) : values?.budget_type === "fixed" ? (
          <div className="d-flex">
            <div className="input_ft">
              <div className="input_t_lab bud_new_l_tex">To</div>
              <div className="d-flex">
                <div className="input_from_tlab lign_tex">
                  <div className="d-flex align-items-center">$</div>
                  <Form.Control
                    type="number"
                    name="price"
                    value={values?.price}
                    onChange={(e) => onInputChange(e)}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input_t_lab input_hour lign_tex pl-2">
                  /hour
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="ft_par">
          This is the average rate for similar projects.
        </div>
        <div className="mt-4 bud_news_para">
          Professionals tend to charge <span>$15 - $35/hour (USD)</span> for
          UI/UX design projects like yours. Experts may charge higher rates.
        </div>
        <div className="ft_form_linki">Not ready to set an hourly rate?</div>
        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <button className="trans_btn hov_pple" onClick={() => onCloseModal()}>
            Cancel
          </button>
          <button className="btnhovpple" onClick={() => onCloseModal()}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectBudgetPopup;