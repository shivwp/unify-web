import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PopupsCloseIcon from "../../../../freelancer/components/popups/PopupsCloseIcon";
import {
  clientFundMilestone,
  deletePaymentCard,
  paymentCardLists,
} from "../../../../redux/actions/freelancerAction";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ConfirmationPopup from "../../../../freelancer/components/popups/ConfirmationPopup";
import CardDetailsPopup from "../../../../freelancer/Pages/Setting/tab/popups/CardDetailsPopup";

const FundMilestone = ({ popup, milestoneId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState();
  const [loading, setLoading] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const getCardList = useSelector((state) => state.freelancer.getCardList);
  const addedCard = useSelector((state) => state.freelancer.addedCard);
  const deleteCard = useSelector((state) => state.freelancer.deleteCard);

  useEffect(() => {
    setLoading(true);
    dispatch(paymentCardLists(setLoading));
  }, [addedCard, deleteCard]);

  const handleRemoveCard = (id) => {
    const data = {
      card_id: id,
    };

    setLoading(true);
    dispatch(
      deletePaymentCard(
        data,
        setConfirmPopup,
        successPopup,
        setSuccessPopup,
        setLoading
      )
    );
  };

  const onInputChange = (data) => {
    setStripeToken(data.id);
  };

  const fundMilestone = () => {
    const data = {
      milestone_id: milestoneId,
      stripe_token: stripeToken,
    };

    setLoading(true);
    dispatch(clientFundMilestone(data, popup, setLoading));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup add_milestone_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Fund Milestone</div>
            <div className="close_pp_btn" onClick={() => popup()}>
              <PopupsCloseIcon />
            </div>
          </div>
          <div className="r-box_setting mt-3">
            <div className="d-flex pt-1 pb-3 flex-wrap b-bottom-gr billingStripSection">
              <div className=" billingSectionDivide ">
                <div className="setting_b_head_s">
                  Manage Billing Methods for received payment
                </div>
                <div className="sett_y_b">Your balance due is $0.00</div>
              </div>
              <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c billingSectionDivide2">
                <div className="billingStripTab">
                  <div>
                    <img
                      src="/assets/stripLogo.png"
                      alt="stripe logo"
                      className="billingStripLogo"
                    />
                  </div>
                  <div className="billingStripText">(Secured by Stripe)</div>
                </div>
              </div>
            </div>
            <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
              <button
                className="bg-transparent h-color-b mt-4"
                onClick={() => {
                  popup(
                    <CardDetailsPopup
                      Popup={popup}
                      successPopup={successPopup}
                      setSuccessPopup={setSuccessPopup}
                      setLoading={setLoading}
                    />
                  );
                }}
              >
                Add Card
              </button>
            </div>
          </div>
          {getCardList?.length === 0 ? null : (
            <div className="Select_payment_method_box">
              <div className="clientCardList">
                <h5>Cards List</h5>
                <div className="clientCardDetList">
                  {getCardList?.map((item, key) => (
                    <div className="clientCardDet" key={key}>
                      <input
                        type="radio"
                        name="payment"
                        onChange={() => onInputChange(item)}
                      />
                      <img
                        src="/assets/cardImg.png"
                        alt=""
                        className="cardLogoSize"
                      />
                      <span>**** **** **** {item.last4} </span>
                      <i
                        onClick={() =>
                          setConfirmPopup(
                            <ConfirmationPopup
                              Popup={() => setConfirmPopup(!confirmPopup)}
                              confirm={() => handleRemoveCard(item?.id)}
                            />
                          )
                        }
                        className="fa fa-remove"
                        style={{
                          cursor: "pointer",
                          marginLeft: "30px",
                        }}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="popup_btns_new flex-wrap cwiewyehkk">
            <button
              className="font-weight-600 trans_btn"
              onClick={() => popup()}
            >
              Cancel
            </button>
            <button className="font-weight-600" onClick={fundMilestone}>
              FUND MIIESTONE
            </button>
          </div>
        </div>
      </div>

      {confirmPopup}
      {successPopup}
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default FundMilestone;
