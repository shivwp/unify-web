import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateNewTeam = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "create_new_team_popup" }}
        center
      >
        <h5 style={{fontWeight: 700}}>Create New Team</h5>
        <p>
          A verified billing method is required before teams can be added.{" "}
          <span>Add one Now!</span>
        </p>
        <div className="team_name">
          <Form.Label>
            <span>Name</span>
            <Form.Control type="text" name="name" placeholder="Ankita Kumavat" />
          </Form.Label>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="remove-posting-btns mrright-gppnew" onClick={onCloseModal} >CANCEL</Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="active_btn_blue">SAVE</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateNewTeam;
