import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAccountReasonList,
  onCloseAccount,
} from "../redux/actions/profileAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const CloseAccountPopup = ({ open, onCloseModal }) => {
  const dispatch = useDispatch();
  const [reasonId, setReasonId] = useState("");
  const closeAccountReasons = useSelector(
    (state) => state.profile.closeAccountReasons
  );

  useEffect(() => {
    dispatch(closeAccountReasonList());
  }, []);

  const handleCloseAccount = (e) => {
    const data = {
      reason_id: reasonId,
    };

    dispatch(onCloseAccount(data));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup" }}
        center
      >
        <h5>Close Account</h5>
        <p>Leaving so soon? We have to see you go.</p>
        <p>
          In face, if there's anything we can do to keep the good work going, we
          want to know. Just ring us at +1-866-676-3375 and select option 3. A
          human will be there to take your call from 6am-12am PT Mon-Fri and
          9am-5pm PT Sat-Sun.
        </p>
        <div className="select-reason">
          <h6 style={{ fontWeight: 600 }}>Select a reason for leaving</h6>
          <div>
            <ul className="popup-radio">
              {closeAccountReasons?.map((data, key) => (
                <li key={key}>
                  <Form.Label htmlFor={data.id}>
                    <Form.Check
                      type="radio"
                      id={data.id}
                      name="p"
                      value={data.id}
                      onChange={(e) => setReasonId(e.target.value)}
                    />{" "}
                    <span>{data.title}</span>
                  </Form.Label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button variant="" className="remove-posting-btns" onClick={onCloseModal}>
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c" onClick={handleCloseAccount}>
            <Button variant="" className="active_btn_blue">CLOSE ACCOUNT</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CloseAccountPopup;
