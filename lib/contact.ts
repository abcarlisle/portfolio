import key from "../.key.json";
import { ContactFormValues } from "../hooks/contact/useForm";

export async function ContactUsRequest({
  firstName,
  lastName,
  email,
  message,
}: ContactFormValues) {
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

  let response = await fetch(request);

  return response;
}
