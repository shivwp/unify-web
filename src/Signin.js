import Signin from "./components/signin";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from "./redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Signinscreen = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  console.log(values);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    const data = {
      email: values?.email,
      password: values?.password,
    };

    dispatch(onLogin(data, navigate));
  };

  return <Signin submitForm={submitForm} onInputChange={onInputChange} />;
};
export default Signinscreen;
