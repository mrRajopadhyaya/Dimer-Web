import React from "react";

function useForm(initialState: any, validate: any, initiateSubmit: any) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  const resetFormValue = (initialState: any) => {
    setValues({ ...initialState });
  };

  const manualSetValue = async (name: any, value: any) => {
    setErrors((stateVal) => {
      return { ...stateVal, [name]: "" };
    });
    setValues((stateVal: any) => {
      return { ...stateVal, [name]: value };
    });
  };
  const handleChange = (event: any) => {
    setErrors({
      ...errors,
      [event.target.name]: "",
    });
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitting(true);
    const validationErrors = validate(values);
    const noErrors = Object.keys(validationErrors).length === 0;
    if (noErrors) {
      await initiateSubmit(values);
      setSubmitting(false);
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitting(false);
    }
  };
  return {
    handleSubmit,
    handleChange,
    values,
    manualSetValue,
    handleBlur,
    errors,
    resetFormValue,
    isSubmitting,
  };
}

export default useForm;
