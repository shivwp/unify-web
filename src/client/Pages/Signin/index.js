import Signin from "./components/signin";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Signinscreen = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const [userType, setUserType] = useState();

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let errorExist = false;
    let errorsObject = {};

    if (
      values.email === "" ||
      values.email === null ||
      values.email === undefined
    ) {
      errorsObject.email = true;
      errorExist = true;
    }

    if (
      (values.password && values.password.length < 6) ||
      values.password === "" ||
      values.password === null ||
      values.password === undefined
    ) {
      errorsObject.password = true;
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
  };

  return (
    <Signin
      submitForm={submitForm}
      errors={errors}
      onInputChange={onInputChange}
      setUserType={setUserType}
      userType={userType}
      selectUserType={selectUserType}
    />
  );
};
export default Signinscreen;
