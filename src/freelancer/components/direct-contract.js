import { useState } from "react";
import Container from "react-bootstrap/Container";
import Title from "../../components/title";
import { Link } from "react-router-dom";
import "../../styles/freelancer.css";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Popup = (props) => {
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn">
          <div className="popup_header">
            <div className="p_header_hding">New Contract</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#B2B2B2"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
              </svg>
            </div>
          </div>
          <div className="popup_body_bpn">
            <div className="popup_form_element">
              <Form.Label style={{ color: "#000" }}>
                Client's Email Address
              </Form.Label>
              <Form.Control style={{ fontSize: 14 }} type="email" />
            </div>
            <div className="popup_form_element">
              <Form.Label style={{ color: "#000" }}>Contract Name</Form.Label>
              <Form.Control style={{ fontSize: 14 }} type="text" />
            </div>
            <div className="popup_form_element">
              <Form.Label style={{ color: "#000" }}>Description</Form.Label>
              <Form.Control
                as="textarea"
                style={{ fontSize: 14 }}
              ></Form.Control>
            </div>
            <div className="popup_form_element">
              <Form.Label style={{ color: "#000" }}>Contract Type</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Label
                  style={{ color: "#000" }}
                  className="popup_radio_element inp_0_radio"
                >
                  <Form.Check type="radio" />
                  Hourly
                </Form.Label>
                <Form.Label
                  style={{ color: "#000" }}
                  className="popup_radio_element inp_0_radio"
                >
                  <Form.Check type="radio"/>
                  Fixed Price
                </Form.Label>
              </div>
            </div>
            <div className="popup_btns_new flex-wrap">
              <Button
               variant=""
                onClick={() => {
                  props.Popup(<AmountPopup Popup={props.Popup} />);
                }}
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AmountPopup = (props) => {
  const options1 = [
    {
      name: "Milestone",
      label: "Milestone",
    },
  ];
  return (
    <>
      <div className="bg_wrapper_popup_new">
        <div className="popup_box_bpn pb-4">
          <div className="popup_header pb-0">
            <div className="p_header_hding">Contract Amount</div>
            <div
              className="close_pp_btn"
              onClick={() => {
                props.Popup();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#B2B2B2"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
              </svg>
            </div>
          </div>
          <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
            <div className="mile_sutone_amoun">
              <h2>$0.00</h2>
            </div>
            <div className="popup_form_element">
              <Select className="" placeholder="Milestone" options={options1} />
            </div>
            <div className="popup_form_element">
              <Form.Label>Milestone 1</Form.Label>
              <Form.Control type="text" placeholder="Name of milestone" />
            </div>
            <div className="popup_form_element">
              <Form.Label>Milestone 2</Form.Label>
              <Form.Control type="text" placeholder="Name of milestone" />
            </div>
            <div className="popup_form_element">
              <Form.Label>Amount</Form.Label>
              <div className="ps-relative">
                <Form.Control type="text" />
                <div className="ipdlar_sign">$</div>
              </div>
              <Form.Label className="add_miestone_lbel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  ></path>
                </svg>{" "}
                Add milestone
              </Form.Label>
            </div>
            <div className="total_box_oioup">
              <div className="flex_jus_cen_new free_unofy_smtext">
                <div>3.4% Unify Fee</div>
                <div>-$0.00</div>
              </div>
              <div className="flex_jus_cen_new yr_rve_at_ltext">
                <div>You'll Recieve</div>
                <div>$0.00</div>
              </div>
            </div>
            <div className="popup_btns_new flex-wrap cwiewyehkk">
              <Button
               variant=""
                style={{ padding: "11px 35px" }}
                className="trans_btn"
                onClick={() => {
                  props.Popup(<Popup Popup={props.Popup} />);
                }}
              >
                BACK
              </Button>
              <Link to="/freelancer/project-detail">
                <Button variant="" style={{ padding: "11px 35px" }}>SEND CONTRACT</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Screen = () => {
  Title(" | Direct Contract");
  const [popup, SetPopup] = useState();
  return (
    <>
      <Container>
        <div className="question_box">
          <div className="question_img_br">
            <img src="/assets/Group 2802.svg" alt="" />
          </div>
          <div className="questopn_h1">
            <h1 className="no_sudo">Direct Contracts</h1>
          </div>
          <div className="question_p">
            <p>
              Securely create contracts and quickly collect payment for
              non-Unify projects.
            </p>
          </div>
          <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-2 a_fl_with_css">
            <Link to="/category" className="mrright-gppnew">
              <div className="fo_btn_c next_b_btn_c">
                <Button variant="">INVITE CLIENTS</Button>
              </div>
            </Link>
            <div className="fo_btn_c next_b_btn_c">
              <Button
               variant=""
                className="active_btn_blue"
                onClick={() => SetPopup(<Popup Popup={SetPopup} />)}
              >
                CREATE A CONTRACT
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {popup}
    </>
  );
};
export default Screen;
