import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Messages from "./Messages";
import Details from "./Details";
import TimeSheet from "./TimeSheet";
import { SingleContractData } from "../../../../redux/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import OverViewFixed from "./OverViewFixed";
import OverViewHourly from "./OverViewHourly";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const SingleContracts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { buttonStatus, id } = useParams();
  const [currentTab, setCurrentTab] = useState("OVERVIEW");
  const [popup, setPopup] = useState(false);
  const onSubmitWorkForPayment = useSelector(
    (state) => state?.job.onSubmitWorkForPayment
  );
  const onRequestForMilestone = useSelector(
    (state) => state?.job.onRequestForMilestone
  );
  const singleContractData = useSelector(
    (state) => state?.job?.singleContractData
  );

  useEffect(() => {
    setLoading(true);
    dispatch(SingleContractData(id, setLoading, setPopup));
  }, [onSubmitWorkForPayment, onRequestForMilestone]);

  return (
    <>
      <Container className="mb-5 pb-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap me_haeder_sections">
          <div>
            <div className="me_hed_h2_new">
              <h2>{singleContractData?.project?.name}</h2>
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
                <div className="prof_name_ne">
                  {`${singleContractData?.client?.first_name} ${singleContractData?.client?.last_name}`}
                </div>
                <div className="prof_sm_me">
                  {singleContractData?.client?.local_time}
                </div>
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
                  currentTab == "OVERVIEW" ? "active_bvs" : ""
                }`}
                onClick={() => {
                  setCurrentTab("OVERVIEW");
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

        {currentTab === "OVERVIEW" ? (
          buttonStatus == "see-timesheet" ? (
            <OverViewHourly
              setPopup={setPopup}
              singleContractData={singleContractData}
            />
          ) : (
            <OverViewFixed
              setLoading={setLoading}
              setPopup={setPopup}
              singleContractData={singleContractData}
            />
          )
        ) : (
          ""
        )}
        {currentTab === "DETAILS" ? (
          <Details singleContractData={singleContractData} />
        ) : (
          ""
        )}
        {currentTab == "TIMESHEET" ? (
          <TimeSheet setLoading={setLoading} setPopup={setPopup} />
        ) : (
          ""
        )}
      </Container>
      {popup}
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default SingleContracts;
