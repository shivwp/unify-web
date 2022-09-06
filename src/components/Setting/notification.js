import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../title'
import '../job.css'
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";


const Screen = () => {
    Title(' | Setting - Notification Setting')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2>Notification Settings</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Recruiting</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>
                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                borderWidth={1}
                                                checked={true}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />
                                            A job is posted or modified</div>
                                        <div className='inp_w_haf'>
                                        <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />
                                            A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Freelancer and Agency Proposals</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Contracts</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Groups & Invitations</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />A job is posted or modified</div>
                                    </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between b-bottom-gr align-items-center pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Membership</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <div className='inp_w_haf'>                                            <Checkbox
                                                icon={<Icon.FiCheck color="#6D2EF1" size={14} />}
                                                name="my-input"
                                                borderRadius={0}
                                                checked={true}
                                                borderWidth={1}
                                                borderColor="#6D2EF1"
                                                style={{ cursor: "pointer" }}
                                            />Subscription related event occur</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Screen