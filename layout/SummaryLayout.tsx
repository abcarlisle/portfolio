import Link from "next/link";

import { Post } from "@/lib/api";

export interface LayoutProps {
  posts: Post[];
  ref?: React.RefObject<HTMLDivElement>;
}

export default function SummaryLayout({ posts, ref }: LayoutProps) {
  return (
    <div ref={ref} className="w-full bg-midnight-200">
      <ul className="divide-y">
        {!posts.length && "No posts found."}
        {posts.map((post) => {
          const { slug, date, title, summary } = post;

          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6">
                      <time
                        dateTime={date.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      >
                        {post.date.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link className="" href={`/blog/${slug}`}>
                            {title}
                          </Link>
                        </h2>
                      </div>
                      <div className="dark:text-gray-400 prose max-w-none text-midnight-50 text-opacity-80">
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
    </div>
  );
}
