import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Signup from "./components/signup";
import { countryList, onRegister } from "./redux/actions/authActions";

const Signupscreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState();
  const [errors, setErrors] = useState({});
  const [userType, setUserType] = useState();
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [values, setValues] = useState({
    agree_terms: 0,
    send_email: 0,
  });

  useEffect(() => {
    dispatch(countryList());
  }, []);

  const selectCountry = (e) => {
    setCountry(e);
    setErrors({ ...errors, country: false });
  };

  const onInputChange = (e) => {
    if (e.target.name === "agree_terms" || e.target.name === "send_email") {
      e.target.checked
        ? setValues({ ...values, [e.target.name]: 1 })
        : setValues({ ...values, [e.target.name]: 0 });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    localStorage.setItem("unify_email", values?.email);

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
      (values.password && values.password.length < 5) ||
      values.password === "" ||
      values.password === null ||
      values.password === undefined
    ) {
      errorsObject.password = true;
      errorExist = true;
    }
    if (
      (values.confirmPassword && values.confirmPassword.length < 5) ||
      values.confirmPassword === "" ||
      values.confirmPassword === null ||
      values.confirmPassword === undefined
    ) {
      errorsObject.confirmPassword = true;
      errorExist = true;
    }
    if (
      (values.first_name && values.first_name.length < 2) ||
      values.first_name === "" ||
      values.first_name === null ||
      values.first_name === undefined
    ) {
      errorsObject.first_name = true;
      errorExist = true;
    }
    if (
      (values.last_name && values.last_name.length < 2) ||
      values.last_name === "" ||
      values.last_name === null ||
      values.last_name === undefined
    ) {
      errorsObject.last_name = true;
      errorExist = true;
    }
    if (country === undefined || country === null || country === "") {
      errorsObject.country = true;
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

    dispatch(onRegister(data, navigate));
  };

  const selectUserType = (e) => {
    setUserType(e.target.value);
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
    />
  );
};

export default Signupscreen;
