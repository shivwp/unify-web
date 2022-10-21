import CreditCardInput from "react-credit-card-input";
import { Row, Col } from "react-bootstrap";
const AddPayment = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn paypopradouy pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding addpay_header_hdin">
              Add Payment Method
            </div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
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
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mb-4 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Card Number
                    </label>
                    <CreditCardInput
                      cardNumberInputProps={{}}
                      fieldClassName="input tytyrterwqewyi"
                      cardExpiryInputRenderer={({
                        handleCardExpiryChange,
                        props,
                      }) => <></>}
                      cardCVCInputRenderer={({
                        handleCardCVCChange,
                        props,
                      }) => <></>}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Rizwan"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="Qureshi"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Expires on
                    </label>
                    <input
                      type="number"
                      className="font-size-13px"
                      placeholder="MM"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500"></label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="YY"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element payformelent">
                    <label className="text-black font-size-13px font-weight-500">
                      Security Code
                    </label>
                    <input
                      type="text"
                      className="font-size-13px"
                      placeholder="**********"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap getpaidsve_btn">
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
export default AddPayment;
