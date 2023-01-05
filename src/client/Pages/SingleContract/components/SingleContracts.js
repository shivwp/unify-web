import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Messages from "./Messages";
import Details from "./Details";
import TimeSheet from "../../SeeTimesheet/components/TimeSheet";
import { SingleContractData } from "../../../../redux/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import OverViewFixed from "./OverViewFixed";
import OverViewHourly from "./OverViewHourly";

const SingleContracts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { buttonStatus, id } = useParams();
  const [currentTab, setCurrentTab] = useState("overview");
  const [popup, setPopup] = useState(false);

  const singleContractData = useSelector(
    (state) => state?.job?.singleContractData
  );

  useEffect(() => {
    dispatch(SingleContractData(id));
  }, []);

  return (
    <>
      <Container className="mb-5 pb-3">
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="prof_round_me">
                <img
                  src={singleContractData?.freelancer?.profile_image}
                  alt=""
                />
              </div>
              <div>
                <div className="prof_name_ne">
                  {singleContractData?.freelancer?.first_name}{" "}
                  {singleContractData?.freelancer?.last_name}
                </div>
                <div className="prof_sm_me">
                  {singleContractData?.freelancer?.local_time} Local time
                </div>
              </div>
            </div>
            <button className="endContracts-button">End Contracts</button>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap my-4">
            <div className="me_hed_h2_new">
              <h2>{singleContractData?.project_title}</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-scroll">
            <div className="d-flex tab_m_nodea tab_scroll_cont">
              <button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  currentTab == "overview" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setCurrentTab("overview");
                }}
              >
                Overview
              </button>
              {buttonStatus == "see-timesheet" ? (
                <button
                  variant=""
                  className={`text-capitalize tab_btn_vs w-auto ${
                    currentTab == "TIMESHEET" ? "active_bvs" : ""
                  }`}
                  onClick={() => {
                    setCurrentTab("TIMESHEET");
                  }}
                >
                  Timesheet
                </button>
              ) : null}
              <button
                variant=""
                className={`text-capitalize tab_btn_vs w-auto ${
                  currentTab == "DETAILS" ? "active_bvs" : ""
                }`}
                onClick={() => setCurrentTab("DETAILS")}
              >
                Details
              </button>
            </div>
          </div>
        </div>

        {currentTab === "overview" &&
          (buttonStatus == "see-timesheet" ? (
            <OverViewHourly
              setPopup={setPopup}
              singleContractData={singleContractData}
            />
          ) : (
            <OverViewFixed
              setPopup={setPopup}
              singleContractData={singleContractData}
            />
          ))}
        {currentTab === "DETAILS" && (
          <Details singleContractData={singleContractData} />
        )}
        {currentTab == "TIMESHEET" && <TimeSheet />}
      </Container>
      {popup}
    </>
  );
};
export default SingleContracts;
