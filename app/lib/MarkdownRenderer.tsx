// components/MDXRenderer.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
//"use client";

interface Post {
  slug: string;
}

export async function getMardownContent(slug: string) {
  return await fetch(`/posts/${slug}.md`).then((res) => res.text());
}

export default async function MDXRenderer({ slug }: Post) {
  const markdown = await getMardownContent(slug);

  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
