import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { onRequestTestimonial } from "../../../../../redux/actions/profileAction";

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

const ReqTestimonial = ({ Popup, successPopup, setSuccessPopup }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const testimonialSubmit = (e) => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values.first_name === "" ||
      values.first_name === null ||
      values.first_name === undefined
    ) {
      errorsObject.first_name = true;
      errorExist = true;
    }

    if (
      values.last_name === "" ||
      values.last_name === null ||
      values.last_name === undefined
    ) {
      errorsObject.last_name = true;
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
      values.title === "" ||
      values.title === null ||
      values.title === undefined
    ) {
      errorsObject.title = true;
      errorExist = true;
    }
    if (
      values.type === "" ||
      values.type === null ||
      values.type === undefined
    ) {
      errorsObject.type = true;
      errorExist = true;
    }
    if (
      values.description === "" ||
      values.description === null ||
      values.description === undefined
    ) {
      errorsObject.description = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      first_name: values?.first_name,
      last_name: values?.last_name,
      email: values?.email,
      title: values?.title,
      type: values?.type,
      description: values?.description,
    };
    dispatch(onRequestTestimonial(data, Popup, successPopup, setSuccessPopup));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Request A Client Testimonial</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                Popup();
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui">
            <div className="mt-3 pt-1 mb-3">
              <div className="popuphead_smparcr">
                Add your client’s contact details. Don’t worry—we’ll only
                display their first name and last initial.
              </div>
            </div>

            <div className="mb-3 ">
              <Row>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="first_name"
                      className="font-size-13px"
                      value={values?.first_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter First Name"
                    />
                    <span className="signup-error">
                      {errors.first_name && "Please enter your first name"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Last name{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      className="font-size-13px"
                      value={values?.last_name}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Last name "
                    />
                    <span className="signup-error">
                      {errors.last_name && "Please enter your last name"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Business email address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      className="font-size-13px"
                      value={values?.email}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Your Business Email"
                    />
                    <span className="signup-error">
                      {errors.email && "Please enter your email"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Client's title (Optional)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      className="font-size-13px"
                      value={values?.title}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Client's Title"
                    />
                    <span className="signup-error">
                      {errors.title && "Please enter your title"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Project Type (Optional)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="type"
                      className="font-size-13px"
                      value={values?.type}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Project Type"
                    />
                    <span className="signup-error">
                      {errors.type && "Please enter your project type"}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      className="font-size-13px"
                      value={values?.description}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                    <span className="signup-error">
                      {errors.description && "Please enter your description"}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                variant=""
                className="font-weight-600 btnhovpple"
                onClick={() => {
                  testimonialSubmit();
                }}
              >
                REQUEST TESTIMONIAL
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReqTestimonial;
