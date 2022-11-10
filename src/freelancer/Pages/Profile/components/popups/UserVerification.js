import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onSubmitVerificationDocs } from "../../../../../redux/actions/profileAction";

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
const UserVerification = (props) => {
  const dispatch = useDispatch();
  const [docType, setDocType] = useState({});
  const [frontImg, setFrontImg] = useState(null);
  const [showingFontImg, setShowingFrontImg] = useState();
  const [backImg, setBackImg] = useState(null);
  const [showingBackImg, setShowingBackImg] = useState();

  const onFrontImgChange = (e) => {
    setFrontImg(e.target.files[0]);
    setShowingFrontImg(URL.createObjectURL(e.target.files[0]));
  };
  const onBackImgChange = (e) => {
    setBackImg(e.target.files[0]);
    setShowingBackImg(URL.createObjectURL(e.target.files[0]));
  };
  const onSave = () => {
    const formData = new FormData();
    formData.append("type", docType);
    formData.append("document_front", frontImg);
    formData.append("document_back", backImg);
    dispatch(onSubmitVerificationDocs(formData));
  };

  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">User Verification</div>
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
            <div className="mt-3 mb-3"></div>

            <div className="mb-3 ">
              <div className="mt-4">
                <div className="popup_form_element">
                  <label className="text-black font-size-13px font-weight-500">
                    ID Proof
                  </label>
                  <select
                    style={{
                      color: "#828282",
                      border: "1px solid rgb(232, 231, 231)",
                      height: 40,
                      borderRadius: 0,
                    }}
                    className="font-size-11px"
                    placeholder="Select ID"
                    onChange={(e) => setDocType(e.target.value)}
                    name="type"
                  >
                    <option value="passport">Passport</option>
                    <option value="driving_license">Driving Licence</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="varifyDocs_pre_img ">
                {showingFontImg ? (
                  <div>
                    <span>Front Image</span>
                    <img src={showingFontImg} alt="" />
                  </div>
                ) : null}
                {showingBackImg ? (
                  <div>
                    <span> Back Image</span>
                    <img src={showingBackImg} alt="" />
                  </div>
                ) : null}
              </div>
              <Row>
                <Col md={6}>
                  <div
                    className="popup_form_element"
                    style={{ position: "relative" }}
                  >
                    <label className="text-black font_size_14px font-weight-500">
                      Upload Document
                    </label>
                    <label htmlFor="attach-doc-front" style={{ minHeight: 0 }}>
                      <div
                        style={{
                          border: "1px solid #e8e7e7",
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          fontSize: 11,
                          paddingLeft: 10,
                        }}
                      >
                        Upload Document Front Image
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15.05"
                          viewBox="0 0 20 17.05"
                          style={{
                            position: "absolute",
                            top: 42,
                            right: 8,
                            cursor: "pointer",
                          }}
                        >
                          <path
                            id="_0294701bfa3b26cfab404696f6cf4390"
                            data-name="0294701bfa3b26cfab404696f6cf4390"
                            d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64a1,1,0,0,0,.9.68h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"
                            transform="translate(-2 -3.5)"
                            fill="#828282"
                          />
                        </svg>
                      </div>
                      <input
                        type="file"
                        id="attach-doc-front"
                        style={{ display: "none" }}
                        onChange={(e) => onFrontImgChange(e)}
                      />
                    </label>
                  </div>
                </Col>
                <Col md={6}>
                  <div
                    className="popup_form_element"
                    style={{ position: "relative" }}
                  >
                    <label className="text-black font_size_14px font-weight-500"></label>
                    <label htmlFor="attach-doc-back" style={{ minHeight: 0 }}>
                      <div
                        style={{
                          border: "1px solid #e8e7e7",
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          fontSize: 11,
                          paddingLeft: 10,
                        }}
                      >
                        Upload Document Front Image
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15.05"
                          viewBox="0 0 20 17.05"
                          style={{
                            position: "absolute",
                            top: 42,
                            right: 8,
                            cursor: "pointer",
                          }}
                        >
                          <path
                            id="_0294701bfa3b26cfab404696f6cf4390"
                            data-name="0294701bfa3b26cfab404696f6cf4390"
                            d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64a1,1,0,0,0,.9.68h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"
                            transform="translate(-2 -3.5)"
                            fill="#828282"
                          />
                        </svg>
                      </div>
                      <input
                        type="file"
                        id="attach-doc-back"
                        style={{ display: "none" }}
                        onChange={(e) => onBackImgChange(e)}
                      />
                    </label>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <button className="trans_btn">Cancel</button>
              <button onClick={onSave}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserVerification;
