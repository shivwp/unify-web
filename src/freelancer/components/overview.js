import * as React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Title from "../../components/title";

const Screen = () => {
  const [currentTab, seturrentTab] = useState(1);
  Title(" | Overview");

  return (
    <>
      <Container>
        <div className="main_hirefreelancer_bx main_box_descr mt-5">
          <div className="transaction_head_n">
            <div className="flex_m_j_t pb-0 pt-3">
              <div className="my_jo_headin mjh_new_smtext p-0">OVERVIEW</div>
            </div>
          </div>
          <div>
            <div className="transaction_head_n pb-0 d-flex justify-content-around" style={{overflowX: 'auto'}}>
              <div
                onClick={() => seturrentTab(1)}
                className={`box_overv_new ${currentTab == 1 ? "active": ''}`}
              >
                <div className="overv_sm_thead">Work in Progress</div>
                <div className="overv_number">$0.00</div>
              </div>
              <div
                onClick={() => seturrentTab(2)}
                className={`box_overv_new ${currentTab == 2 ? "active":''}`}
              >
                <div className="overv_sm_thead">In review</div>
                <div className="overv_number">$0.00</div>
              </div>
              <div
                onClick={() => seturrentTab(3)}
                className={`box_overv_new ${currentTab == 3 ? "active":''}`}
              >
                <div className="overv_sm_thead">Pending</div>
                <div className="overv_number">$0.00</div>
              </div>
              <div
                onClick={() => seturrentTab(4)}
                className={`box_overv_new ${currentTab == 4 ? "active":''}`}
              >
                <div className="overv_sm_thead">Available</div>
                <div className="overv_number">$0.00</div>
                <div className="overv_lst_nme">Last payment: $0.00</div>
              </div>
            </div>
          </div>
          <div className="no_found_cen">
            <div>
              <div className="no_found_img_cen">
                <img src="/assets/briefcase.svg" alt="" />
              </div>
              <div className="no_foun_head_ce">
                <h1>You have no work in progress</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Screen;
