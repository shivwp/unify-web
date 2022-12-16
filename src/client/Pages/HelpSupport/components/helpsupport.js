import { Container } from "react-bootstrap";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import IAmClient from "./IAmClient";
import IAmFreelancer from "./IAmFreelaner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Screen = () => {
  const [TabActive, SetTabActive] = useState("FREELANCER");

  return (
    <>
      <div className="support_bg">
        <div className="height-100-p bg_opac">
          <Container className="d-flex justify-content-center height-100-p align-items-center">
            <div className="mn_six_hun">
              <div className="find_sol_headin">Find a solution fast.</div>
              <div className="find_sol_para">
                Search hundreds of articles on Upwork Help
              </div>
              <Form.Group className="d-flex suppott_inp">
                <div className="d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <Form.Control type={`text`} placeholder={`Search Articles`} />
              </Form.Group>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="chose_acc_type_p mt-3 pt-2">
          Choose An Account Type For Personalized Service
        </div>
        <div className="d-flex flex-wrap tab_m_nodea all_bt_fif tab_scroll_cont">
          <Button
            variant=""
            className={`tab_btn_vs w-auto ${
              TabActive === "FREELANCER" ? "active_bvs" : ""
            }`}
            onClick={() => {
              SetTabActive("FREELANCER");
            }}
          >
            I'm a Freelancer
          </Button>
          <Button
            variant=""
            className={`tab_btn_vs w-auto ${
              TabActive === "CLIENT" ? "active_bvs" : ""
            }`}
            onClick={() => {
              SetTabActive("CLIENT");
            }}
          >
            I'm a client
          </Button>
        </div>
      </Container>
      {TabActive === "CLIENT" ? <IAmClient /> : <IAmFreelancer />}
    </>
  );
};
export default Screen;
