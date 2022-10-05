import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import SideNav from './site_nav';
import Title from '../../../components/title'
import CreditCardInput from 'react-credit-card-input';
import { useState } from 'react';

const AddPayment = (props) => {
    return (
      <>
        <div className="bg_wrapper_popup_new">
          <div className="popup_box_bpn paypopradouy pb-4">
            <div className="popup_header pb-0">
              <div className="p_header_hding addpay_header_hdin">Add Payment Method</div>
              <div className="close_pp_btn" onClick={() => { props.Popup() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#B2B2B2" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg>
              </div>
            </div>
            <div className="popup_body_bpn amount_popup_body max_height_popucwui overflow-scroll">
  
              <div className='mb-4 '>
                <Row>
                  <Col md={12}>
                      <div className="popup_form_element payformelent">
                        <label className='text-black font-size-13px font-weight-500'>Card Number</label>
<CreditCardInput
  cardNumberInputProps={{  }}
  fieldClassName="input tytyrterwqewyi"
  cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (<></>)}
  cardCVCInputRenderer={({ handleCardCVCChange, props }) => (<></>)}
/>
                      </div>
                  </Col>
                  <Col md={12}>
                      <div className="popup_form_element payformelent">
                        <label className='text-black font-size-13px font-weight-500'>First Name</label>
                        <input type="text" className='font-size-13px' placeholder="Rizwan" />
                      </div>
                  </Col>
                  <Col md={12}>
                      <div className="popup_form_element payformelent">
                        <label className='text-black font-size-13px font-weight-500'>Last Name</label>
                        <input type="text" className='font-size-13px' placeholder="Qureshi" />
                      </div>
                  </Col>
                  <Col md={6}>
                      <div className="popup_form_element payformelent">
                        <label className='text-black font-size-13px font-weight-500'>Expires on</label>
                        <input type="number" className='font-size-13px' placeholder="MM" />
                      </div>
                  </Col>
                  <Col md={6}>
                      <div className="popup_form_element payformelent">
                        <label className='text-black font-size-13px font-weight-500'></label>
                        <input type="text" className='font-size-13px' placeholder="YY" />
                      </div>
                  </Col>
                  <Col md={12}>
                      <div className="popup_form_element payformelent">
                        <label className='text-black font-size-13px font-weight-500'>Security Code</label>
                        <input type="text" className='font-size-13px' placeholder="**********" />
                      </div>
                  </Col>
                </Row>
              </div>
  
              <div className="popup_btns_new flex-wrap getpaidsve_btn">
                <button onClick={() => { props.Popup() }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
const Screen = () => {
    const [popup,SetPopup] = useState()
    Title(' | Get Paid')
    return (
        <div className='bg-f2f8ff min_pad_m'>
            <Container>
                <Row>
                    <SideNav />
                    <Col lg={9}>
                        <div className="s_nav_body">
                            <div className="s_b_head no-border"><h2 className='f-size-35'>Get Paid</h2></div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center flex-wrap pt-1 pb-3">
                                    <div>
                                        <div className='setting_b_head_s'>Balance</div>
                                        <div className='sett_y_b'>Your balance due is $0.00</div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b">Get Paid Now</button>
                                     </div>
                                </div>
                            </div>
                            <div className="r-box_setting">
                                <div className="d-flex justify-content-between align-items-center pt-2 pb-4 flex-wrap b-bottom-gr">
                                    <div>
                                        <div className='setting_b_head_s'>Payment Methods</div>
                                    </div>
                                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                                        <button className="bg-transparent h-color-b" onClick={()=>{SetPopup(<AddPayment Popup={SetPopup}/>)}}>Add payment method</button>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={12} className="d-flex justify-content-between pt-2 pb-3 flex-wrap">
                                        <div className='d-flex mb-2 mt-3 justify-content-between w-100'>
                                            <div className="w-55">
                                                <div className='c_name_s_v font-14-px'>You have not set up any payment methods yet.</div>
                                                <div className="c_name_sett pt-0 font-color-light font-12-px">Tell us how you want to receive your funds. It may take up to 3 days to activate your payment method.</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                             </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        {popup}
        </div>
    );
}
export default Screen