import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import $ from "jquery";
import RemovePostingPopup from "../../../../popups/RemovePostingPopup";
import { getAllClientPosting } from "../../../../redux/actions/jobActions";
import LoadingSpinner from "../../../../components/LoadingSpinner";
const AllPosting = () => {
  const dispatch = useDispatch();
  const [menuBarPosting, setMenuBarPosting] = useState();
  const [removePosting, setRemovePosting] = useState(false);
  const [loading, setLoading] = useState(false);
  const clientPostingList = useSelector(
    (state) => state?.job?.allClientPosting?.data
  );

  useEffect(() => {
    setLoading(true);
    dispatch(getAllClientPosting(false, setLoading));
  }, []);

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#menu_bar1").length === 0) {
      setMenuBarPosting(false);
    }
  });

  return (
    <>
      <div className="bg-fff min_pad_m">
        <Container>
          <div className="flex_m_j_t pt-4 pb-4 flex-wrap">
            <div>
              <Link to="/dashboard">My jobs</Link> /{" "}
              <Link to="/all-job-list">Job Postings</Link>
            </div>
            <div className="post_job_btn_m d-flex align-items-center flex-wrap">
              <Link to="/post-your-job">
                <button className="mt-2 border_blue_wwifth">
                  Post A New Job
                </button>
              </Link>
            </div>
          </div>
          <div className="yourp_box">
            <div className="d-flex justify-content-between align-items-center pb-3 b-bottom-gr">
              <div className="headin_yourp_b">Your Postings</div>
            </div>

            {clientPostingList?.map((item, index) => (
              <div
                key={index}
                className="my_job_flx"
                style={
                  index != clientPostingList.length - 1
                    ? {
                        borderBottom: "#cbcaca solid 1px",
                        paddingBottom: "15px",
                      }
                    : {}
                }
              >
                <div>
                  <Link to={`/view-job/${item.id}/job-details`}>
                    <div className="my_job_a job_na_bol">{item.name}</div>
                  </Link>
                  <div className="my_job_h">
                    Invite only - {item.budget_type}
                  </div>
                  <div className="my_job_pos_tme">Posted 21 min ago by you</div>
                </div>
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="my_job_n_box">
                    <div className="my_job_nm">0</div>
                    <div className="my_job_h pt-0">Proposals</div>
                  </div>
                  <div className="my_job_n_box">
                    <div className="my_job_nm">0</div>
                    <div className="my_job_h pt-0">Messaged</div>
                  </div>
                  <div className="my_job_n_box">
                    <div className="my_job_nm">0</div>
                    <div className="my_job_h pt-0">Hired</div>
                  </div>
                </div>
                <div className="text-right d-flex flex-wrap menu_btn">
                  <button
                    variant=""
                    className="toggle_btn_dot"
                    onClick={() => setMenuBarPosting(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>

                  {menuBarPosting === item.id && (
                    <div className="menu_bar" id="menu_bar1">
                      <div className="navabr_t_li">
                        <Link to={`/dashboard/edit-posting/${item.id}`}>
                          Edit Posting
                        </Link>
                      </div>
                      <div
                        className="navabr_t_li"
                        onClick={() => setRemovePosting(true)}
                      >
                        <Link to="#">Remove Posting</Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to={`/view-job/${item.id}/review-proposal`}>
                          View Proposals
                        </Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to={`/view-job/${item.id}/job-details`}>
                          View Job Post
                        </Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to={`/dashboard/reuse-posting/${item.id}`}>
                          Reuse Postings
                        </Link>
                      </div>
                      <span className="menu_btn_arrow" id="menu_btn_arrow1">
                        {" "}
                        &#62;{" "}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      {removePosting && (
        <RemovePostingPopup
          open={removePosting}
          onCloseModal={(e) => setRemovePosting(false)}
        />
      )}
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default AllPosting;
