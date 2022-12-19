import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import { onRequestTestimonial } from "../../../../../redux/actions/profileAction";
import PopupsCloseIcon from "../../../../components/popups/PopupsCloseIcon";

const ReqTestimonial = ({ Popup, successPopup, setSuccessPopup }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const errorRequestTestimonial = useSelector(
    (state) => state?.profile?.errorRequestTestimonial?.message
  );

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

  const testimonialSubmit = (e) => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values.first_name === "" ||
      values.first_name === null ||
      values.first_name === undefined
    ) {
      errorsObject.first_name = "Please enter first name";
      errorExist = true;
    }

    if (
      values.last_name === "" ||
      values.last_name === null ||
      values.last_name === undefined
    ) {
      errorsObject.last_name = "Please enter last name";
      errorExist = true;
    }
    if (
      values.email === "" ||
      values.email === null ||
      values.email === undefined
    ) {
      errorsObject.email = "Please enter email address";
      errorExist = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values?.email)
    ) {
      errorsObject.email = "Please type a valid email address";
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
              <PopupsCloseIcon />
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
                      First Name <span className="required_stars"> * </span>
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
                      {errors.first_name && errors.first_name}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Last name <span className="required_stars"> * </span>
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
                      {errors.last_name && errors.last_name}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Business email address{" "}
                      <span className="required_stars"> * </span>
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
                      {errors.email && errors.email}
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
                      maxLength={200}
                      className="font-size-13px"
                      value={values?.description}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Here"
                    ></Form.Control>
                    {/* <span className="signup-error mt-1">
                      {errorRequestTestimonial && errorRequestTestimonial}
                    </span> */}
                    <div className="maxlabel_atcxt2_and_errors">
                      <span className="signup-error">
                        {errorRequestTestimonial && errorRequestTestimonial}
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
