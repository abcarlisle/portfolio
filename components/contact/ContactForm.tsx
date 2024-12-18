"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { text, title } from "@/components/primitives";

export interface ContactFormValues {
  email: string;
  message: string;
  firstName: string;
  lastName: string;
}

interface FormComponentProps {
  register: UseFormRegister<ContactFormValues>;
  formState: FormState<ContactFormValues>;
  onSubmit: (values: ContactFormValues) => void;
  isLoading: boolean;
  handleSubmit: UseFormHandleSubmit<ContactFormValues>;
  recaptchaRef: React.RefObject<ReCAPTCHA>;
}

export default function ContactForm({
  register,
  formState: { errors },
  onSubmit,
  handleSubmit,
  isLoading,
  recaptchaRef,
}: FormComponentProps) {
  return (
    <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center pb-10">
        <p className={title()}>Contact Us</p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <div className="mt-2">
            <Input
              autoComplete="given-name"
              id="first-name"
              label="First name"
              type="text"
              {...register("firstName", { required: true })}
            />
            <p className={text({ color: "error" })}>
              {errors.firstName && "* Required"}
            </p>
          </div>
        </div>
        <div>
          <div className="mt-2">
            <Input
              autoComplete="family-name"
              id="last-name"
              label="Last name"
              type="text"
              {...register("lastName", { required: true })}
            />
            <p className={text({ color: "error" })}>
              {errors.lastName && "* Required"}
            </p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="mt-2">
            <Input
              autoComplete="email"
              id="email"
              label="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <p className={text({ color: "error" })}>
              {errors.email &&
                (errors.email.type === "pattern"
                  ? "Invalid Email"
                  : "* Required")}
            </p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="mt-2">
            <Textarea
              defaultValue={""}
              id="message"
              label="Message"
              rows={4}
              {...register("message", { required: true, maxLength: 10000 })}
            />
            <p className={text({ color: "error" })}>
              {errors.message &&
                (errors.message.type === "maxLength"
                  ? "Message too long"
                  : "* Required")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col space-y-5">
        <Button
          color="primary"
          disabled={isLoading} // || !recaptchaValue}
          isLoading={isLoading}
          type="submit"
          variant="solid"
        >
          Send
        </Button>
        <ReCAPTCHA
          ref={recaptchaRef}
          className="self-center"
          sitekey={"6LcT85sqAAAAAP2QFGnBOLoL2HupB2Cdr3nDbkSY"}
          type="image"
        />
      </div>
    </form>
  );
}
