import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";

const ScopePopup = ({ open, onCloseModal, onInputChange, values }) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{ modal: "change-password-popup" }}
      center
    >
      <h5 style={{ fontWeight: 700 }}>Scope</h5>

      <div className="popup_body_bpn amount_popup_body max_height_popucwui">
        <div className="mt-3 pt-1">
          <div className="on_time_h3 d-block no-border pt-0 pb-0">
            <div className="">
              <div className="s_b_r mrr_riii d-block mt-0">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="scope-one"
                    name="scop"
                    value="large"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="scope-one">
                    <p className="font-20">
                      <b className="text-black">Large</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para f-16">
                    Longer term or complex initiatives (ex. design and build a
                    full website)
                  </p>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="scope-two"
                    name="scop"
                    value="medium"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="scope-two">
                    <p className="font-20">
                      <b className="text-black">Medium</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para f-16">
                    Well-defined projects (ex. a landing page)
                  </p>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="scope-three"
                    name="scop"
                    value="small"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="scope-three">
                    <p className="font-20">
                      <b className="text-black">Small</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para f-16">
                    Quick and straightforward tasks (ex. update text and images
                    on a webpage)
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="scop_head mb-2">
                <h3>How long will your work take?</h3>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="work-take-one"
                    name="project_duration"
                    value="More than 6 months"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="work-take-one">
                    <p className="litt_sm_para">More than 6 months</p>
                  </Form.Label>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="work-take-two"
                    name="project_duration"
                    value="3 to 6 months"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="work-take-two">
                    <p className="litt_sm_para">3 to 6 months</p>
                  </Form.Label>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="work-take-three"
                    name="project_duration"
                    value="1 to 3 months"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="work-take-three">
                    <p className="litt_sm_para">1 to 3 months</p>
                  </Form.Label>
                </div>
              </div>
            </div>
            <div className="">
              <div className="scop_head">
                <h3>What level of experience will it need?</h3>
              </div>
              <p className="litt_sm_para">
                This won't restrict any proposals, but helps match expertise to
                your budget.
              </p>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="level-one"
                    name="experience_level"
                    value="entry"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="level-one">
                    <p>
                      <b className="text-black">Entry</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para">
                    Looking for someone relatively new to this field
                  </p>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="level-two"
                    name="experience_level"
                    value="intermediate"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="level-two">
                    <p>
                      <b className="text-black">Intermediate</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para">
                    Looking for someone relatively new to this field
                  </p>
                </div>
              </div>
              <div className="s_b_r mrr_riii d-block">
                <div className="flex_aling">
                  <Form.Check
                    type="radio"
                    id="lavel-three"
                    name="experience_level"
                    value="expert"
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Label htmlFor="lavel-three">
                    <p>
                      <b className="text-black">Expert</b>
                    </p>
                  </Form.Label>
                </div>
                <div className="label_apra">
                  <p className="litt_sm_para">
                    Looking for someone relatively new to this field
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <button className="trans_btn" onClick={() => onCloseModal()}>
            Cancel
          </button>
          <button onClick={() => onCloseModal()}>Save</button>
        </div>
      </div>
    </Modal>
  );
};

export default ScopePopup;