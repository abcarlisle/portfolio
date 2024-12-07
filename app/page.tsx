"use client";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { RefObject, useRef, useState } from "react";

import { getAllPosts } from "../lib/api";

import { lessImportantText, subtitle, title } from "@/components/primitives";
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

  return (
    <div className="mt-10 flex h-screen flex-col px-20 py-24 md:flex-row">
      <section className="flex h-full max-h-screen grow flex-col  overflow-y-auto">
        <div className="h-2/6 w-full grow text-center">
          <span className={title()}>Andrew Carlisle&nbsp;</span>
          <span className={subtitle()}>Software Engineer</span>
        </div>
        <div className="hidden h-1/4 px-5 md:flex">
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
                About
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
                Work Experience
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
                Projects
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
                Certfications
              </li>
            </ul>
          </div>
        </div>
        <div className="flex h-1/3 items-center justify-center">
          <Socials />
        </div>
        <div className="flex w-full flex-row justify-evenly ">
          <Button color="primary" variant="solid">
            Contact Me
          </Button>
          <Button color="primary" variant="solid">
            Schedule a Call
          </Button>
        </div>
        <div />
      </section>

      <section
        className="flex max-h-screen w-2/3 flex-col items-start justify-start gap-28 overflow-y-auto pl-10"
        onScroll={() => handleScroll()}
      >
        <div ref={refs[0]} className="w-full flex-col ">
          <AboutLayout about={posts.about} />
        </div>
        <div ref={refs[1]} className="w-full">
          <SummaryLayout posts={posts.work} />
        </div>
        <div ref={refs[2]} className="w-full">
          <SummaryLayout posts={posts.projects} />
        </div>
      </section>
    </div>
  );
}
