import { Row, Col } from "react-bootstrap";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreelancerDegreeList,
  onAddEducation,
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
const AddEduc = ({ education, Popup, successPopup, setSuccessPopup }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(education);
  const [errors, setErrors] = useState({});
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const getDegreeList = useSelector((state) => state.profile.getDegreeList);

  useEffect(() => {
    startYearList();
    endYearList();
  }, []);

  const startYearList = () => {
    const today = new Date().getFullYear();
    let arr = [];
    for (let i = today; i > today - 40; i--) {
      arr.push({ start_year: i });
    }
    setStartYear(arr);
  };

  const endYearList = () => {
    const today = new Date().getFullYear();
    let arr = [];
    for (let i = today + 3; i > today - 40; i--) {
      arr.push({ end_year: i });
    }
    setEndYear(arr);
  };

  useEffect(() => {
    dispatch(getFreelancerDegreeList());
  }, []);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const AddEducation = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.school === "" ||
      values?.school === null ||
      values?.school === undefined
    ) {
      errorsObject.school = true;
      errorExist = true;
    }

    if (
      values?.start_year === "" ||
      values?.start_year === null ||
      values?.start_year === undefined
    ) {
      errorsObject.start_year = true;
      errorExist = true;
    }
    if (
      values?.end_year === "" ||
      values?.end_year === null ||
      values?.end_year === undefined
    ) {
      errorsObject.end_year = true;
      errorExist = true;
    }
    if (
      values?.degree === "" ||
      values?.degree === null ||
      values?.degree === undefined
    ) {
      errorsObject.degree = true;
      errorExist = true;
    }
    if (
      values?.area_study === "" ||
      values?.area_study === null ||
      values?.area_study === undefined
    ) {
      errorsObject.area_study = true;
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

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      id: values?.id,
      school: values?.school,
      start_year: values?.start_year,
      end_year: values?.end_year,
      degree: values?.degree,
      area_study: values?.area_study,
      description: values?.description,
    };
    dispatch(onAddEducation(data, Popup, successPopup, setSuccessPopup));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            {values?.id ? (
              <div className="p_header_hding">Edit Education</div>
            ) : (
              <div className="p_header_hding">Add Education</div>
            )}

            <div className="close_pp_btn" onClick={() => Popup()}>
              <CloseIcon />
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui ">
            <div className="mt-3 pt-1 mb-3"></div>

            <div className="mb-3 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      School
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="school"
                      value={values?.school}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                      placeholder="Ex: Northwestern University"
                    />
                    <span className="signup-error">
                      {errors.school && "Please enter your school name"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Dates Attended
                    </Form.Label>

                    <select
                      name="start_year"
                      value={values?.start_year}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                    >
                      <option value="">Select</option>
                      {startYear?.map((item, key) => (
                        <option key={key} value={item.start_year}>
                          {item.start_year}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.start_year && "Please select start year"}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500"></Form.Label>
                    <select
                      name="end_year"
                      value={values?.end_year}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                    >
                      <option value="">Select</option>
                      {endYear?.map((item, key) => (
                        <option key={key} value={item.end_year}>
                          {item.end_year}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.end_year && "Please select end year"}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Degree
                    </Form.Label>

                    <select
                      name="degree"
                      value={values?.degree}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                      placeholder="Degree"
                    >
                      <option value="">Select</option>
                      {getDegreeList?.map((item, key) => (
                        <option key={key} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.degree && "Please select your degree"}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Area of Study
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => handleOnChange(e)}
                      name="area_study"
                      value={values?.area_study}
                      className="font-size-11px"
                      placeholder="Ex: Computer Science"
                    />
                    <span className="signup-error">
                      {errors.area_study && "Please enter your area study"}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                      value={values?.description}
                      name="description"
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button variant="" className="trans_btn">
                Cancel
              </Button>
              <Button
                variant=""
                className="btnhovpple"
                onClick={() => AddEducation()}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddEduc;
