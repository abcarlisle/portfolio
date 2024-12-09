"use client";

import { useEffect, useState } from "react";

import PostLayout from "@/layout/PostLayout";
import MDXRenderer, { getMardownContent } from "@/lib/MarkdownRenderer";
import { getPostBySlug, Post } from "@/lib/api";
import { get } from "http";

export type Props = {
  params: { slug: string };
};
export default function PostPage({ params }: Props) {
  const [markdown, setMarkdown] = useState("");
  const [post, setPost] = useState<Post>({title: "", date: new Date(), summary: "", skills: []});

  useEffect(() => {
    const fetchData = async () => {
      setMarkdown(await getMardownContent(params.slug));
      setPost(await getPostBySlug(params.slug));
    };

    fetchData();
  }, []);

  return (
    <>
      <PostLayout
        date={post.date}
        githubUrl={""}
        tags={post.skills}
        title={post.title}
      >
        {/* <text /> */}
        <MDXRenderer markdown={markdown} />
      </PostLayout>
    </>
  );
}
