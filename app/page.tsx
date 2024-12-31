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
import { lessImportantText, subtitle, title } from "@/components/primitives";
import { Socials } from "@/components/socials";
import AboutLayout from "@/layout/AboutLayout";
import SummaryLayout from "@/layout/SummaryLayout";

interface TOCProps {
  visible: number;
  index: number;
  callback: (index: number) => void;
  title: string;
}
const TOCListItem = ({ visible, index, callback, title }: TOCProps) => {
  return (
    <li
      className={clsx(
        "list-item",
        lessImportantText({
          hovered: true,
          selected: visible === index,
        }),
      )}
    >
      <button onClick={() => callback(index)}>{title}</button>
    </li>
  );
};

export default function Home() {
  const posts = getAllPosts();

  const refs: RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
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

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { register, reset, formState, handleSubmit } = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
    mode: "all",
  });

  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const onSubmit = async (values: ContactFormValues) => {
    const token = await recaptchaRef.current?.getValue();

    if (token) {
      contactRequest(values);
      onClose();
    } else {
      alert("Please verify you are not a robot.");
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, errorMessage]);

  return (
    <div className="flex flex-col overflow-hidden py-24 md:h-screen md:flex-row md:px-20">
      <section className="flex grow flex-col justify-between py-10 md:overflow-y-auto md:py-0">
        <div className="w-full text-center">
          <span className={title()}>Andrew Carlisle&nbsp;</span>
          <span className={subtitle()}>Software Engineer</span>
        </div>

        <div className="hidden px-5 md:flex">
          <div className="block w-80 text-start">
            <ul className="space-y-2 ">
              <TOCListItem
                callback={handleClicked}
                index={0}
                title="About"
                visible={visibleSection}
              />
              <TOCListItem
                callback={handleClicked}
                index={1}
                title="Work Experience"
                visible={visibleSection}
              />
              <TOCListItem
                callback={handleClicked}
                index={2}
                title="Open Source"
                visible={visibleSection}
              />
              <TOCListItem
                callback={handleClicked}
                index={3}
                title="Projects"
                visible={visibleSection}
              />
              <TOCListItem
                callback={handleClicked}
                index={4}
                title="Certifications"
                visible={visibleSection}
              />
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-10 md:h-1/5 md:gap-0 md:pt-0">
          <div className=" flex w-full flex-row justify-evenly">
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
              Schedule Call
            </Button>
          </div>

          <div className="flex justify-center">
            <Socials />
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-start justify-start gap-20 overflow-y-auto px-10 md:max-h-screen md:w-2/3 md:pr-0 "
        onScroll={() => handleScroll()}
      >
        <div ref={refs[0]} className="max-h-none">
          <AboutLayout about={posts.about} />
        </div>
        <div ref={refs[1]} className="max-h-none w-full">
          <SummaryLayout posts={posts.work} />
        </div>
        <div ref={refs[2]} className="max-h-none w-full">
          <SummaryLayout posts={posts.open_source} />
        </div>
        <div ref={refs[3]} className="max-h-none w-full">
          <SummaryLayout posts={posts.projects} />
        </div>
        {/* Bug with static pages and prose need to have prose declared in the non static page on something that wouldn't matter  */}
        <div
          ref={refs[4]}
          className="flex max-h-none w-full justify-center dark"
        >
          {isMounted && (
            <div>
              <div
                data-iframe-height="270"
                data-iframe-width="420"
                data-share-badge-host="https://www.credly.com"
                data-share-badge-id="c3aca033-795d-4061-8462-a303a90ea349"
              />
              <script
                async
                src="//cdn.credly.com/assets/utilities/embed.js"
                type="text/javascript"
              />
            </div>
          )}
        </div>
        <div className="prose prose-invert" />
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
