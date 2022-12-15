import CreditCardInput from "react-credit-card-input";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPaymentCard } from "../../../../../redux/actions/freelancerAction";
const stripePromise = loadStripe(
  "pk_test_51M7YBGEAU8g6XRhsSzwgw2cS4DwXnFyL6C8HiT3GkOTY4GVOpbyjff7PCITznuAi5GV9xic6sDlLZd4p2t9fKnPZ00zZi7dmqe"
);

const Wrapper = ({ Popup }) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardElement = elements.getElement("card");

    stripe.createToken(cardElement).then((payload) => {
      let data = {
        stripe_token: payload.token.id,
      };

      dispatch(addPaymentCard(data));
    });
  };

  const onInputChange = (empty, complete, error) => {
    setComplete(complete);
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn paypopradouy py-4">
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <form className="card card-body" onSubmit={handleSubmit}>
              <div className="popup_header pb-0">
                <div className="p_header_hding addpay_header_hdin">
                  Card Details
                </div>
                <div className="close_pp_btn" onClick={() => Popup()}>
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
                </div>
              </div>
              <div className="py-4">
                <CardElement
                  onChange={({ empty, complete, error }) =>
                    onInputChange(empty, complete, error)
                  }
                />
              </div>

              <div className="popup_btns_new flex-wrap getpaidsve_btn">
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const CardDetailsPopup = (props) => (
  <Elements stripe={stripePromise}>
    <Wrapper {...props} />
  </Elements>
);

export default CardDetailsPopup;
