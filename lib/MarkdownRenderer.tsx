// components/MDXRenderer.jsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
//"use client";

interface Post {
  markdown: string;
}

export async function getMardownContent(slug: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_URL}/post/${slug}.mdx`).then(
    (res) => res.text(),
  );
}

export default function MDXRenderer({ markdown }: Post) {
  return (
    <ReactMarkdown className={"prose prose-invert"} remarkPlugins={[remarkGfm]}>
      {markdown}
    </ReactMarkdown>
  );
}
