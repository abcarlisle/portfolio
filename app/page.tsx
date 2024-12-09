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
            <Button color="primary" variant="solid">
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
        className="flex max-h-screen w-2/3 flex-col items-start justify-start gap-28 overflow-y-auto pl-10 "
        onScroll={() => handleScroll()}
      >
        <div ref={refs[0]} className="w-full flex-col">
          <AboutLayout about={posts.about} />
        </div>
        <div ref={refs[1]} className="w-full">
          <SummaryLayout posts={posts.work} />
        </div>
        <div ref={refs[2]} className="w-full">
          <SummaryLayout posts={posts.projects} />
        </div>
        <div ref={refs[3]} className="w-full">
          <p>AWS</p>
        </div>
      </section>
    </div>
  );
}
