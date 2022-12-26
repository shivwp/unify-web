import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeJobReasonList, onCloseJob } from "../redux/actions/jobActions";
import { useNavigate } from "react-router-dom";

const RemovePostingPopup = ({
  open,
  onCloseModal,
  menuBarPosting,
  setLoading,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ project_id: menuBarPosting });
  const closeJobReasons = useSelector((state) => state?.job?.closeJobReasons);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(closeJobReasonList(setLoading));
  }, []);

  const handleCloseJob = () => {
    let errorExist = false;
    let errorsObject = {};
    setLoading(true);

    if (
      values?.reason_id === "" ||
      values?.reason_id === null ||
      values?.reason_id === undefined
    ) {
      errorsObject.reason = "Please select a reason";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);
      return false;
    }

    dispatch(onCloseJob(values, onCloseModal, navigate, setLoading));
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
                      onChange={() => {
                        setValues({ ...values, reason_id: item.id });
                        setErrors({ reason: false });
                      }}
                    />
                    <span>{item.name}</span>
                  </Form.Label>
                </li>
              ))}
            </ul>
            <span className="signup-error">
              {errors.reason && errors.reason}
            </span>
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
