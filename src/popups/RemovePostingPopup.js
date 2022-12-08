import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeJobReasonList, onCloseJob } from "../redux/actions/jobActions";
import { useNavigate } from "react-router-dom";

const RemovePostingPopup = ({ open, onCloseModal, menuBarPosting }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reasonId, setReasonId] = useState();
  const closeJobReasons = useSelector((state) => state.job.closeJobReasons);

  useEffect(() => {
    dispatch(closeJobReasonList());
  }, []);

  const handleCloseJob = () => {
    const data = {
      project_id: menuBarPosting,
      reason_id: reasonId,
    };
    dispatch(onCloseJob(data, onCloseModal, navigate));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "remove-posting-popup" }}
        center
      >
        <h5 style={{ fontWeight: "700" }}>Close Job</h5>
        <p>
          Use this to close your job to new applicants and notify current
          applicants.Those you have hired will not be affected.
        </p>
        <div className="reason-to-remove-posting">
          <h6 style={{ fontWeight: "600", fontSize: "16px" }}>
            Reason for closing
          </h6>
          <div>
            <ul className="popup-radio">
              {closeJobReasons?.map((item, key) => (
                <li key={key}>
                  <Form.Label htmlFor={key}>
                    <Form.Check
                      type="radio"
                      id={key}
                      name="p"
                      onChange={() => setReasonId(item.id)}
                    />
                    <span>{item.name}</span>
                  </Form.Label>
                </li>
              ))}
              {/* <li>
                <Form.Label htmlFor="reason-2">
                  <Form.Check type="radio" name="p" id="reason-2" />{" "}
                  <span>All Position filled</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-3">
                  <Form.Check type="radio" name="p" id="reason-3" />{" "}
                  <span>Filled by alternate source</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-4">
                  <Form.Check type="radio" name="p" id="reason-4" />{" "}
                  <span>No freelancer for requested skills</span>
                </Form.Label>
              </li>
              <li>
                <Form.Label htmlFor="reason-5">
                  <Form.Check type="radio" id="reason-5" name="p" />{" "}
                  <span>Project was cancelled</span>
                </Form.Label>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="btn_foot_sec no-border flex-wrap d-flex">
          <div className="fo_btn_c next_b_btn_c">
            <Button
              variant=""
              className="remove-posting-btns"
              onClick={onCloseModal}
            >
              CANCEL
            </Button>
          </div>
          <div className="fo_btn_c next_b_btn_c">
            <button
              className="active_btn_blue"
              style={{ fontWeight: 600 }}
              onClick={handleCloseJob}
            >
              YES, CLOSE JOB
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RemovePostingPopup;
