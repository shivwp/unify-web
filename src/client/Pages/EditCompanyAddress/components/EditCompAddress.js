import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CardDetailsPopup from "../../../../freelancer/Pages/Setting/tab/popups/CardDetailsPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  paymentCardLists,
  deletePaymentCard,
  contractPayment,
} from "../../../../redux/actions/freelancerAction";
import ConfirmationPopup from "../../../../freelancer/components/popups/ConfirmationPopup";
import { useNavigate } from "react-router-dom";

const EditCompAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCardList = useSelector((state) => state.freelancer.getCardList);
  const addedCard = useSelector((state) => state.freelancer.addedCard);
  const deleteCard = useSelector((state) => state.freelancer.deleteCard);
  const paymentData = JSON.parse(localStorage.getItem("hire_freelancer"));
  const freelancerData = JSON.parse(localStorage.getItem("freelancerData"));
  const [popup, SetPopup] = useState();
  const [successPopup, setSuccessPopup] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [stripeToken, setStripeToken] = useState();

  useEffect(() => {
    dispatch(paymentCardLists());
  }, [addedCard, deleteCard]);

  const handleRemoveCard = (id) => {
    const data = {
      card_id: id,
    };

    dispatch(
      deletePaymentCard(data, setConfirmPopup, successPopup, setSuccessPopup)
    );
  };

  const handleContractPayment = () => {
    const data = {
      id: paymentData?.id,
      stripe_token: stripeToken,
    };

    dispatch(
      contractPayment(
        data,
        navigate,
        successPopup,
        setSuccessPopup,
        errorPopup,
        setErrorPopup
      )
    );
  };

  const onInputChange = (data) => {
    setStripeToken(data.id);
  };

  return (
    <>
      <Container className="add_comp_address Edit_comp_address">
        <div className="comp_address_title">
          Hire {paymentData?.freelancer_name}
        </div>
        <div className="back_to_offer">Back to Offer Details</div>
        <Row>
          <Col lg={8}>
            <div className="box_vs_m mt-0 col_left">
              <div className="Edit_details">
                <Row>
                  <Col lg={9} md={9}>
                    <div className="_edit">
                      <h5 className="page_title">Billing method </h5>
                      <p>Your balance due is $0.00</p>
                    </div>
                  </Col>
                  <Col lg={3} md={3}>
                    <div className="_address">
                      <img
                        src="/assets/stripLogo.png"
                        alt=""
                        className="stripClientLogo"
                      />
                      <p className="clientStrip">(Secured by Stripe)</p>
                    </div>
                  </Col>
                  <div>
                    <div className="btn_foot_sec no-border mb-3 mt-0 p-0 fo_btn_c next_b_btn_c clientPayBtn">
                      <button
                        className="clientCardbtn"
                        onClick={() => {
                          SetPopup(
                            <CardDetailsPopup
                              Popup={SetPopup}
                              successPopup={successPopup}
                              setSuccessPopup={setSuccessPopup}
                            />
                          );
                        }}
                      >
                        Add Card
                      </button>
                    </div>
                  </div>
                </Row>
              </div>
              <>
                {getCardList?.length === 0 ? null : (
                  <div className="Select_payment_method_box">
                    <div className="clientCardList">
                      <h5>Cards List</h5>
                      <div className="clientCardDetList">
                        {getCardList?.map((item, key) => (
                          <div className="clientCardDet" key={key}>
                            <input
                              type="radio"
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
                    {/* <div className="payment_btn">
                    <button type="button" className="pay_with_btn">
                      Pay With Stripe
                    </button>
                  </div> */}
                  </div>
                )}
              </>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box_vs_m mt-0 _col_right">
              <div className="Add_Address_profile">
                <div className="freelancer_img_in_r online_profile">
                  <img src={paymentData?.freelancer_profile_image} alt="" />
                </div>
                <div className="freel_det_bin">
                  <p>
                    Hire {paymentData?.freelancer_name} for:{" "}
                    {paymentData?.project_name}
                  </p>
                </div>
              </div>
              <div className="Escrow_deposit_box">
                <div className="Escrow_deposit">
                  Escrow deposit <span>?</span>
                </div>
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="_amount">$ {paymentData?.subtotal}</span>
                </div>
              </div>
              <div className="market_place_fee_box">
                <div className="market_place">
                  <span> Marketplace Fee</span>
                  <span className="_amount">$ {paymentData?.fee}</span>
                </div>
                <div className="see_more">Learn more about fees</div>
              </div>
              {/* <div className="Estimated_taxes_box">
                <div className="Estimated_taxes">
                  <span> Estimated Taxes</span>
                  <span className="_amount">$ 0.90</span>
                </div>
                <div className="see_more">Learn more about fees</div>
              </div> */}
              <div className="Estimated_total_box">
                <div className="Estimated_total">
                  <span> Estimated Total</span>
                  <span>$ {paymentData?.total}</span>
                </div>
              </div>
              <div className="find_and_hire_button Edit_Addr">
                <button
                  type="button"
                  onClick={handleContractPayment}
                  className="find_contact"
                  style={{
                    padding: "10px 20px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Find Contact & Hire
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {popup}
      {confirmPopup}
      {successPopup}
      {errorPopup}
    </>
  );
};

export default EditCompAddress;
