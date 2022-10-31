import Container from "react-bootstrap/Container";
import Title from "../../../../components/title";
import { Link } from "react-router-dom";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Screen = () => {
  Title(" | Goals");
  const options1 = [
    {
      label: "%",
      name: "%",
    },
  ];
  return (
    <>
      <Container>
        <div className="flex_m_j_t mt-3 pb-0">
          <div className="my_jo_headin freelancer_all_contract text-transform-uppercase">
            Goals
          </div>
        </div>
        <div className="main_hirefreelancer_bx main_box_descr">
          <div className="form_goals flex-wrap">
            <div className="formg_label">KPI Name</div>
            <div className="formg_inp">
              <Form.Control
                type="text"
                placeholder="Example: New leads, Revenue, Traffic, etc"
              />
            </div>
          </div>
          <div className="form_goals">
            <div className="formg_label">Metric</div>
            <div className="formg_inp">
              <Select
                className="custom_css_select"
                placeholder=""
                options={options1}
              />
            </div>
          </div>
          <div className="form_goals">
            <div className="formg_label">Visualization</div>
            <div className="formg_inp d-flex flex-wrap">
              <Form.Label>
                <Form.Check type="radio" name="g" />
                Growing
              </Form.Label>
              <Form.Label>
                <Form.Check type="radio" name="g" />
                Horizontal
              </Form.Label>
            </div>
          </div>
          <div className="form_goals">
            <div className="formg_label">Start Value</div>
            <div className="formg_inp half_width_fi">
              <Form.Control type="text" placeholder="0" />
            </div>
          </div>
          <div className="form_goals">
            <div className="formg_label">Target Value</div>
            <div className="formg_inp half_width_fi">
              <Form.Control type="text" placeholder="100" />
            </div>
          </div>
          <div className="form_goals">
            <div className="formg_label">Decimals</div>
            <div className="formg_inp d-flex align-items-center">
              <Form.Label>
                <Form.Check type="radio" name="n" />0
              </Form.Label>
              <Form.Label>
                <Form.Check type="radio" name="n" />1
              </Form.Label>
              <Form.Label>
                <Form.Check type="radio" name="n" />2
              </Form.Label>
            </div>
          </div>
          <div className="btn_foot_sec flex-wrap d-flex no-border">
            <div className="fo_btn_c next_b_btn_c">
              <Link to="/freelancer/dashboard">
                <Button className="mrright-gppnew">Cancel</Button>
              </Link>
            </div>
            <div className="fo_btn_c next_b_btn_c">
              <Link to="/freelancer/dashboard">
                <Button className="active_btn_blue">Continue</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Screen;
