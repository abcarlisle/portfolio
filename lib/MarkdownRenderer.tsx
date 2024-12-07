// components/MDXRenderer.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
//"use client";

interface Post {
  markdown: string;
}

export async function getMardownContent(slug: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_URL}/post/${slug}.md`).then(
    (res) => res.text(),
  );
}

export default async function MDXRenderer({ markdown }: Post) {
  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
