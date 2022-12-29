import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import Select from "react-select";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetAllContracts } from "../../../../redux/actions/jobActions";
import AllProjects from "./AllProjects";
import HourlyProjects from "./HourlyProjects";
import ActiveMilestones from "./ActiveMilestones";
import AwaitingMilestones from "./AwaitingMilestones";
import PaymentRequested from "./PaymentRequested";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ExportToCsv from "../../../../components/ExportToCsv/ExportToCsv";
const Screen = () => {
  Title(" | All Contracts");
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("ALL");
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const getAllContracts = useSelector((state) => state?.job?.getAllContracts);

  useEffect(() => {
    if (
      (filters?.sort_for && filters?.sort_by) ||
      (!filters?.sort_for && !filters?.sort_by)
    ) {
      setLoading(true);
      dispatch(onGetAllContracts(filters, setLoading));
    }
  }, [filters]);

  const handleFiltersChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
        <div className="flex_m_j_t mt-3 pb-0">
          <div className="my_jo_headin freelancer_all_contract text-transform-uppercase">
            All Contracts
          </div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="search_area_in">
            <div className="search_input_in w-100">
              <div className="search_icon_in">
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
              <Form.Control
                type={`text`}
                placeholder={`Search by contract, freelancer, or agency name`}
              />
            </div>
          </div>
          <div className="mt-3">
            <div className="sort_by_pa">Sort By</div>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex flex-wrap justify-content-between align-items-center contract_sel">
                <Row>
                  <Col>
                    <div className="select_inp_in filter_select_m">
                      <Form.Select
                        name="sort_for"
                        className="custom_css_select"
                        onChange={(e) => handleFiltersChange(e)}
                        style={{
                          boxShadow: "none",
                          height: 40,
                          borderRadius: 0,
                          paddingLeft: 10,
                        }}
                        defaultValue="default"
                      >
                        <option value="default" disabled hidden>
                          Select your option
                        </option>
                        <option value="start_date">Start Date</option>
                        <option value="end_date">End Date</option>
                        <option value="client_name">Client Name</option>
                        <option value="contract_name">Contract Name</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col>
                    <div className="select_inp_in filter_select_m">
                      <Form.Select
                        name="sort_by"
                        onChange={(e) => handleFiltersChange(e)}
                        className="custom_css_select"
                        style={{
                          boxShadow: "none",
                          // minWidth: 205,
                          height: 40,
                          borderRadius: 0,
                        }}
                        defaultValue="default"
                      >
                        <option value="default" disabled hidden>
                          Select your option
                        </option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                      </Form.Select>
                    </div>
                  </Col>
                </Row>
                <div className="sort_by_pa">0 Total</div>
                <div className="sort_by_pa iclosed_ctract d-flex align-items-center">
                  <Checkbox
                    name="closed_accounts"
                    icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                    borderRadius={0}
                    onChange={(value) =>
                      setFilters({ ...filters, closed_accounts: value })
                    }
                    borderWidth={1}
                    borderColor="#6D2EF1"
                    style={{ cursor: "pointer", backgroundColor: "#fff" }}
                  />
                  Include closed contracts
                </div>
              </div>
              <div className="download_lnk_csx">
                <span
                  className="export_to_csv"
                  onClick={(e) =>
                    ExportToCsv(
                      getAllContracts?.All?.map((item) => {
                        return {
                          "Contract ID": item?.project_id,
                          "Company Name": item?.client?.company_name,
                          Title: item?.project?.name,
                          "Start Date": item?.start_time,
                          "End Date": item?.end_time,
                          "Hourly Rate": item?.freelancer?.amount,
                        };
                      }),
                      "all-contracts"
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  Download CSV
                </span>
              </div>
            </div>
          </div>
          <div className="no_found_cen justify-content-start">
            <div>
              <div className="no_foun_para_ce text-left">
                Contracts you're actively working on will appear here.{" "}
                <Link to="/freelancer/project-search">
                  Start searching for new projects now!
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="all_contract_overflow">
            <div className="all_contract_tabs">
              <div
                className={`contract_tab ${
                  activeTab == "ALL" ? "active_contract" : ""
                }`}
                onClick={() => setActiveTab("ALL")}
              >
                All
              </div>
              <div
                className={`contract_tab ${
                  activeTab == "HOURLY" ? "active_contract" : ""
                }`}
                onClick={() => setActiveTab("HOURLY")}
              >
                Hourly
              </div>
              <div
                className={`contract_tab ${
                  activeTab == "ACTIVE_MILESTONE" ? "active_contract" : ""
                }`}
                onClick={() => setActiveTab("ACTIVE_MILESTONE")}
              >
                Active Milestone
              </div>
              <div
                className={`contract_tab ${
                  activeTab == "AWAITNIG_MILESTONE" ? "active_contract" : ""
                }`}
                onClick={() => setActiveTab("AWAITNIG_MILESTONE")}
              >
                Awaiting Milestone
              </div>
              <div
                className={`contract_tab ${
                  activeTab == "PAYMENTR_EQUESTED" ? "active_contract" : ""
                }`}
                onClick={() => setActiveTab("PAYMENTR_EQUESTED")}
              >
                Payment Requested
              </div>
            </div>
          </div> */}

          <AllProjects getAllContracts={getAllContracts?.All} />

          {/* <>
            {activeTab == "ALL" ? (
              <HourlyProjects getAllContracts={getAllContracts?.All} />
            ) : activeTab == "HOURLY" ? (
              <HourlyProjects getAllContracts={getAllContracts?.Hourly} />
            ) : activeTab == "ACTIVE_MILESTONE" ? (
              <ActiveMilestones
                getAllContracts={getAllContracts?.ActiveMilestone}
              />
            ) : activeTab == "AWAITNIG_MILESTONE" ? (
              <AwaitingMilestones
                getAllContracts={getAllContracts?.AwaitingMilestone}
              />
            ) : activeTab == "PAYMENTR_EQUESTED" ? (
              <PaymentRequested
                getAllContracts={getAllContracts?.PaymentRequest}
              />
            ) : null}
          </> */}
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default Screen;
