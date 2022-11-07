import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
          <Form.Label>
            <span style={{ fontSize: "14px", fontWeight: 600 }}>Name</span>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ankita Kumavat"
              disabled
            />
          </Form.Label>
        </div>
        <div className="team_name">
          <Form.Label>
            <span style={{ fontSize: "14px", fontWeight: 600 }}>
              PO Number (Optional)
            </span>
            <Form.Control type="text" name="po-no" placeholder="" />
          </Form.Label>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button variant=""
              className="remove-posting-btns mrright-gppnew"
              onClick={onCloseModal}
            >
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="active_btn_blue">SAVE</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditTeamPopup;
