import { Container } from "react-bootstrap"
import "./job.css";
import { useState } from 'react';
import { Row, Col } from "react-bootstrap";

const Screen = () => {
    const [Tab, SetTab] = useState()
    const [TabActive, SetTabActive] = useState("client")
    function changeTab(componentName) {
        if (componentName === "all") {
            SetTab()
            SetTabActive("all")
        } else if (componentName === "satisfied") {
            SetTab()
            SetTabActive("satisfied")
        } else if (componentName === "message") {
            SetTab()
            SetTabActive("message")
        } else if (componentName === "archive") {
            SetTab()
            SetTabActive("archive")
        }
    }
    return (
        <>
            <div className="support_bg">
                <div className="height-100-p bg_opac">
                    <Container className="d-flex justify-content-center height-100-p align-items-center">
                        <div>
                            <div className="find_sol_headin">Find a solution fast.</div>
                            <div className="find_sol_para">Search hundreds of articles on Upwork Help</div>
                            <div className="d-flex suppott_inp">
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <input type={`text`} placeholder={`Search Articles`} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <Container>
                <div className="chose_acc_type_p">Choose An Account Type For Personalized Service</div>
                <div className="d-flex flex-wrap tab_m_nodea all_bt_fif">
                    <button className={`tab_btn_vs w-auto ${TabActive === 'freelancerl' ? 'active_bvs' : ''}`} onClick={() => { changeTab("freelancerl") }}>I'm a Freelancer</button>
                    <button className={`tab_btn_vs w-auto ${TabActive === 'agency' ? 'active_bvs' : ''}`} onClick={() => { changeTab("agency") }}>I'm an Agency</button>
                    <button className={`tab_btn_vs w-auto ${TabActive === 'client' ? 'active_bvs' : ''}`} onClick={() => { changeTab("client") }}>I'm a client</button>
                    <button className={`tab_btn_vs w-auto ${TabActive === 'eclient' ? 'active_bvs' : ''}`} onClick={() => { changeTab("eclient") }}>i'm an enterprise client</button>
                </div>
            </Container>
            <div className="bg-gray_bd">
                <Container>
                    <div className="browse_head_h">Browse Help Categories</div>
                    <Row>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="help_box_h">
                                <div className="help_icon_rou">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon"><path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path></svg>
                                </div>
                                <div className="help_ame_h">Get Started</div>
                                <div className="help_val_h">How It Works, Getting Started, Fees & Protection</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <div className="browse_head_h pt-4 pb-2">Access Your Account</div>
                    <Row>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="acc_icon_h">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RequestQuoteIcon"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1 10h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"></path></svg>
                                </div>
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="acc_icon_h">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RequestQuoteIcon"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1 10h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"></path></svg>
                                </div>
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="acc_icon_h">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RequestQuoteIcon"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1 10h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"></path></svg>
                                </div>
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="acc_icon_h">
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RequestQuoteIcon"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm1 10h-4v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1h-2v-1H9v-2h4v-1h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1V9h2v1h2v2zm-2-4V3.5L17.5 8H13z"></path></svg>
                                </div>
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                    </Row>
                    <div className="browse_head_h pt-4 pb-2">A Few Recommended Topics For You</div>
                    <Row>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="acc_bxo_h">
                                <div className="help_ame_h">Update Billing</div>
                                <div className="help_val_h">Change Or Update Your Billing Methods</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-gray_bd">
                <Container>
                    <div className="browse_head_h">Learn More About What’s New At Unify</div>
                    <div className="btn_foot_sec justify-content-center flex-wrap no-border fo_btn_c mb-0 pb-0 next_b_btn_c"   >
                        <button className="active_btn_blue">Learn More</button>
                    </div>
                    <div className="btn_foot_sec justify-content-end flex-wrap no-border p-0 m-0 fo_btn_c next_b_btn_c">
                        <button className="active_btn_blue m-0 support_d_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            Get Support
                        </button>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Screen