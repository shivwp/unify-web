import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Signup from "./components/signup";
import { countryList, onRegister } from "./redux/actions/authActions";

const Signupscreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState();
  const [userType, setUserType] = useState();
  const getCountryList = useSelector((state) => state.auth.getCountryList);
  const [values, setValues] = useState({});

  useEffect(() => {
    dispatch(countryList());
  }, []);

  const onInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    const data = {
      first_name: values?.first_name,
      last_name: values?.last_name,
      email: values?.email,
      password: values?.password,
      country: country?.name,
      user_type: userType,
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
      setCountry={setCountry}
    />
  );
};

export default Signupscreen;
