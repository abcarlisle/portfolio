"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

import PageTitle from "@/components/PageTitle";
import Tag from "@/components/Tag";
import { lessImportantText } from "@/components/primitives";
import PostLayout from "@/layout/PostLayout";
import MDXRenderer, { getMardownContent } from "@/lib/MarkdownRenderer";
import { getPostBySlug, getPostOffset, Post } from "@/lib/api";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
};

export type Props = {
  params: { slug: string };
};
const defaultPosts = [undefined, undefined];

const defaultPost = {
  title: "test",

  date: new Date(),
  summary: "test",
  skills: ["test"],
  slug: "test",
};

export default function PostPage({ params }: Props) {
  const [markdown, setMarkdown] = useState("");
  const [post, setPost] = useState<Post>(defaultPost);
  const [offsetPosts, setOffsetPosts] =
    useState<(Post | undefined)[]>(defaultPosts);

  useState<(Post | undefined)[]>(defaultPosts);

  useEffect(() => {
    const fetchData = async () => {
      setMarkdown(await getMardownContent(params.slug));

      const posts = [
        await getPostOffset(params.slug, -1)
          .then((post) => post)
          .catch(() => undefined),
        await getPostOffset(params.slug, 1)
          .then((post) => post)
          .catch(() => undefined),
      ];

      setOffsetPosts(posts);

      const post = await getPostBySlug(params.slug);

      setPost(post);
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="h-36 py-10 text-center">
        <PageTitle>{post.title}</PageTitle>
        <div className={clsx(lessImportantText(), "py-4")}>
          <span>{post.date.toLocaleDateString("en-US", postDateTemplate)}</span>
          <span className="px-2">&rarr;</span>
          <span>{post.date.toLocaleDateString("en-US", postDateTemplate)}</span>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center space-x-9 pr-32">
        <div className="mr-12 w-1/6">
          <div className="py-6 text-sm">
            {` • `}
            <Link href={"/"}>View on GitHub</Link>
          </div>
          <div className="text-sm font-medium leading-5">
            {post.skills && (
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide">Skills</h2>
                <div className="flex flex-wrap">
                  {post.skills.map((skill) => (
                    <Tag key={skill} text={skill} />
                  ))}
                </div>
              </div>
            )}
            {(offsetPosts[1] || offsetPosts[0]) && (
              <div className="block justify-between space-y-8 py-4 ">
                {offsetPosts[0] && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide">
                      Previous Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/post/${offsetPosts[0]?.slug}`}>
                        {offsetPosts[0].title}
                      </Link>
                    </div>
                  </div>
                )}
                {offsetPosts[1] && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide">
                      Next Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/post/${offsetPosts[1].slug}`}>
                        {offsetPosts[1].title}
                      </Link>
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
              href={`/`}
            >
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
        <div className="">
          <PostLayout
            date={post.date}
            githubUrl={""}
            next={offsetPosts[1]}
            prev={offsetPosts[0]}
            tags={post.skills}
            title={post.title}
          >
            {/* <text /> */}
            <MDXRenderer markdown={markdown} />
          </PostLayout>
        </div>
      </div>
    </div>
  );
}
