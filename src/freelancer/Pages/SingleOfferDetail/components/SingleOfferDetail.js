import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  onAcceptOffer,
  singleProposalDetails,
} from "../../../../redux/actions/jobActions";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuccessPopup from "../../../components/popups/SuccessPopup";
import DeclineOfferPopup from "./DeclineOfferPopup";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const SingleOfferDetail = () => {
  const dispatch = useDispatch();
  const [successPopup, setSuccessPopup] = useState(false);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const project_data = useSelector(
    (state) => state?.job?.singleProposalDetails?.project_data
  );
  const milestonedata = useSelector(
    (state) => state?.job?.singleProposalDetails?.milestonedata
  );
  const client_data = useSelector(
    (state) => state?.job?.singleProposalDetails?.client_data
  );
  const proposal_data = useSelector(
    (state) => state?.job?.singleProposalDetails?.proposal_data
  );

  const afterSuccess = () => {
    navigate("/freelancer/all-contracts");
  };

  useEffect(() => {
    setLoading(true);
    dispatch(singleProposalDetails(id, "offer", setLoading));
  }, [id]);

  const OfferAccept = () => {
    setLoading(true);
    dispatch(
      onAcceptOffer(id, successPopup, setSuccessPopup, afterSuccess, setLoading)
    );
  };
  return (
    <>
      <Container>
        <div className="job_haed_m">Job Details</div>
        <Row>
          <Col lg={8}>
            <div className="box_vs_m mt-0">
              <div className="svs_b_bot">
                <div className="d-flex justify-content-between">
                  <div className="bvs_main_head">{project_data?.name}</div>
                  <div className="bvs_m_post_time">
                    Posted {project_data?.posted_date}
                  </div>
                </div>
                {/* <div className="world_wide_t">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-map"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                </span>
                Worldwide
              </div> */}
              </div>
              <div className="svs_b_bot">
                <div className="svs_para">{project_data?.description}</div>
              </div>
              <div className="svs_b_bot">
                <div className="single_offer_type">
                  <div>
                    <div className="input_t_lab p-0">Project Type</div>
                    <div className="svs_para">Ongoing project</div>
                  </div>
                  <div>
                    <div className="input_t_lab p-0">Price</div>
                    {project_data?.budget_type === "hourly" ? (
                      <div className="svs_para">
                        {` $${project_data?.min_price} - $${project_data?.price} /hr
                        ${project_data?.budget_type}`}
                      </div>
                    ) : project_data?.budget_type === "fixed" ? (
                      <div className="svs_para">
                        {`$${project_data?.price} ${project_data?.budget_type}`}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="b_bot_inp pt-0">
                <div className="input_t_lab">Skills</div>
                <div className="slide_btnss">
                  {project_data?.job_skills?.map((item) => (
                    <Button variant="">{item.name}</Button>
                  ))}
                </div>
              </div>
              {/* <div className="b_bot_inp pt-0">
              <div className="input_t_lab">Activity on this job</div>
              <ul className="activite_ul">
                <li>
                  <div className="au_name">Proposals</div> :{" "}
                  <span>Less than 5</span>
                </li>
                <li>
                  <div className="au_name">interviewing</div> : <span>0</span>
                </li>
              </ul>
            </div> */}
              <div className="b_bot_inp pt-0 no-border">
                <div className="input_t_lab">Original Message From Client</div>
                <div className="new_para_m">{proposal_data?.cover_letter}</div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box_vs_m mt-0">
              <div className="csai_t text-center">
                Interested in discussing this job?
              </div>
              <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-3 mb-2 p-0">
                <div className="fo_btn_c next_b_btn_c">
                  <Button
                    variant=""
                    className="active_btn_blue hov_ttransp mt-0 min-w-2hpx"
                    onClick={OfferAccept}
                  >
                    Accept Offer
                  </Button>
                </div>
              </div>
              <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-0 mb-2 p-0">
                <div className="fo_btn_c next_b_btn_c p-0">
                  <Button
                    variant=""
                    className="min-w-2hpx"
                    onClick={() =>
                      setPopup(
                        <DeclineOfferPopup
                          popup={setPopup}
                          id={id}
                          successPopup={successPopup}
                          setSuccessPopup={setSuccessPopup}
                          type={"offer"}
                        />
                      )
                    }
                  >
                    Decline Offer
                  </Button>
                </div>
              </div>
              {/* <div className="btn_foot_sec justify-content-center flex-wrap no-border mt-0 mb-2 p-0">
              <div className="fo_btn_c next_b_btn_c">
                <Button variant="" className="min-w-2hpx">
                  Refer a Freelancer
                </Button>
              </div>
            </div> */}
              <div className="about_client_no mb-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="ab_t_c_h1">
                      <h1>About the client</h1>
                    </div>
                    <div className="p_not_verif">
                      {client_data?.payment_verified
                        ? "Payment Varified"
                        : "Payment method not varified"}
                      <span className="no_verify_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-question-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cline_sm_area_i">
                  <div className="csai_name f_l_b">Location</div>
                  <div className="csai_name">{client_data?.country}</div>
                  <div className="csai_t">{client_data?.local_time}</div>
                </div>
                <div className="cline_sm_area_i">
                  <div className="csai_name f_l_b">History</div>
                  <div className="csai_t pt-2">
                    {project_data?.proposal_count} proposals
                    <span className="no_verify_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                    </span>
                  </div>
                  <div className="csai_t">
                    {project_data?.interview} interviews
                  </div>
                  <div className="csai_t">
                    {client_data?.job_posted} job posted
                  </div>
                  <div className="csai_t">
                    {project_data?.open_jobs} open jobs
                  </div>
                </div>
              </div>
              <div className="csai_t">
                {`Member since: ${client_data?.member_since}`}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {loading ? <LoadingSpinner /> : null}
      {popup}
      {successPopup}
    </>
  );
};

export default SingleOfferDetail;
