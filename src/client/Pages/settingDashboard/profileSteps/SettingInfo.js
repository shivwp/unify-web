import { Col } from "react-bootstrap";
import MyInfo from "./MyInfo";
import AccountInfo from "./AccountInfo";
import { useEffect, useState } from "react";
// import CompnyDetailsInfo from "./CompnyDetailsInfo";
// import CompanyContactInfo from "./CompanyContactInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  addEditClientInfo,
  getClientInfoDetails,
  getIndustriesList,
  getTimezoneList,
} from "../../../../redux/actions/profileAction";
import { countryList } from "../../../../redux/actions/authActions";

const SettingInfo = ({ setLoading }) => {
  let scrollTo = false;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
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
  let userDetails = JSON.parse(localStorage.getItem("unify_user"));

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
    setErrors({ ...errors, [e.target.name]: false });
    scrollTo = false;
  };

  const onProfileChange = (e) => {
    let errorExit = false;
    let image = e.target.files[0];
    if (!image?.name.match(/\.(jpg|jpeg|png)$/)) {
      setErrors({
        ...errors,
        [e.target.name]: "Image type must be JPG, JPEG or PNG format",
      });
      errorExit = true;
    } else if (image?.size > 1048576 * 10) {
      setErrors({
        ...errors,
        [e.target.name]: "Image size must be maximum 10 MB",
      });
      errorExit = true;
    } else {
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
      errorExit = false;
    }
    if (errorExit) {
      return false;
    }
    setImageFile(image);
    setObjectUrlAbc(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmitClientData = (e) => {
    e.preventDefault();

    let errorExist = false;
    let errorsObject = {};

    if (
      values?.first_name === "" ||
      values?.first_name === null ||
      values?.first_name === undefined
    ) {
      errorsObject.first_name = "Please enter first name";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("first_name");
      }
    }

    if (
      values?.email === "" ||
      values?.email === null ||
      values?.email === undefined
    ) {
      errorsObject.email = true;
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("email");
      }
    }
    if (
      values?.last_name === "" ||
      values?.last_name === null ||
      values?.last_name === undefined
    ) {
      errorsObject.last_name = "Please enter last name";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("last_name");
      }
    }

    if (
      values?.company_phone === "" ||
      values?.company_phone === null ||
      values?.company_phone === undefined
    ) {
      errorsObject.company_phone = "Please enter phone number";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("company_phone");
      }
    } else if (
      values?.company_phone?.length < 10 ||
      values?.company_phone?.length > 12
    ) {
      errorsObject.company_phone =
        "The phone must be between 10 and 12 digits.";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("company_phone");
      }
    }
    if (
      values.timezone === "" ||
      values.timezone === null ||
      values.timezone === undefined
    ) {
      errorsObject.timezone = true;
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("timezone");
      }
    }
    if (
      values?.company_address === "" ||
      values?.company_address === null ||
      values?.company_address === undefined
    ) {
      errorsObject.company_address = true;
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("company_address");
      }
    }
    if (
      values?.zip_code === "" ||
      values?.zip_code === null ||
      values?.zip_code === undefined
    ) {
      errorsObject.zip_code = "Please enter zip code";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("zip_code");
      }
    }

    if (
      values?.city === "" ||
      values?.city === null ||
      values?.city === undefined
    ) {
      errorsObject.city = "Please enter your city";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("city");
      }
    } else if (/^[0-9]\d*$/.test(values?.city)) {
      errorsObject.city = "please input a valid city ";
      errorExist = true;
      if (!scrollTo) {
        scrollTo = document.getElementById("city");
      }
    }

    if (errorExist) {
      setErrors(errorsObject);
      if (scrollTo) {
        scrollTo.scrollIntoView({ behavior: "smooth" });
      }
      return false;
    }

    const formData = new FormData();

    if (imageFile) {
      formData.append("profile_image", imageFile);
    }
    formData.append("first_name", values?.first_name);
    formData.append("last_name", values?.last_name);
    formData.append("email", values?.email);
    formData.append("company_name", values?.company_name);
    formData.append("website", values?.website);
    formData.append("industry", values?.industry);
    formData.append("tagline", values?.tagline);
    formData.append("description", values?.description);
    formData.append("employee_no", values?.employee_no);
    formData.append("company_phone", values?.company_phone);
    formData.append("vat_id", values?.vat_id);
    formData.append("timezone", values?.timezone);
    formData.append("company_address", values?.company_address);
    formData.append("zip_code", values?.zip_code);
    formData.append("city", values?.city);
    formData.append("country", values?.country);

    setLoading(true);
    dispatch(addEditClientInfo(formData, setOpen, setLoading));
  };

  return (
    <>
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
              errors={errors}
            />
          ) : (
            <MyInfo
              setOpen={() => setOpen(true)}
              getClientDetails={getClientDetails}
              setLoading={setLoading}
            />
          )}
        </div>
      </Col>
    </>
  );
};
export default SettingInfo;
