import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./changeTermPopup.css";
import FixedBid from "./FixedBid";
import HourlyBid from "./HourlyBid";
import { onChangeTermsOfProposals } from "../../../../redux/actions/jobActions";

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

const ChangeTermPopup = ({
  proposal_id,
  project_data,
  milestonedata,
  proposal_data,
  popup,
  successPopup,
  setSuccessPopup,
  setLoading,
}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ bid_amount: 0 });
  const [errors, setErrors] = useState({});
  const reasonsList = useSelector((state) => state?.job?.reasonsList);
  const [isByMilestone, setIsByMilestone] = useState();

  const [inputList, setInputList] = useState([
    { description: "", due_date: "", amount: 0 },
  ]);

  useEffect(() => {
    setIsByMilestone(proposal_data?.milestone_type);
    setInputList(
      milestonedata?.map((item) => {
        return {
          description: item.description,
          due_date: item.due_date,
          amount: item.amount,
        };
      })
    );
    setValues(proposal_data);
  }, [milestonedata]);

  const handleRadioChange = (e) => {
    setIsByMilestone(e.target.value);
    console.log(e.target.value);
  };

  const onSave = () => {
    const formData = new FormData();
    formData.append("proposal_id", proposal_id);

    let errorExist = false;
    let errorsObject = {};
    setLoading(true);

    if (project_data?.budget_type == "hourly") {
      if (values?.bid_amount <= 0) {
        errorsObject.bid_amount = "Please enter valid amount";
        errorExist = true;
      } else if (
        values?.bid_amount === "" ||
        values?.bid_amount === undefined ||
        values?.bid_amount === null
      ) {
        errorsObject.bid_amount = "Please enter valid amount";
        errorExist = true;
      }
    } else if (project_data?.budget_type == "fixed") {
      if (
        values?.project_duration == null ||
        values?.project_duration == undefined
      ) {
        errorsObject.project_duration = "Please select project duration";
        errorExist = true;
      }
      if (isByMilestone == "single") {
        if (inputList[0]?.amount <= 0) {
          errorsObject.amount = "Please enter valid amount";
          errorExist = true;
        } else if (
          inputList[0]?.amount === "" ||
          inputList[0]?.amount === undefined ||
          inputList[0]?.amount === null
        ) {
          errorsObject.amount = "Please enter valid amount";
          errorExist = true;
        }
      }
      if (isByMilestone == "multiple") {
        if (
          inputList[inputList.length - 1]?.description == "" ||
          inputList[inputList.length - 1]?.description == null ||
          inputList[inputList.length - 1]?.description == undefined
        ) {
          errorsObject.description = "Description can't be empty";
          errorExist = true;
        }
        if (
          inputList[inputList.length - 1]?.due_date == "" ||
          inputList[inputList.length - 1]?.due_date == null ||
          inputList[inputList.length - 1]?.due_date == undefined
        ) {
          errorsObject.due_date = "Please enter a valid date";
          errorExist = true;
        }
        if (
          inputList[inputList.length - 1]?.amount == "" ||
          inputList[inputList.length - 1]?.amount == null ||
          inputList[inputList.length - 1]?.amount == undefined ||
          inputList[inputList.length - 1]?.amount <= 0
        ) {
          errorsObject.amount = "Please enter a valid amount";
          errorExist = true;
        }
      }
    }

    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);
      return false;
    }

    if (project_data?.budget_type == "hourly") {
      formData.append("bid_amount", values?.bid_amount);
    } else if (project_data?.budget_type == "fixed") {
      if (isByMilestone == "single") {
        formData.append("milestone_type", isByMilestone);
        formData.append("project_duration", values?.project_duration);
        formData.append(
          "milestone_data",
          JSON.stringify([{ amount: inputList[0].amount }])
        );
      } else if (isByMilestone == "multiple") {
        formData.append("milestone_type", isByMilestone);
        formData.append("project_duration", values?.project_duration);
        formData.append("milestone_data", JSON.stringify(inputList));
      }
    }
    dispatch(
      onChangeTermsOfProposals(
        formData,
        successPopup,
        setSuccessPopup,
        popup,
        setLoading
      )
    );
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
            {project_data?.budget_type == "fixed" ? (
              <FixedBid
                project_data={project_data}
                values={values}
                errors={errors}
                setValues={setValues}
                setInputList={setInputList}
                inputList={inputList}
                handleRadioChange={handleRadioChange}
                isByMilestone={isByMilestone}
                setErrors={setErrors}
                milestonedata={milestonedata}
                proposal_data={proposal_data}
              />
            ) : project_data?.budget_type == "hourly" ? (
              <HourlyBid
                project_data={project_data}
                values={values}
                setValues={setValues}
                errors={errors}
                setErrors={setErrors}
              />
            ) : (
              ""
            )}

            <div className="theme_btns">
              <button className="first_button" onClick={() => popup()}>
                CANCEL
              </button>
              <button className="second_button" onClick={onSave}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeTermPopup;
