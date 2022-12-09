import React from "react";
import "../../../styles/accountInfo.css";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
  errors,
}) => {
  return (
    <Form onSubmit={(e) => onSubmitClientData(e)}>
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
          <Form.Label htmlFor="uploadProfile" className="change_prof_btn">
            <Form.Control
              type="file"
              id="uploadProfile"
              name="profile_image"
              onChange={(e) => onProfileChange(e)}
            />
            Upload Profile Photo
          </Form.Label>
        </div>
        <div className="acc_form">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form.Group className="inp_fields">
                <Form.Label style={{ marginBottom: "0px" }}>
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={values?.first_name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="John"
                />
                <span className="signup-error">
                  {errors.first_name && errors.first_name}
                </span>
              </Form.Group>
              <Form.Group className="inp_fields">
                <Form.Label style={{ marginBottom: "0px" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={values?.email}
                  onChange={(e) => onInputChange(e)}
                  placeholder="johndoe@gmail.com"
                />
              </Form.Group>
              <span className="signup-error">
                {errors.email && "Please enter your email"}
              </span>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Group className="inp_fields">
                <Form.Label style={{ marginBottom: "0px" }}>
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={values?.last_name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Doe"
                />
                <span className="signup-error">
                  {errors.last_name && errors.last_name}
                </span>
              </Form.Group>
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
                <Form.Control
                  type="text"
                  name="company_name"
                  value={values?.company_name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Company Name"
                />
                {/* <span className="signup-error">
                  {errors.company_name && "Please enter company name"}
                </span> */}
              </div>
              <div className="inp_fields">
                <span>Add your industry</span>
                <select
                  name="industry"
                  value={values?.industry}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select</option>
                  {getIndustries?.map((item, key) => (
                    <option key={key} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
                {/* <span className="signup-error">
                  {errors.industry && "Select industry"}
                </span> */}
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="inp_fields">
                <span>Website</span>
                <Form.Control
                  type="text"
                  name="website"
                  value={values?.website}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
                {/* <span className="signup-error">
                  {errors.website && "Please enter website url"}
                </span> */}
              </div>
              <div className="inp_fields">
                <span>Tagline</span>
                <Form.Control
                  type="text"
                  name="tagline"
                  value={values?.tagline}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
                {/* <span className="signup-error">
                  {errors.tagline && "Please enter your tagline"}
                </span> */}
              </div>
            </Col>
            <div className="inp_fields">
              <span>Description</span>
              <Form.Control
                as="textarea"
                name="description"
                value={values?.description}
                onChange={(e) => onInputChange(e)}
                id="descr"
              ></Form.Control>
              {/* <span className="signup-error">
                {errors.description && "Please enter your description"}
              </span> */}
            </div>
            <div className="inp_fields">
              <span>How many people are in your company?</span>
              <div className="emp_radio_inputs">
                <Form.Label htmlFor="radio-1">
                  <Form.Check
                    type="radio"
                    id="radio-1"
                    name="employee_no"
                    value={1}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 1 ? true : false}
                  />
                  <span>It Just me</span>
                </Form.Label>
                <Form.Label htmlFor="radio-2">
                  <Form.Check
                    type="radio"
                    id="radio-2"
                    name="employee_no"
                    value={2}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 2 ? true : false}
                  />
                  <span>2-9 employees</span>
                </Form.Label>
                <Form.Label htmlFor="radio-3">
                  <Form.Check
                    type="radio"
                    id="radio-3"
                    name="employee_no"
                    value={10}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 10 ? true : false}
                  />
                  <span>10-99 employees</span>
                </Form.Label>
                <Form.Label htmlFor="radio-4">
                  <Form.Check
                    type="radio"
                    id="radio-4"
                    name="employee_no"
                    value={100}
                    onChange={(e) => onInputChange(e)}
                    checked={values?.employee_no == 100 ? true : false}
                  />
                  <span>more then 100 employees</span>
                </Form.Label>
              </div>
              {/* <span className="signup-error">
                {errors.employee_no && "Please select company length"}
              </span> */}
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
                <Form.Control
                  type="text"
                  name="email"
                  value={`${values?.first_name} ${values?.last_name}`}
                  disabled
                />
              </div>
              <div className="inp_fields">
                <span>VAT ID</span>
                <Form.Control
                  type="text"
                  name="vat_id"
                  value={values?.vat_id}
                  onChange={(e) => onInputChange(e)}
                  placeholder="VAT ID"
                />
                {/* <span className="signup-error">
                  {errors.vat_id && "Please enter VAT id"}
                </span> */}
              </div>
              <div className="inp_fields">
                <span>Country</span>
                <select
                  name="country"
                  value={values?.country}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select</option>
                  {getCountryList?.map((item, key) => (
                    <option key={key} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {/* <span className="signup-error">
                  {errors.country && "Pleasse select country"}
                </span> */}
              </div>
              <div className="inp_fields">
                <span>City</span>

                <Form.Control
                  type="text"
                  name="city"
                  value={values?.city}
                  onChange={(e) => onInputChange(e)}
                  placeholder="City"
                />
                <span className="signup-error">
                  {errors.city && errors.city}
                </span>
              </div>
            </Col>
            <Col lg-6 sm-12 md-12>
              <div className="inp_fields">
                <span>Phone</span>
                <Form.Control
                  type="number"
                  name="company_phone"
                  value={values?.company_phone}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
                <span className="signup-error">
                  {errors.company_phone && errors.company_phone}
                </span>
              </div>
              <div className="inp_fields">
                <span>Time Zone</span>
                <select
                  name="timezone"
                  value={values?.timezone}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select</option>
                  {timezoneList?.map((item, key) => (
                    <option key={key} value={item.timezone}>
                      {item.timezone}
                    </option>
                  ))}
                </select>
                {/* <span className="signup-error">
                  {errors.timezone && "Please select timezozne"}
                </span> */}
              </div>
              <div className="inp_fields">
                <span>Address</span>
                <Form.Control
                  type="text"
                  name="company_address"
                  value={values?.company_address}
                  onChange={(e) => onInputChange(e)}
                  placeholder=""
                />
                <span className="signup-error">
                  {errors.company_address && "Please enter company address"}
                </span>
              </div>
              <div className="inp_fields">
                <span>ZIP</span>
                <Form.Control
                  type="number"
                  name="zip_code"
                  value={values?.zip_code}
                  onChange={(e) => onInputChange(e)}
                  placeholder="zip code"
                />
                <span className="signup-error">
                  {errors.zip_code && errors.zip_code}
                </span>
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
            <button type="submit" className="cls_acc_btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AccountInfo;
