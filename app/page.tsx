"use client";
import clsx from "clsx";
import { RefObject, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getAllPosts } from "./lib/api";

import { lessImportantText, subtitle, title } from "@/components/primitives";
import { Socials } from "@/components/socials";
import SummaryLayout from "@/layout/SummaryLayout";
import AboutLayout from "@/layout/AboutLayout";
//https://cal.com/andrew-carlisle-wsvppu

export default function Home() {
  const posts = getAllPosts();

  const refs: RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [visibleSection, setVisibleSection] = useState(0);

  const PADDING_TOP = 96;
  const WINDOW_BOTTOM = window.innerHeight - PADDING_TOP;
  const WINDOW_TOP = PADDING_TOP;

  const handleScroll = () => {
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
    <div className="flex h-screen flex-col py-24 md:flex-row">
      <section className="flex h-full max-h-screen grow flex-col  overflow-y-auto  px-20 text-start">
        <div className="h-2/6 w-full grow ">
          <span className={title()}>Andrew Carlisle&nbsp;</span>
          <span className={subtitle()}>Software Engineer</span>
        </div>
        <div className="hidden h-1/2 md:flex">
          <ul className="space-y-2 md:flex-col">
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
          </ul>
        </div>
        <div className="flex h-1/3 items-center justify-center bg-midnight-700">
          <Socials />
        </div>
        <div />
      </section>

      <section
        className="flex max-h-screen w-2/3 flex-col items-start justify-start gap-14 overflow-y-auto"
        onScroll={() => handleScroll()}
      >
        <div ref={refs[0]} className="w-full flex-col">
          <div className="h-screen">
            <AboutLayout about={posts.about} />
          </div>
        </div>
        <div ref={refs[1]} className="w-full">
          <SummaryLayout posts={posts.work} />
        </div>
        <div ref={refs[2]} className="w-full">
          <SummaryLayout posts={posts.work} />
          <SummaryLayout posts={posts.work} />
          <SummaryLayout posts={posts.projects} />
          <SummaryLayout posts={posts.projects} />
        </div>
      </section>
    </div>
  );
}
