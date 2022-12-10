import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Signup from "./components/signup";
import { countryList, onRegister } from "../../../redux/actions/authActions";

const Signupscreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState();
  const [errors, setErrors] = useState({});
  const [userType, setUserType] = useState("freelancer");
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [message, setMessage] = useState();

  const [values, setValues] = useState({
    agree_terms: 0,
    send_email: 0,
  });
  // const instantLoginEmail = useSelector(
  //   (state) => state?.auth?.instantLoginEmail
  // );

  // useEffect(() => {
  //   setValues(instantLoginEmail);
  // }, [instantLoginEmail]);

  useEffect(() => {
    dispatch(countryList());
  }, []);

  const selectCountry = (e) => {
    setCountry(e);
    setErrors({ ...errors, country: false });
  };

  const onInputChange = (e) => {
    if (e.target.name === "agree_terms" || e.target.name === "send_email") {
      setErrors({ ...errors, [e.target.name]: false });
      e.target.checked
        ? setValues({ ...values, [e.target.name]: 1 })
        : setValues({ ...values, [e.target.name]: 0 });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }

    if (e.target.name === "email") {
      setMessage();
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    sessionStorage.setItem("unify_email", values?.email);

    let errorExist = false;
    let errorsObject = {};

    if (
      values?.first_name === "" ||
      values?.first_name === null ||
      values?.first_name === undefined
    ) {
      errorsObject.first_name = "Please enter your first name";
      errorExist = true;
    } else if (values?.first_name && values?.first_name?.length < 1) {
      errorsObject.first_name = "First name must be at least 1 characters ";
      errorExist = true;
    }

    if (
      values?.last_name === "" ||
      values?.last_name === null ||
      values?.last_name === undefined
    ) {
      errorsObject.last_name = "Please enter your last name";
      errorExist = true;
    } else if (values?.last_name?.length < 2) {
      errorsObject.last_name = "Last name must be at least 2 characters";
      errorExist = true;
    }

    if (
      values?.email === "" ||
      values?.email === null ||
      values?.email === undefined
    ) {
      errorsObject.email = "Please enter your email";
      errorExist = true;
    } else if (!values?.email.trim()) {
      errorsObject.email = "Email is required";
      errorExist = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values?.email)
    ) {
      errorsObject.email = "Please type a valid email address";
      errorExist = true;
    }

    if (
      values?.password === "" ||
      values?.password === null ||
      values?.password === undefined
    ) {
      errorsObject.password = "Please enter your password";
      errorExist = true;
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
        values?.password
      )
    ) {
      errorsObject.password =
        "Password must be at least 8 characters with 1 Special & 1 Number";
      errorExist = true;
    }

    if (
      values?.confirmPassword === "" ||
      values?.confirmPassword === null ||
      values?.confirmPassword === undefined
    ) {
      errorsObject.confirmPassword = "Please enter your confirm password";
      errorExist = true;
    } else if (values?.password !== values?.confirmPassword) {
      errorsObject.confirmPassword =
        "The confirm password is not matching with password";
      errorExist = true;
    }

    if (country === undefined || country === null || country === "") {
      errorsObject.country = true;
      errorExist = true;
    }
    if (values?.agree_terms == 0) {
      errorsObject.agree_terms = true;
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }
    const data = {
      first_name: values?.first_name,
      last_name: values?.last_name,
      email: values?.email,
      password: values?.password,
      country: country?.name,
      user_type: userType,
      referal_code: "",
      agree_terms: values?.agree_terms,
      send_email: values?.send_email,
    };

    dispatch(onRegister(data, navigate, setMessage));
  };

  const selectUserType = (e) => {
    setUserType(e.target.value);
    setErrors({});
  };

  return (
    <Signup
      onInputChange={onInputChange}
      submitForm={submitForm}
      getCountryList={getCountryList}
      selectUserType={selectUserType}
      userType={userType}
      values={values}
      errors={errors}
      setCountry={setCountry}
      selectCountry={selectCountry}
      message={message}
    />
  );
};

export default Signupscreen;
