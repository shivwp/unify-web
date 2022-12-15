import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onCreateTeam } from "../redux/actions/profileAction";

const EditTeamPopup = ({ onCloseModal, name, id }) => {
  const [values, setValues] = useState({ name, id });
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    dispatch(onCreateTeam(values, onCloseModal));
  };
  return (
    <>
      <Modal
        open={true}
        onClose={onCloseModal}
        classNames={{ modal: "edit_team_popup" }}
        center
      >
        <h5>
          Edit Team <span style={{ textTransform: "capitalize" }}>{name}</span>
        </h5>

        <div className="team_name">
          <Form.Label>
            <span style={{ fontSize: "14px", fontWeight: 600 }}>Name</span>
            <Form.Control
              type="text"
              value={values.name}
              name="name"
              placeholder={name}
              onChange={handleOnChange}
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
            <Button
              variant=""
              className="remove-posting-btns mrright-gppnew"
              onClick={onCloseModal}
            >
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="active_btn_blue" onClick={onSave}>
              SAVE
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditTeamPopup;
