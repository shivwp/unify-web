import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import $ from "jquery";

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

const EditSkillsPopup = ({ Popup, filteredSkills }) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit Skills</div>
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mt-4 pt-1">
              <div className="pouphed_skll">Skills</div>
              <div className="popuphead_smparcr">
                Keeping your skills up to date helps you get the jobs you want.
              </div>
            </div>
            <div className="catbox_rd_ofive mt-3">
              <div className="d-flex flex-wrap">
                {filteredSkills?.map((item) => (
                  <div className="skill_bxr_gry">
                    <span>{item.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#393939"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div style={{ position: "relative" }}>
                <Form.Control
                  type="text"
                  name="skill"
                  id="search_skill_inp"
                  autocomplete="off"
                  placeholder="search here skills..."
                  className="no-border font-size-13px search_skilloiouo"
                />
              </div>
            </div>
            <div className="maxlabel_atcxt mt-3">Maximum 15 skills.</div>
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn hov_pple"
                onClick={() => Popup()}
              >
                Cancel
              </Button>
              <Button className="btnhovpple" variant="">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSkillsPopup;
