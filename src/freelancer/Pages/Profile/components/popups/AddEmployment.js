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
  setLoading,
}) => {
  const dispatch = useDispatch();
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [values, setValues] = useState({
    currently_working: 0,
    start_date: null,
    end_date: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (experience) {
      setValues(experience);
    }
  }, [experience]);
  useState(() => {
    setLoading(true);
    dispatch(countryList(setLoading));
  }, []);

  const onInputChange = (e) => {
    if (
      (values?.[e.target.name]?.length === undefined ||
        values?.[e.target.name]?.length === 0) &&
      e.target.value == " "
    ) {
      setValues({ ...values, [e.target.name]: "" });
      setErrors({
        ...errors,
        [e.target.name]: `Field is required`,
      });
    } else {
      if (e.target.name == "start_date") {
        if (e.target.value == moment(new Date()).format("YYYY-MM-DD")) {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
            currently_working: 1,
          });
          setErrors({ ...errors, currently_working: false });
        } else {
          setValues({ ...values, [e.target.name]: e.target.value });
          setErrors({ ...errors, [e.target.name]: false });
        }
      } else if (e.target.name == "currently_working") {
        setValues({
          ...values,
          [e.target.name]: e.target.checked ? 1 : 0,
          end_date: null,
        });
        setErrors({ ...errors, [e.target.name]: false });
      } else {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
      }
    }
  };

  const onSave = () => {
    let errorExist = false;
    let errorsObject = {};
    setLoading(true);

    if (
      values?.company === "" ||
      values?.company === null ||
      values?.company === undefined
    ) {
      errorsObject.company = "Please enter company name";
      errorExist = true;
    } else if (values?.company?.length < 2) {
      errorsObject.company = "Must be at least 2 letters";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.company)) {
      errorsObject.company = "Please input a valid company name ";
      errorExist = true;
    }
    if (
      values?.city === "" ||
      values?.city === null ||
      values?.city === undefined
    ) {
      errorsObject.city = "Please enter city name";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.city)) {
      errorsObject.city = "Please input a valid location ";
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
    if (values?.description?.length > 200) {
      errorsObject.description = "Description length maximum 200 characters";
      errorExist = true;
    }
    if (
      values?.subject === "" ||
      values?.subject === null ||
      values?.subject === undefined
    ) {
      errorsObject.subject = "Please enter title name";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.subject)) {
      errorsObject.subject = "Please input a valid title ";
      errorExist = true;
    }
    if (
      values?.start_date === "" ||
      values?.start_date === null ||
      values?.start_date === undefined
    ) {
      errorsObject.start_date = "Please select start date";
      errorExist = true;
    }

    if (values?.start_date > moment(new Date()).format("YYYY-MM-DD")) {
      errorsObject.start_date = "Start date can't be greater then today";
      errorExist = true;
    }

    if (!values?.currently_working) {
      if (values?.start_date > values?.end_date) {
        errorsObject.end_date = "Start date can't be less then end date";
        errorExist = true;
      }
      if (values?.start_date == values?.end_date) {
        errorsObject.end_date = "End date must be greater then start date";
        errorExist = true;
      }
    }

    if (values?.end_date > moment(new Date()).format("YYYY-MM-DD")) {
      errorsObject.end_date = "Start date can't be greater then today";
      errorExist = true;
    }

    if (!values?.currently_working) {
      if (
        values?.end_date === "" ||
        values?.end_date === null ||
        values?.end_date === undefined
      ) {
        errorsObject.end_date = "Please select end date";
        errorExist = true;
      }
    }

    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);
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
    dispatch(
      onAddEmployment(data, Popup, successPopup, setSuccessPopup, setLoading)
    );
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
                      Company <span className="required_stars"> * </span>
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
                      {errors.company && errors.company}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Location <span className="required_stars"> * </span>
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
                      {errors.city && errors.city}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Country <span className="required_stars"> * </span>
                    </Form.Label>
                    <select
                      name="country"
                      value={values?.country}
                      onChange={(e) => onInputChange(e)}
                      defaultValue="default"
                    >
                      <option value="default" disabled hidden>
                        Select
                      </option>
                      {getCountryList?.map((item, key) => (
                        <option key={key} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.country && "Please select country"}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Title <span className="required_stars"> * </span>
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
                      {errors.subject && errors.subject}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Start Date <span className="required_stars"> * </span>
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
                        End Date <span className="required_stars"> * </span>
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
                        {errors.end_date && errors.end_date}
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
                      maxLength={200}
                      className="font-size-13px"
                      value={values?.description || ""}
                      name="description"
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    />
                    <div className="maxlabel_atcxt2_and_errors">
                      <span className="signup-error">
                        {errors.description && errors.description}
                      </span>
                      <span>
                        {200 - (values?.description?.length || 0)} characters
                        left
                      </span>
                    </div>
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
