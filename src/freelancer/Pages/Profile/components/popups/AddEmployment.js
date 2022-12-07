import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddEmployment } from "../../../../../redux/actions/profileAction";
import Select from "react-select";
import { countryList } from "../../../../../redux/actions/authActions";
import moment from "moment";

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

const AddEmployment = ({
  experience,
  Popup,
  successPopup,
  setSuccessPopup,
}) => {
  const dispatch = useDispatch();
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [values, setValues] = useState(
    experience || { currently_working: 0, start_date: null, end_date: null }
  );
  const [errors, setErrors] = useState({});

  console.log(values);
  useState(() => {
    dispatch(countryList());
  }, []);

  const onInputChange = (e) => {
    if (e.target.name == "currently_working") {
      setValues({ ...values, [e.target.name]: e.target.checked ? 1 : 0 });
      setErrors({ ...errors, [e.target.name]: false });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.company === "" ||
      values?.company === null ||
      values?.company === undefined
    ) {
      errorsObject.company = true;
      errorExist = true;
    }
    if (
      values?.city === "" ||
      values?.city === null ||
      values?.city === undefined
    ) {
      errorsObject.city = true;
      errorExist = true;
    }
    if (
      values?.country === "" ||
      values?.country === null ||
      values?.country === undefined
    ) {
      errorsObject.country = true;
      errorExist = true;
    }
    // if (
    //   values?.description === "" ||
    //   values?.description === null ||
    //   values?.description === undefined
    // ) {
    //   errorsObject.description = true;
    //   errorExist = true;
    // }
    if (
      values?.subject === "" ||
      values?.subject === null ||
      values?.subject === undefined
    ) {
      errorsObject.subject = true;
      errorExist = true;
    }
    if (
      values?.start_date === "" ||
      values?.start_date === null ||
      values?.start_date === undefined
    ) {
      errorsObject.start_date = "Please select your end date";
      errorExist = true;
    }

    if (!values?.currently_working) {
      if (
        values?.end_date === "" ||
        values?.end_date === null ||
        values?.end_date === undefined
      ) {
        errorsObject.end_date = true;
        errorExist = true;
      }
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      id: experience?.id,
      company: values?.company,
      city: values?.city,
      country: experience?.country || values?.country,
      description: values?.description,
      subject: values?.subject,
      currently_working: values?.currently_working,
      start_date: values?.start_date,
      end_date: values?.end_date,
    };
    dispatch(onAddEmployment(data, Popup, successPopup, setSuccessPopup));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            {experience?.id ? (
              <div className="p_header_hding">Edit Employment</div>
            ) : (
              <div className="p_header_hding">Add Employment</div>
            )}
            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Company
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Unify"
                      name="company"
                      value={values?.company}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="signup-error">
                      {errors.company && "Please enter your company"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      className="font-size-13px"
                      value={values?.city}
                      onChange={(e) => onInputChange(e)}
                      placeholder="City"
                    />
                    <span className="signup-error">
                      {errors.city && "Please enter your city"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Country
                    </Form.Label>
                    <select
                      name="country"
                      value={values?.country}
                      onChange={(e) => onInputChange(e)}
                    >
                      <option value="" disabled hidden selected>
                        Select
                      </option>
                      {getCountryList?.map((item, key) => (
                        <option key={key} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.country && "Please select your country"}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      onChange={(e) => onInputChange(e)}
                      value={values?.subject}
                      className="font-size-13px"
                      placeholder="Like: Developer, React"
                    />
                    <span className="signup-error">
                      {errors.subject && "Please enter your subject"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Start Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      className="font-size-13px"
                      placeholder="Start Date"
                      name="start_date"
                      value={moment(values?.start_date).format("YYYY-MM-DD")}
                      max={moment(new Date()).format("YYYY-MM-DD")}
                      onChange={(e) => onInputChange(e)}
                    />
                    <span className="signup-error">
                      {errors.start_date && errors.start_date}
                    </span>
                  </div>
                </Col>
                {values?.currently_working ||
                values?.start_date ==
                  moment(new Date()).format("YYYY-MM-DD") ? (
                  ""
                ) : (
                  <Col md={6}>
                    <div className="popup_form_element">
                      <Form.Label className="text-black font-size-13px font-weight-500">
                        End Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="end_date"
                        className="font-size-13px"
                        value={moment(values?.end_date).format("YYYY-MM-DD")}
                        min={moment(values?.start_date).format("YYYY-MM-DD")}
                        max={moment(new Date()).format("YYYY-MM-DD")}
                        placeholder="End Date"
                        onChange={(e) => onInputChange(e)}
                      />
                      <span className="signup-error">
                        {errors.end_date && "Please select your end date"}
                      </span>
                    </div>
                  </Col>
                )}

                <Col
                  className="text-right"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <div className="agrement_ineoeu flex-row d-flex justify-content-end mt-1 pt-0">
                    <Form.Label className="text-black text-right font-size-13px font-weight-500 align-items-center">
                      <Form.Check
                        type="checkbox"
                        name="currently_working"
                        onChange={(e) => onInputChange(e)}
                        defaultChecked={values?.currently_working || false}
                        checked={
                          values?.start_date ==
                            moment(new Date()).format("YYYY-MM-DD") ||
                          values?.currently_working
                        }
                      />{" "}
                      I currently working here
                    </Form.Label>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="font-size-13px"
                      value={values?.description || ""}
                      name="description"
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button variant="" className="trans_btn" onClick={() => Popup()}>
                Cancel
              </Button>
              <Button variant="" className="btnhovpple" onClick={onSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddEmployment;
