import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../../../../../popups/popup.css";
import Form from 'react-bootstrap/Form'

const EditTeamPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "edit_team_popup" }}
        center
      >
        <h5>Edit Account</h5>

        <div className="team_name">
          <label>
            <span style={{fontSize: '14px', fontWeight: 600}}>User ID</span>
            <Form.Control
              type="text"
              name="name"
              placeholder=" "
            />
          </label>
        </div>
        <div className="team_name">
          <label>
            <span style={{fontSize: '14px', fontWeight: 600}}>Name</span>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ankita Kumavat"
            />
          </label>
        </div>
        <div className="team_name">
          <label>
            <span style={{fontSize: '14px', fontWeight: 600}}>Email</span>
            <Form.Control type="email" name="po-no" placeholder="" />
          </label>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c mb-1">
            <button className="remove-posting-btns mrright-gppnew" onClick={onCloseModal}>
              CANCEL
            </button>
          </div>
          <div className="fo_btn_c next_b_btn_c mb-1">
            <button className="active_btn_blue">SAVE</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditTeamPopup;
