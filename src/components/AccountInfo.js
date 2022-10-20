import React from "react";
import "../components/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";

const AccountInfo = ({
  setOpen,
  getIndustries,
  getCountryList,
  timezoneList,
  onInputChange,
  values,
  onSubmitClientData,
  onProfileChange,
  objectUrlAbc,
}) => {
  return (
    <>
      <div className="account_info">
        <div className="comp_title">
          <h5>Account</h5>
        </div>
        <div className="account_prof">
          <div className="profile_img">
            <img
              src={objectUrlAbc ? objectUrlAbc : values?.profile_image}
              alt=""
            />
          </div>
          <label htmlFor="uploadProfile" className="change_prof_btn">
            <input
              type="file"
              id="uploadProfile"
              name="profile_image"
              onChange={(e) => onProfileChange(e)}
            />
            Upload Profile Photo
          </label>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="inp_fields">
                <span>First Name</span>
                <input
                  type="text"
                  name="first_name"
                  value={values?.first_name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Ankita"
                />
              </div>
              <div className="inp_fields">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  value={values?.email}
                  onChange={(e) => onInputChange(e)}
                  placeholder="ankita@gmail.com"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="inp_fields">
                <span>Last Name</span>
                <input
                  type="text"
                  name="last_name"
                  value={values?.last_name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Kumavat"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="account_info">
        <div className="comp_title">
          <h5>Company Details</h5>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="inp_fields">
                <span>Company Name</span>
                <input
                  type="text"
                  name="company_name"
                  value={values?.company_name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Company Name"
                />
              </div>
              <div className="inp_fields">
                <span>Add your industry</span>
                <select
                  name="industry"
                  value={values?.industry}
                  onChange={(e) => onInputChange(e)}
                >
                  {getIndustries?.map((item, key) => (
                    <option key={key} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="inp_fields">
                <span>Website</span>
                <input
                  type="text"
                  name="website"
                  value={values?.website}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
              </div>
              <div className="inp_fields">
                <span>Tagline</span>
                <input
                  type="text"
                  name="tagline"
                  value={values?.tagline}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
              </div>
            </Col>
            <div className="inp_fields">
              <span>Description</span>
              <textarea
                name="description"
                value={values?.description}
                onChange={(e) => onInputChange(e)}
                id="descr"
              ></textarea>
            </div>
            <div className="inp_fields">
              <span>How many people are in your company?</span>
              <div className="emp_radio_inputs">
                <label htmlFor="radio-1">
                  <input
                    type="radio"
                    id="radio-1"
                    name="employee_no"
                    value={1}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 1 ? true : false}
                  />
                  <span>It Just me</span>
                </label>
                <label htmlFor="radio-2">
                  <input
                    type="radio"
                    id="radio-2"
                    name="employee_no"
                    value={2}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 2 ? true : false}
                  />
                  <span>2-9 employees</span>
                </label>
                <label htmlFor="radio-3">
                  <input
                    type="radio"
                    id="radio-3"
                    name="employee_no"
                    value={10}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 10 ? true : false}
                  />
                  <span>10-99 employees</span>
                </label>
                <label htmlFor="radio-4">
                  <input
                    type="radio"
                    id="radio-4"
                    name="employee_no"
                    value={100}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 100 ? true : false}
                  />
                  <span>more then 100 employees</span>
                </label>
              </div>
            </div>
          </Row>
        </div>
      </div>

      <div className="account_info">
        <div className="comp_title">
          <h5>Company Contacts</h5>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg-6 sm-12 md-12>
              <div className="inp_fields">
                <span>Owner name</span>
                <input
                  type="text"
                  name="email"
                  value={`${values?.first_name} ${values?.last_name}`}
                />
              </div>
              <div className="inp_fields">
                <span>VAT ID</span>
                <input
                  type="text"
                  name="vat_id"
                  value={values?.vat_id}
                  onChange={(e) => onInputChange(e)}
                  placeholder="VAT ID"
                />
              </div>
              <div className="inp_fields">
                <span>Country</span>
                <select
                  name="country"
                  value={values?.country}
                  onChange={(e) => onInputChange(e)}
                >
                  {getCountryList?.map((item, key) => (
                    <option key={key} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inp_fields">
                <span>City</span>
                <select>
                  <option value="">Jaipur</option>
                </select>
              </div>
            </Col>
            <Col lg-6 sm-12 md-12>
              <div className="inp_fields">
                <span>Phone</span>
                <input
                  type="number"
                  name="company_phone"
                  value={values?.company_phone}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
              </div>
              <div className="inp_fields">
                <span>Time Zone</span>
                <select
                  name="timezone"
                  value={values?.timezone}
                  onChange={(e) => onInputChange(e)}
                >
                  {timezoneList?.map((item, key) => (
                    <option key={key} value={item.timezone}>
                      {item.timezone}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inp_fields">
                <span>Address</span>
                <input
                  type="text"
                  name="company_address"
                  value={values?.company_address}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
              </div>
              <div className="inp_fields">
                <span>ZIP</span>
                <input
                  type="text"
                  name="zip_code"
                  value={values?.zip_code}
                  onChange={(e) => onInputChange(e)}
                  placeholder="zip code"
                />
              </div>
            </Col>
          </Row>
          <div className="account_type_alert">
            This is a <span>Client</span> account
          </div>
          <div className="acc_btn">
            <button className="mrright-gppnew" onClick={setOpen}>
              Cancel
            </button>
            <button
              type="button"
              className="cls_acc_btn"
              onClick={(e) => onSubmitClientData(e)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
