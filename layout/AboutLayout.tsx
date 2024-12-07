import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Post } from "@/lib/api";

export interface LayoutProps {
  about: Post;
}

export default function AboutLayout({ about }: LayoutProps) {
  // const { slug, date, title, summary } = about;
  // const [markdown, setMarkdown] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setMarkdown(await getMardownContent(slug));
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="w-full">
      <article>
        <div className="prose max-w-none dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{"TEST"}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
