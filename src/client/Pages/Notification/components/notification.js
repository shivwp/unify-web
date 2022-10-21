import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";

const Screen = () => {
  Title(" | Notification");
  return (
    <>
      <Container>
        <div className="question_box tb_p_none">
          <div className="questio_heading no-border">
            <h1 className="text-left">Notifications</h1>
          </div>
          <Row>
            <Col lg={12}>
              <div className="form_box_bor mt-2">
                <div className="not_head font-30">Today</div>
                <div className="notification_box">
                  <div>
                    <div className="notification_text">
                      A recent sign-in to your Upwork account (c42c68a5) from an
                      unknown device or browser.
                    </div>
                    <div className="notification_time">04:40 pm</div>
                  </div>
                  <div className="cross_btn_r">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
                <div className="notification_box">
                  <div>
                    <div className="notification_text">
                      A recent sign-in to your Upwork account (c42c68a5) from an
                      unknown device or browser.
                    </div>
                    <div className="notification_time">04:40 pm</div>
                  </div>
                  <div className="cross_btn_r">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
                <div className="notification_box">
                  <div>
                    <div className="notification_text">
                      A recent sign-in to your Upwork account (c42c68a5) from an
                      unknown device or browser.
                    </div>
                    <div className="notification_time">04:40 pm</div>
                  </div>
                  <div className="cross_btn_r">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="form_box_bor mt-2">
                <div className="not_head font-30">Earlier</div>
                <div className="notification_box">
                  <div>
                    <div className="notification_text">
                      A recent sign-in to your Upwork account (c42c68a5) from an
                      unknown device or browser.
                    </div>
                    <div className="notification_time">04:40 pm</div>
                  </div>
                  <div className="cross_btn_r">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Screen;
