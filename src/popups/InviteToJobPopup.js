import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { inviteFreelancer } from "../redux/actions/freelancerAction";
import "./popup.css";

const InviteToJobPopup = ({
  onCloseModal,
  open,
  freelancerId,
  jobId,
  jobBasedFreelancerList,
}) => {
  const dispatch = useDispatch();
  const [freelancerDetails, setFreelancerDetails] = useState();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  let userDetails = JSON.parse(sessionStorage.getItem("unify_user"));

  useEffect(() => {
    setValues({
      description: `hello! \n\nI'd like to invite you to take a look at the job I've posted. Please submit a proposal if you're available and interested. \n\n ${userDetails?.first_name} ${userDetails?.last_name}`,
    });
  }, [freelancerDetails]);
  useEffect(() => {
    if (jobBasedFreelancerList) {
      for (let i = 0; i < jobBasedFreelancerList.length; i++) {
        if (jobBasedFreelancerList[i].id == freelancerId.id) {
          setFreelancerDetails(jobBasedFreelancerList[i]);
        }
      }
    }
  }, [jobBasedFreelancerList]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const onSendInvitation = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.description === "" ||
      values?.description === null ||
      values?.description === undefined
    ) {
      errorsObject.description = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      freelancer_id: freelancerId.id,
      project_id: jobId,
      description: values?.description,
    };

    dispatch(inviteFreelancer(data, onCloseModal));
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      classNames={{ modal: "change-password-popup" }}
      center
    >
      <h5 style={{ fontWeight: 700 }}>Invite to job</h5>
      <div className="invite-toJob">
        <div className="invite-toJob-wrapper">
          <img
            src={freelancerDetails?.profile_image}
            alt=""
            className="img-fluid invite-toJob-image"
          />
          <div className="invite-toJob-info">
            <h6>
              {freelancerDetails?.first_name} {freelancerDetails?.last_name}
            </h6>
            <p>{freelancerDetails?.occuption}</p>
          </div>
        </div>
        <div className="invite-input-wrapper">
          <div className="invite-heading">Message</div>
          <textarea
            name="description"
            rows="6"
            value={values?.description}
            onChange={(e) => onInputChange(e)}
            placeholder="Message"
          ></textarea>
          <span className="signup-error">
            {errors.description && "Please enter your description"}
          </span>
        </div>

        <div className="popup_btns_new flex-wrap cwiewyehkk">
          <button onClick={onSendInvitation}>Send Invitation</button>
        </div>
      </div>
    </Modal>
  );
};

export default InviteToJobPopup;
