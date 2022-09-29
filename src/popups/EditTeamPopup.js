import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";

const EditTeamPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "edit_team_popup" }}
        center
      >
        <h5>Edit Team Ankita Kumavat</h5>

        <div className="team_name">
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Ankita Kumavat"
              disabled
            />
          </label>
        </div>
        <div className="team_name">
          <label>
            <span>PO Number (Opetional)</span>
            <input type="text" name="po-no" placeholder="" />
          </label>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns" onClick={onCloseModal}>
              CANCEL
            </button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button className="active_btn_blue">SAVE</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditTeamPopup;
