import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Messages from "./Messages";
import Details from "./Details";
import TimeSheet from "./TimeSheet";
import {
  onEndContract,
  SingleContractData,
} from "../../../../redux/actions/jobActions";
import { useDispatch, useSelector } from "react-redux";
import OverViewFixed from "./OverViewFixed";
import OverViewHourly from "./OverViewHourly";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ConfirmationPopup from "../../../components/popups/ConfirmationPopup";
import $ from "jquery";
import FeedBackPopup from "../popups/FeedBackPopup";

const SingleContracts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { buttonStatus, id } = useParams();
  const [currentTab, setCurrentTab] = useState("OVERVIEW");
  const [popup, setPopup] = useState(false);
  const [showRightBtns, setShowRightBtns] = useState(false);
  const onSubmitWorkForPayment = useSelector(
    (state) => state?.job.onSubmitWorkForPayment
  );
  const onRequestForMilestone = useSelector(
    (state) => state?.job.onRequestForMilestone
  );
  const singleContractData = useSelector(
    (state) => state?.job?.singleContractData
  );
  const sendFeedBack = useSelector((state) => state?.job?.sendFeedBack);

  const whenEndContract = useSelector((state) => state?.job?.whenEndContract);
  const refundOrDispute = useSelector((state) => state?.job?.refundOrDispute);

  useEffect(() => {
    setLoading(true);
    dispatch(SingleContractData(id, setLoading, setPopup));
  }, [
    onSubmitWorkForPayment,
    onRequestForMilestone,
    whenEndContract,
    sendFeedBack,
    refundOrDispute,
  ]);

  const endContract = () => {
    const data = {
      contract_id: id,
      type: "freelancer",
    };
    setLoading(true);
    dispatch(onEndContract(data, setLoading, setPopup));
  };

  // useEffect(() => {
  //   if (singleContractData?.status == "close") {
  //     setPopup(
  //       <FeedBackPopup
  //         contract_id={singleContractData?.id}
  //         popup={setPopup}
  //         setLoading={setLoading}
  //       />
  //     );
  //   }
  // }, [singleContractData?.status]);

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#contract_right_btn, #three_dots").length === 0) {
      setShowRightBtns(false);
    }
  });

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
                <img src={singleContractData?.client?.profile_image} alt="" />
              </div>
              <div>
                <div className="prof_name_ne">
                  {`${singleContractData?.client?.first_name || ""} ${
                    singleContractData?.client?.last_name || ""
                  }`}
                </div>
                <div className="prof_sm_me">
                  {singleContractData?.client?.local_time}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-7 col-10">
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
          <div className="col-lg-4 col-md-5 col-2">
            <div className="contract_right_btns">
              <span
                className="three_dots"
                id="three_dots"
                onClick={() => setShowRightBtns(!showRightBtns)}
              >
                ...
              </span>
              {showRightBtns ? (
                <div className="contract_right_btn" id="contract_right_btn">
                  <Link to="/freelancer/chat">
                    <button>Messages</button>
                  </Link>
                  <button
                    onClick={() =>
                      setPopup(
                        <ConfirmationPopup
                          Popup={() => setPopup(!popup)}
                          confirm={() => endContract()}
                        />
                      )
                    }
                  >
                    End Contract
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {currentTab === "OVERVIEW" ? (
          buttonStatus == "see-timesheet" ? (
            <OverViewHourly
              setCurrentTab={setCurrentTab}
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
