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
  const [userType, setUserType] = useState("freelancer");
  const [message, setMessage] = useState();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });

    if (e.target.name === "email") {
      setMessage();
    }
    if (e.target.name === "password") {
      setMessage();
    }
  };

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

    if (errorExist) {
      setErrors(errorsObject);
      return false;
    }

    const data = {
      email: values?.email,
      password: values?.password,
      user_type: userType,
    };

    dispatch(onLogin(data, navigate, setMessage));
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
      message={message}
    />
  );
};
export default Signinscreen;
