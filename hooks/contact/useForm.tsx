"use client";
import { useState } from "react";

export interface ContactFormValues {
  email: string;
  message: string;
  firstName: string;
  lastName: string;
}

const useForm = (initialValues: ContactFormValues) => {
  const [values, setValues] = useState<ContactFormValues>(initialValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, setValues, reset };
};

export default useForm;
