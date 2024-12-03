"use client";

import { useParams } from "next/navigation";

import MDXRenderer from "@/app/lib/MarkdownRenderer";

export default function BlogPage() {
  const params = useParams();

  console.log("hello");

  return (
    <>
      <div>
        {Array.isArray(params.slug) ? (
          <MDXRenderer slug={params.slug[0]} />
        ) : (
          <MDXRenderer slug={params.slug} />
        )}
      </div>
    </>
  );
}
