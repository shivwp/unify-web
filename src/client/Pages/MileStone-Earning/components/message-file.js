import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Screen = () => {
  return (
    <>
      <Row>
        <Col md={8}>
          <div className="search_input_in bg-gray_inp mt-3 mb-2">
            <div className="search_icon_in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </div>
            <Form.Control type="text" placeholder="Search this conversation" />
          </div>
          <div className="mess_dy_albel">Tuesday, Sep 19, 2021</div>
          <div className="mess_box_cw">
            <div className="mess_prof_cw">
              <img src="/assets/PRO-2.png" alt="" />
            </div>
            <div className="wmn__50px">
              <div className="mess_prf_name">Stacy W.</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <div className="mess_dy_albel">Tuesday, Sep 29, 2021</div>
          <div className="mess_box_cw">
            <div className="mess_prof_cw">
              <img src="/assets/PRO-2.png" alt="" />
            </div>
            <div className="wmn__50px">
              <div className="mess_prf_name">Stacy W.</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </div>
            </div>
          </div>
          <div className="mess_box_cw">
            <div className="mess_prof_cw">
              <img src="/assets/PRO-2.png" alt="" />
            </div>
            <div className="wmn__50px">
              <div className="mess_prf_name">Stacy W.</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <div className="mess_footer_cm">
            <Button variant="" className="link_btn_mfc">
              <Form.Label className="attact_file_inp" htmlFor="attact_file_inp">
                <Form.Control
                  type="file"
                  id="attact_file_inp"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#6D2EF1"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
              </Form.Label>
            </Button>
            <Form.Control type="text" placeholder="Message" />
            <Button variant="" className="send_btn_mfc btnhovpple">SEND</Button>
          </div>
        </Col>
        <Col md={4}>
          <div className="mess_files_g_bx">
            <div className="mfgb_header">Files and Links</div>
            <div className="file_bx_mfgb d-flex justify-content-between align-align-items-center">
              <div className="d-flex">
                <div className="fiel_con">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#6D2EF1"
                    className="bi bi-file-earmark-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font_wcfw_600">Rough Design vO2 File</div>
                  <div className="f_scew_12">Ron Z...</div>
                </div>
              </div>
              <div className="time_btm_mfgb">9/20/20</div>
            </div>
            <div className="file_bx_mfgb d-flex justify-content-between align-align-items-center">
              <div className="d-flex">
                <div className="fiel_con">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#6D2EF1"
                    className="bi bi-file-earmark-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font_wcfw_600">Rough Design vO2 File</div>
                  <div className="f_scew_12">Ron Z...</div>
                </div>
              </div>
              <div className="time_btm_mfgb">9/20/20</div>
            </div>
            <div className="file_bx_mfgb d-flex justify-content-between align-align-items-center">
              <div className="d-flex">
                <div className="fiel_con">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#6D2EF1"
                    className="bi bi-file-earmark-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font_wcfw_600">Rough Design vO2 File</div>
                  <div className="f_scew_12">Ron Z...</div>
                </div>
              </div>
              <div className="time_btm_mfgb">9/20/20</div>
            </div>
            <div className="file_bx_mfgb bbottome_none d-flex justify-content-between align-align-items-center">
              <div className="d-flex">
                <div className="fiel_con">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#6D2EF1"
                    className="bi bi-file-earmark-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </div>
                <div>
                  <div className="font_wcfw_600">Rough Design vO2 File</div>
                  <div className="f_scew_12">Ron Z...</div>
                </div>
              </div>
              <div className="time_btm_mfgb">9/20/20</div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Screen;
