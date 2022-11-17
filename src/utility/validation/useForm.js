import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values, event));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    console.log("--event.target.name",event.target.name)
    console.log("--event.target.value",event.target.value)
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));

    console.log("-values",values)
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;