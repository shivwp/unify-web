import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from 'react-bootstrap/Button'

const RemoveDraftPopup = ({ open, onCloseModal, setLoading }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup remove-draft-popup" }}
        center
      >
        <h5>Delete Job Post Draft</h5>
        <p>
          Are you Sure you want to delete <span>UI/UX design</span> ? Deleting
          is permanent.
        </p>

        <div className="btn_foot_sec no-border flex-wrap d-flex" >
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="remove-posting-btns" style={{fontWeight: 500}} onClick={onCloseModal} >CANCEL</Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="active_btn_blue" style={{fontWeight: 500}}>Delete</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RemoveDraftPopup;
