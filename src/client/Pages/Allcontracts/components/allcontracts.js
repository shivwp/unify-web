import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Filter from "./Filter";
import Jobs from "./Jobs";
import "./allContract.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllClientContractList } from "../../../../redux/actions/freelancerAction";
import { useEffect } from "react";

const Screen = () => {
  Title(" | All Contracts");
  const dispatch = useDispatch();
  const clientContractList = useSelector(
    (state) => state.freelancer.clientContractList
  );
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    dispatch(getAllClientContractList());
  }, []);

  return (
    <>
      <Container>
        <div className="flex_m_j_t mt-3">
          <div className="my_jo_headin">All Contracts</div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="search_area_in">
            <Form.Group className="search_input_in search_reel_9_wi mx_eity">
              <div className="search_icon_in">
                <i className="bi bi-search font-size-20px"></i>
              </div>
              <Form.Control
                type={`text`}
                placeholder={`Search by contract, freelancer, or agency name`}
              />
            </Form.Group>
            <div className="ts_btn attach_f_btn wid_30_in">
              <button
                className="transp_fil_btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <i className="bi bi-funnel-fill font-size-20px"></i>
                Filters
              </button>
            </div>
          </div>

          {showFilters ? (
            <Filter setShowFilters={setShowFilters} />
          ) : (
            <Jobs clientContractList={clientContractList} />
          )}
        </div>
      </Container>
    </>
  );
};
export default Screen;
