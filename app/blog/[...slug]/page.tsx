"use client";

import { useParams } from "next/navigation";

import PostLayout from "@/app/layout/PostLayout";
import MDXRenderer from "@/app/lib/MarkdownRenderer";

export default function BlogPage() {
  const params = useParams();

  return (
    <>
      <PostLayout
        authorDetails={["Andrew"]}
        date={new Date()}
        githubUrl={""}
        tags={["Skills"]}
        title={"asdf"}
      >
        <div>
          {Array.isArray(params.slug) ? (
            <MDXRenderer slug={params.slug[0]} />
          ) : (
            <MDXRenderer slug={params.slug} />
          )}
        </div>
      </PostLayout>
    </>
  );
}
