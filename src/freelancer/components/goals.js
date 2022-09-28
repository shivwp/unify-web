import Container from 'react-bootstrap/Container';
import Title from '../../components/title';
import '../freelancer.css'
import {Link} from 'react-router-dom'
import Select from "react-select";

const Screen = () => {
    Title(" | Goals");
    const options1 = [{
        label:'%',name:'%'
    }]
    return (
        <>
            <Container>
                <div className='flex_m_j_t mt-3 pb-0'>
                    <div className='my_jo_headin freelancer_all_contract text-transform-uppercase'>Goals</div>
                </div>
                <div className="main_hirefreelancer_bx main_box_descr">
                    <div className='form_goals flex-wrap'>
                        <div className='formg_label'>KPI Name</div>
                        <div className='formg_inp'><input type="text" placeholder='Example: New leads, Revenue, Traffic, etc' /></div>
                    </div>
                    <div className='form_goals'>
                        <div className='formg_label'>Metric</div>
                        <div className='formg_inp'>
                  <Select
                    className="custom_css_select"
                    placeholder=""
                    options={options1}
                  />
                        </div>
                    </div>
                    <div className='form_goals'>
                        <div className='formg_label'>Visualization</div>
                        <div className='formg_inp d-flex flex-wrap'>
                            <label><input type="radio" name="g" />Growing</label>
                            <label><input type="radio" name="g" />Horizontal</label>
                        </div>
                    </div>
                    <div className='form_goals'>
                        <div className='formg_label'>Start Value</div>
                        <div className='formg_inp half_width_fi'><input type="text" placeholder='0' /></div>
                    </div>
                    <div className='form_goals'>
                        <div className='formg_label'>Target Value</div>
                        <div className='formg_inp half_width_fi'><input type="text" placeholder='100' /></div>
                    </div>
                    <div className='form_goals'>
                        <div className='formg_label'>Decimals</div>
                        <div className='formg_inp d-flex align-items-center'>
                            <label><input type="radio" name="n" />0</label>
                            <label><input type="radio" name="n" />1</label>
                            <label><input type="radio" name="n" />2</label>
                        </div>
                    </div>
                        <div className="btn_foot_sec flex-wrap d-flex no-border">
                            <div className='fo_btn_c next_b_btn_c'><Link to="/dashboard"><button>Cancel</button></Link></div>
                            <div className='fo_btn_c next_b_btn_c'><Link to="/title"><button className="active_btn_blue">Continue</button></Link></div>
                        </div>
                </div>
            </Container>
        </>
    )
}
export default Screen