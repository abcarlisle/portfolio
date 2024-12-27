"use client";

import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

import MyLink from "@/components/Link";
import { PageTitle } from "@/components/PageTitle";
import Tag from "@/components/Tag";
import { GithubIcon } from "@/components/icons";
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
  company: "test",
  date_start: new Date(),
  summary: "test",
  skills: ["test"],
  slug: "test",
};

interface NavigationProps {
  post: Post;
  offsetPosts: (Post | undefined)[];
}
function Navigation({ post, offsetPosts }: NavigationProps) {
  return (
    <div className="w-full md:mr-12 md:w-1/6">
      <div className="text-sm font-medium leading-5">
        {post.skills && (
          <div className="py-4 xl:py-8">
            <h2 className="text-medium font-bold uppercase tracking-wide text-midnight-50 md:text-xs">
              Skills
            </h2>
            <div className="flex flex-wrap">
              {post.skills.map((skill) => (
                <Tag key={skill} text={skill} />
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-row items-center space-x-4 py-3 text-sm">
          {post.github && (
            <>
              <GithubIcon className="text-default-500" />
              <MyLink href={post.github} title="View on Github" />
            </>
          )}
        </div>
        {(offsetPosts[1] || offsetPosts[0]) && (
          <div className="hidden justify-between space-y-8 py-4 md:block ">
            {offsetPosts[0] && (
              <div>
                <h2 className="text-xs uppercase tracking-wide text-midnight-50">
                  Previous Article
                </h2>
                <MyLink
                  href={`/post/${offsetPosts[0]?.slug}`}
                  title={offsetPosts[0]?.title}
                />
              </div>
            )}
            {offsetPosts[1] && (
              <div>
                <h2 className="text-xs uppercase tracking-wide text-midnight-50">
                  Next Article
                </h2>
                <MyLink
                  href={`/post/${offsetPosts[1]?.slug}`}
                  title={offsetPosts[1]?.title}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="hidden pt-4 md:block xl:pt-8">
        <Link
          aria-label="Back to Portfolio"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          href={`/`}
        >
          &larr; Back to Portfolio
        </Link>
      </div>
    </div>
  );
}

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
    <div className="px-5 pb-10 md:px-0">
      <div className="py-10 text-center">
        <PageTitle>{post.title}</PageTitle>
        <span className="text-2xl font-extrabold leading-9 tracking-tight text-midnight-100 opacity-70">
          {post.company}
        </span>
        <div className={clsx(lessImportantText(), "py-4")}>
          <span>
            {post.date_start.toLocaleDateString("en-US", postDateTemplate)}
          </span>
          <span className="px-2">&rarr;</span>
          {post.date_stop ? (
            <span>
              {post.date_stop.toLocaleDateString("en-US", postDateTemplate)}
            </span>
          ) : (
            <span>Present</span>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col justify-center space-x-9 md:flex-row md:pr-32">
        <Navigation offsetPosts={offsetPosts} post={post} />
        <div className="pr-5 md:pr-0">
          <PostLayout>
            <MDXRenderer markdown={markdown} />
          </PostLayout>
        </div>
        <div className="block md:hidden">
          <div className="flex justify-evenly pt-8">
            <Button
              as={Link}
              color="primary"
              href={`/post/${offsetPosts[0]?.slug}`}
              variant="solid"
            >
              &larr;
            </Button>

            <Button as={Link} color="primary" href={`/`} variant="solid">
              Home
            </Button>

            <Button
              as={Link}
              color="primary"
              href={`/post/${offsetPosts[1]?.slug}`}
              variant="solid"
            >
              &rarr;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
