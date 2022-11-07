import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./popup.css";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const InviteUsersPopup = ({ open, onCloseModal }) => {
  const options1 = [{ name: "Ankita Kumavat", label: "Ankita Kumavat" }];

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
            <Form.Label>
              <span>Invite to Team</span>
              <Select
                className="custom_css_select"
                placeholder="Ankita Kumavat"
                options={options1}
              />
              {/* <input type="text" name="name" placeholder="Ankita Kumavat" /> */}
            </Form.Label>
          </div>
          <div className="invite_users">
            <Form.Label>
              <span>Enter Email Address or UserName</span>
              <Form.Control
                as="textarea"
                name="mailAndUserName"
                id=""
              ></Form.Control>
              <p>Separate email address and username with a comma.</p>
            </Form.Label>
          </div>
          <div className="invite_users">
            <Form.Label>
              <span>Message to user (optional)</span>
              <Form.Control
                as="textarea"
                name="mailAndUserName"
                id=""
              ></Form.Control>
              <p>This message will be sent in the invitation email.</p>
            </Form.Label>
          </div>
          <div className="invite_users">
            <h6>Admin</h6>
            <div>
              <ul className="popup-radio">
                <li>
                  <Form.Label htmlFor="admin_op_1">
                    <Form.Check type="radio" id="admin_op_1" name="p" /> None
                  </Form.Label>
                </li>
                <li>
                  <Form.Label htmlFor="admin_op_2">
                    <Form.Check type="radio" name="p" id="admin_op_2" /> Finance
                    Only
                  </Form.Label>
                  <p>
                    Can access Payment tab, managing payment methods, viewing
                    financial reports, and making deposits, and withdrawals.
                    Finance privileges are company-wide, even when Teams are
                    u=in use.
                  </p>
                </li>
                <li>
                  <Form.Label htmlFor="admin_op_3">
                    <Form.Check type="radio" name="p" id="admin_op_3" /> Full
                  </Form.Label>
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
                  <Form.Label htmlFor="hiring_op_1">
                    <Form.Check type="radio" id="hiring_op_1" name="p" /> None
                  </Form.Label>
                </li>
                <li>
                  <Form.Label htmlFor="hiring_op_2">
                    <Form.Check type="radio" name="p" id="hiring_op_2" /> Source
                    Talent Only
                  </Form.Label>
                  <p>
                    Can post jobs, invite freelancers to interview, and review
                    proposals, Cannot hire, end contracts, give bonuses, or
                    update contract terms.
                  </p>
                </li>
                <li>
                  <Form.Label htmlFor="hiring_op_3">
                    <Form.Check type="radio" name="p" id="hiring_op_3" />{" "}
                    Manager
                  </Form.Label>
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
            <h6>View work Diaries</h6>
            <div>
              <p>
                Those with team access can log time (with an active contract)
                and view Work Diaries and hours-only reports for all team
                members
              </p>
              <ul className="popup-radio">
                <li>
                  <Form.Label htmlFor="diaries_op_1">
                    <Form.Check type="radio" id="diaries_op_1" name="p" />{" "}
                    Individual
                  </Form.Label>
                </li>
                <li>
                  <Form.Label htmlFor="diaries_op_2">
                    <Form.Check type="radio" name="p" id="diaries_op_2" /> Team
                  </Form.Label>
                  <p>Can see and chat with anyone on the team.</p>
                </li>
                <li>
                  <Form.Label htmlFor="diaries_op_3">
                    <Form.Check type="radio" name="p" id="diaries_op_3" />{" "}
                    Company
                  </Form.Label>
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
              <Button variant="" className="remove-posting-btns" onClick={onCloseModal}>
                CANCEL
              </Button>
            </div>
            <div className="fo_btn_c next_b_btn_c">
              <Button variant="" className="active_btn_blue">SAVE</Button>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default InviteUsersPopup;
