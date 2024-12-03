"use client";
import clsx from "clsx";
import Link from "next/link";

import { getAllPosts } from "./lib/api";

import { subtitle, title } from "@/components/primitives";
import { Socials } from "@/components/socials";
//https://cal.com/andrew-carlisle-wsvppu
export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex h-screen flex-row">
      <section className="flex h-full max-h-screen w-1/3 grow  flex-col  overflow-y-auto py-28">
        <div className="h-3/6 items-center justify-center bg-purple-700 text-center">
          <span className={title()}>Andrew Carlisle&nbsp;</span>
          <span className={subtitle()}>Software Engineer</span>
        </div>
        <div className="h-2/6 px-10">
          <ul className="list-inside list-disc">
            <li className={clsx("list-item", subtitle())}>Work Experience</li>
            <li className={clsx("list-item", subtitle())}>About</li>
            <li className={clsx("list-item", subtitle())}>Projects</li>
            <li className={clsx("list-item", subtitle())}>Contact</li>
          </ul>
        </div>
        <div className="flex h-1/6 items-center justify-center bg-red-700">
          <Socials />
        </div>
        <div />
      </section>

      <section className="flex max-h-screen w-2/3 flex-col items-start justify-start gap-4 overflow-y-auto py-8 md:py-10">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.map((post) => {
            const { slug, date, title, summary } = post;

            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time
                          dateTime={date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        >
                          {post.date.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              className="text-gray-900 dark:text-gray-100"
                              href={`/blog/${slug}`}
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          aria-label={`Read more: "${title}"`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          href={`/blog/${slug}`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
