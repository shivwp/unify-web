import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

const AddEmployment = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn profile_nceqoi_popup pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Add Employment</div>
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
            <div className="mt-2 pt-1 mb-4"></div>

            <div className="mb-4 ">
              <Row>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Company
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Unify"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="City"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Country
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Country"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="Ex: Unify"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      From Month
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="From Month"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      From Year
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="font-size-13px"
                      placeholder="From Year"
                    />
                  </div>
                </Col>
                <Col className="text-right">
                  <div className="agrement_ineoeu flex-row d-flex justify-content-end mt-1 pt-0">
                    <Form.Label className="text-black text-right font-size-13px font-weight-500">
                      <Form.Check type="checkbox" /> I currently work here
                    </Form.Label>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="popup_form_element">
                    <Form.Label className="text-black font-size-13px font-weight-500">
                      Description (Optional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="font-size-13px"
                      placeholder="Enter Here"
                    ></Form.Control>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button className="trans_btn">Cancel</Button>
              <Button
                onClick={() => {
                  props.Popup();
                }}
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
export default AddEmployment;
