import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RemoveDraftPopup from "../../../../popups/RemoveDraftPopup";
import { getAllClientDraftPosting } from "../../../../redux/actions/jobActions";

const AllDraftPostings = () => {
  const dispatch = useDispatch();
  const [menuBarDraft, setMenuBarDraft] = useState();
  const [removeDraft, setRemoveDraft] = useState(false);
  const clientDraftPostingList = useSelector(
    (state) => state?.job?.allClientDraftPosting?.data
  );

  useEffect(() => {
    dispatch(getAllClientDraftPosting());
  }, []);

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

            {clientDraftPostingList?.map((item, index) => (
              <div
                key={index}
                className="my_job_flx"
                style={
                  index != clientDraftPostingList.length - 1
                    ? {
                        borderBottom: "#cbcaca solid 1px",
                        paddingBottom: "15px",
                      }
                    : {}
                }
              >
                <div>
                  <div className="my_job_a job_na_bol">{item.name}</div>
                  <div className="my_job_pos_tme">Saved 25 min ago</div>
                </div>
                <div className="text-right d-flex flex-wrap menu_btn">
                  <button
                    variant=""
                    className="toggle_btn_dot"
                    onClick={() => setMenuBarDraft(item.id)}
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
                  {menuBarDraft === item.id && (
                    <div className="menu_bar" id="menu_bar2">
                      <div className="navabr_t_li">
                        <Link to="/dashboard/edit-draft">Edit Draft</Link>
                      </div>
                      <div
                        className="navabr_t_li"
                        onClick={() => setRemoveDraft(true)}
                      >
                        Remove Draft
                      </div>
                      <span className="menu_btn_arrow" id="menu_btn_arrow2">
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
      {removeDraft && (
        <RemoveDraftPopup
          open={removeDraft}
          onCloseModal={(e) => setRemoveDraft(false)}
        />
      )}
    </>
  );
};

export default AllDraftPostings;
