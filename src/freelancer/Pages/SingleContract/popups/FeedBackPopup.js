import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onGiveFeedBack } from "../../../../redux/actions/jobActions";
import PopupsCloseIcon from "../../../components/popups/PopupsCloseIcon";
import StarRating from "../../../components/rating/Rating";

const FeedBackPopup = ({ popup, setLoading, contract_id }) => {
  const [starRating, setStarRating] = useState(0);
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = () => {
    const data = {
      description: values?.description,
      rating: starRating,
      contract_id,
      user_type: "freelancer",
    };
    dispatch(onGiveFeedBack(data, setLoading, popup));
  };
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup submit_work_for_payment_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Feedback</div>
            {/* <div
              className="close_pp_btn"
              onClick={() => {
                popup();
              }}
            >
              <PopupsCloseIcon />
            </div> */}
          </div>
          <div className="popup_body_bpn feedback_popup max_height_popucwui">
            <div className="row">
              <div className="col-12">
                <label className="text-black font-size-13px font-weight-500 mt-4">
                  Give Rating
                </label>
                <div className="stars">
                  <StarRating
                    rating={starRating}
                    setStarRating={setStarRating}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="popup_form_element">
                  <label className="text-black font-size-13px font-weight-500">
                    Description (Optional)
                  </label>
                  <textarea
                    name="description"
                    maxLength={200}
                    className="font-size-13px"
                    value={values?.description}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Here"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              {/* <button
                variant=""
                className="font-weight-600 trans_btn"
                onClick={() => {
                  popup();
                }}
              >
                CANCEL
              </button> */}
              <button variant="" className="font-weight-600" onClick={onSubmit}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackPopup;
