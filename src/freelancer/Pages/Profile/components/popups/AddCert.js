import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onEditCertificate,
  getCertificationList,
} from "../../../../../redux/actions/profileAction";

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
const AddCert = (props) => {
  const [certName, setCertName] = useState(props?.certificates || null);
  const [values, setValues] = useState(props?.certificates);
  const [certificateList, setCertificateList] = useState([]);
  const dispatch = useDispatch();
  const options1 = certificateList?.map((data) => ({
    name: data.name,
    label: data.name,
  }));

  useEffect(() => {
    dispatch(getCertificationList(setCertificateList));
  }, []);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    let data;
    if (props?.certificates?.id) {
      data = {
        id: props?.certificates?.id,
        name: certName.name,
        description: values.description,
      };
    } else {
      data = {
        name: certName.name,
        description: values.description,
      };
    }
    dispatch(
      onEditCertificate(
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
            <div className="p_header_hding">Add Certification</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-4">
              <div className="popup_form_element">
                <Form.Label className="text-black font-size-13px font-weight-500">
                  Proficiency level
                </Form.Label>
                <Select
                  className="font-size-13px"
                  placeholder="Select Certificate Type"
                  options={options1}
                  onChange={setCertName}
                  defaultValue={
                    certName
                      ? { name: certName.name, label: certName.name }
                      : null
                  }
                />
              </div>
            </div>
            <div className="mt-3 pt-1 mb-3">
              <div className="pouphed_skll">Adobe Certified Expert</div>
              <div className="popuphead_smparcr">
                If you have earned an <b>official certification </b>from{" "}
                <b>Adobe</b>, paste the verification code displayed on your
                certificate into the box below. We will confirm your
                certification and it will appear on your profile within 5 days
                of submission.
              </div>
            </div>

            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Enter Here"
                      name="description"
                      value={values?.description || null}
                      onChange={(e) => handleOnChange(e)}
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </button>
              <button onClick={onSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCert;
