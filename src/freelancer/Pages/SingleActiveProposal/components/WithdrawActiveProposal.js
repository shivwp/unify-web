import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WithdrawActiveProposal.css";
import {
  declineReasoneList,
  onWithdrawSubmitedProposal,
} from "../../../../redux/actions/jobActions";
import { useNavigate } from "react-router-dom";

const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

const WithdrawProposal = ({
  id,
  popup,
  successPopup,
  setSuccessPopup,
  type,
}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});
  const reasonsList = useSelector((state) => state?.job?.reasonsList);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  useEffect(() => {
    dispatch(declineReasoneList(type));
  }, []);
  const afterSuccess = () => {
    navigate("/freelancer/AllProposals");
  };

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};
    if (
      values?.reason === "" ||
      values?.reason === undefined ||
      values?.reason === null
    ) {
      errorsObject.reason = "Please select a reason";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      proposal_id: id,
      reason: values?.reason,
      description: values?.description,
    };
    dispatch(
      onWithdrawSubmitedProposal(
        data,
        popup,
        successPopup,
        setSuccessPopup,
        afterSuccess
      )
    );
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Withdraw Proposal</div>
            <div className="close_pp_btn" onClick={() => popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn withdraw_proposal_popup max_height_popucwui">
            <div className="inp_container">
              <label htmlFor="reason">Reason</label>
              <select
                name="reason"
                id="reason"
                onChange={(e) => handleOnChange(e)}
              >
                <option value="" selected disabled hidden>
                  {" "}
                  Please Select...
                </option>
                {reasonsList?.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              <span className="signup-error">
                {errors?.reason && errors?.reason}
              </span>
            </div>
            <div className="inp_container">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                name="description"
                id="message"
                onChange={(e) => handleOnChange(e)}
              ></textarea>
            </div>
            <div className="theme_btns">
              <button className="first_button" onClick={() => popup()}>
                CANCEL
              </button>
              <button className="second_button" onClick={onSave}>
                DECLINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawProposal;
