"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import clsx from "clsx";
import React, { RefObject, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

import { useContactRequest } from "../hooks/contact/useContactRequestHook";
import { getAllPosts } from "../lib/api";

import ContactForm, {
  ContactFormValues,
} from "@/components/contact/ContactForm";
import ContactModal from "@/components/contact/ContactModal";
import { lessImportantText, subtitle, title} from "@/components/primitives";
import { Socials } from "@/components/socials";
import AboutLayout from "@/layout/AboutLayout";
import SummaryLayout from "@/layout/SummaryLayout";
//https://cal.com/andrew-carlisle-wsvppu

export default function Home() {
  const posts = getAllPosts();

  const refs: RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [visibleSection, setVisibleSection] = useState(0);

  const handleScroll = () => {
    const PADDING_TOP = 96;

    const WINDOW_BOTTOM = window.innerHeight - PADDING_TOP;
    const WINDOW_TOP = PADDING_TOP;

    for (let i = 0; i < refs.length; i++) {
      if (refs[i].current) {
        const rect = refs[i].current?.getBoundingClientRect();

        if (rect) {
          if (rect.top >= WINDOW_TOP && rect.top < WINDOW_BOTTOM) {
            setVisibleSection(i);
            break;
          } else if (rect.top < WINDOW_TOP && rect.bottom > WINDOW_BOTTOM) {
            setVisibleSection(i);
            break;
          }
        }
      }
    }
  };

  const handleClicked = (index: number) => {
    refs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  // Contact Form

  const { isLoading, isSuccess, errorMessage, contactRequest } =
    useContactRequest();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { register, reset, formState, handleSubmit } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
    mode: "all",
  });

  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const onSubmit = async (values: ContactFormValues) => {
    const token = await recaptchaRef.current?.getValue();

    if (token) {
      contactRequest(values);
    } else {
      alert("Please verify you are not a robot.");
    }
  };

  useEffect(() => {
    console.log("ERROR: ", errorMessage);
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, errorMessage]);

  return (
    <div className="flex h-screen flex-col overflow-hidden px-20 py-24 md:flex-row">
      <section className="flex grow flex-col  overflow-y-auto">
        <div className="h-3/4">
          <div className="h-1/2 w-full grow text-center">
            <span className={title()}>Andrew Carlisle&nbsp;</span>
            <span className={subtitle()}>Software Engineer</span>
          </div>

          <div className="hidden h-1/2 px-5 md:flex">
            <div className="block w-80 text-start">
              <ul className="space-y-2 ">
                {/* <ul className="list-inside list-disc"> */}
                <li
                  className={clsx(
                    "list-item",
                    lessImportantText({
                      hovered: true,
                      selected: visibleSection === 0,
                    }),
                  )}
                >
                  <button onClick={() => handleClicked(0)}>About</button>
                </li>
                <li
                  className={clsx(
                    "list-item",
                    lessImportantText({
                      hovered: true,
                      selected: visibleSection === 1,
                    }),
                  )}
                >
                  <button onClick={() => handleClicked(1)}>
                    Work Experience
                  </button>
                </li>
                <li
                  className={clsx(
                    "list-item",
                    lessImportantText({
                      hovered: true,
                      selected: visibleSection === 2,
                    }),
                  )}
                >
                  <button onClick={() => handleClicked(2)}>Projects</button>
                </li>
                <li
                  className={clsx(
                    "list-item",
                    lessImportantText({
                      hovered: true,
                      selected: visibleSection === 3,
                    }),
                  )}
                >
                  <button onClick={() => handleClicked(3)}>
                    Certfications
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-1/4">
          <div className=" flex h-1/2 w-full flex-row items-end justify-evenly">
            <Button color="primary" variant="solid" onPress={onOpen}>
              Contact Me
            </Button>
            <Button
              color="primary"
              variant="solid"
              onPress={() =>
                window.open("https://cal.com/andrew-carlisle-wsvppu/30min")
              }
            >
              Schedule a Call
            </Button>
          </div>
          <div className="flex h-1/2 items-end justify-center ">
            <Socials />
          </div>
        </div>
        <div />
      </section>

      <section
        className="flex max-h-screen w-2/3 flex-col items-start justify-start gap-20 overflow-y-auto pl-10 "
        onScroll={() => handleScroll()}
      >
        <div ref={refs[0]} className="max-h-none">
          <AboutLayout about={posts.about} />
        </div>
        <div ref={refs[1]} className="max-h-none">
          <SummaryLayout posts={posts.work} />
        </div>
        <div ref={refs[2]} className="max-h-none">
          <SummaryLayout posts={posts.projects} />
        </div>
        {/* Bug with static pages and prose need to have prose declared in the non static page on something that wouldn't matter  */}
        <div
          ref={refs[3]}
          className="prose prose-invert flex w-full justify-center"
        >
          <div
            data-iframe-height="270"
            data-iframe-width="150"
            data-share-badge-host="https://www.credly.com"
            data-share-badge-id="c3aca033-795d-4061-8462-a303a90ea349"
          />
          <script
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
            type="text/javascript"
          />
        </div>
      </section>

      {/* Modal for contact */}
      <ContactModal
        body={
          <ContactForm
            formState={formState}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            recaptchaRef={recaptchaRef}
            register={register}
            onSubmit={onSubmit}
          />
        }
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}
