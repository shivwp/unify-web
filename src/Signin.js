import Signin from "./components/signin";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from "./redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Signinscreen = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  console.log(values);

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
      user_type: ""
    };

    dispatch(onLogin(data, navigate));
  };

  return (
    <Signin
      submitForm={submitForm}
      errors={errors}
      onInputChange={onInputChange}
    />
  );
};
export default Signinscreen;
