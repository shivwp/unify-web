import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Title from "../../../../components/title";
import { useState } from "react";
import { Link } from "react-router-dom";

const Screen = () => {
  Title(" | My Jobs");
  const Filter = () => {
    return (
      <div className="mt-3">
        <Row>
          <Col lg={4}>
            <div className="filter_headin_m">Posted by</div>
            <div className="select_inp_in filter_select_m">
              <select>
                <option>All coworkers</option>
              </select>
            </div>
          </Col>
          <Col lg={3}>
            <div className="filter_headin_m">Visibility</div>
            <ul className="filter_ul_m">
              <li>
                <input type="radio" /> All
              </li>
              <li>
                <input type="radio" /> Invite only
              </li>
              <li>
                <input type="radio" /> Public
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div className="filter_headin_m">Status</div>
            <ul className="filter_ul_m">
              <li>
                <input type="checkbox" /> All
              </li>
              <li>
                <input type="checkbox" /> Draft
              </li>
              <li>
                <input type="checkbox" /> Open
              </li>
              <li>
                <input type="checkbox" /> Filled
              </li>
              <li>
                <input type="checkbox" /> Closed
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <div className="filter_headin_m">Type</div>
            <ul className="filter_ul_m">
              <li>
                <input type="radio" /> All
              </li>
              <li>
                <input type="radio" /> Fixed price
              </li>
              <li>
                <input type="radio" /> Hourly
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          <button className="blue_btn_smm">Close Filters</button>
        </div>
      </div>
    );
  };
  const Jobs = () => {
    return (
      <div className="my_job_flx">
        <div className="mb-3">
          <div className="my_job_a">
            <a href="#0">UI/UX Design</a>
          </div>
          <div className="my_job_pos_tme">Posted 21 min ago by you</div>
          <div className="my_job_h">Public - Hourly</div>
        </div>
        <div className="d-flex justify-content-between flex-wrap mb-4">
          <div className="my_job_n_box new_w_pad_fl pl-0">
            <div className="my_job_nm">0</div>
            <div className="my_job_h pt-0">Proposals</div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            |
          </div>
          <div className="my_job_n_box new_w_pad_fl">
            <div className="my_job_nm">0</div>
            <div className="my_job_h pt-0">Messaged</div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            |
          </div>
          <div className="my_job_n_box new_w_pad_fl">
            <div className="my_job_nm">0</div>
            <div className="my_job_h pt-0">Hired</div>
          </div>
        </div>
        <div className="text-right d-flex flex-wrap">
          <Link
            to='/view-job/review'
          >
            <button className="blue_btn_smm font-weight-500">
              View Proposals
            </button>
          </Link>
          <button className="toggle_btn_dot">
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
        </div>
      </div>
    );
  };
  const [open, Setopen] = useState(<Jobs />);
  const [active, SetActive] = useState(0);
  function ToggleFilter() {
    if (active === 0) {
      Setopen(<Filter />);
      SetActive(1);
    } else {
      Setopen(<Jobs />);
      SetActive(0);
    }
  }

  return (
    <>
      <Container>
        <div className="flex_m_j_t b-bottom-gr">
          <div className="my_jo_headin">My Jobs</div>
          <div className="post_job_btn_m">
            <Link to="/gettingstarted">
              <button className="font-weight-600">Post A New Job</button>
            </Link>
          </div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="search_area_in b-bottom-gr pb-2">
            <div className="search_input_in search_reel_9_wi mx_eity">
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
              <input type={`text`} placeholder={`Search for freelancer`} />
            </div>
            <div className="ts_btn attach_f_btn wid_30_in">
              <button
                className="transp_fil_btn fif_five"
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
          </div>
          {open}
        </div>
      </Container>
    </>
  );
};
export default Screen;
