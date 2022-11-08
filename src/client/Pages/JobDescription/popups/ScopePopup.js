import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

const ScopePopup = ({ Popup }) => {
  const [scope, setScope] = useState();
  const [workTime, setWorkTime] = useState();
  const [level, setLevel] = useState();

  const handleScopeChange = (e) => setScope(e.target.value);
  const handleWorkChange = (e) => setWorkTime(e.target.value);
  const handleLevelChange = (e) => setLevel(e.target.value);

  return (
    <div className="bg_wrapper_popup_new">
      <div className="popup_box_bpn profile_nceqoi_popup pb-4">
        <div className="popup_header pb-0">
          <div className="p_header_hding">Scope</div>
          <div className="close_pp_btn" onClick={() => Popup()}>
            <CloseIcon />
          </div>
        </div>
        <div className="popup_body_bpn amount_popup_body max_height_popucwui">
          <div className="mt-3 pt-1">
            <div className="on_time_h3 d-block no-border pt-0 pb-0">
              <div className="">
                <div className="s_b_r mrr_riii d-block mt-0">
                  <div className="flex_aling">
                    <Form.Check
                      type="radio"
                      id="scope-one"
                      name="scope"
                      value="large"
                      onChange={handleScopeChange}
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
                      name="scope"
                      value="medium"
                      onChange={handleScopeChange}
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
                      name="scope"
                      value="small"
                      onChange={handleScopeChange}
                    />
                    <Form.Label htmlFor="scope-three">
                      <p className="font-20">
                        <b className="text-black">Small</b>
                      </p>
                    </Form.Label>
                  </div>
                  <div className="label_apra">
                    <p className="litt_sm_para f-16">
                      Quick and straightforward tasks (ex. update text and
                      images on a webpage)
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
                      name="work"
                      value="More than 6 months"
                      onChange={handleWorkChange}
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
                      name="work"
                      value="3 to 6 months"
                      onChange={handleWorkChange}
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
                      name="work"
                      value="1 to 3 months"
                      onChange={handleWorkChange}
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
                  This won't restrict any proposals, but helps match expertise
                  to your budget.
                </p>
                <div className="s_b_r mrr_riii d-block">
                  <div className="flex_aling">
                    <Form.Check
                      type="radio"
                      id="level-one"
                      name="level"
                      value="entry"
                      onChange={handleLevelChange}
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
                      name="level"
                      value="intermediate"
                      onChange={handleLevelChange}
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
                      name="level"
                      value="expert"
                      onChange={handleLevelChange}
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
            <Button variant="" className="trans_btn" onClick={() => Popup()}>
              Cancel
            </Button>
            <Button variant="">Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopePopup;
