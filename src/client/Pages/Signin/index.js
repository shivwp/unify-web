import Signin from "./components/signin";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Signinscreen = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const [userType, setUserType] = useState('freelancer');

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const loginError = useSelector(
    (state) => state?.auth?.loginError?.data.message
  );

  const submitForm = (e) => {
    e.preventDefault();
    let errorExist = false;
    let errorsObject = {};

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
      values.password === "" ||
      values.password === null ||
      values.password === undefined
    ) {
      errorsObject.password = "Please Enter Your Password";
      errorExist = true;
    } else if (values.password && values.password.length < 8) {
      errorsObject.password = "Password must be at least 8 digit long";
      errorExist = true;
    }

    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/.test(
        values?.password
      )
    ) {
      errorsObject.password =
        "Password should contain numeric value, special character, upper case letter and lower case letter";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      email: values?.email,
      password: values?.password,
      user_type: userType,
    };

    dispatch(onLogin(data, navigate));
  };

  const selectUserType = (e) => {
    setUserType(e.target.value);
    setErrors({});
  };

  return (
    <Signin
      submitForm={submitForm}
      errors={errors}
      onInputChange={onInputChange}
      setUserType={setUserType}
      userType={userType}
      selectUserType={selectUserType}
      loginError={loginError}
    />
  );
};
export default Signinscreen;
