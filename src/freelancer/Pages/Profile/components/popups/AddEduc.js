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
    dispatch(getFreelancerDegreeList());
  }, []);

  useEffect(() => {
    const startYears = [];
    const endYears = [];
    for (
      let i = new Date().getFullYear();
      i > (Number(values?.start_year) - 1 || new Date().getFullYear() - 40);
      i--
    ) {
      startYears.push({ start_year: i });
    }

    for (
      let i = new Date().getFullYear() + 10;
      i > (Number(values?.end_year) - 1 || new Date().getFullYear() - 40);
      i--
    ) {
      endYears.push({ end_year: i });
    }
    setEndYear(endYears);
    setStartYear(startYears);
  }, []);

  const handleOnChange = (e) => {
    if (
      (values?.[e.target.name]?.length === undefined ||
        values?.[e.target.name]?.length === 0 ||
        values?.[e.target.name] == " ") &&
      e.target.value == " "
    ) {
      setValues({ ...values, [e.target.name]: "" });
      setErrors({
        ...errors,
        [e.target.name]: `Field is required`,
      });
    } else {
      const years = [];
      if (e.target.name == "start_year") {
        for (
          let i = Number(e.target.value);
          i < Number(e.target.value) + 20;
          i++
        ) {
          years.push({ end_year: i });
        }
        setEndYear(years);
      }

      if (e.target.name == "end_year") {
        for (
          let i = Number(e.target.value);
          i > Number(e.target.value) - 20;
          i--
        ) {
          years.push({ start_year: i });
        }
        setStartYear(years);
      }

      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const AddEducation = () => {
    let errorExist = false;
    let errorsObject = {};

    if (
      values?.school === "" ||
      values?.school === null ||
      values?.school === undefined
    ) {
      errorsObject.school = "Please enter your school name";
      errorExist = true;
    } else if (values?.school?.length < 3) {
      errorsObject.school = "School length should be minimum 3";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.school)) {
      errorsObject.school = "Please input a valid school name ";
      errorExist = true;
    }

    if (
      values?.start_year === "" ||
      values?.start_year === null ||
      values?.start_year === undefined
    ) {
      errorsObject.start_year = "Please select start year";
      errorExist = true;
    }

    if (values?.start_year > new Date().getFullYear()) {
      errorsObject.start_year = "Start year can't be greater then current year";
      errorExist = true;
    }

    if (values?.start_year == values?.end_year) {
      errorsObject.start_year = "End year must be grater then start year";
      errorExist = true;
    }

    if (
      values?.end_year === "" ||
      values?.end_year === null ||
      values?.end_year === undefined
    ) {
      errorsObject.end_year = "Please select end year";
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
      errorsObject.area_study = "Please enter your course";
      errorExist = true;
    } else if (values?.area_study?.length < 1) {
      errorsObject.area_study = "Course length should be minimum 1";
      errorExist = true;
    } else if (/^[0-9]\d*$/.test(values?.area_study)) {
      errorsObject.area_study = "Please input a valid course name ";
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
                      School <span className="required_stars"> * </span>
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
                      {errors.school && errors.school}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Start year <span className="required_stars"> * </span>
                    </Form.Label>

                    <select
                      name="start_year"
                      value={values?.start_year}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                      defaultValue="default"
                    >
                      <option value="default" disabled hidden>
                        Select
                      </option>
                      {startYear?.map((item, key) => (
                        <option key={key} value={item.start_year}>
                          {item.start_year}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.start_year && errors?.start_year}
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      End year/ expected end year{" "}
                      <span className="required_stars"> * </span>
                    </Form.Label>
                    <select
                      name="end_year"
                      value={values?.end_year}
                      onChange={(e) => handleOnChange(e)}
                      className="font-size-11px"
                    >
                      <option value="" disabled hidden selected>
                        Select
                      </option>
                      {endYear?.map((item, key) => (
                        <option key={key} value={item.end_year}>
                          {item.end_year}
                        </option>
                      ))}
                    </select>
                    <span className="signup-error">
                      {errors.end_year && errors.end_year}
                    </span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Degree <span className="required_stars"> * </span>
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
                      Area of study <span className="required_stars"> * </span>
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
                      {errors.area_study && errors.area_study}
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
              <Button variant="" className="trans_btn" onClick={() => Popup()}>
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
