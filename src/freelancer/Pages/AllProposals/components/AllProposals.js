import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Title from "../../../../components/title";
import { getAllProposals } from "../../../../redux/actions/jobActions";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { useState } from "react";
const Screen = () => {
  Title(" | Active Contract");
  const dispatch = useDispatch();
  const getAllProposal = useSelector((state) => state?.job?.getAllProposal);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    dispatch(getAllProposals(setLoading));
  }, []);

  const borderNone = {
    border: "unset",
  };

  return (
    <>
      <Container className="mb-5 pb-3">
        <div className="flex_m_j_t pt-4 flex-wrap ">
          <div className="my_jo_headin freelancer_all_contract text-transform-uppercase">
            MY Proposals
          </div>
        </div>

        <div className="yourp_box pb-0 pt-0 border-r-7 all_proposals_list">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                Offers ({getAllProposal?.offers?.length})
              </div>
              {getAllProposal?.offers?.map((item, index) => (
                <div
                  className="proposals_list"
                  key={index}
                  style={
                    getAllProposal?.offers?.length - 1 == index
                      ? borderNone
                      : {}
                  }
                >
                  <div className="date_time">
                    <div className="init_date">Initiated {item.date}</div>
                    <div className="time">{item.time}</div>
                  </div>
                  <Link to={`/freelancer/single-offer-detail/${item.id}`}>
                    <div className="titls">{item.name}</div>
                  </Link>
                  <div className="job_type">{item.budget_type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7 all_proposals_list">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                Invitations to interview (
                {getAllProposal?.interviewForInvitation?.length})
              </div>
              {getAllProposal?.interviewForInvitation?.map((item, index) => (
                <div
                  className="proposals_list"
                  key={index}
                  style={
                    getAllProposal?.interviewForInvitation?.length - 1 == index
                      ? borderNone
                      : {}
                  }
                >
                  <div className="date_time">
                    <div className="init_date">Initiated {item.date}</div>
                    <div className="time">{item.time}</div>
                  </div>
                  <Link to={`/freelancer/single-invitation/${item.id}`}>
                    <div className="titls">{item.name}</div>
                  </Link>
                  <div className="job_type">{item.budget_type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7 all_proposals_list">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                Active Proposals ({getAllProposal?.activeProposal?.length})
              </div>
              {getAllProposal?.activeProposal?.map((item, index) => (
                <div
                  className="proposals_list"
                  key={index}
                  style={
                    getAllProposal?.activeProposal?.length - 1 == index
                      ? borderNone
                      : {}
                  }
                >
                  <div className="date_time">
                    <div className="init_date">Initiated {item.date}</div>
                    <div className="time">{item.time}</div>
                  </div>
                  <Link to={`/freelancer/single-active-proposal/${item.id}`}>
                    <div className="titls">{item.name}</div>
                  </Link>
                  <div className="job_type">{item.budget_type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0 border-r-7 all_proposals_list">
          <div className="my_job_flx">
            <div style={{ width: "100%" }}>
              <div className="my_job_a job_na_bol">
                Submitted Proposals ({getAllProposal?.submittedProposal?.length}
                )
              </div>
              {getAllProposal?.submittedProposal?.map((item, index) => (
                <div
                  className="proposals_list"
                  key={index}
                  style={
                    getAllProposal?.submittedProposal?.length - 1 == index
                      ? borderNone
                      : {}
                  }
                >
                  <div className="date_time">
                    <div className="init_date">Initiated {item.date}</div>
                    <div className="time">{item.time}</div>
                  </div>
                  <Link to={`/freelancer/single-submited-proposal/${item.id}`}>
                    <div className="titls">{item.name}</div>
                  </Link>
                  <div className="job_type">{item.budget_type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};
export default Screen;
