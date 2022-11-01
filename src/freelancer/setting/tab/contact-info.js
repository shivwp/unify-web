import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../components/title";
import EditAccountPopup from "../../../popups/EditAccountPopup";

import CreateNewTeam from "../../../popups/CreateNewTeamPupup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getFreelancerProfile,
  getTimezoneList,
  onEditContactInfo,
  onEditLocationInfo,
} from "../../../redux/actions/profileAction";
import CloseAccountPopup from "../../../popups/CloseAccountPopup";
import { countryList } from "../../../redux/actions/authActions";

const Screen = () => {
  const dispatch = useDispatch();
  Title(" | Contact Info");
  const [editAccount, setEditAccount] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [openCloseAcc, seOpenCloseAcc] = useState(false);

  const basicInfo = useSelector(
    (state) => state?.profile?.freelancerProfileList?.basic_info
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

  const EditAcc = () => {
    const [values, setValues] = useState(basicInfo);
    const email = basicInfo?.email;

    const onInputChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const EditContactInfo = () => {
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

      dispatch(onEditContactInfo(data, setEditAccount));
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
                    First Name
                  </div>
                  <div className="c_name_sett mt-0 pt-0">
                    <div className="edit_contact_inp">
                      <input
                        name="first_name"
                        type="text"
                        value={values.first_name}
                        placeholder="Shiv"
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Last Name
                  </div>
                  <div className="c_name_sett mt-0 pt-0">
                    <div className="edit_contact_inp">
                      <input
                        type="text"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Kumar Kumavat"
                        value={values.last_name}
                        name="last_name"
                      />
                    </div>
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
                      <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={(e) => onInputChange(e)}
                        placeholder=" shiv.kumar@gmail.com"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2 d-flex flex-wrap">
                  <div className="_cancle_submit">
                    <button onClick={() => setEditAccount(!editAccount)}>
                      CANCEL
                    </button>
                  </div>
                  <div className="_save_submit">
                    <button onClick={EditContactInfo}>SAVE</button>
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

    const onInputChange = (e) => {
      console.log(e.target.value);
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const EditLocationInfo = () => {
      const data = {
        timezone: values?.timezone,
        address: values?.address,
        phone: values?.phone,
        city: values?.city,
        country: values?.country,
      };
      dispatch(onEditLocationInfo(data, setEditLocation));
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
                        {timezoneList?.map((item) => (
                          <option value={item.timezone}>{item.timezone}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">City</div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <input
                        name="city"
                        value={values.city}
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        placeholder="Jaipur"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Country
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <select
                        name="country"
                        value={values?.country}
                        onChange={(e) => onInputChange(e)}
                      >
                        {CountryList?.map((item) => (
                          <option value={item.name}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Address
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <input
                        name="address"
                        value={values.address}
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        placeholder="12 Tiwari ji ka bagh adarsh nagar jaipur Surya Bekri Jaipur, RJ 302004 "
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-2 mt-2">
                  <div className="c_name_s_v pb-0 f_new_contact_info">
                    Phone
                  </div>
                  <div className="c_name_sett mt-0 pt-0 font-color-light">
                    <div className="edit_contact_inp">
                      <input
                        type="text"
                        value={values.phone}
                        name="phone"
                        onChange={(e) => onInputChange(e)}
                        placeholder="987-654-3210"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="mb-2 mt-2 d-flex flex-wrap">
                  <div className="_cancle_submit">
                    <button onClick={() => setEditLocation(!editLocation)}>
                      CANCEL
                    </button>
                  </div>
                  <div className="_save_submit">
                    <button onClick={EditLocationInfo}>SAVE</button>
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
                <div className="r-box_setting">
                  <div className="b-bottom-gr pt-1 pb-3">
                    <div className="setting_b_head_s">Additional accounts</div>
                    <div className="c_name_sett mt-0 pt-0">
                      Creating a new account allows you to use Upwork in
                      different ways, while still having just one login.
                    </div>
                  </div>
                  <Row>
                    <Col
                      lg={12}
                      className="d-flex justify-content-between flex-wrap"
                    >
                      <div className="d-flex mb-2 mt-3 flex-wrap justify-content-between w-100">
                        <div className="w-55">
                          <div className="c_name_s_v">Client Account</div>
                          <div className="c_name_sett pt-0 font-color-light">
                            Hire, manage and pay as a different company. Each
                            client company has its own freelancers, payment
                            methods and reports.
                          </div>
                        </div>
                        <div className="btn_foot_sec flex-wrap d-flex pt-0 pb-0 m-0 no-border">
                          <div className="fo_btn_c d-flex align-items-center width-max-content next_b_btn_c ">
                            <button className="min-width-226">
                              New Client Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      className="d-flex justify-content-between flex-wrap"
                    >
                      <div className="d-flex mb-2 mt-3 justify-content-between w-100 flex-wrap">
                        <div className="w-55">
                          <div className="c_name_s_v">Agency Account</div>
                          <div className="c_name_sett pt-0 font-color-light">
                            Find jobs and earn money as manager of a team of
                            freelancers.
                          </div>
                        </div>
                        <div className="btn_foot_sec flex-wrap d-flex pt-0 pb-0 m-0 no-border">
                          <div className="fo_btn_c d-flex align-items-end width-max-content next_b_btn_c">
                            <button className="min-width-226">
                              New Agency Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
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
                      </Row>
                    </div>
                  </div>
                )}
                <div className="close_account_btn">
                  <button onClick={() => seOpenCloseAcc(true)}>
                    Close Account
                  </button>
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
        />
      )}
    </>
  );
};
export default Screen;
