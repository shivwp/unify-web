import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useState } from "react";

import RemovePostingPopup from "../../../../popups/RemovePostingPopup";
import RemoveDraftPopup from "../../../../popups/RemoveDraftPopup";
const Screen = () => {

  const [menuBarPosting, setMenuBarPosting] = useState(false);
  const [menuBarDraft, setMenuBarDraft] = useState(false);

  const [removePosting, setRemovePosting] = useState(false);
  const [removeDraft, setRemoveDraft] = useState(false);

  Title(" | Dashboard");
  const hanDleSlide = (e) => {
    $(e.target.nextSibling).slideToggle();
  };
  $(".slider_shutter").slideDown();

  const openMenuBarPosting = () => {
    setMenuBarPosting(!menuBarPosting);
  };
  const openMenuBarDraft = () => {
    setMenuBarDraft(!menuBarDraft);
  };

  return (
    <>
      <Container>
        <div className="flex_m_j_t pt-4 pb-4 flex-wrap">
          <div className="my_jo_headin font-35">
            Your Dashboard
            <div className="my_job_sm_text">Marina Pokhilko</div>
          </div>
          <div className="post_job_btn_m d-flex align-items-center flex-wrap">
            <button className="trans_btn_myjo mr_btn mt-2">
              Browse Project Catalog
            </button>
            <Link to="/gettingstarted">
              <button className="mt-2 border_blue_wwifth">Post A Job</button>
            </Link>
            <Link to="/expandteam">
              <button className="ml_btn trans_btn_myjo blue_coloe_brn mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path
                    fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="yourp_box">
          <div className="d-flex justify-content-between align-items-center pb-3 b-bottom-gr">
            <div className="headin_yourp_b">Your Postings</div>
            <div className="see_ps_ing">
              <Link to="#0">See all postings</Link>
            </div>
          </div>
          <div className="my_job_flx">
            <div>
              <div className="my_job_a job_na_bol">UI/UX Design</div>
              <div className="my_job_h">Invite only - Hourly</div>
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
              <button className="toggle_btn_dot" onClick={openMenuBarPosting}>
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

              {menuBarPosting && (
                <div className="menu_bar" id="menu_bar1">
                  <div className="navabr_t_li">
                    <Link to="/dashboard/edit-posting">Edit Posting</Link>
                  </div>
                  <div
                    className="navabr_t_li"
                    onClick={() => setRemovePosting(true)}
                  >
                    Remove Posting
                  </div>
                  <div className="navabr_t_li"><Link to="/view-job/review">View Proposals</Link></div>
                  <div className="navabr_t_li"><Link to="/view-job/view_job">View Job Post</Link></div>
                  <div className="navabr_t_li"><Link to="/title">Reuse Postings</Link></div>
                  <span className="menu_btn_arrow" id="menu_btn_arrow1">
                    {" "}
                    &#62;{" "}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-3">
          <div className="d-flex justify-content-between align-items-center pb-3 b-bottom-gr">
            <div className="headin_yourp_b">Your Drafts</div>
            <div className="see_ps_ing">
              <Link to="#0">See all drafts</Link>
            </div>
          </div>
          <div className="my_job_flx">
            <div>
              <div className="my_job_a job_na_bol">
                Sales & Business Development
              </div>
              <div className="my_job_pos_tme">Saved 25 min ago</div>
            </div>
            <div className="text-right d-flex flex-wrap menu_btn">
              <button className="toggle_btn_dot" onClick={openMenuBarDraft}>
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
              {menuBarDraft && (
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
                  <span className="menu_btn_arrow" id="menu_btn_arrow2"> &#62; </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-3">
          <div
            className="d-flex justify-content-between align-items-center pb-3 b-bottom-gr"
            onClick={(e) => hanDleSlide(e)}
          >
            <div className="headin_yourp_b">
              How to work with talent
              <div className="my_job_pos_tme">
                Connect with a talent community that numbers in the millions,
                fast and at no cost.
              </div>
            </div>
            <div className="see_ps_ing">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="slide_btnss slider_shutter">
            <div className="my_job_flx b-bottom-gr pb-2">
              <div>
                <div className="my_job_a job_na_bol">
                  1. Post a job to the marketplace
                </div>
                <div className="my_job_pos_tme">
                  Provide enough detail for great talent to figure out if the
                  work is right for them. (You can always edit your post, or
                  send an invite to reach out to people directly.)
                </div>
                <div className="my_job_pos_tme inner_a_sty">
                  <Link to="#0">Check out examples of effective job posts</Link>
                </div>
              </div>
            </div>
            <div className="my_job_flx b-bottom-gr pb-2">
              <div>
                <div className="my_job_a job_na_bol">
                  2. Get proposals from talent
                </div>
                <div className="my_job_pos_tme">
                  A strong working relationship starts with open communication.
                  Here's your chance to ask about experience, set expectations
                  for what you need, and discuss terms of the work.
                </div>
              </div>
            </div>
            <div className="my_job_flx b-bottom-gr pb-2">
              <div>
                <div className="my_job_a job_na_bol">
                  3. Start working together
                </div>
                <div className="my_job_pos_tme">
                  Once you both agree on terms, collaborate with simple and
                  secure tools like chat, file sharing, and time tracking.
                </div>
              </div>
            </div>
            <div className="my_job_flx">
              <div>
                <div className="my_job_a job_na_bol">
                  4. Pay for work you approve
                </div>
                <div className="my_job_pos_tme">
                  Reports are useful for keeping track of payments and reviewing
                  work. As you complete jobs, you can build trusting
                  relationships with talent in a way that helps you both grow.
                </div>
                <div className="my_job_pos_tme inner_a_sty">
                  <Link to="#0">
                    Read about payment protections, billing methods, taxes, and
                    more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="yourp_box pb-0 pt-0">
          <div className="my_job_flx">
            <div>
              <div className="my_job_a job_na_bol">Questions?</div>
              <div className="my_job_pos_tme inner_a_sty">
                Visit our <Link to="#0">Help Center</Link> to learn more tips for
                finding the right talent.
              </div>
            </div>
          </div>
        </div>
      </Container>
      {removePosting && (
        <RemovePostingPopup
          open={removePosting}
          onCloseModal={(e) => setRemovePosting(false)}
        />
      )}
      {removeDraft && (
        <RemoveDraftPopup
          open={removeDraft}
          onCloseModal={(e) => setRemoveDraft(false)}
        />
      )}
    </>
  );
};
export default Screen;
