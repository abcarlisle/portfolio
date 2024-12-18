import key from "../.key.json";
import { ContactFormValues } from "../hooks/contact/useForm";

export async function ContactUsRequest({
  firstName,
  lastName,
  email,
  message,
}: ContactFormValues) {
  console.log("Sending request", firstName, lastName, email, message);
  const request = new Request(key.contactEndpoint, {
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
  });

  console.log(request);

  let response = await fetch(request);

  return response;
}
