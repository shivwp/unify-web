import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
const Star = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12.754"
        height="12.165"
        viewBox="0 0 12.754 12.165"
      >
        <path
          id="Path_4730"
          data-name="Path 4730"
          d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
          transform="translate(-3.649 -4.034)"
          fill="#6d2ef1"
        />
      </svg>
    </>
  );
}; 
const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
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
    const options1 = [
      {
        name: "Fluent",
        label: "Fluent",
      },
    ];
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
            <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
              <div className="mt-3 pt-1 mb-3"></div>
  
              <div className="mb-3 ">
                <Row>
                  <Col md={12}>
                    <div className="popup_form_element">
                      <label className="text-black font-size-13px font-weight-500">
                        School
                      </label>
                      <input
                        type="text"
                        className="font-size-13px"
                        placeholder="Ex: Northwestern University"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="popup_form_element">
                      <label className="text-black font-size-13px font-weight-500">
                        Dates Attended (Optional)
                      </label>
                      <Select
                        className="font-size-13px"
                        placeholder="From"
                        options={options1}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="popup_form_element">
                      <label className="text-black font-size-13px font-weight-500">
                        Proficiency level
                      </label>
                      <Select
                        className="font-size-13px"
                        placeholder="Fluent"
                        options={options1}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="popup_form_element">
                      <label className="text-black font-size-13px font-weight-500">
                        Degree (Optional)
                      </label>
                      <Select
                        className="font-size-13px"
                        placeholder="Degree (Optional)"
                        options={options1}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="popup_form_element">
                      <label className="text-black font-size-13px font-weight-500">
                        Area of Study (Optional)
                      </label>
                      <input
                        type="text"
                        className="font-size-13px"
                        placeholder="Ex: Computer Science"
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="popup_form_element">
                      <label className="text-black font-size-13px font-weight-500">
                        Description (Optional)
                      </label>
                      <textarea
                        className="font-size-13px"
                        placeholder="Enter Here"
                      ></textarea>
                    </div>
                  </Col>
                </Row>
              </div>
  
              <div className="popup_btns_new flex-wrap cwiewyehkk">
                <button className="trans_btn">Cancel</button>
                <button
                  onClick={() => {
                    props.Popup();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default AddEduc