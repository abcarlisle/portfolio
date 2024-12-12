import { useState } from "react";

import { ContactFormValues } from "./useForm";

import { ContactUsRequest } from "@/models/contact";

export const useContactRequest = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const contactRequest = async (values: ContactFormValues) => {
    setIsLoading(true);
    let response = await ContactUsRequest(values);

    if (!response.ok) {
      setErrorMessage((await response.json())["message"]);
    } else {
      setErrorMessage("");
    }
    setIsSuccess(response.ok);
    setIsLoading(false);
  };

  return { isLoading, isSuccess, errorMessage, contactRequest };
};
