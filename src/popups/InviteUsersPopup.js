import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Link } from "react-router-dom";

const InviteUsersPopup = ({ open, onCloseModal }) => {
  return (
    <>
      <>
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{ modal: "invite_user_popup" }}
          center
        >
          <h5>Invite Users</h5>
          {/* <p>
          a verified billing method is required before teams can be added.{" "}
          <span>Add now One!</span>
        </p> */}
          <div className="invite_users">
            <label>
              <span>Invite to Team</span>
              <input type="text" name="name" placeholder="Ankita Kumavat" />
            </label>
          </div>
          <div className="invite_users">
            <label>
              <span>Enter Email Address or UserName</span>
              <textarea name="mailAndUserName" id=""></textarea>
              <p>Separate email address and username with a comma.</p>
            </label>
          </div>
          <div className="invite_users">
            <label>
              <span>Message to user (optional)</span>
              <textarea name="mailAndUserName" id=""></textarea>
              <p>This message will be sent in the invitation email.</p>
            </label>
          </div>
          <div className="invite_users">
            <h6>Admin</h6>
            <div>
              <ul className="popup-radio">
                <li>
                  <label htmlFor="admin_op_1">
                    <input type="radio" id="admin_op_1" name="p" /> None
                  </label>
                </li>
                <li>
                  <label htmlFor="admin_op_2">
                    <input type="radio" name="p" id="admin_op_2" /> Finance Only
                    filled
                  </label>
                  <p>
                    Can access Payment tab, managing payment methods, viewing
                    financial reports, and making deposits, and withdrawals.
                    Finance privileges are company-wide, even when Teams are
                    u=in use.
                  </p>
                </li>
                <li>
                  <label htmlFor="admin_op_3">
                    <input type="radio" name="p" id="admin_op_3" /> Full
                  </label>
                  <p>
                    In additional to finance privileges, can invite or remove
                    team members, manage members permissions, and edit
                    organization information.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="invite_users">
            <h6>Hiring</h6>
            <div>
              <ul className="popup-radio">
                <li>
                  <label htmlFor="hiring_op_1">
                    <input type="radio" id="hiring_op_1" name="p" /> None
                  </label>
                </li>
                <li>
                  <label htmlFor="hiring_op_2">
                    <input type="radio" name="p" id="hiring_op_2" /> Source
                    Talent Only
                  </label>
                  <p>
                    Can post jobs, invite freelancers to interview, and review
                    proposals, Cannot hire, end contracts, give bonuses, or
                    update contract terms.
                  </p>
                </li>
                <li>
                  <label htmlFor="hiring_op_3">
                    <input type="radio" name="p" id="hiring_op_3" /> Manager
                  </label>
                  <p>
                    In addition to talent sourcing privileges hiring managers
                    can make contract offers give bonuses, increase rates, end
                    contracts, submit freelancers feedback, and invite team
                    members
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="invite_users">
            <h6>Wiew work Diaries</h6>
            <div>
              <p>
                Those with team access can log time (with an active contract)
                and view Work Diaries and hours-only reports for all team
                members
              </p>
              <ul className="popup-radio">
                <li>
                  <label htmlFor="diaries_op_1">
                    <input type="radio" id="diaries_op_1" name="p" /> Individual
                  </label>
                </li>
                <li>
                  <label htmlFor="diaries_op_2">
                    <input type="radio" name="p" id="diaries_op_2" /> Team
                  </label>
                  <p>Can see and chat with anyone on the team.</p>
                </li>
                <li>
                  <label htmlFor="diaries_op_3">
                    <input type="radio" name="p" id="diaries_op_3" /> Company
                  </label>
                  <p>
                    Can see and chat with everyone in the company, across all
                    teams.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn_foot_sec no-border flex-wrap d-flex">
            <div className="fo_btn_c next_b_btn_c">
              <button className="remove-posting-btns" onClick={onCloseModal}>
                CANCEL
              </button>
            </div>
            <div className="fo_btn_c next_b_btn_c">
              <button className="active_btn_blue">SAVE</button>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default InviteUsersPopup;
