import NavbarLogin from "./components/navbarlogin";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./components/site_nav";
import Title from "./title";
import { useEffect, useState } from "react";
import MyInfo from "./components/MyInfo";
import AccountInfo from "./components/AccountInfo";
import "./components/job.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addEditClientInfo,
  getClientInfoDetails,
  getIndustriesList,
  getTimezoneList,
} from "./redux/actions/profileAction";
import { countryList } from "./redux/actions/authActions";

const Screen = () => {
  Title(" | Setting - Myinfo");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({});
  const [imageFile, setImageFile] = useState();
  const [objectUrlAbc, setObjectUrlAbc] = useState();
  const getClientDetails = useSelector(
    (state) => state.profile.getClientDetails
  );
  const getIndustries = useSelector((state) => state.profile.getIndustries);
  const timezoneList = useSelector((state) => state.profile.timezoneList);
  const editClientProfile = useSelector(
    (state) => state.profile.editClientProfile
  );
  const getCountryList = useSelector((state) => state.auth.getCountryList);

  useEffect(() => {
    dispatch(getClientInfoDetails());
  }, [editClientProfile]);

  useEffect(() => {
    dispatch(getIndustriesList());
    dispatch(countryList());
    dispatch(getTimezoneList());
  }, []);

  useEffect(() => {
    if (getClientDetails) {
      setValues(getClientDetails);
    }
  }, [getClientDetails]);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onProfileChange = (e) => {
    setImageFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);

    setObjectUrlAbc(objectUrl);
  };

  const onSubmitClientData = (e) => {
    const formData = new FormData();

    formData.append("profile_image", imageFile);
    formData.append("first_name", values?.first_name);
    formData.append("last_name", values?.last_name);
    formData.append("email", values?.email);
    formData.append("company_name", values?.company_name);
    formData.append("website", values?.website);
    formData.append("tagline", values?.tagline);
    formData.append("industry", values?.industry);
    formData.append("employee_no", values?.employee_no);
    formData.append("description", values?.description);
    formData.append("company_phone", values?.company_phone);
    formData.append("vat_id", values?.vat_id);
    formData.append("timezone", values?.timezone);
    formData.append("company_address", values?.company_address);
    formData.append("zip_code", values?.zip_code);

    dispatch(addEditClientInfo(formData, setOpen));
  };

  return (
    <div>
      <div className="slider_pos nin_vh">
        <NavbarLogin />
        <div className="bg-f2f8ff min_pad_m" style={{ fontFamily: "Poppins" }}>
          <Container>
            <Row>
              <SideNav />
              <Col lg={9}>
                <div className="s_nav_body">
                  <div className="s_b_head no-border">
                    <h2>My Info</h2>
                  </div>

                  {open === true ? (
                    <AccountInfo
                      setOpen={() => setOpen(false)}
                      getIndustries={getIndustries}
                      getCountryList={getCountryList}
                      timezoneList={timezoneList}
                      onInputChange={onInputChange}
                      values={values}
                      onSubmitClientData={onSubmitClientData}
                      onProfileChange={onProfileChange}
                      objectUrlAbc={objectUrlAbc}
                    />
                  ) : (
                    <MyInfo
                      setOpen={() => setOpen(true)}
                      getClientDetails={getClientDetails}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Screen;
