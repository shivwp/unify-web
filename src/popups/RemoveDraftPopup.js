import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";

const RemoveDraftPopup = ({ open, onCloseModal }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup" }}
        center
      >
        <h5>Delete Job Post Draft</h5>
        <p>
          Are you Sure you want to delete <span>UI/UX design</span> ? Deleting
          is permanent.
        </p>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns">CANCEL</button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button className="active_btn_blue">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RemoveDraftPopup;
