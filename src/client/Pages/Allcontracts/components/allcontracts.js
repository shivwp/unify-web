import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Filter from "./elements/Filter";
import Jobs from "./elements/Jobs";
import { FilterSVG, SearchSVG } from "./icons";

const Screen = () => {
  Title(" | All Contracts");

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
        <div className="flex_m_j_t mt-3">
          <div className="my_jo_headin">All Contracts</div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="search_area_in">
            <div className="search_input_in search_reel_9_wi mx_eity">
              <div className="search_icon_in">
                <SearchSVG />
              </div>
              <Form.Control
                type={`text`}
                placeholder={`Search by contract, freelancer, or agency name`}
              />
            </div>
            <div className="ts_btn attach_f_btn wid_30_in">
              <button
                className="transp_fil_btn"
                onClick={() => {
                  ToggleFilter();
                }}
              >
                <FilterSVG />
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
