import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../../components/title";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import {
  getFreelancerProfile,
  getTimezoneList,
  onAdditionalAccount,
  onEditContactInfo,
  onEditLocationInfo,
} from "../../../../redux/actions/profileAction";
import CloseAccountPopup from "../../../../popups/CloseAccountPopup";
import { countryList } from "../../../../redux/actions/authActions";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
import AgencyNamePopup from "../../../components/popups/AgencyNamePopup";

const Screen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  Title(" | Contact Info");
  const [editAccount, setEditAccount] = useState(false);
  const [popup, setPopup] = useState();
  const [editLocation, setEditLocation] = useState(false);
  const [openCloseAcc, seOpenCloseAcc] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const basicInfo = useSelector(
    (state) => state?.profile?.freelancerProfileList?.basic_info
  );
  const freelancerProfileList = useSelector(
    (state) => state?.profile?.freelancerProfileList
  );
  const timezoneList = useSelector((state) => state?.profile?.timezoneList);
  const CountryList = useSelector((state) => state?.auth?.getCountryList);

  const editFreelancerInfo = useSelector(
    (state) => state?.profile?.editFreelancerInfo
  );
  const editFreelancerLocation = useSelector(
    (state) => state?.profile?.editFreelancerLocation
  );

  useEffect(() => {
    dispatch(getFreelancerProfile());
    dispatch(getTimezoneList());
    dispatch(countryList());
  }, [editFreelancerInfo, editFreelancerLocation]);

  const onCreateAdditionalAccount = (value) => {
    const data = { user_type: value };
    dispatch(onAdditionalAccount(data, navigate));
  };

  const EditAcc = () => {
    const [values, setValues] = useState(basicInfo);
    const [errors, setErrors] = useState({});
    const email = basicInfo?.email;

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
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
      }
    };

    const EditContactInfo = () => {
      let errorExist = false;
      let errorsObject = {};

      if (
        values.first_name === "" ||
        values.first_name === null ||
        values.first_name === undefined
      ) {
        errorsObject.first_name = "Please enter your first name";
        errorExist = true;
      } else if (/^[0-9]\d*$/.test(values?.first_name)) {
        errorsObject.first_name = "please input a valid first name ";
        errorExist = true;
      }

      if (
        values.email === "" ||
        values.email === null ||
        values.email === undefined
      ) {
        errorsObject.email = true;
        errorExist = true;
      }
      if (
        values.last_name === "" ||
        values.last_name === null ||
        values.last_name === undefined
      ) {
        errorsObject.last_name = "Please enter your last name";
        errorExist = true;
      } else if (/^[0-9]\d*$/.test(values?.last_name)) {
        errorsObject.last_name = "please input a valid last name ";
        errorExist = true;
      }

      if (errorExist) {
        setErrors(errorsObject);
        return false;
      }

      const data =
        email === values.email
          ? {
              first_name: values.first_name,
              last_name: values.last_name,
            }
          : {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
            };

      dispatch(
        onEditContactInfo(data, setEditAccount, successPopup, setSuccessPopup)
      );
    };

    return (
      <>
        <div className="r-box_setting">
          <div className="d-flex justify-content-between align-items-center pt-1 pb-0">
            <div className="setting_b_head_s">Account</div>
            <div>
              <button
                className="round_b_btn"
                onClick={() => setEditAccount(!editAccount)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#D4D4D5"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <Row>
              <Col md={12}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    First Name <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0">
                    <div className="edit_contact_inp">
                      <Form.Control
                        name="first_name"
                        type="text"
                        value={values.first_name}
                        placeholder="First Name"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <span className="signup-error">
                      {/* {errors.first_name && "Please enter your first name"} */}
                      {errors.first_name && errors.first_name}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Last Name <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0">
                    <div className="edit_contact_inp">
                      <Form.Control
                        type="text"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Last Name"
                        value={values.last_name}
                        name="last_name"
                      />
                    </div>
                    <span className="signup-error">
                      {/* {errors.last_name && "Please enter your last name"} */}
                      {errors.last_name && errors.last_name}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Email
                  </div>
                  <div className="c_name_sett mt-0 pt-0">
                    <div className="edit_contact_inp">
                      <Form.Control
                        type="text"
                        name="email"
                        disabled
                        value={values.email}
                        onChange={(e) => onInputChange(e)}
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    {/* <span className="signup-error">
                      {errors.email && "Please enter your email"}
                    </span> */}
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2 d-flex flex-wrap">
                  <div className="_cancle_submit">
                    <Button
                      variant=""
                      onClick={() => setEditAccount(!editAccount)}
                    >
                      CANCEL
                    </Button>
                  </div>
                  <div className="_save_submit">
                    <Button variant="" onClick={EditContactInfo}>
                      SAVE
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  };

  const EditLoc = () => {
    const [values, setValues] = useState(basicInfo);
    const [errors, setErrors] = useState({});

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
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
      }
    };

    const EditLocationInfo = () => {
      let errorExist = false;
      let errorsObject = {};

      if (
        values?.timezone === "" ||
        values?.timezone === null ||
        values?.timezone === undefined
      ) {
        errorsObject.timezone = true;
        errorExist = true;
      }
      if (
        values?.address === "" ||
        values?.address === null ||
        values?.address === undefined
      ) {
        errorsObject.address = "Please enter your address";
        errorExist = true;
      }
      if (
        values?.phone === "" ||
        values?.phone === null ||
        values?.phone === undefined
      ) {
        errorsObject.phone = "Please enter your phone number";
        errorExist = true;
      } else if (values?.phone?.length < 8 || values?.phone?.length > 12) {
        errorsObject.phone = "The phone must be between 8 and 12 digits.";
        errorExist = true;
      }
      if (
        values?.city === "" ||
        values?.city === null ||
        values?.city === undefined
      ) {
        errorsObject.city = "Please enter your city";
        errorExist = true;
      } else if (/^[0-9]\d*$/.test(values?.city)) {
        errorsObject.city = "please input a valid city ";
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
      if (
        values?.zip_code === "" ||
        values?.zip_code === null ||
        values?.zip_code === undefined
      ) {
        errorsObject.zip_code = "Please enter your zip code";
        errorExist = true;
      } else if (
        values?.zip_code?.length < 4 ||
        values?.zip_code?.length > 10
      ) {
        errorsObject.zip_code = "please input a valid zip code";
        errorExist = true;
      }

      if (errorExist) {
        setErrors(errorsObject);
        return false;
      }

      const data = {
        timezone: values?.timezone,
        address: values?.address,
        phone: values?.phone,
        city: values?.city,
        country: values?.country,
        zip_code: values?.zip_code,
      };
      dispatch(
        onEditLocationInfo(data, setEditLocation, successPopup, setSuccessPopup)
      );
    };

    return (
      <>
        <div className="r-box_setting">
          <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
            <div className="setting_b_head_s">Location</div>
            <div>
              <button
                className="round_b_btn"
                onClick={() => setEditLocation(!editLocation)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#D4D4D5"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-3">
            <Row>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Time Zone
                    <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      {/* <input
                        type="text"
                        name="timezone"
                        value={values.timezone}
                        onChange={(e) => onInputChange(e)}
                        placeholder="UTC-07:00 Pacific Time (US & Canada); Tijuana"
                      /> */}
                      <select
                        name="timezone"
                        value={values.timezone}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Select</option>
                        {timezoneList?.map((item) => (
                          <option value={item.timezone}>{item.timezone}</option>
                        ))}
                      </select>
                    </div>
                    <span className="signup-error">
                      {errors.timezone && "Please select timezone"}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    City <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <Form.Control
                        name="city"
                        value={values.city}
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        placeholder="Jaipur"
                      />
                    </div>
                    <span className="signup-error">
                      {/* {errors.city && "Please enter city"} */}
                      {errors.city && errors.city}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Country <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <select
                        name="country"
                        value={values?.country}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Select</option>
                        {CountryList?.map((item) => (
                          <option value={item.name}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <span className="signup-error">
                      {errors.country && "Please select country"}
                    </span>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Address <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <Form.Control
                        name="address"
                        value={values.address}
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        placeholder="12 Tiwari ji ka bagh adarsh nagar jaipur Surya Bekri Jaipur, RJ 302004 "
                      />
                    </div>
                    <span className="signup-error">
                      {errors.address && errors.address}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Phone <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <Form.Control
                        type="text"
                        value={values.phone}
                        name="phone"
                        onChange={(e) => onInputChange(e)}
                        placeholder="987-654-3210"
                      />
                    </div>
                    <span className="signup-error">
                      {errors.phone && errors.phone}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Zip Code <span className="required_stars"> * </span>
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <Form.Control
                        type="number"
                        value={values.zip_code}
                        name="zip_code"
                        onChange={(e) => onInputChange(e)}
                        placeholder="301405"
                      />
                    </div>
                    <span className="signup-error">
                      {/* {errors.zip_code && "Please enter your zip code"} */}
                      {errors.zip_code && errors.zip_code}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2 d-flex flex-wrap">
                  <div className="_cancle_submit">
                    <Button
                      variant=""
                      onClick={() => setEditLocation(!editLocation)}
                    >
                      CANCEL
                    </Button>
                  </div>
                  <div className="_save_submit">
                    <Button variant="" onClick={EditLocationInfo}>
                      SAVE
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-f2f8ff min_pad_m">
        <Container>
          <Row>
            <SideNav />
            <Col lg={9}>
              <div className="s_nav_body">
                <div className="s_b_head no-border">
                  <h2 className="f-size-35">Contact info</h2>
                </div>

                {editAccount ? (
                  <EditAcc />
                ) : (
                  <div className="r-box_setting">
                    <div className="d-flex justify-content-between align-items-center pt-1 pb-0">
                      <div className="setting_b_head_s">Account</div>
                      <div>
                        <button
                          className="round_b_btn"
                          onClick={() => setEditAccount(!editAccount)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#D4D4D5"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col md={12}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Name
                            </div>
                            <div className="c_name_sett mt-0 pt-0">
                              {basicInfo?.first_name.charAt(0).toUpperCase() +
                                basicInfo?.first_name.slice(1)}{" "}
                              {basicInfo?.last_name.charAt(0).toUpperCase() +
                                basicInfo?.last_name.slice(1)}
                            </div>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Email
                            </div>
                            <div className="c_name_sett mt-0 pt-0">
                              {basicInfo?.email}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                )}
                {!(
                  freelancerProfileList?.is_agency &&
                  freelancerProfileList?.is_client
                ) && (
                  <>
                    <div className="r-box_setting">
                      <div className="b-bottom-gr pt-1 pb-3">
                        <div className="setting_b_head_s">
                          Additional accounts
                        </div>
                        <div className="c_name_sett mt-0 pt-0">
                          Creating a new account allows you to use Upwork in
                          different ways, while still having just one login.
                        </div>
                      </div>
                      <Row>
                        {!freelancerProfileList?.is_client && (
                          <Col
                            lg={12}
                            className="d-flex justify-content-between "
                          >
                            <div className="d-flex mb-2 mt-3 addition_acc_media justify-content-between w-100">
                              <div className="w-55">
                                <div className="c_name_s_v">Client Account</div>
                                <div className="c_name_sett pt-0 font-color-light">
                                  Hire, manage and pay as a different company.
                                  Each client company has its own freelancers,
                                  payment methods and reports.
                                </div>
                              </div>

                              <div className="btn_foot_sec addition_acc_media d-flex pt-0 pb-0 m-0 no-border">
                                <div className="fo_btn_c d-flex align-items-center width-max-content next_b_btn_c ">
                                  <button
                                    className="min-width-226"
                                    onClick={() =>
                                      onCreateAdditionalAccount("client")
                                    }
                                  >
                                    Create Client Account
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Col>
                        )}
                        {!freelancerProfileList?.is_agency && (
                          <Col
                            lg={12}
                            className="d-flex justify-content-between addition_acc_media"
                          >
                            <div className="d-flex mb-2 mt-3 justify-content-between w-100 addition_acc_media">
                              <div className="w-55">
                                <div className="c_name_s_v">Agency Account</div>
                                <div className="c_name_sett pt-0 font-color-light">
                                  Find jobs and earn money as manager of a team
                                  of freelancers.
                                </div>
                              </div>
                              <div className="btn_foot_sec flex-wrap d-flex pt-0 pb-0 m-0 no-border">
                                <div className="fo_btn_c d-flex align-items-end width-max-content next_b_btn_c">
                                  <button
                                    className="min-width-226"
                                    onClick={() =>
                                      setPopup(
                                        <AgencyNamePopup setPopup={setPopup} />
                                      )
                                    }
                                  >
                                    Create Agency Account
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Col>
                        )}
                      </Row>
                    </div>
                  </>
                )}
                {editLocation ? (
                  <EditLoc />
                ) : (
                  <div className="r-box_setting">
                    <div className="d-flex justify-content-between align-items-center b-bottom-gr pt-1 pb-3">
                      <div className="setting_b_head_s">Location</div>
                      <div>
                        <button
                          className="round_b_btn"
                          onClick={() => setEditLocation(!editLocation)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#D4D4D5"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Row>
                        <Col md={6}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Time Zone
                            </div>
                            <div className="c_name_sett mt-0 pt-0 font-color-light">
                              {basicInfo?.timezone}
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              City
                            </div>
                            <div className="c_name_sett mt-0 pt-0 font-color-light">
                              {basicInfo?.city}
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Country
                            </div>
                            <div className="c_name_sett mt-0 pt-0 font-color-light">
                              {basicInfo?.country}
                            </div>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Address
                            </div>
                            <div className="c_name_sett mt-0 pt-0 font-color-light">
                              {basicInfo?.address}
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Phone
                            </div>
                            <div className="c_name_sett mt-0 pt-0 font-color-light">
                              {basicInfo?.phone}
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-2 mt-2">
                            <div className="c_name_s_v pb-0 f_new_contact_info">
                              Zip Code
                            </div>
                            <div className="c_name_sett mt-0 pt-0 font-color-light">
                              {basicInfo?.zip_code}
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                )}
                <div className="close_account_btn">
                  <Button
                    variant=""
                    className="blue_btncb"
                    onClick={() => seOpenCloseAcc(true)}
                  >
                    Close Account
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {openCloseAcc && (
        <CloseAccountPopup
          open={openCloseAcc}
          onCloseModal={() => seOpenCloseAcc(false)}
          successPopup={successPopup}
          setSuccessPopup={setSuccessPopup}
        />
      )}
      {successPopup}
      {popup}
    </>
  );
};
export default Screen;
