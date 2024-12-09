import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

import PageTitle from "@/components/PageTitle";
import Tag from "@/components/Tag";
import { lessImportantText } from "@/components/primitives";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
};

interface LayoutProps {
  date: Date;
  title: string;
  githubUrl: string;
  tags: string[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export default function PostLayout({
  date,
  title,
  githubUrl,
  tags,
  next,
  prev,
  children,
}: LayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="h-36 text-center">
        <div className={clsx(lessImportantText())}>
          <span>{date.toLocaleDateString("en-US", postDateTemplate)}</span>
          <span className="px-2">&rarr;</span>
          <span>{date.toLocaleDateString("en-US", postDateTemplate)}</span>
        </div>
        <PageTitle>{title}</PageTitle>
      </div>
      <div className="flex flex-row">
        <div className="">
          <div className="">
            <div className="py-6 text-sm">
              {` • `}
              <Link href={githubUrl}>View on GitHub</Link>
            </div>
            <div className="text-sm font-medium leading-5">
              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs uppercase tracking-wide">Tags</h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              {(next || prev) && (
                <div className="block justify-between space-y-8 py-4 ">
                  {prev && prev.path && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide">
                        Previous Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${prev.path}`}>{prev.title}</Link>
                      </div>
                    </div>
                  )}
                  {next && next.path && (
                    <div>
                      <h2 className="text-xs uppercase tracking-wide">
                        Next Article
                      </h2>
                      <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        <Link href={`/${next.path}`}>{next.title}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="pt-4 xl:pt-8">
              <Link
                aria-label="Back to Portfolio"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={`https://www.google.com`}
              >
                &larr; Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">{children}</div>
        </div>
      </div>
    </article>
  );
}
