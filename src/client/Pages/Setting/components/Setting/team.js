import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../../../../../components/title";
import CreateNewTeam from "../../../../../popups/CreateNewTeamPupup";
import { useState } from "react";
import EditTeamPopup from "../../../../../popups/EditTeamPopup";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamList } from "../../../../../redux/actions/profileAction";
import $ from "jquery";

const Screen = () => {
  Title(" | Setting - Team");
  const dispatch = useDispatch();
  const [openNewTeam, setOpenNewTeam] = useState(false);
  const [openEditTeam, setOpenEditTeam] = useState(false);
  const [menuBarTeams, setMenuBarTeams] = useState(false);

  const teamList = useSelector((state) => state?.profile?.teamList);
  const createTeam = useSelector((state) => state?.profile?.createTeam);

  useEffect(() => {
    dispatch(getTeamList());
  }, [createTeam]);

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#menu_bar_teams").length === 0) {
      setMenuBarTeams(false);
    }
  });

  return (
    <>
      <div className="bg-fff min_pad_m">
        <Container>
          <Row>
            <SideNav />
            <Col lg={9}>
              <div className="s_nav_body">
                <div className="d-flex justify-content-between">
                  <div className="s_b_head no-border">
                    <h2>Teams</h2>
                  </div>
                  <div>
                    <Button
                      variant=""
                      className="round_b_btn blue_trans_btn"
                      onClick={() => setOpenNewTeam(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="set_tem_para_s">
                  Teams let you organize contracts by department or manager. Use
                  them to simplify your reporting, permission, and recruiting
                  management.
                </div>
                <div className="scroll_table">
                  <div className="r-box_setting">
                    <div className="s_tble_s width-max-content-s">
                      <div className="s_th_s w-20">Team Name</div>
                      <div className="s_th_s w-20">Financial Account</div>
                      <div className="s_th_s w-20">PO Number</div>
                      <div className="s_th_s w-15"></div>
                    </div>
                    {teamList?.map((item) => (
                      <div className="s_tble_s width-max-content-s menu_btn">
                        <div className="s_th_s s_td_s w-20">{item.name}</div>
                        <div className="s_th_s s_td_s w-20">{item.account}</div>
                        <div className="s_th_s s_td_s w-20">
                          {item.po_number}
                        </div>
                        <div
                          className="w-15 mob_60_rr"
                          style={{ position: "relative" }}
                        >
                          <Button
                            variant=""
                            className="round_b_btn bg-transparent"
                            onClick={() => setMenuBarTeams(item.id)}
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
                          </Button>
                          {menuBarTeams == item.id ? (
                            <div className="menu_bar_teams" id="menu_bar_teams">
                              <div
                                className="navabr_t_li"
                                onClick={() =>
                                  setOpenEditTeam(
                                    <EditTeamPopup
                                      onCloseModal={() =>
                                        setOpenEditTeam(false)
                                      }
                                      name={item.name}
                                      id={item.id}
                                    />
                                  )
                                }
                              >
                                Edit Team Info
                              </div>

                              <span className="menu_btn_arrow"> &#62; </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {openNewTeam && (
        <CreateNewTeam
          open={openNewTeam}
          onCloseModal={() => setOpenNewTeam(false)}
        />
      )}
      {openEditTeam}
    </>
  );
};
export default Screen;
