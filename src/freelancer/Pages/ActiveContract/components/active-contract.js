import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../../../../components/title";
import { getAllProposals } from "../../../../redux/actions/jobActions";

const Screen = () => {
  Title(" | Active Contract");
  const dispatch = useDispatch();
  const getAllProposal = useSelector((state) => state?.job?.getAllProposal);

  useEffect(() => {
    dispatch(getAllProposals());
  }, []);

  console.log(getAllProposal);
  return (
    <>
      <Container className="mb-5 pb-3">
        <div className="flex_m_j_t pt-4 flex-wrap">
          <div className="my_jo_headin freelancer_all_contract text-transform-uppercase">
            MY Proposals
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">Offers (0)</div>
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                <Link to="/freelancer/message" style={{ color: "#000" }}>
                  Invitations to interview (
                  {getAllProposal?.interviewForInvitation?.length})
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                <Link to="/freelancer/message" style={{ color: "#000" }}>
                  Active Proposals ({getAllProposal?.activeProposal?.length})
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7 all_proposals">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                <Link to="/freelancer/message" style={{ color: "#000" }}>
                  Submitted Proposals (
                  {getAllProposal?.submittedProposal?.length})
                </Link>
              </div>
              <div className="proposals_list">
                <div className="date_time">
                  <div className="init_date">Initiated Dec 2, 2022</div>
                  <div className="time">10 min ago</div>
                </div>
                <div className="titls">Mearn Full stack development</div>
                <div className="job_type">Fixed</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Screen;
