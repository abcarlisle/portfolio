import { useEffect, useState } from "react";

import { Post } from "@/lib/api";
import { getMardownContent } from "@/lib/MarkdownRenderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface LayoutProps {
  about: Post;
}

export default function AboutLayout({ about }: LayoutProps) {
  const { slug, date, title, summary } = about;
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setMarkdown(await getMardownContent(slug));
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-midnight-200">
      <li key={slug} className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div className="prose max-w-none text-midnight-50 text-opacity-80 dark:prose-invert">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </article>
      </li>
    </div>
  );
}
