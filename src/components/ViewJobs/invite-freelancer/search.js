import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InviteToJobPopup from "../../../popups/InviteToJobPopup";
import { useState } from "react";

const Screen = ({
  jobBasedFreelancerList,
  jobId,
  onSearchChange,
  onSearchSubmit,
  onRemoveSearchData,
  searchValue,
  handleSavedTalent,
  handleRemoveSavedTalent,
  setCurrentTab,
}) => {
  const navigate = useNavigate();
  const [inviteJobPopup, setInviteJobPopup] = useState(false);
  const [freelancerId, setFreelancerId] = useState();

  return (
    <>
      <div className="search_area_in">
        <Form className="d-flex w-100" onSubmit={(e) => onSearchSubmit(e)}>
          <Form.Group className="search_input_in mt-2">
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
              type="text"
              placeholder="search..."
              value={searchValue}
              onChange={(e) => onSearchChange(e)}
            />
            {searchValue && (
              <i
                className="fa fa-remove"
                style={{ cursor: "pointer" }}
                onClick={(e) => onRemoveSearchData()}
              ></i>
            )}
          </Form.Group>
          <div className="ts_btn attach_f_btn wid_30_in mt-0">
            <button className="fif_five mt-2 hovbord-blew">
              Advanced Search
            </button>
          </div>
        </Form>
      </div>
      {jobBasedFreelancerList?.length === 0 ? (
        <div className="no_found_cen">
          <div>
            <div className="no_found_img_cen">
              <img src="/assets/archieved-image.png" alt="" />
            </div>
            <div className="no_foun_head_ce">
              <h2>No data found</h2>
            </div>
            {/* <div className="no_foun_para_ce">
              Use the archived feature to add your preferred proposals.
            </div> */}
          </div>
        </div>
      ) : (
        <>
          {jobBasedFreelancerList?.map((data, key) => (
            <div className="freelancer_box_in" key={key}>
              <Row>
                <Col lg={12}>
                  <div className="freelancer_box_area_in">
                    <div className="d-flex justify-content-between flex-wrap">
                      <div className="d-flex flex-wrap">
                        <div className="freelancer_img_in_r online_profile">
                          <img src={data.profile_image} alt="" />
                        </div>
                        <div className="freel_det_bin">
                          <Link to={`/freelancer-details/${data.id}`}>
                            <div className="freelancer_ame_in">
                              {data.first_name} {data.last_name}
                            </div>
                          </Link>
                          <div className="freelancer_exp_in">
                            {data.occuption}
                          </div>
                          <div className="freelancer_exp_in freelancer_loc_in">
                            {data.city}, {data.country}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-wrap">
                        {data.isSaveTalent === false ? (
                          <button
                            className="transp_fil_btn heart_roun_btn mt-2"
                            onClick={(e) => handleSavedTalent(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                          </button>
                        ) : (
                          <button
                            className="transp_fil_btn heart_roun_btn"
                            onClick={(e) => handleRemoveSavedTalent(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                              />
                            </svg>
                          </button>
                        )}

                        <div className="ts_btn attach_f_btn wid_30_in d-flex flex-wrap">
                          <Link to={`/hire-freelancer/${jobId}/${data.id}`}>
                            <button className="transp_fil_btn mt-2 font-weight-500">
                              Hire
                            </button>
                          </Link>
                          {data.isInvite ? (
                            <button className="invitationSentDisabled" disabled>
                              Invitation sent
                            </button>
                          ) : data.isSendProposal ? (
                            <button
                              className="mt-2 font-weight-500"
                              onClick={() => {
                                setCurrentTab("review-proposal");
                                navigate(`/view-job/${jobId}/review-proposal`);
                              }}
                            >
                              View Proposal
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setInviteJobPopup(true);
                                setFreelancerId(data);
                              }}
                              className="mt-2 font-weight-500"
                            >
                              Invite to Job
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="freelancer_timin">
                      ${parseInt(data.amount).toFixed(2)} /hr
                    </div>
                    <div className="freelancer_compl_in">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-journal-text"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                      </svg>
                      Completed {`${data.completed_jobs} ${data.category}`} jobs
                      on Unify
                    </div>
                    <div className="freelancer_has_in">
                      Has {data.skills_count} relevant skills to your job
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </div>
                    <div className="overflow-scroll">
                      <div className="slide_btnss freelancer_skill_sc">
                        {data.skills.map((item, key) => (
                          <button key={key}>{item.skill_name}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </>
      )}

      {inviteJobPopup && (
        <InviteToJobPopup
          open={inviteJobPopup}
          jobBasedFreelancerList={jobBasedFreelancerList}
          freelancerId={freelancerId}
          jobId={jobId}
          onCloseModal={() => setInviteJobPopup(false)}
        />
      )}
    </>
  );
};
export default Screen;
