import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddEmployment } from "../../../../../redux/actions/profileAction";
import Select from "react-select";
import { countryList } from "../../../../../redux/actions/authActions";

const CloseIcon = () => {
    return (
        <svg
            fill="#B2B2B2"
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseIcon"
        >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
    );
};

const UploadPublishProfilepic = ({ Popup }) => {
    const [errors, setErrors] = useState({});

    return (
        <>
            <div className="bg_wrapper_popup_new">
                <div className="popup_box_bpn profile_nceqoi_popup pb-4">
                    <div className="popup_header pb-0">
                        <div className="p_header_hding">Add Profile Photo</div>

                        <div className="close_pp_btn" onClick={() => Popup()}>
                            <CloseIcon />
                        </div>
                    </div>
                    <div className="popup_body_bpn amount_popup_body max_height_popucwui">
                        <div className="mt-2 pt-1 mb-4"></div>
                        <Row className="mt-3" >
                            <div className='uploadPublishPhoto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 170 170">
                                    <path id="user_1_" data-name="user (1)" d="M87,172A85,85,0,1,0,2,87,85,85,0,0,0,87,172ZM112.5,70A25.5,25.5,0,1,1,87,44.5,25.5,25.5,0,0,1,112.5,70ZM36,129.5a63.75,63.75,0,0,1,102,0,63.75,63.75,0,0,1-102,0Z" transform="translate(-2 -2)" fill="#dedede" fill-rule="evenodd" />
                                </svg>
                                <button className="uploadPublish_button" >Select Profile Image</button>
                            </div>
                        </Row>
                        <Row className="mt-4">
                            <h5 className="uploadImgDetailsTitle"> Your Photo Should: </h5>
                            <ul className="uploadImageDetails">
                                <li>Be a close-up of your face</li>
                                <li>Show your face clearly - no sunglasses!</li>
                                <li>Be clear and crisp</li>
                                <li>Have a neutral background</li>
                            </ul>
                        </Row>
                        <div className="popup_btns_new flex-wrap cwiewyehkk">
                            <Button variant="" className="trans_btn" onClick={() => Popup()}>
                                Cancel
                            </Button>
                            <Button variant="" className="btnhovpple" > Save </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPublishProfilepic