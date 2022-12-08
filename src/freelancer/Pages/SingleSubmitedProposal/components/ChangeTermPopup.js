import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./changeTermPopup.css";
import FixedBid from "../../SendProposal/components/FixedBid";

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

const ChangeTermPopup = ({ data, popup, successPopup, setSuccessPopup }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState();
  const [errors, setErrors] = useState({});
  const reasonsList = useSelector((state) => state?.job?.reasonsList);
  const [isByMilestone, setIsByMilestone] = useState("by_milestone");

  const [inputList, setInputList] = useState([
    { description: "", due_date: "", amount: 0 },
  ]);
  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setIsByMilestone(e.target.value);
  };

  useEffect(() => {}, []);

  const onSave = () => {
    const data = {};
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn change_proposal_term_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Change Terms</div>
            <div className="close_pp_btn" onClick={() => popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn change_term_popup max_height_popucwui">
            <FixedBid
              data={data}
              values={values}
              errors={errors}
              setValues={setValues}
              setInputList={setInputList}
              inputList={inputList}
              handleRadioChange={handleRadioChange}
              isByMilestone={isByMilestone}
              setErrors={setErrors}
            />
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

export default ChangeTermPopup;
