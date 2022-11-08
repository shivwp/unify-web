import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onAddEmployment,
} from "../../../../../redux/actions/profileAction";
import Select from "react-select";
import { countryList } from "../../../../../redux/actions/authActions";

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


const AddEmployment = (props) => {
  const dispatch = useDispatch();
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [country, setCountry] = useState(null);
  const [values, setValues] = useState(
    props?.experience || { currently_working: 0 }
  );
  console.log(props?.exprience);

  useState(() => {
    dispatch(countryList());
  }, []);

  const countryLis = getCountryList?.map((item) => ({
    name: item.name,
    label: item.name,
  }));

  const onInputChange = (e) => {
    if (e.target.name == "currently_working") {
      setValues({ ...values, [e.target.name]: e.target.checked ? 1 : 0 });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  console.log(country);

  const onSave = () => {
    const data = {
      id: props?.experience?.id,
      company: values.company,
      city: values.city,
      country: props?.experience?.country || country.name,
      description: values.description,
      subject: values.subject,
      currently_working: values.currently_working,
      start_date: values.start_date,
      end_date: values.end_date,
    };
    dispatch(
      onAddEmployment(
        data,
        props.Popup,
        props.successPopup,
        props.setSuccessPopup
      )
    );
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Employment</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
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
                      value={values.company}
                      onChange={(e) => onInputChange(e)}
                    />
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
                      value={values.city}
                      onChange={(e) => onInputChange(e)}
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Country
                    </Form.Label>
                    <Select
                      className="font-size-13px"
                      placeholder="India"
                      name="country"
                      defaultValue={
                        values.country
                          ? { name: values.country, label: values.country }
                          : null
                      }
                      onChange={setCountry}
                      options={countryLis}
                    />
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
                      value={values.subject}
                      className="font-size-13px"
                      placeholder="Like: Developer, React"
                    />
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
                      value={values.start_date}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      End Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="end_date"
                      className="font-size-13px"
                      value={values.end_date}
                      placeholder="End Date"
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </Col>
                <Col className="text-right">
                  <div className="agrement_ineoeu flex-row d-flex justify-content-end mt-1 pt-0">
                    <Form.Label className="text-black text-right font-size-13px font-weight-500 align-items-center">
                      <Form.Check
                        type="checkbox"
                        name="currently_working"
                        onChange={(e) => onInputChange(e)}
                        defaultChecked={values.currently_working || false}
                      />{" "}
                      I currently work here
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
                      value={values.description || ""}
                      name="description"
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
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
