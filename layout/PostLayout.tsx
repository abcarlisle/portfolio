import { ReactNode } from "react";

import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import Tag from "@/components/Tag";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface LayoutProps {
  date: Date;
  title: string;
  githubUrl: string;
  authorDetails: string[];
  tags: string[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}

export default function PostLayout({
  date,
  title,
  githubUrl,
  authorDetails,
  tags,
  next,
  prev,
  children,
}: LayoutProps) {
  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6">
                    <time dateTime={date.toLocaleDateString("en-us")}>
                      {date.toLocaleDateString("en-us", postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:pt-11">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li key={author} className="flex items-center space-x-2">
                      {/* {author.avatar && (
                        <Image
                          alt="avatar"
                          className="size-10 rounded-full"
                          height={38}
                          src={author.avatar}
                          width={38}
                        />
                      )} */}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="">{author}</dd>
                        <dt className="sr-only">Twitter</dt>
                        {/* <dd>
                          {author.twitter && (
                            <Link
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              href={author.twitter}
                            >
                              {author.twitter
                                .replace("https://twitter.com/", "@")
                                .replace("https://x.com/", "@")}
                            </Link>
                          )}
                        </dd> */}
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                {children}
              </div>
              <div className="py-6 text-sm">
                {/* <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link> */}
                {` • `}
                <Link href={githubUrl}>View on GitHub</Link>
              </div>
              {/* {siteMetadata.comments && (
                <div
                  className="py-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )} */}
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
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
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
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
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
