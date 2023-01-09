import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubscriptionList,
  onSubscriptionPayment,
} from "../../../../redux/actions/subscriptionAction";
import StripeCheckout from "react-stripe-checkout";
// import { onSubmitProfile } from "../../../../redux/actions/subscriptionAction";

const Subscriptionplan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  let userDetails = JSON.parse(localStorage.getItem("unify_user"));

  const subscriptionList = useSelector(
    (state) => state.subscription.subscriptionList
  );

  useEffect(() => {
    dispatch(getSubscriptionList());
  }, []);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  // const handlePayment = (token) => {
  //   let errorExist = false;
  //   let errorsObject = {};

  //   if (
  //     values?.subscription === "" ||
  //     values?.subscription === null ||
  //     values?.subscription === undefined
  //   ) {
  //     errorsObject.subscription = true;
  //     errorExist = true;
  //   }

  //   if (errorExist) {
  //     setErrors(errorsObject);
  //     return false;
  //   }

  //   const data = {
  //     subscription_id: values?.subscription,
  //     stripe_token: token.id,
  //   };
  //   dispatch(onSubscriptionPayment(data, navigate));
  // };

  // const onNext = () => {
  //   dispatch(onSubmitProfile(navigate));
  // };

  return (
    <>
      <Container>
        <div className="question_box">
          <div className="questio_heading no-border blue_lin mt-2 mb-2">
            <h1 className="text-center font-fiftie">Subscription plan</h1>
          </div>
          <Row className="justify-content-center">
            <span
              className="signup-error"
              style={{ fontSize: "16px !important" }}
            >
              {errors.subscription && "Please select subscription plan"}
            </span>
            {subscriptionList?.map((item, key) => (
              <Col
                lg={4}
                md={6}
                className="sub_col_c subscriptionResp"
                key={key}
              >
                <Form.Label>
                  <div className="subscription_box_r">
                    <div className="sub_radio new_sub_rad">
                      <Form.Check
                        type="radio"
                        name="subscription"
                        value={item.id}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="sub_sm_tex">{item.title}</div>
                    <div className="sub_pric">
                      ${item.amount} / {item.validity}
                    </div>
                    <ul className="sub_list_ul">
                      {item.services.map((data, key) => (
                        <li key={key}>{data.service_name}</li>
                      ))}
                    </ul>
                    {!localStorage.getItem("unify_token") ? (
                      <Link to="/signup">
                        <button className="btn_chose_pl btnhovpple">
                          CHOOSE PLAN
                        </button>
                      </Link>
                    ) : (
                      <div>
                        {/* <StripeCheckout
                        label="Add Card"
                        token={handlePayment}
                        stripeKey="pk_test_51M7YBGEAU8g6XRhsSzwgw2cS4DwXnFyL6C8HiT3GkOTY4GVOpbyjff7PCITznuAi5GV9xic6sDlLZd4p2t9fKnPZ00zZi7dmqe"
                      > */}
                        {values?.subscription === item.id ? (
                          <button
                            className="btn_chose_pl btnhovpple"
                            onClick={() => {
                              userDetails?.user_type == "freelancer"
                                ? navigate("/freelancer/dashboard")
                                : navigate("/dashboard");
                            }}
                          >
                            CHOOSE PLAN
                          </button>
                        ) : (
                          <button disabled className="btn_chose_pl btnhovpple ">
                            CHOOSE PLAN
                          </button>
                        )}

                        {/* </StripeCheckout> */}
                      </div>
                    )}
                  </div>
                </Form.Label>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Subscriptionplan;
