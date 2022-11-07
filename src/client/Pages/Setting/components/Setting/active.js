import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Filter from "./popups/Filter";
import Button from "react-bootstrap/Button";

const Screen = ({ setOpen }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  function ToggleFilter() {
    setFilterOpen(!filterOpen);
  }
  return (
    <>
      <Row className="w-100">
        <Col sm={12} md={8}>
          <Form.Group className="search_input_in search_reel_9_wi bg-transparent w-100 min-width-100">
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
              type={`text`}
              placeholder={`Search ...`}
              className="bg-transparent"
            />
          </Form.Group>
        </Col>
        <Col sm={12} md={4}>
          <div className="ts_btn attach_f_btn wid_30_in d-flex justify-content-right w-20">
            <Button
             variant=""
              className="transp_fil_btn"
              onClick={() => {
                ToggleFilter();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-funnel-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
              </svg>
              Filters
            </Button>
          </div>
        </Col>
      </Row>

      <div className="no_found_cen">
        <div>
          <div className="no_found_img_cen">
            <img src="/assets/join.png" alt="" />
          </div>
          <div className="no_foun_head_ce">
            <h1>You have no team members yet</h1>
          </div>
          <div className="no_foun_para_ce">
            Get started by inviting someone to join you.
          </div>
        </div>
        {filterOpen && <Filter />}
      </div>
    </>
  );
};
export default Screen;
