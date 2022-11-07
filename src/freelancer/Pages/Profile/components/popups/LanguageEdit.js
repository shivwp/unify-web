import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onEditLanguage,
  getLanguageList,
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

const LanguageEdit = (props) => {
  const dispatch = useDispatch();
  const languageList = useSelector((state) => state?.profile?.getLanguageList);
  const [inputList, setInputList] = useState(
    props?.data || [{ language: "", level: "" }]
  );

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { language: "", level: "" }]);
  };
  const proficiencyOptions = [
    { name: "Fluent" },
    { name: "Conversational" },
    { name: "Native" },
  ];

  const removeInputFields = (index) => {
    console.log(index);
    const rows = [...inputList];
    rows.splice(index, 1);
    setInputList(rows);
  };

  const handleSave = () => {
    const data = {};
    inputList.map((ele) => {
      data[ele.language] = ele.level;
    });
    // console.log(data);
    dispatch(onEditLanguage({ languages: data }, props.Popup));
  };

  useEffect(() => {
    dispatch(getLanguageList());
  }, []);
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Edit languages</div>
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
            <div className="mt-3 pt-1 mb-3"></div>

            <div className="mb-3 ">
              <Row>
                {inputList?.map((data, i) => {
                  return (
                    <>
                      <Col md={6}>
                        <div className="popup_form_element">
                          <Form.Label className="text-black font-size-13px font-weight-500">
                            Language
                          </Form.Label>
                          <select
                            className="font-size-13px language_sel"
                            name="language"
                            value={data.language}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option selected hidden>
                              Select a Language
                            </option>
                            {languageList?.map((item) => (
                              <option value={item.name}>{item.name}</option>
                            ))}
                          </select>
                          {/* <input
                            className="font-size-13px"
                            placeholder="English"
                            name="language"
                            value={data.language}
                            onChange={(e) => handleInputChange(e, i)}
                          /> */}
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="popup_form_element">
                          <Form.Label
                            className="text-black  font-size-13px font-weight-500"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>Proficiency level</span>{" "}
                            {inputList?.length !== 1 ? (
                              <Button
                                onClick={() => removeInputFields(i)}
                                style={{
                                  border: "none",
                                  background: "transparent",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    id="_2203546_bin_delete_gabage_trash_icon"
                                    data-name="2203546_bin_delete_gabage_trash_icon"
                                    d="M8,0A1,1,0,0,0,7,1H0V3H1V14a2,2,0,0,0,2,2H13a2,2,0,0,0,2-2V3h1V1H9A1,1,0,0,0,8,0ZM4,14H3V5H4Zm3,0H6V5H7Zm3,0H9V5h1Zm3,0H12V5h1Z"
                                    fill="#6d2ef1"
                                  />
                                </svg>
                              </Button>
                            ) : null}
                          </Form.Label>
                          <select
                            className="font-size-13px language_sel"
                            name="level"
                            value={data.level}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option selected hidden>
                              Select a level
                            </option>
                            {proficiencyOptions.map((item) => (
                              <option value={item.name}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </Col>
                      <div
                        style={{
                          display: "flex",
                          height: "100%",
                          alignItems: "flex-end",
                          justifyContent: "center",
                        }}
                      ></div>
                    </>
                  );
                })}
              </Row>
            </div>
            {/* {inputList.length < 5 && ( */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                className="addMoreLanguageBtn"
                disabled={
                  !(
                    inputList?.slice(-1)[0].language &&
                    inputList?.slice(-1)[0].level
                  )
                }
                onClick={handleAddClick}
              >
                Add More
              </Button>
            </div>
            {/* )} */}
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
                className="trans_btn"
                onClick={() => {
                  props.Popup();
                }}
              >
                Cancel
              </Button>

              <Button
                disabled={
                  !(
                    inputList?.slice(-1)[0].language &&
                    inputList?.slice(-1)[0].level
                  )
                }
                onClick={handleSave}
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
export default LanguageEdit;
