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
const AddEduc = (props) => {
  const [values, setValues] = useState(props?.education);
  const [endYear, setEndYear] = useState({
    label: values?.end_year,
    name: values?.end_year,
  });
  const [degree, setDegree] = useState({
    label: values?.degree,
    name: values?.degree,
  });
  const [startYear, setStartYear] = useState({
    label: values?.start_year,
    name: values?.start_year,
  });
  const getDegreeList = useSelector((state) => state.profile.getDegreeList);
  const dispatch = useDispatch();

  const startYearList = () => {
    const today = new Date().getFullYear();
    let arr = [];
    for (let i = today; i > today - 40; i--) {
      arr.push({
        name: i,
        label: i,
      });
    }
    return arr;
  };
  const endYearList = () => {
    const today = new Date().getFullYear();
    let arr = [];
    for (let i = today + 3; i > today - 40; i--) {
      arr.push({
        name: i,
        label: i,
      });
    }
    return arr;
  };

  useEffect(() => {
    dispatch(getFreelancerDegreeList());
  }, []);

  const degreeList = getDegreeList?.map((item) => ({
    name: item.title,
    label: item.title,
  }));

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const AddEducation = () => {
    const data = {
      id: values.id,
      school: values?.school,
      start_year: startYear?.name,
      end_year: endYear?.name,
      degree: degree?.name,
      area_study: values?.area_study,
      description: values?.description,
    };
    dispatch(onAddEducation(data, props.Popup));
    dispatch(
      onAddEducation(
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
            <div className="p_header_hding">Add Education</div>
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
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Dates Attended
                    </Form.Label>
                    <Select
                      className="font-size-11px"
                      name="start_year"
                      defaultValue={
                        values
                          ? {
                              name: values?.start_year,
                              label: values?.start_year,
                            }
                          : null
                      }
                      placeholder="From"
                      onChange={setStartYear}
                      options={startYearList()}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500"></Form.Label>
                    <Select
                      className="font-size-11px"
                      name="end_year"
                      defaultValue={
                        values
                          ? {
                              name: values?.end_year,
                              label: values?.end_year,
                            }
                          : null
                      }
                      onChange={setEndYear}
                      options={endYearList()}
                      placeholder="To (or expected gradution year)"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font_size_14px font-weight-500">
                      Degree
                    </Form.Label>
                    <Select
                      className="font-size-11px"
                      defaultValue={
                        values
                          ? {
                              name: values?.degree,
                              label: values?.degree,
                            }
                          : null
                      }
                      options={degreeList}
                      placeholder="Degree "
                      onChange={setDegree}
                    />
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
              <Button variant="" onClick={() => AddEducation()}>
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
