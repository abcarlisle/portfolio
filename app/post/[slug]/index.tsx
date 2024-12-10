"use client";

import { useEffect, useState } from "react";

import PostLayout from "@/layout/PostLayout";
import MDXRenderer, { getMardownContent } from "@/lib/MarkdownRenderer";
import { getPostBySlug, getPostOffset, Post } from "@/lib/api";

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
  );
}
