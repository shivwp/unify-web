import Container from "react-bootstrap/Container";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
import ME from "./Milestone";
import MF from "./message-file";
import TS from "./term-setting";
import FE from "./feedback";
// import MilestoneTimeLine from "./MilestoneTimeLine";
import OverView from "./OverView";

const Screen = () => {
  const [Tab, SetTab] = useState(<OverView />);
  const [TabActive, setTabActive] = useState("OVERVIEW");

  // function changeTab(componentName) {
  //   if (componentName === "me") {
  //     SetTab(<ME />);
  //     setTabActive("me");
  //   } else if (componentName === "mf") {
  //     SetTab(<MF />);
  //     setTabActive("mf");
  //   } else if (componentName === "ts") {
  //     SetTab(<TS />);
  //     setTabActive("ts");
  //   } else if (componentName === "fe") {
  //     SetTab(<FE />);
  //     setTabActive("fe");
  //   }
  // }

  return (
    <>
      <Container className="mb-5 pb-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap me_haeder_sections">
          <div>
            <div className="me_hed_h2_new">
              <h2>Experienced Developer for Wellness App</h2>
            </div>
            <div className="me_hed_verif_stus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Completed Dec 3, 2021
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="prof_round_me">
                <img src="/assets/PRO-2.png" alt="" />
              </div>
              <div>
                <div className="prof_name_ne">Jolly Smith</div>
                <div className="prof_sm_me">12:19 pm Friday</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-scroll">
            <div className="d-flex tab_m_nodea tab_scroll_cont">
              <button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  TabActive === "OVERVIEW" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setTabActive("OVERVIEW");
                }}
              >
                Overview
              </button>
              <button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  TabActive === "MESSAGES" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setTabActive("MESSAGES");
                }}
              >
                Messages
              </button>
              <button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  TabActive === "DETAILS" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setTabActive("DETAILS");
                }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
        {Tab}
      </Container>
    </>
  );
};
export default Screen;
