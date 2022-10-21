import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Screen = ({ setOpen }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const Filter = () => {
    return (
      <div className="Filter_Popup">
        <Row>
          <Col lg={12}>
            <Row className="mr-righht-10">
              <Col lg={4} md={6}>
                <div>
                  <div className="tm_s_s_name">Team</div>
                  <div className="inpu_date m-0 inp_selec_s">
                    <select>
                      <option>All Teams</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div>
                  <div className="tm_s_s_name">Sort By</div>
                  <div className="inpu_date m-0 inp_selec_s">
                    <select>
                      <option>Sort By</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div>
                  <div className="tm_s_s_name">Contact Person</div>
                  <div className="inpu_date m-0 inp_selec_s">
                    <select>
                      <option>Contact Person</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={6}>
                <div className="mt-4">
                  <div className="filter_headin_m">Admin</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="checkbox" /> All
                    </li>
                    <li>
                      <input type="checkbox" /> Finance Only
                    </li>
                    <li>
                      <input type="checkbox" /> Full
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className="mt-4">
                  <div className="filter_headin_m">Hiring</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="checkbox" /> None
                    </li>
                    <li>
                      <input type="checkbox" /> Source Talent Only
                    </li>
                    <li>
                      <input type="checkbox" /> Manager
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className="mt-4">
                  <div className="filter_headin_m">Work Diaries</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="checkbox" /> Individual
                    </li>
                    <li>
                      <input type="checkbox" /> Team
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className="mt-4">
                  <div className="filter_headin_m">Chat</div>
                  <ul className="filter_ul_m">
                    <li>
                      <input type="checkbox" /> No One
                    </li>
                    <li>
                      <input type="checkbox" /> Team
                    </li>
                    <li>
                      <input type="checkbox" /> Company
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-between mob_jus_cent flex-wrap">
          <div className="d-flex flex-wrap mob_jus_cent">
            <div className="fo_btn_c sme_next_bbtn next_b_btn_c">
              <button className="blue_btn_smm ml-0" style={{fontSize: 15}}>Apply Filters</button>
            </div>
            <div className="fo_btn_c sme_next_bbtn next_b_btn_c">
              <button style={{fontSize: 15}}>Clear</button>
            </div>
          </div>
          <div className="fo_btn_c sme_next_bbtn next_b_btn_c mob_jus_cent">
            <button style={{fontSize: 15}}>Close</button>
          </div>
        </div>
        <span className="popup_up_arrow"> &#60; </span>
        <span className="popup_border_none"> - </span>
      </div>
    );
  };
  function ToggleFilter() {
    setFilterOpen(!filterOpen);
  }
  return (
    <>
      <Row className="w-100">
        <Col sm={12} md={8}>
          <div className="search_input_in search_reel_9_wi bg-transparent w-100 min-width-100">
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
            <input
              type={`text`}
              placeholder={`Search ...`}
              className="bg-transparent"
            />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="ts_btn attach_f_btn wid_30_in d-flex justify-content-right w-20">
            <button
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
            </button>
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
        {filterOpen&& < Filter/>}
      </div>
    </>
  );
};
export default Screen;
