import Signin from "./components/signin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  onLogin,
  appleSignInInitiate,
  googleSignInInitiate,
} from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../../../components/LoadingSpinner";

const Signinscreen = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("freelancer");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate(userType, navigate, setPopup, setLoading));
    setLoading(false);
  };
  const handleAppleSignIn = () => {
    dispatch(appleSignInInitiate(userType, navigate, setPopup, setLoading));
    setLoading(false);
  };

  const submitForm = (e) => {
    setLoading(true);
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
      errorsObject.password = "Please enter your password";
      errorExist = true;
    }

    if (errorExist) {
      setErrors(errorsObject);
      setLoading(false);
      return false;
    }

    const data = {
      email: values?.email,
      password: values?.password,
      user_type: userType,
    };

    dispatch(onLogin(data, navigate, setPopup, setLoading));
  };

  const selectUserType = (e) => {
    setUserType(e.target.value);
    setErrors({});
  };

  return (
    <>
      <Signin
        submitForm={submitForm}
        errors={errors}
        onInputChange={onInputChange}
        setUserType={setUserType}
        userType={userType}
        selectUserType={selectUserType}
        handleAppleSignIn={handleAppleSignIn}
        handleGoogleSignIn={handleGoogleSignIn}
      />
      {loading ? <LoadingSpinner /> : null}
      {popup}
    </>
  );
};
export default Signinscreen;
