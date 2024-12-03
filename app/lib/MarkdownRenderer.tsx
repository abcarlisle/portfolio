// components/MDXRenderer.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
//"use client";

interface Post {
  slug: string;
}
export default async function MDXRenderer({ slug }: Post) {
  const response = await fetch(`/posts/${slug}.md`);
  const markdown = await response.text();

  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
