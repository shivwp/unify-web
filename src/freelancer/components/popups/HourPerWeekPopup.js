import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getHoursPerWeekList,
  onEditHourPerWeek,
} from "../../../redux/actions/profileAction";
import { useState } from "react";

const HourPerWeekPopup = ({
  open,
  onCloseModal,
  successPopup,
  setSuccessPopup,
  amount,
  // hours_per_week,
  hours_per_week_id,
  setLoading,
}) => {
  const dispatch = useDispatch();

  const [hourlyPrice, setHourlyPrice] = useState({ hours_price: amount });
  const [hpwValue, setHPWValue] = useState(hours_per_week_id);
  const hwpList = useSelector((state) => state?.profile?.getHoursPerWeekList);
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    setHourlyPrice({ ...hourlyPrice, [e.target.name]: e.target.value });
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const afterSuccess = () => {
    // window.location.reload();
    setSuccessPopup(false);
  };
  useEffect(() => {
    dispatch(getHoursPerWeekList(setLoading));
  }, []);

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};
    if (values?.hours_price < 3) {
      errorsObject.hours_price = "Hourly price must be minimum 3 $";
      errorExist = true;
    }
    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = { hours_id: hpwValue, hours_price: hourlyPrice?.hours_price };
    dispatch(
      onEditHourPerWeek(
        data,
        onCloseModal,
        successPopup,
        setSuccessPopup,
        afterSuccess
      )
    );
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "freelancer_popups HWP_Popup" }}
        center
      >
        <h5>Hours Per Week</h5>
        <p>
          Knowing how much you can work helps Unify find the right jobs for you.{" "}
          <span>How we can use this info.</span>
        </p>
        <div className="content" style={{ marginBottom: 10 }}>
          <h5>I can currently work</h5>
          <ul className="popup-radio">
            {hwpList?.map((item, index) => (
              <li key={item.id}>
                <Form.Label htmlFor={`op-${index}`}>
                  <Form.Check
                    type="radio"
                    id={`op-${index}`}
                    onClick={() => setHPWValue(item.id)}
                    checked={hpwValue == item.id}
                    name="p"
                    value={"More then 30 Hours per week"}
                  />{" "}
                  <span>{item.title}</span>
                </Form.Label>
              </li>
            ))}
          </ul>
        </div>
        <div className="hourly_price">
          <label htmlFor="hourly_price">Hourly Rate</label>
          <div className="d-flex">
            <div className="input_houry_price">
              $
              <Form.Control
                placeholder="03.00"
                id="hourly_price"
                type="text"
                disabled={!hpwValue}
                name="hours_price"
                value={hourlyPrice?.hours_price}
                className="form-control"
                validated={true}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="hourly-price_rsph">/hr</div>
          </div>
          <span className="jobSignInError">
            {errors.hours_price && errors.hours_price}
          </span>
        </div>

        <div className="freelancer_popup_btns">
          <div className="_cancle_submit">
            <Button variant="" className="hov_whitepple" onClick={onCloseModal}>
              CANCEL
            </Button>
          </div>
          <div className="_save_submit">
            <button
              type="submit"
              className="hov_ttransp"
              disabled={
                !(
                  hourlyPrice?.hours_price &&
                  hpwValue &&
                  hourlyPrice?.hours_price != 0
                )
              }
              onClick={onSave}
            >
              SAVE
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HourPerWeekPopup;
