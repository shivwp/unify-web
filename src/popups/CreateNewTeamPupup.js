import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";

const CreateNewTeam = ({ open, onCloseModal }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "create_new_team_popup" }}
        center
      >
        <h5>Create New Team</h5>
        <p>
          a verified billing method is required before teams can be added.{" "}
          <span>Add now One!</span>
        </p>
        <div className="team_name">
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Ankita Kumavat" />
          </label>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <button className="remove-posting-btns" onClick={onCloseModal} >CANCEL</button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button className="active_btn_blue">SAVE</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateNewTeam;
