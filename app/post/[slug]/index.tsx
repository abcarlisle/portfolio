"use client";

import { useEffect, useState } from "react";

import PostLayout from "@/layout/PostLayout";
import MDXRenderer, { getMardownContent } from "@/lib/MarkdownRenderer";

export type Props = {
  //params: Post;
  params: { slug: string; markdown: string };
};
export default function PostPage({ params }: Props) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setMarkdown(await getMardownContent(params.slug));
    };

    fetchData();
  }, []);

  return (
    <>
      <PostLayout
        date={new Date()}
        githubUrl={""}
        tags={["Skills"]}
        title={"asdf"}
      >
        {/* <text /> */}
        <MDXRenderer markdown={markdown} />
      </PostLayout>
    </>
  );
}
