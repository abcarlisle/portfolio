import { ContactFormValues } from "../hooks/contact/useForm";
import key from "../.key.json";

export async function ContactUsRequest({
  firstName,
  lastName,
  email,
  message,
}: ContactFormValues) {
  console.log("Sending request", firstName, lastName, email, message);
  const request = new Request(
    "https://uvqoanvj6f.execute-api.us-east-1.amazonaws.com/prod/",
    {
      method: "POST",
      headers: {
        "x-api-key": key.contactKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      }),
    },
  );

  console.log(request);

  let response = await fetch(request);

  return response;
}
