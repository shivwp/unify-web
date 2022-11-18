import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditSkillsPopup = ({
  open,
  onCloseModal,
  onInputChange,
  values,
  getSkillList,
}) => {
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{ modal: "change-password-popup" }}
      center
    >
      <h5 style={{ fontWeight: 700 }}>Edit Skills</h5>
      <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
        <div className="mt-4 pt-1">
          <div className="pouphed_skll">Skills</div>
          <div className="popuphead_smparcr">
            Keeping your skills up to date helps you get the jobs you want.
          </div>
        </div>
        <div className="catbox_rd_ofive mt-3">
          <div className="d-flex flex-wrap">
            {values?.skills?.map((item, key) => (
              <div className="skill_bxr_gry" key={key}>
                <span>{item.name}</span>&nbsp;
                <i class="fa fa-remove" aria-hidden="true"></i>
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
          <Button variant="" className="trans_btn hov_pple">
            Cancel
          </Button>
          <Button className="btnhovpple" variant="">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditSkillsPopup;
