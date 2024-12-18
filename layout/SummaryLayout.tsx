import Link from "next/link";

import Tag from "@/components/Tag";
import { Post } from "@/lib/api";

export interface LayoutProps {
  posts: Post[];
  ref?: React.RefObject<HTMLDivElement>;
}

export default function SummaryLayout({ posts, ref }: LayoutProps) {
  return (
    <div ref={ref} className="size-full">
      <ul className="">
        {!posts.length && "No posts found."}
        {posts.map((post) => {
          const { slug, title, summary } = post;

          return (
            <li key={slug} className="py-2">
              <div className="">
                <div>
                  <Link className="" href={`/post/${slug}`}>
                    <h2 className="text-xl font-extrabold tracking-tight text-midnight-50">
                      {title}
                    </h2>
                  </Link>
                  <div className="flex flex-wrap">
                    {post.skills.map((skill: string) => (
                      <Tag key={skill} text={skill} />
                    ))}
                  </div>
                </div>
                <div className="prose prose-invert">{summary}</div>
              </div>
              <div className="text-base font-medium leading-6">
                <Link
                  aria-label={`Read more: "${title}"`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  href={`/post/${slug}`}
                >
                  Read more &rarr;
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
